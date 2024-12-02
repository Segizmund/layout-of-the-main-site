let menuPoints = document.querySelectorAll('.point-menu');
let dropDownMenus = document.querySelectorAll('.new-menu');
let content = document.querySelector('.main-section');
function checkScreenWidth() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        menuPoints.forEach((point, index) => {
            point.addEventListener('mouseover', () => {
                if (dropDownMenus[index]) {
                    dropDownMenus[index].classList.remove('hidden');
                    content.style.opacity = '0.3';
                    point.style.color = '#c10f1a';
                }
            });

            point.addEventListener('mouseleave', () => {
                if (dropDownMenus[index] && !dropDownMenus[index].contains(event.relatedTarget)) {
                    dropDownMenus[index].classList.add('hidden');
                    content.style.opacity = '1';
                    point.style.color = '#820000';
                }
            });
            if (dropDownMenus[index]) {
                dropDownMenus[index].addEventListener('mouseleave', () => {
                    dropDownMenus[index].classList.add('hidden');
                    content.style.opacity = '1';
                    point.style.color = '#820000';
                });
            }
        });
    } else {
        let hamburger = document.querySelector('.navbar-toggler');
        let backButtons = document.querySelectorAll('.back-btn');
        for (let i = 0; i < dropDownMenus.length; i++) {
            if (dropDownMenus[i]) {
                dropDownMenus[i].classList.remove('hidden');
                if(!dropDownMenus[i].classList.contains('mob-menu')){
                    dropDownMenus[i].classList.add('mob-menu');
                }
            }
        }
        hamburger.addEventListener('click', () => {
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