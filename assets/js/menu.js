let menuPoints = document.querySelectorAll('.point-menu');
let dropDownMenus = document.querySelectorAll('.new-menu');
let content = document.querySelector('.main-section');
let navBar = document.querySelector('.navbar-collapse');
let btnSearch = document.querySelector('.search-form button');
let inputSearch = document.querySelector('.search-form input');
function checkScreenWidth() {
    if (window.matchMedia("(min-width: 1025px)").matches) {
        btnSearch.addEventListener('click', () => {
            inputSearch.classList.toggle('active');
        });
        menuPoints.forEach((point, index) => {
            point.addEventListener('mouseover', () => {
                if (dropDownMenus[index]) {
                    dropDownMenus[index].classList.remove('hidde');
                    content.style.opacity = '0.3';
                    point.style.color = '#c10f1a';
                }
            });

            point.addEventListener('mouseleave', () => {
                if (dropDownMenus[index] && !dropDownMenus[index].contains(event.relatedTarget)) {
                    dropDownMenus[index].classList.add('hidde');
                    content.style.opacity = '1';
                    point.style.color = '#820000';
                }
            });
            if (dropDownMenus[index]) {
                dropDownMenus[index].addEventListener('mouseleave', () => {
                    dropDownMenus[index].classList.add('hidde');
                    content.style.opacity = '1';
                    point.style.color = '#820000';
                });
            }
        });
    } else {
        btnSearch.type = 'submit';
        let hamburger = document.querySelector('.navbar-toggler');
        let backButtons = document.querySelectorAll('.back-btn');
        for (let i = 0; i < dropDownMenus.length; i++) {
            if (dropDownMenus[i]) {
                dropDownMenus[i].classList.remove('hidde');
                if(!dropDownMenus[i].classList.contains('mob-menu')){
                    dropDownMenus[i].classList.add('mob-menu');
                }
            }
        }
        hamburger.addEventListener('click', () => {
            navBar.classList.toggle('opened');
           document.body.classList.toggle('no-scroll');
            content.classList.toggle('opacit');
           for (let i = 0; i < dropDownMenus.length; i++) {
               if (dropDownMenus[i]) {
                   dropDownMenus[i].classList.remove('opened');
               }
           }
        });
        menuPoints.forEach((point, index) => {
            point.addEventListener('click', () => {
                dropDownMenus[index].classList.add('opened');
                document.body.classList.add('no-scroll');
            })
        });
        backButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                dropDownMenus[index].classList.remove('opened');
                document.body.classList.remove('no-scroll');
            })
        });
    }
}
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);