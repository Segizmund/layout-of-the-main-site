document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.excursion-btn')) {
        let btnModal = document.querySelector('.excursion-btn');
        let Modal = document.querySelector('.excursion-menu');

        btnModal.addEventListener('click', function () {
            Modal.classList.toggle('open')
        });

    }
});