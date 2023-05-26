import './index.css'

import { 
	 Card 
} from './scripts/components/Card.js'; 

import {
	FormValidator
} from './scripts/components/FormValidator.js'

import { 
	buttonEdit, formProfile, nameInput, aboutInput, cardAddButton, 
	formAddCard, selectors, avatar, avatarOverlay, formAvatar
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
//create a card 
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

//render card to card section 
const cardList = new Section({  //render card list from server 
	renderer: (card) => {
		const cardItem = createCard(card);
		cardList.addItem(cardItem);
		}
	}, 
	selectors.cardContainerSelector
		 );

//get cards and user info on page
Promise.all([
	api.requestUserInfo(),
	api.getInitialCards()
])
.then(([user, cards]) => {
	const name = user.name;
	const about = user.about;
	const avatar = user.avatar;
	userId = user._id;
	userInfo.setUserInfo({ //get user info from server 
		name,
		about,
		avatar,
	});
	cardList.renderItems(cards)
})
.catch((err) => {
    console.log(err); 
  });

//add a new card button 
  cardAddButton.addEventListener('click', () => {
	newCardFormPopup.open()
	validationCardForm.disableButton();
	});

//open form with user info 
const userInfo = new UserInfo({
	userInfoSelector: '.profile__user-name',
	userAboutSelector: '.profile__user-about',
	userAvatarSelector: '.profile__avatar',
});

//change user info 
const userInfoFormPopup = new PopupWithForm({
	popupSelector: '.popup_type_user',
	handleFormSubmit: ({name, about}) => {
		const data = {name, about}
		userInfoFormPopup.renderLoading(true, 'Cохранить', 'Сохранение...')
		api.setUserInfo(data) //patch new user info 
		.then(() => {
			userInfo.setUserInfo({
				name,
				about,
			});
		})
		.catch((err) => {
			console.log(err); 
		  })
		.finally(() => {
			userInfoFormPopup.renderLoading(false, 'Cохранить', 'Сохранение...')
		})
	}
});

//handle the edit user info button 
buttonEdit.addEventListener('click', () => {
	const inputData = userInfo.getUserInfo();

	nameInput.value = inputData.name;
	aboutInput.value = inputData.about; 
	
	const popupFormOpen = userInfoFormPopup
	popupFormOpen.open();
	validationProfileForm.disableButton();

});

//open fullscreen image card
const popupFullscreenImage = new PopupWithImage('.popup_type_image-fullscreen')
popupFullscreenImage.setEventListeners();

//add new card popup
const newCardFormPopup = new PopupWithForm({
	popupSelector: '.popup_type_new-place', 
	handleFormSubmit: ({ name, link }) => {
		const data = { name, link }
		newCardFormPopup.renderLoading(true, 'Cохранить', 'Сохранение...')
		api.addNewCard(data)
		.then((card) => {
			const newCardItem = createCard(card)
			cardList.addNewItem(newCardItem);
		})
		.catch((err) => {
			console.log(err); 
		  })
		.finally(() => {
			newCardFormPopup.renderLoading(false, 'Cохранить', 'Сохранение...')
		})

}});

//create popup with card delete confirmation
const popupDeleteConfirmation = new PopupDeleteConf('.popup_type_delete-card');

//avatar change popup
 const avatarFormPopup = new PopupWithForm({
	popupSelector: '.popup_type_avatar', 
	handleFormSubmit: (data) => {
		avatarFormPopup.renderLoading(true, 'Cохранить', 'Сохранение...')

		api.changeAvatar(data)
		.then(data => {
			avatar.src = data.avatar;
		})
		.catch((err) => {
			console.log(err); 
		  })
		.finally(() => {
			avatarFormPopup.renderLoading(false, 'Cохранить', 'Сохранение...')
		})
	}
})

avatarOverlay.addEventListener('click', () => {
			avatarFormPopup.open();
			validationAvatarForm.disableButton();
	});

//validation for forms 
const validationProfileForm = new FormValidator(selectors, formProfile);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(selectors, formAddCard);
validationCardForm.enableValidation();

const validationAvatarForm = new FormValidator(selectors, formAvatar);
validationAvatarForm.enableValidation();
