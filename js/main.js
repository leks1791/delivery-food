const buttonAuth = document.querySelector('.button-auth'),
   modalAuth = document.querySelector('.modal-auth'),
   closeAuth = modalAuth.querySelector('.close-auth'),
   buttonOut = document.querySelector('.button-out'),
   userName = document.querySelector('.user-name'),
   logInForm = document.getElementById('logInForm'),
   inputLogin = document.getElementById('login'),
   inputPassword = document.getElementById('password');

const login = (user) => {
   buttonAuth.style.display = 'none';

   buttonOut.style.display = 'block';
   userName.style.display = 'block';

   userName.textContent = user.login;
   modalAuth.style.display = 'none';
}
const logout = () => {

   buttonAuth.style.display = 'flex';
   buttonOut.style.display = 'none';

   userName.textContent = '';
   userName.style.display = 'none';
   localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
   modalAuth.style.display = 'flex';
})

buttonOut.addEventListener('click', logout)

closeAuth.addEventListener('click', () => {
   modalAuth.style.display = 'none';
})

logInForm.addEventListener('submit', (event) => {
   event.preventDefault()
   const user = {
      login: inputLogin.value,
      password: inputPassword.value
   }

   localStorage.setItem('user', JSON.stringify(user))

   login(user)

})

if (localStorage.getItem('user')) {
   login(JSON.parse(localStorage.getItem('user')))
}