import './index.css'

import { 
	 Card 
} from './scripts/components/Card.js'; 

import {
	FormValidator
} from './scripts/components/FormValidator.js'

import { 
	buttonEdit, formProfile, nameInput, aboutInput, cardAddButton, 
	formAddCard, selectors, avatar, avatarOverlay 
} from './scripts/utils/constants.js' 

import { Section } from './scripts/components/Section.js';

import { PopupWithImage } from './scripts/components/PopupWithImage.js';

import { PopupWithForm } from './scripts/components/PopupWithForm.js';
import { UserInfo } from './scripts/components/UserInfo.js';
// import { initialCards } from './scripts/utils/utils.js';
import { Api } from './scripts/components/Api.js';
import { PopupDeleteConf } from './scripts/components/PopupDeleteConf';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: '7b35d477-32d9-48d4-8db2-59c7542ebe1e',
      'Content-Type': 'application/json'
    }
})

let userId

const createCard = (data) => {
	const card = new Card({data: data, userId: userId, templateSelector: '.card-template', 
	handleCardClick: ({ name, link }) => {
		const popupFullscreenImageOpen = popupFullscreenImage
		popupFullscreenImageOpen.open({
			name,
			link,
		})
	}, 
	handleCardLike: (card) => {
		if(card.checkUserId()){
			api.deleteLike(data)
			.then((res) => {
				card.deleteLike();
				card.countLikes(res);
			});
		} else {
			api.setLike(data)
			.then((res) => {
				card.setLike();
				card.countLikes(res);
			})
		}
	}, 
	handleDeleteButtonClick: (card) => {
		popupDeleteConfirmation.setSubmitCallback(() => {
		 api.deleteCard(card._data._id)
		.then(() => {
			card.removeCard()
		})
		.then(() => {
			popupDeleteConfirmation.close();
		})
		.catch((err) => {
			console.log(err); 
		  })
		})
		popupDeleteConfirmation.open();
	}
})
	const cardElement = card.generateCard();
	return cardElement;
};

const cardList = new Section({  //render card list from server 
	renderer: (card) => {
		const cardItem = createCard(card);
		cardList.addItem(cardItem);
		}
	}, 
	selectors.cardContainerSelector
		 );

Promise.all([
	api.requestUserInfo(),
	api.getInitialCards()
])
.then(([user, cards]) => {
	const name = user.name;
	const about = user.about;
	userId = user._id;
	userInfo.setUserInfo({ //get user info from server 
		name,
		about,
	});
	cardList.renderItems(cards)
	console.log(cards)
})
.catch((err) => {
    console.log(err); 
  });


//open form with user info 
const userInfo = new UserInfo({
	userInfoSelector: '.profile__user-name',
	userAboutSelector: '.profile__user-about'
});

//change user info 
const userInfoFormPopup = new PopupWithForm({
	popupSelector: '.popup_type_user',
	handleFormSubmit: ({name, about}) => {
		const data = {name, about}
		userInfo.setUserInfo({
			name,
			about,
		});
		api.setUserInfo(data) //patch new user info 
		.catch((err) => {
			console.log(err); 
		  })
		.finally(() => {
			userInfoFormPopup.renderLoading(false, 'Сохранение...')
		})
		validationProfileForm.disableButton();
	}
});

userInfoFormPopup.setEventListeners();


//put the edit user info button 
buttonEdit.addEventListener('click', () => {
	const inputData = userInfo.getUserInfo();

	nameInput.value = inputData.name;
	aboutInput.value = inputData.about; 
	
	const popupFormOpen = userInfoFormPopup
	popupFormOpen.open();
});

//open fullscreen image card
const popupFullscreenImage = new PopupWithImage('.popup_type_image-fullscreen')
popupFullscreenImage.setEventListeners();
	

//add new card popup
const newCardFormPopup = new PopupWithForm({
	popupSelector: '.popup_type_new-place', 
	handleFormSubmit: ({ name, link }) => {

		const data = { name, link }
		api.addNewCard(data)
		.then((card) => {
			const newCardItem = createCard(card)
			cardList.addNewItem(newCardItem);
		})
		.catch((err) => {
			console.log(err); 
		  })
		.finally(() => {
			newCardFormPopup.renderLoading(false, 'Удаление...')
		})

		validationCardForm.disableButton();

}});

newCardFormPopup.setEventListeners();

//create a new card 
cardAddButton.addEventListener('click', () => {
	const newCardFormPopupOpen = newCardFormPopup;
	newCardFormPopupOpen.open()
	});


const popupDeleteConfirmation = new PopupDeleteConf('.popup_type_delete-card');
// popupDeleteConfirmation.setEventListeners()


// function handleDeleteButtonClick(data) {
// 		popupDeleteConfirmation.open();
// 		popupDeleteConfirmation.setEventListeners(data);
// 	}
	
// function deleteCard(card) {
// 		return api.deleteCard(card.id)
// 		.then(() => {
// 			card.removeCard()
// 		})
// 		.catch((err) => {
// 			console.log(err); 
// 		  })
// 		.finally(() => {
// 			popupDeleteConfirmation.renderLoading(false, 'Удаление...')
// 		})
// 		}


 const avatarFormPopup = new PopupWithForm({
	popupSelector: '.popup_type_avatar', 
	handleFormSubmit: (data) => {
		console.log('bingo')
		api.changeAvatar(data)
		.then(data => {
			avatar.src = data.avatar;
		})
		.catch((err) => {
			console.log(err); 
		  })
		.finally(() => {
			avatarFormPopup.renderLoading(false, 'Сохранение...')
		})
	}
})

avatarOverlay.addEventListener('click', () => {
			avatarFormPopup.open();
			avatarFormPopup.setEventListeners();
			validationCardForm.disableButton();
	});

//validation for forms 
const validationProfileForm = new FormValidator(selectors, formProfile);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(selectors, formAddCard);
validationCardForm.enableValidation();
