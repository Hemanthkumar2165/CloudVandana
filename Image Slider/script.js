const images = [
    "1659578019250.jpg",
    "IMG20220805133234.jpg",
    "IMG20220803220147.jpg",
    "IMG20220803235533.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

updateImage();
