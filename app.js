const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

let users = {}; 

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

showRegister.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!username || !password) {
    alert('Please fill in both fields.');
    return;
  }

  if (users[username] && users[username] === password) {
    alert('Login successful!');
    loginModal.style.display = 'none';
  } else {
    alert('Invalid username or password.');
  }
});

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  if (!username || !password) {
    alert('Please fill in both fields.');
    return;
  }

  if (users[username]) {
    alert('Username already taken.');
  } else {
    users[username] = password;
    alert('Registration successful! Please log in.');
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  }
});



function redirectToPayment() {
  window.location.href = "payment.html"; 
}