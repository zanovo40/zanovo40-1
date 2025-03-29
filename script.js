// Modal window remove hidden
const modalWindow = document.querySelector('.modal-window');
const modalWindow1 = document.getElementsByClassName('modal-window');
const modalbtn = document.getElementsByClassName('btn--show-modal-window');
console.log(modalbtn.children);
const btns = document.querySelectorAll('.btn--show-modal-window')
console.log(btns);
const openModalWindow = function(e){
    e.preventDefault();
    modalWindow.classList.remove('hidden')
}
btns.forEach(element => {
    element.addEventListener('click',openModalWindow)
});
// Modal window add hidden
const btnsclose = document.querySelector ('.btn--close-modal-window');
const closeModalWindow = function(){
    modalWindow.classList.add('hidden')
}
btnsclose.addEventListener('click',closeModalWindow);











