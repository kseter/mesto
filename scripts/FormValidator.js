
export class FormValidator {
	constructor(config, formElement) {
		this._formElement = formElement;
		this._formElementSelector = config.formSelector;
		this._formSelector = config.formSelector;
		this._inputSelector = config.inputSelector;
		this._errorElementActiveSelector = config.errorElementActiveSelector;
		this._formErrorSelector = config.formErrorSelector;
		this._buttonSaveActiveSelector = config.buttonSaveActiveSelector;
		this._buttonSaveSelector = config.buttonSaveSelector;
		this._formInputSectionSelector = config.formInputSectionSelector;
	};

	_hideError(errorElement) {
		errorElement.textContent = ' ';
		errorElement.classList.remove(this._errorElementActiveSelector);
	};
	_showError(errorElement, errorMessage) {
		errorElement.textContent = errorMessage;
		errorElement.classList.add(this._errorElementActiveSelector);
	};

	_checkInputState(formInput) {
		this._formInputSection = formInput.parentNode;
		this._formError = this._formInputSection.querySelector(this._formErrorSelector);
		if (formInput.validity.valid) {
			this._hideError(this._formError);
		} else {
			this._showError(this._formError, formInput.validationMessage);
		};
	};

	_enableButton(buttonElement) {
		buttonElement.removeAttribute('disabled');
		buttonElement.classList.remove(this._buttonSaveActiveSelector);
	};

	_disableButton(buttonElement) {
		buttonElement.setAttribute('disabled', true);
		buttonElement.classList.add(this._buttonSaveActiveSelector);
	};

	_toggleButtonState(inputs, buttonSubmit) {
		const formIsValid = inputs.every(formInput => formInput.validity.valid)

		if (formIsValid) {
			this._enableButton(buttonSubmit)
		} else {
			this._disableButton(buttonSubmit);
		};
	};

	_setEventListeners() {
		this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector)); //variable for form input 
		this._buttonSubmit = this._formElement.querySelector(this._buttonSaveSelector);
		this._inputs.forEach((formInput) => {
			formInput.addEventListener('input', () => {
				this._checkInputState(formInput);
				this._toggleButtonState(this._inputs, this._buttonSubmit);
			});
		});
		this._toggleButtonState(this._inputs, this._buttonSubmit);
	};

	enableValidation() {
		this._formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		this._setEventListeners();
	};

};