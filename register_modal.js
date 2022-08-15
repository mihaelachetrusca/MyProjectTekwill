var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bgg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bgg-active');modalBg.classList.add('bgg-active');
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bgg-active');
});