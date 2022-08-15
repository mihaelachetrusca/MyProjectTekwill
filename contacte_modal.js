let modal = document.getElementById('contact-modal'),
    openModal = document.getElementById('modal-open'),
    closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function(){
    modal.style.display = 'block';
})

closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
})

window.addEventListener('click', function(e){//cind apas in afara ferestrei-se inchide modala
    if(e.target==modal) {
        modal.style.display = 'none';
    }
})