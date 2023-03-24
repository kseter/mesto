import {
	initialCards, popupImage,
	popupParagraph, cardContainer, Card
} from './Card.js';

import {
	FormValidator
} from './FormValidator.js'

export const selectors = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	buttonSaveSelector: '.popup__save-button',
	buttonSaveActiveSelector: 'popup__save-button_inactive',
	formErrorSelector: '.popup__form-item_error',
	errorElementActiveSelector: 'popup__form-item_error_active',
	buttonEditSelector: '.profile__edit-button',
	closeButtonsSelector: '.popup__close-button',
	popupSelector: '.popup',
	popupProfileSelector: '.popup_type_user',
	formProfileSelector: '.popup__form_type_user',
	nameInputSelector: '.popup__form-item_user_name',
	aboutInputSelector: '.popup__form-item_user_about',
	userNameSelector: '.profile__user-name',
	userAboutSelector: '.profile__user-about',
	cardAddButtonSelector: '.profile__add-button',
	popupAddCardSelector: '.popup_type_new-place',
	formAddCardSelector: '.popup__form_type_new-place',
	cardNameInputSelector: '.popup__form-item_card_name',
	cardLinkInputSelector: '.popup__form-item_card_link',
	cardContainerSelector: '.elements',
	cardTemplateSelector: 'card',
	popupImageFullscreenSelector: '.popup_type_image-fullscreen',
	imageButtonCloseSelector: '.popup__close-button_type_image-fullscreen',
	popupImageSelector: '.popup__image',
	popupParagraphSelector: '.popup__paragraph',
	buttonClosePopupImageSelector: '.popup__close-button_type_image-fullscreen',
	popupOpenSelector: 'popup_opened',
	formInputSectionSelector: '.popup__form-section',
}


//buttons on profile section 
const buttonEdit = document.querySelector(selectors.buttonEditSelector);

//variables for close button 
const closeButtons = document.querySelectorAll(selectors.closeButtonsSelector);

//variables for pop-up in profile section 
const popups = Array.from(document.querySelectorAll(selectors.popupSelector));
const popupProfile = document.querySelector(selectors.popupProfileSelector);
const formProfile = document.forms['profile-form'];
const nameInput = document.querySelector(selectors.nameInputSelector);
const aboutInput = document.querySelector(selectors.aboutInputSelector);
const userName = document.querySelector(selectors.userNameSelector);
const userAbout = document.querySelector(selectors.userAboutSelector);

//variables for pop-up to add a card 
const cardAddButton = document.querySelector(selectors.cardAddButtonSelector);
const popupAddCard = document.querySelector(selectors.popupAddCardSelector);
const formAddCard = document.forms['place-form'];
const cardNameInput = document.querySelector(selectors.cardNameInputSelector);
const cardLinkInput = document.querySelector(selectors.cardLinkInputSelector);

const popupImageFullscreen = document.querySelector('.popup_type_image-fullscreen');

//close pop-up with Esc 
function closeEscClick(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup);
	};
};

//open fullscreen image popup
export const openPopupImage = (name, link) => {
	openPopup(popupImageFullscreen);
	popupImage.src = link;
	popupParagraph.textContent = name;
	popupImage.setAttribute('alt', name);
};

//open-close pop-up 
const openPopup = (popup) => {
	popup.classList.add(selectors.popupOpenSelector);
	document.addEventListener('keydown', closeEscClick);
};

const closePopup = (popup) => {
	popup.classList.remove(selectors.popupOpenSelector);
	document.removeEventListener('keydown', closeEscClick);
};


//close pop-up with close button
closeButtons.forEach((button) => {
	const popup = button.closest('.popup');
	button.addEventListener('click', () => closePopup(popup));
});


//pop-up for profile section
const handleButtonEditClick = () => {
	nameInput.value = userName.textContent;
	aboutInput.value = userAbout.textContent;
	openPopup(popupProfile);
};

function handleFormProfileSubmit(evt) {
	evt.preventDefault();

	userName.textContent = nameInput.value;
	userAbout.textContent = aboutInput.value;

	closePopup(popupProfile);
};

function handleOverlayClick(evt) {
	if (evt.target === evt.currentTarget) {
		popups.forEach(closePopup);
	};
};

formProfile.addEventListener('submit', handleFormProfileSubmit);
buttonEdit.addEventListener('click', handleButtonEditClick);
popups.forEach(item => item.addEventListener('mousedown', handleOverlayClick));

//create a card 
function createCard(item) {
	const card = new Card(item.name, item.link, 'card', openPopupImage);
	const cardElement = card.generateCard();
	return cardElement;
};

//show cards 
initialCards.forEach((item) => {
	const cardElement = createCard(item);
	cardContainer.append(cardElement);
});

//create new card from form 
function createNewCard() {
	const item = { name: cardNameInput.value, link: cardLinkInput.value };
	const cardElement = createCard(item);
	cardContainer.prepend(cardElement);
};

//add new card from pop-up
const addNewCard = (evt) => { //create a function to add new card
	evt.preventDefault();

	createNewCard();

	closePopup(popupAddCard);
	evt.target.reset();
	validationCardForm.disableButton();
};

formAddCard.addEventListener('submit', addNewCard);


//open-close pop-up with add card button 
const handleAddButton = () => {
	openPopup(popupAddCard);
};

cardAddButton.addEventListener('click', handleAddButton);

//validation for forms 
const validationProfileForm = new FormValidator(selectors, formProfile);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(selectors, formAddCard);
validationCardForm.enableValidation();

