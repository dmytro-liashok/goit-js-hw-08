import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(inputOn, 500));
formEl.addEventListener('submit', submitOn);

let user = {};

textOutput();

function inputOn(event) {
  user[event.target.name] = event.target.value;

  const saveUser =
    JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

  let mergeUser = { ...saveUser, ...user };

  localStorage.setItem('feedback-form-state', JSON.stringify(mergeUser));
}

function submitOn(event) {
  event.preventDefault();
  formEl.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function textOutput(event) {
  const saveText = localStorage.getItem('feedback-form-state');

  if (saveText) {
    const saveObj = JSON.parse(saveText);

    for (const key in saveObj) {
      const input = document.querySelector(`[name = "${key}"]`);
      input.value = saveObj[key];
    }
  }
}
