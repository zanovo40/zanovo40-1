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

// _______________________________________________________________________________

// Telephone input (Maxim Vakulov solution)
const telephoneInput = document.querySelector('.phone');
telephoneInput.addEventListener('input',function(e){
    if(e.inputType==='deleteContentBackward'||e.inputType==='deleteContentForward')
    {return false};
    this.value = this.value.replace(/\D/g,'');
    if(/^[8]/.test(this.value)){
        this.value = this.value.replace(/^[8]/,'+7');
    }else{
        this.value = '+'+this.value;
    }
        let max = 16;
        let start = 2;
     const obj ={
        0:'(',
        4:')',
        8:'-',
        11:'-',
    }
    for (char in obj){
        if(this.value[start+(+char)]){
            this.value = this.value.substring(0,start+(+char))
            +obj[char]+this.value.substring(start+(+char))
        }
        console.log(this.value.substring(start+(+char)))
    }
    if (this.value.length > max) {
        this.value = this.value.substring(0, max);
        // this.value = this.value.slice(0, max);
    }
});








