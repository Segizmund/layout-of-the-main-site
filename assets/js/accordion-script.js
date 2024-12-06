const accordionItems = document.querySelectorAll('.accordion-toggle');
const accordionText = document.querySelector('.accordion-text');
const rect = accordionText.getBoundingClientRect();
var height = rect.height;
height += 95;
const accordionBox = document.querySelector('.accordion-box');
const accordionArrow = document.querySelector('.accordion-box svg');
accordionItems.forEach(item => {
    item.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isExpanded = content.classList.contains('show');

        // Close all other accordion content divs
        accordionItems.forEach(sibling => {
            if (sibling !== this) {
                sibling.nextElementSibling.classList.remove('show');
            }
        });

        content.classList.toggle('show', !isExpanded);
        if(content.classList.contains('show')){
            accordionBox.classList.add('show');
            accordionBox.style.height = height + 'px';
            accordionArrow.style.transform = 'rotateZ(180deg)';
        }
        else{
            accordionBox.classList.remove('show');
            accordionBox.style.height = '73px';
            accordionArrow.style.transform = 'rotateZ(0deg)';
        }
    });
});