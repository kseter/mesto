export class Card {
	constructor({ data, handleCardClick}, templateSelector) {
		this._name = data.name;
		this._link = data.link;
		this._templateSelector = templateSelector;
		this._handleCardClick = handleCardClick;
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
			this._handleCardClick({name: this._name, link: this._link});
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
