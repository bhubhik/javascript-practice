//* Code to make a deck of cards with different methods made in a object method

const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['Clubs', 'Spades', 'Diamond', 'Hearts'],
    values: 'A,2,3,4,5,6,7,8,9,10,J,K,Q',
    intializeDeck() {
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
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myDeck = makeDeck();
myDeck.intializeDeck();
myDeck.shuffle();
const card1 = myDeck.drawCard();
const hand1 = myDeck.drawMultiple(5);

//* To make a second deck
const deck2 = makeDeck();
deck2.intializeDeck();

const obj = { a: 2, b: 2, c: 3, d: 4 };

const h = 'hello';
const y = 'hello';
