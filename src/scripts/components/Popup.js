export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._closeButton = this._popup.querySelector('.popup__close-button')
    };

    open(){
        this._popup.classList.add('popup_opened');
	    document.addEventListener('keydown', this._handleEscClose);
    };

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };


    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this._openedPopup = document.querySelector('.popup_opened')
            this._openedPopup.classList.remove('popup_opened');
        };
    };


    _handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) {
            this._openedPopup = document.querySelector('.popup_opened')
            this._openedPopup.classList.remove('popup_opened');
        };
    };

    setEventListeners(){

        this._closeButton.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('mousedown', this._handleOverlayClick);
    };
}
