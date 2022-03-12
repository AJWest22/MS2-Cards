document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card')

    function cardFlip() {
        this.classList.toggle('cardFlip');
    }

    cards.forEach(card => card.addEventListener('click', cardFlip));

})
