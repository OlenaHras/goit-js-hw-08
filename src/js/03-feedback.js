import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

let formData = {};

form.addEventListener('submit', onFormSybmit);
form.addEventListener('input', throttle(onFormData, 500));

getSavedMessage();

function onFormData (event) {  
  formData[event.target.name] = event.target.value;
  const formStringified = JSON.stringify(formData);  
  localStorage.setItem("feedback-form-state", formStringified);
};

function onFormSybmit(event) {
  event.preventDefault();
  if (email.value && message.value) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state"); 
    return;  
  }
  alert("Please input a Value");
  return '';
};

function getSavedMessage() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    const parced = JSON.parse(savedMessage);
    formData = parced;
    email.value = parced.email ? parced.email : '';
    message.value = parced.message ? parced.message : '';
  };

};
