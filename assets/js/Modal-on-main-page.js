document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.excursion-btn')) {
        let btnModal = document.querySelector('.excursion-btn');
        let closeModal = document.querySelector('.nav-burger');
        let burger = document.querySelector('.burger');
        let sideNav = document.querySelector('.side-nav-page');

        btnModal.addEventListener('click', function () {
            btnModal.classList.add('hid');
            closeModal.style.display = "block";
            burger.classList.add('open');
            sideNav.classList.add('open');

        });
        closeModal.addEventListener('click', function () {
            btnModal.classList.remove('hid');
            burger.classList.remove('open');
            sideNav.classList.remove('open');
            closeModal.style.display = "none";
        });

    }
});