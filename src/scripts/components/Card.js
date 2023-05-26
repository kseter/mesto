export class Card {
	constructor({ data, userId, templateSelector, handleCardClick, handleCardLike, handleDeleteButtonClick}) {
		this._data = data;
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._ownerId = data.owner._id;
		this._cardId = data._id; 
		this._templateSelector = templateSelector;
		this._handleCardClick = handleCardClick;
		this._userId = userId;
		this._handleDeleteButtonClick = handleDeleteButtonClick;
		this._handleCardLike = handleCardLike;
	};

	_getTemplate() {
		const cardTemplate = document.querySelector(this._templateSelector).content;
		const card = cardTemplate.querySelector('.element');
		const cardElement = card.cloneNode(true);
		return cardElement;
	};

	_setEventListeners() {
		this._cardImage = this._card.querySelector('.element__image');
		this._cardImage.addEventListener('click', () => {
			this._handleCardClick({name: this._name, link: this._link});
		});

		this._buttonLike = this._card.querySelector('.element__like-button');
		this._buttonLike.addEventListener('click', () => {
			this._handleCardLike(this);
		});

		this._buttonDelete = this._card.querySelector('.element__delete-button');
		this._buttonDelete.addEventListener('click', (evt) => {
			this._handleDeleteButtonClick(this)
		});
	};


	generateCard() {
		this._card = this._getTemplate();
		this._cardLikeButton = this._card.querySelector('.element__like-button');
		this._cardLikes = this._card.querySelector('.element__likes-counter');
		if (this._data.likes.find(item => item._id === this._userId)) {
			this._cardLikeButton.classList.add('element__delete-button_active')
		}
		this._setEventListeners();
		this._card.querySelector('.element__text').textContent = `${this._name}`;
		this._cardImage.src = `${this._link}`;
		this._cardImage.setAttribute('alt', `${this._name}`);
		this._card.id = this._cardId;
		this._cardLikes.textContent = this._likes.length;
		if (this._ownerId === this._userId){
			this.setDeleteVisible()
		}

		return this._card;
	};

	removeCard = () => {
		this._card.remove();
		this._card = null;
	};

	deleteLike = () => {
		this._cardLikeButton.classList.remove('element__like-button_active')
	};

	setLike = () => {
		this._cardLikeButton.classList.add('element__like-button_active')
	};

	countLikes(data){
		this._cardLikes.textContent = data.likes.length;
		this._likes = data.likes;
	};

	checkUserId = () => {
		return this._likes.some(item => item._id === this._userId)
	};

	setDeleteVisible(){
		this._buttonDelete = this._card.querySelector('.element__delete-button');
		this._buttonDelete.classList.add('element__delete-button_active')
	}
};
