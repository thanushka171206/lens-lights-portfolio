// ==========================================================
// CONTACT FORM VALIDATION
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const messageError = document.getElementById('messageError');

  const formSuccess = document.getElementById('formSuccess');

  function setError(inputEl, errorEl, message) {
    inputEl.closest('.form-group').classList.add('error');
    errorEl.textContent = message;
  }

  function clearError(inputEl, errorEl) {
    inputEl.closest('.form-group').classList.remove('error');
    errorEl.textContent = '';
  }

  function validateName() {
    const value = nameInput.value.trim();
    if (value === '') {
      setError(nameInput, nameError, 'Please enter your name.');
      return false;
    }
    if (value.length < 2) {
      setError(nameInput, nameError, 'Name must be at least 2 characters.');
      return false;
    }
    clearError(nameInput, nameError);
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
      setError(emailInput, emailError, 'Please enter your email.');
      return false;
    }
    if (!emailPattern.test(value)) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
      return false;
    }
    clearError(emailInput, emailError);
    return true;
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    // Phone is optional, but if filled, must look valid
    if (value === '') {
      clearError(phoneInput, phoneError);
      return true;
    }
    const phonePattern = /^[0-9+\-\s()]{7,15}$/;
    if (!phonePattern.test(value)) {
      setError(phoneInput, phoneError, 'Please enter a valid phone number.');
      return false;
    }
    clearError(phoneInput, phoneError);
    return true;
  }

  function validateMessage() {
    const value = messageInput.value.trim();
    if (value === '') {
      setError(messageInput, messageError, 'Please enter a message.');
      return false;
    }
    if (value.length < 10) {
      setError(messageInput, messageError, 'Message should be at least 10 characters.');
      return false;
    }
    clearError(messageInput, messageError);
    return true;
  }

  // Live validation as the user types/leaves a field
  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  phoneInput.addEventListener('blur', validatePhone);
  messageInput.addEventListener('blur', validateMessage);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      formSuccess.textContent = 'Thank you! Your message has been sent successfully.';
      form.reset();

      // Clear the success message after a few seconds
      setTimeout(() => {
        formSuccess.textContent = '';
      }, 5000);
    } else {
      formSuccess.textContent = '';
    }
  });

});
