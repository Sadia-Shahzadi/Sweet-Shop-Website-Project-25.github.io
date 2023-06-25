let user = document.querySelector('#user');
let login = document.querySelector('.login');

// Login Container 
user.addEventListener('click', () =>{
    // user.classList.toggle('fa-times');
    login.classList.toggle('active');
});

const image = document.getElementById('testi');
const overlay = document.querySelector('.overlay-img');

image.addEventListener('click', () => {
  overlay.classList.toggle('show');
});