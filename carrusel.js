// Otro SCRIPTS

let currentIndex = 0;

function moveCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    container.style.transform = `translateX(-${currentIndex * 100}%)`;

    updateIndicators();
}

function goToSlide(index) {
    const container = document.querySelector('.carousel-container');
    currentIndex = index;
    container.style.transform = `translateX(-${currentIndex * 100}%)`;

    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Inicializa los indicadores
updateIndicators();
