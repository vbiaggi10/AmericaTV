const getEmail = document.querySelector('#email');
const getPassword = document.querySelector('#password');
const messageInvalid1 = document.querySelector('#if1');
const messageInvalid2 = document.querySelector('#if2');


document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault();
  handleLogin(getEmail.value, getPassword.value);
  if(getEmail.value === "" && getPassword.value=== ""){
    messageInvalid1.style.display="block";
    messageInvalid2.style.display="block";
  }
})

getEmail.addEventListener('change', ()=>{
  messageInvalid1.style.display='none';
})

getPassword.addEventListener('change', ()=>{
  messageInvalid2.style.display='none';
})

