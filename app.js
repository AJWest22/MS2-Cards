document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    let flippedCard = false;
    let firstCard, secondCard;

    function cardFlip() {
        this.classList.add('cardFlip');
        if (!flippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        flippedCard = false;

        checkCards()
    }

    function checkCards() {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            match();
            return;
        }
    }

    cards.forEach(card => card.addEventListener('click', cardFlip));

})
