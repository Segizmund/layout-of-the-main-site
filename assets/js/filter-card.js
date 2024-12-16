if(document.querySelectorAll('.btn-filter-card')){
    var btnFilterCard = document.querySelectorAll('.btn-filter-card');
}
btnFilterCard.forEach((point, index) => {
    point.addEventListener('click', () => {
        btnFilterCard.forEach(btn => btn.classList.remove('active'));
        point.classList.add('active');
    });
});