const getEmail = document.querySelector('#email');
const getPassword = document.querySelector('#password');


document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault();
  handleLogin(getEmail.value, getPassword.value);

})
