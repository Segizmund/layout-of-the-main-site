if(document.querySelector('.more-prog-btn')){
    var moreProgBtn = document.querySelector('.more-prog-btn');
    console.log(moreProgBtn)
    var progInfo = document.querySelector('.prog-info');

    moreProgBtn.addEventListener('click', function (){
        progInfo.classList.toggle('line-clamp-4');
        if(!progInfo.classList.contains('line-clamp-4')){
            moreProgBtn.innerHTML = 'Свернуть';
        }
        else{
            moreProgBtn.innerHTML = 'Подробнее о программе';
        }
    });
}