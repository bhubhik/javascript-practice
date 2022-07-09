const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    suits: ['Spade', 'Club', 'Diamond', 'Heart'],
    runDeck() {
      const { deck, values, suits } = this;
      for (value of values.split(',')) {
        for (suit of suits) {
          deck.push({ value, suit });
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
        cards.push(this.drawCard());
      }
      return cards;
    },
    teenPatti() {
      const cards = [];
      for (let i = 0; i < 3; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        console.log(i.length);
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};
const myDeck = makeDeck();
myDeck.runDeck();
myDeck.shuffle();
const three = () => myDeck.teenPatti();
