document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.memory-card');
    let flippedCard = false;
    let lockCards = false;
    let firstCard, secondCard;

    function cardFlip() {
        if (lockCards) return;
        if (this === firstCard) return;
        this.classList.add('cardFlip');
        if (!flippedCard) {
            flippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        lockCards = true;

        checkCards()
    }

    function checkCards() {
        let isAMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isAMatch ? matchingCards() : unmatchingCards();
    }

    function matchingCards() {
        firstCard.removeEventListener('click', cardFlip);
        secondCard.removeEventListener('click', cardFlip)
        resetGame();
    }

    function unmatchingCards() {
        setTimeout(() => {
            firstCard.classList.remove('cardFlip');
            secondCard.classList.remove('cardFlip');
            resetGame();
        }, 1500);
    }

    function resetGame() {
        [flippedCard, lockCards] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffleCards() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
      });
    })();

    cards.forEach(card => card.addEventListener('click', cardFlip));

})