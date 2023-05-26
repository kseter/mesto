
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
const formAvatar = document.forms['avatar-form'];

//variables for pop-up to add a card 
const cardAddButton = document.querySelector(selectors.cardAddButtonSelector);
const popupAddCard = document.querySelector(selectors.popupAddCardSelector);
const formAddCard = document.forms['place-form'];
const cardNameInput = document.querySelector(selectors.cardNameInputSelector);
const cardLinkInput = document.querySelector(selectors.cardLinkInputSelector);

const popupImageFullscreen = document.querySelector('.popup_type_image-fullscreen');

const popupImage = document.querySelector('.popup__image');
const popupParagraph = document.querySelector('.popup__paragraph');
const cardContainer = document.querySelector('.elements'); //get container for cards
const avatarOverlay = document.querySelector('.profile__overlay')
const avatar = document.querySelector('.profile__avatar')

export {
	buttonEdit, closeButtons, popups, popupProfile, formProfile,nameInput, aboutInput, userName, userAbout, cardAddButton, popupAddCard, 
	formAddCard, cardNameInput, cardLinkInput, popupImageFullscreen, popupImage, popupParagraph, cardContainer, avatar, avatarOverlay, formAvatar
}