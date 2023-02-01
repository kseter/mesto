const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const handleEditButtonClick = () => {
	popup.classList.toggle('popup_opened')
};
editButton.addEventListener('click', handleEditButtonClick);

const closeButton = document.querySelector('.popup__close-button');
const handleCloseButtonClick = () => {
	popup.classList.toggle('popup_opened');
};
closeButton.addEventListener('click', handleCloseButtonClick);

const saveButton = document.querySelector('.popup__save-button');
const handleSaveButtonClick = () => {
	popup.classList.remove('popup_opened')
};
saveButton.addEventListener('click', handleSaveButtonClick);

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__user-name');
let aboutInput = document.querySelector('.popup__user-about');
function handleFormSubmit(evt) {
	evt.preventDefault();

	nameInput.getAttribute('value');
	aboutInput.getAttribute('value');

	let userName = document.querySelector('.profile__user-name');
	let userAbout = document.querySelector('.profile__user-about');

	userName.textContent = nameInput.value;
	userAbout.textContent = aboutInput.value;
};

formElement.addEventListener('submit', handleFormSubmit);

