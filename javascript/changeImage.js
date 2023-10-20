var image = document.getElementById('video-image');
let isOriginalImage = true;

image.addEventListener('click', () => {
    if (isOriginalImage) {
        image.src = 'images/new-video.png';
    }
    else {
        image.src = 'images/video.png';
    }

    isOriginalImage = !isOriginalImage;
});