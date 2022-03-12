const cards = document.getElementsByClassName('memory-card')

cards.forEach(card => card.addEventListener('click'));

function cardFlip() {
    this.classList.toggle('flip');
}