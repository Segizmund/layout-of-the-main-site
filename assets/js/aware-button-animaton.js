const positionAwareElements = document.querySelectorAll('.position-aware');

positionAwareElements.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        const elementRect = element.getBoundingClientRect();
        const relativeX = event.clientX - elementRect.left;
        const relativeY = event.clientY - elementRect.top;
        const span = element.querySelector('.aware-bg');
        span.style.top = `${relativeY}px`;
        span.style.left = `${relativeX}px`;
    });

    element.addEventListener('mouseout', (event) => {
        const elementRect = element.getBoundingClientRect();
        const relativeX = event.clientX - elementRect.left;
        const relativeY = event.clientY - elementRect.top;
        const span = element.querySelector('.aware-bg');
        span.style.top = `${relativeY }px`;
        span.style.left = `${relativeX}px`;
    });
});
