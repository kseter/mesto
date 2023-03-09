
const selectors = {
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
}

//buttons on profile section 
const buttonEdit = document.querySelector(selectors.buttonEditSelector);

//variables for close button 
const closeButtons = document.querySelectorAll(selectors.closeButtonsSelector);

//variables for pop-up in profile section 
const popups = Array.from(document.querySelectorAll(selectors.popupSelector));
const popupProfile = document.querySelector(selectors.popupProfileSelector);
const formProfile = document.querySelector(selectors.formProfileSelector);
const nameInput = document.querySelector(selectors.nameInputSelector);
const aboutInput = document.querySelector(selectors.aboutInputSelector);
const userName = document.querySelector(selectors.userNameSelector);
const userAbout = document.querySelector(selectors.userAboutSelector);

//variables for pop-up to add a card 
const cardAddButton = document.querySelector(selectors.cardAddButtonSelector);
const popupAddCard = document.querySelector(selectors.popupAddCardSelector);
const formAddCard = document.querySelector(selectors.formAddCardSelector);
const cardNameInput = document.querySelector(selectors.cardNameInputSelector);
const cardLinkInput = document.querySelector(selectors.cardLinkInputSelector);

const cardContainer = document.querySelector(selectors.cardContainerSelector); //get container for cards
const cardTemplate = document.getElementById(selectors.cardTemplateSelector); //get the template of card in elements 

//variables for pop-up to fullscreen card image 
const popupImageFullscreen = document.querySelector(selectors.popupImageFullscreenSelector);
const imageButtonClose = document.querySelector(selectors.imageButtonCloseSelector);
const popupImage = document.querySelector(selectors.popupImageSelector);
const popupParagraph = document.querySelector(selectors.popupParagraphSelector);
const buttonClosePopupImage = document.querySelector(selectors.buttonClosePopupImageSelector);


//variable for template 
const createNewElement = () => cardTemplate.content.cloneNode(true);

//close pop-up with Esc 
function closeEscClick(evt, popup) {
	if (evt.key === 'Escape') {
		popup.classList.remove(selectors.popupOpenSelector);
	};
};

//open-close pop-up 
const openPopup = (popup) => {
	popup.classList.add(selectors.popupOpenSelector);
	popup.addEventListener('keydown', closeEscClick);
};

const closePopup = (popup) => {
	popup.classList.remove(selectors.popupOpenSelector);
	popup.removeEventListener('keydown', closeEscClick);
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
popups.forEach(item => addEventListener('keydown', function (evt) {
	if (evt.key === 'Escape') {
		popups.forEach(closePopup);
	};
}));


//get new element in DOM from card template in HTML 
const getCardElement = (link, name) => {
	const newCardElement = createNewElement(); //clone card template 
	const newCardTitle = newCardElement.querySelector('.element__text'); //add values to title 
	const newCardImage = newCardElement.querySelector('.element__image'); //add values to link 
	const buttonLike = newCardElement.querySelector('.element__like-button'); //add active like button on click 
	const buttonDelete = newCardElement.querySelector('.element__delete-button');
	newCardTitle.textContent = name;
	newCardImage.src = link;
	newCardImage.setAttribute('alt', name);
	buttonLike.addEventListener('click', (handleButtonLike));
	buttonDelete.addEventListener('click', (handleButtonDelete));
	newCardImage.addEventListener('click', function () {
		openPopupImage(link, name);
	}); //open pop-up with image 
	return newCardElement;
};

//open-close pop-up with image 
const openPopupImage = (link, name) => {
	openPopup(popupImageFullscreen);
	popupImage.src = link;
	popupParagraph.textContent = name;
	popupImage.setAttribute('alt', name);
};

//fuctions for buttons in cards 
const handleButtonLike = (evt) => evt.target.classList.toggle('element__like-button_active'); //add active like button on click 
const handleButtonDelete = (evt) => evt.target.closest('.element').remove(); //remove card on click 

//create card element from template
const createCardElement = (link, name) => {
	const card = getCardElement(`${link}`, `${name}`);
};

const renderCard = (link, name) => {
	cardContainer.append(getCardElement(link, name));
};

initialCards.forEach((item) => {
	renderCard(item.link, item.name);
});


//open-close pop-up with add card button 
const handleAddButton = () => {
	openPopup(popupAddCard);
};

cardAddButton.addEventListener('click', handleAddButton);


//add new card from pop-up
const addNewCard = (evt) => { //create a function to add new card
	evt.preventDefault();

	const newCard = getCardElement(cardLinkInput.value, cardNameInput.value)

	cardContainer.prepend(newCard); //add card to first place in container 

	closePopup(popupAddCard);
	evt.target.reset();
	disableButton(popupAddCard.querySelector(selectors.buttonSaveSelector));
};

formAddCard.addEventListener('submit', addNewCard);

enableValidation(selectors);
