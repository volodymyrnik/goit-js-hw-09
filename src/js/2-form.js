const feedbackForm = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const onFormFieldChange = event => {
  const formFieldEl = event.target;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

feedbackForm.addEventListener('input', onFormFieldChange);

const fillFormFields = () => {
  try {
    const formFromLs = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formFromLs === null) {
      return;
    }

    for (const key in formFromLs) {
      feedbackForm.elements[key].value = formFromLs[key];
    }
    formData = formFromLs;
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  formData = { email: '', message: '' };
  feedbackForm.reset();
  localStorage.removeItem('feedback-form-state');
});
