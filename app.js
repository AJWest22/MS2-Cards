const cards = document.querySelectorAll('.memory-card')

function cardFlip() {
    cards.classList.toggle("cardFlip");
}

cards.forEach(card => card.addEventListener("click", cardFlip));