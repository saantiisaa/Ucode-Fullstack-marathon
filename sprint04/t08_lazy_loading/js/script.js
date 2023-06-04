const images = document.querySelectorAll('.image');
const messageElement = document.getElementById('message');
let loadedImages = 0;

const loadImage = (image) => {
    const img = image.querySelector('img');
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.style.display = 'block';
    loadedImages++;

    messageElement.textContent = `Loaded images: ${loadedImages}`;

    img.addEventListener('load', () => {
        image.classList.add('loaded');
        if (document.querySelectorAll('.image.loaded').length === images.length) {
            messageElement.classList.add('loaded');
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 3000);
        }
    });
};

const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

images.forEach((image) => {
    observer.observe(image);
});
