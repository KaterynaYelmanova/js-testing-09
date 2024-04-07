//рішення в домашці, перевірене

/*document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const formDataKey = 'feedback-form-state';
  let formData = JSON.parse(localStorage.getItem(formDataKey)) || {};

  if (formData.email !== undefined && formData.email.trim() !== '') {
    emailInput.value = formData.email.trim();
  }
  if (formData.message !== undefined && formData.message.trim() !== '') {
    messageInput.value = formData.message.trim();
  }

  form.addEventListener('input', event => {
    if (event.target === emailInput) {
      formData.email = emailInput.value.trim();
    } else if (event.target === messageInput) {
      formData.message = messageInput.value.trim();
    }

    localStorage.setItem(formDataKey, JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please fill out both fields!');
      return;
    }
    console.log('Submitted data:', formData);
    localStorage.removeItem(formDataKey);
    emailInput.value = '';
    messageInput.value = '';
  });
});*/

//рішення самостійне, не перевірене

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';
form.addEventListener('input', evt => {
  const storedData = JSON.parse(localStorage.getItem(localStorageKey));
  const feedbackData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  if (
    !storedData ||
    feedbackData.email !== storedData.email ||
    feedbackData.message !== storedData.message
  ) {
    localStorage.setItem(localStorageKey, JSON.stringify(feedbackData));
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (form.elements.email.value.trim() && form.elements.message.value.trim()) {
    const feedbackData = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(`Email: ${feedbackData.email}`);
    console.log(`Message: ${feedbackData.message}`);

    localStorage.removeItem(localStorageKey);
    form.elements.email.value = '';
    form.elements.message.value = '';
  } else {
    console.log('Будь ласка, заповніть усі поля форми.');
  }
});

window.addEventListener('load', () => {
  const storedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (storedData) {
    form.elements.email.value = storedData.email.trim();
    form.elements.message.value = storedData.message.trim();
  }
});
