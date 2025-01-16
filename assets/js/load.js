const video = document.getElementById('intro-video');
video.addEventListener('play', function() {
    document.body.style.overflow = 'hidden';
});
video.addEventListener('ended', () => {
    video.classList.add('end');
    document.body.style.overflow = 'auto';
},{ once: true })
