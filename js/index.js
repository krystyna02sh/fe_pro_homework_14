// відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next.Аналогічно з першим зображенням та кнопкою Prev.
// при здачі вказувати і лінк на репо, і лінк на сторінку

const images = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'];
let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function changeImage(index) {
    galleryImage.src = images[index];
}

function updateButtonVisibility() {

    switch (currentIndex) {
        case 0:
            prevButton.style.display = 'none';
            break;
        default:
            prevButton.style.display = 'block';
    }

    switch (currentIndex) {
        case images.length - 1:
            nextButton.style.display = 'none';
            break;
        default:
            nextButton.style.display = 'block';
    }


}

updateButtonVisibility();

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        changeImage(currentIndex);
        updateButtonVisibility();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        changeImage(currentIndex);
        updateButtonVisibility();
    }
});
