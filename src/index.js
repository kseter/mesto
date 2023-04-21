import './index.css'

import { 
	 Card 
} from './scripts/components/Card.js'; 

import {
	FormValidator
} from './scripts/components/FormValidator.js'

import { 
	buttonEdit, formProfile, nameInput, aboutInput, userName, userAbout, cardAddButton, 
	formAddCard, selectors 
} from './scripts/utils/constants.js' 

import { Section } from './scripts/components/Section.js';

import { PopupWithImage } from './scripts/components/PopupWithImage.js';

import { PopupWithForm } from './scripts/components/PopupWithForm.js';
import { UserInfo } from './scripts/components/UserInfo.js';
import { initialCards } from './scripts/utils/utils.js';

//open form with user info 
const userInfo = new UserInfo({
	userInfoSelector: '.profile__user-name',
	userAboutSelector: '.profile__user-about'
});


const userInfoFormPopup = new PopupWithForm({

	popupSelector: '.popup_type_user',
	handleFormSubmit: ({name, about}) => {
		// const data = {name, about}
		userInfo.setUserInfo({
			name,
			about,
		});

		validationProfileForm.disableButton();
	}
});

userInfoFormPopup.setEventListeners();



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
	

function handleCardClick({ name, link }){
	const popupFullscreenImageOpen = popupFullscreenImage
	popupFullscreenImageOpen.open({
		name,
		link,
	});
};


//create a card 
function createCard(data) {
	const card = new Card({data, handleCardClick}, 'card');
		const cardElement = card.generateCard();
		return cardElement;
};

//render card list
const cardList = new Section({
	item: initialCards,
	renderer: (data) => {

		const cardItem = createCard(data);
		cardList.addItem(cardItem);
		
		}
	}, 
	selectors.cardContainerSelector
		 );

cardList.renderItems();

const newCardFormPopup = new PopupWithForm({
	popupSelector: '.popup_type_new-place', 
	handleFormSubmit: ({ name, link }) => {
		const data = { name, link }
		const newCardItem = createCard(data)

		cardList.addNewItem(newCardItem);

		validationCardForm.disableButton();

}});
newCardFormPopup.setEventListeners();


//create a new card 
cardAddButton.addEventListener('click', () => {

	const newCardFormPopupOpen = newCardFormPopup;
	newCardFormPopupOpen.open()

	});
			


//validation for forms 
const validationProfileForm = new FormValidator(selectors, formProfile);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(selectors, formAddCard);
validationCardForm.enableValidation();

