import { openPopupImage } from "./index.js";

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

const popupImage = document.querySelector('.popup__image');
const popupParagraph = document.querySelector('.popup__paragraph');
const cardContainer = document.querySelector('.elements'); //get container for cards

class Card {
	constructor(name, link, templateSelector, openPopupImage) {
		this._name = name;
		this._link = link;
		this._templateSelector = templateSelector;
		this._openPopupImage = openPopupImage;
	};

	_getTemplate() {
		const cardElement = document.getElementById(this._templateSelector).content.cloneNode(true);
		return cardElement;
	};


	generateCard() {
		this._element = this._getTemplate();
		this._setEventListeners();
		this._element.querySelector('.element__text').textContent = `${this._name}`;
		this._cardImage.src = `${this._link}`;
		this._cardImage.setAttribute('alt', `${this._name}`);

		return this._element;
	};

	_handleButtonLike() {
		this._buttonLike.classList.toggle('element__like-button_active')//add active like button on click 
	};
	_handleButtonDelete() {
		this._buttonDelete.closest('.element').remove(); //remove card on click 
	};


	_setEventListeners() {
		this._cardImage = this._element.querySelector('.element__image');
		this._cardImage.addEventListener('click', () => {
			this._openPopupImage(this._name, this._link);
		});

		this._buttonLike = this._element.querySelector('.element__like-button');
		this._buttonLike.addEventListener('click', () => {
			this._handleButtonLike();
		});

		this._buttonDelete = this._element.querySelector('.element__delete-button');
		this._buttonDelete.addEventListener('click', () => {
			this._handleButtonDelete();
		});
	};
};



export {
	initialCards, popupImage,
	popupParagraph, cardContainer, Card
};