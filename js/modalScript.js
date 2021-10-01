const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay1 overlay2 overlay3 overlay4 overlay5 overlay6')



openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('#overlay1, #overlay2, #overlay3, #overlay4, #overlay5, #overlay6')
        closeModal(modal)
    })
})


function openModal(modal){
    if (modal == null) return
    modal.classList.add ('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}




/*var openModalButtons = document.querySelectorAll('.open-modal');

openModalButtons.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display ='block';
    };
});*/