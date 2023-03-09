
function hideError(errorElement) {
	errorElement.textContent = ' ';
	errorElement.classList.remove(selectors.errorElementActiveSelector);
};

function showError(errorElement, errorMessage) {
	errorElement.textContent = errorMessage;
	errorElement.classList.add(selectors.errorElementActiveSelector);
};

const checkInputState = (formInput) => {
	const isValid = formInput.validity.valid;
	const formInputSection = formInput.parentNode;
	const formError = formInputSection.querySelector(selectors.formErrorSelector);
	if (isValid) {
		hideError(formError);
	} else {
		showError(formError, formInput.validationMessage);
	};
};

const enableButton = (buttonElement) => {
	buttonElement.removeAttribute('disabled');
	buttonElement.classList.remove(selectors.buttonSaveActiveSelector);
};

const disableButton = (buttonElement) => {
	buttonElement.setAttribute('disabled', true);
	buttonElement.classList.add(selectors.buttonSaveActiveSelector);
};

function toggleButtonState(inputs, buttonSubmit) {
	const formIsValid = inputs.every(formInput => formInput.validity.valid)

	if (formIsValid) {
		enableButton(buttonSubmit)
	} else {
		disableButton(buttonSubmit);
	};
};

const setEventListeners = (form) => {
	const inputs = Array.from(form.querySelectorAll(selectors.inputSelector)); //variable for form input 
	const buttonSubmit = form.querySelector(selectors.buttonSaveSelector);
	inputs.forEach(formInput => {
		formInput.addEventListener('input', function () {
			checkInputState(formInput);
			toggleButtonState(inputs, buttonSubmit);
		});
	});
	toggleButtonState(inputs, buttonSubmit);
};

const enableValidation = (selectors) => {
	const forms = Array.from(document.forms);
	forms.forEach(form => {
		setEventListeners(form);
	});
};


