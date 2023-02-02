const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');

const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-item_name');
let aboutInput = document.querySelector('.popup__form-item_about');
let userName = document.querySelector('.profile__user-name');
let userAbout = document.querySelector('.profile__user-about');

const handleEditButtonClick = () => {
	popup.classList.add('popup_opened')
};

const handleCloseButtonClick = () => {
	popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
	evt.preventDefault();

	userName.textContent = nameInput.value;
	userAbout.textContent = aboutInput.value;

	handleCloseButtonClick();
};

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);

