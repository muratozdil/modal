'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');
//since theres more than more show-modal button 'all' works like an array

//to open modal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
//to close modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpen.length; i++)
    btnOpen[i].addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (
        event.key === 'Escape' &&
        !modal.classList.contains('hidden') &&
        !overlay.classList.contains('hidden')
    )
        closeModal();
});
