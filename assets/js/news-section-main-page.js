let btns = document.querySelectorAll('.nav-btns a');
let moreBtns = document.querySelectorAll('.more-btns .btn-more-box');
let contentWrapper = document.querySelectorAll('.wrapper-news .elem');
console.log(contentWrapper);
btns.forEach((point, index) => {
    point.addEventListener('click', () => {
        btns.forEach(btn => {
            btn.classList.remove('active');
        });
        moreBtns.forEach(moreBtn => {
            moreBtn.classList.remove('active');
        });
        contentWrapper.forEach(content => {
            content.classList.remove('active');
        });
        point.classList.add('active');
        moreBtns[index].classList.add('active');
        contentWrapper[index].classList.add('active');
    });
});