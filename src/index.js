import './index.css'

import {
	initialCards, Card
} from './scripts/components/Card.js';

import {
	FormValidator
} from './scripts/components/FormValidator.js'

import {
	buttonEdit, formProfile,nameInput, aboutInput, userName, userAbout, cardAddButton,
	formAddCard, selectors
} from './scripts/utils/constants.js'

import { Section } from './scripts/components/Section.js';

import { PopupWithImage } from './scripts/components/PopupWithImage.js';

import { PopupWithForm } from './scripts/components/PopupWithForm.js';
import { UserInfo } from './scripts/components/UserInfo.js';

//open form with user info 
const userInfo = new UserInfo({
	userInfoSelector: '.popup__form-item_user_name',
	userAboutSelector: '.popup__form-item_user_about'
});

buttonEdit.addEventListener('click', () => {
	nameInput.value = userName.textContent;
	aboutInput.value = userAbout.textContent;

	const userInfoFormPopup = new PopupWithForm({

		popupSelector: '.popup_type_user',
		handleFormSubmit: ({name, about}) => {

			userInfo.setUserInfo({
				name, 
				about
			});

			validationProfileForm.disableButton();
		}
	});

	userInfoFormPopup.open('.popup__form_type_user');

	userInfoFormPopup._setEventListeners();
});

//open fullscreen image card
function handleCardClick({ name, link }){
	const popupFullscreenImage = new PopupWithImage('.popup_type_image-fullscreen')
	popupFullscreenImage.open({
		name,
		link,
	});
	popupFullscreenImage.setEventListeners();
};

//render card list
const cardList = new Section({
	item: initialCards,
	renderer: (data) => {
		const card = new Card({data, handleCardClick}, 'card');
		const cardElement = card.generateCard();
			// return cardElement;
	
		cardList.addItem(cardElement)
		}
	}, selectors.cardContainerSelector
		 );

cardList.renderItems();


//create a new card 
cardAddButton.addEventListener('click', () => {
	const newCardFormPopup = new PopupWithForm({
		popupSelector: '.popup_type_new-place', 
		handleFormSubmit: ({ name, link }) => {
			const data = { name, link }
			const card = new Card({data, handleCardClick}, 'card');
			const cardElement = card.generateCard();

			cardList.addNewItem(cardElement);

			validationCardForm.disableButton();

	}});
		
			newCardFormPopup.open()
			
			newCardFormPopup._setEventListeners();

		});


//validation for forms 
const validationProfileForm = new FormValidator(selectors, formProfile);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(selectors, formAddCard);
validationCardForm.enableValidation();

