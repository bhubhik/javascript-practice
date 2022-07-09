const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['Heart', 'Spade', 'Diamond', 'Club'],
    values: 'A,1,2,3,4,5,6,7,8,9,10,J,K,Q',
    initializeDeck() {
      const { values, suits, deck } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value,
            suit,
          });
        }
      }
      return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(num) {
      const cards = [];
      for (let i = 0; i < num; i++) {
        card.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        let j = (Math.floor(Math.random() * (i + 1))[(deck[i], deck[j])] = [
          deck[j],
          deck[i],
        ]);
      }
    },
  };
};
