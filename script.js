const Btn = document.querySelector('.burger__btn');
const burgerBtn = document.getElementById('burgerBtn');
const closeBtn = document.getElementById('closeBtn');
let nav = document.querySelector('.nav');

Btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
});