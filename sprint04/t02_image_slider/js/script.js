const images = [
    "assets/images/image1.png",
    "assets/images/image2.png",
    "assets/images/image3.png"
];
let currentImageIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function showImage() {
    sliderImage.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage();
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage();
}

setInterval(nextImage, 3000);