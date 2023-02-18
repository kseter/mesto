
//buttons on profile section 
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close-button');

//variables for close button 
const closeButtons = document.querySelectorAll('.popup__close-button');

//variables for pop-up in profile section 
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_user');
const formElement = document.querySelector('.popup__form_type_user');
const nameInput = document.querySelector('.popup__form-item_user_name');
const aboutInput = document.querySelector('.popup__form-item_user_about');
const userName = document.querySelector('.profile__user-name');
const userAbout = document.querySelector('.profile__user-about');

//variables for pop-up to add a card 
const cardAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-button');
const formAddCard = document.querySelector('.popup__form_type_add-button');
const cardNameInput = document.querySelector('.popup__form-item_card_name');
const cardLinkInput = document.querySelector('.popup__form-item_card_link');

const cardContainer = document.querySelector('.elements'); //get container for cards
const cardTemplate = document.getElementById('card'); //get the template of card in elements 

//variables for pop-up to fullscreen card image 
const popupImageFullscreen = document.querySelector('.popup_type_image-fullscreen');
const imageButtonClose = document.querySelector('.popup__close-button_type_image-fullscreen');
const popupImage = document.querySelector('.popup__image');
const popupParagraph = document.querySelector('.popup__paragraph');
const buttonClosePopupImage = document.querySelector('.popup__close-button_type_image-fullscreen');

//variable for template 
const createNewElement = () => cardTemplate.content.cloneNode(true);

//open-close pop-up 
const openPopup = (popup) => {
	popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
	popup.classList.remove('popup_opened');
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

function handleFormSubmit(evt) {
	evt.preventDefault();

	userName.textContent = nameInput.value;
	userAbout.textContent = aboutInput.value;

	closePopup(popupProfile);
};

formElement.addEventListener('submit', handleFormSubmit);
buttonEdit.addEventListener('click', handleButtonEditClick);

//add cards array
const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

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
};

formAddCard.addEventListener('submit', addNewCard);

