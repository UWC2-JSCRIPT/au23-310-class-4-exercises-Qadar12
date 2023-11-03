/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

const getDeck = () => {
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  let deck = [];
  let val;
  let suit;

  for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
      if (j >= 2 && j <= 10) {
        val = j;
        deck.push(`${suits[i]} has a value of ${val}`);
      } else if (j === 1) {
        val = 11;
        suit = "Ace";
        deck.push(`${suit} of ${suits[i]} has a value of ${val}`);
      } else if (j === 11) {
        val = 10;
        suit = "Jack";
        deck.push(`${suit} of ${suits[i]} has a value of ${val}`);
      } else if (j === 12) {
        val = 10;
        suit = "Queen";
        deck.push(`${suit} of ${suits[i]} has a value of ${val}`);
      } else if (j === 13) {
        val = 10;
        suit = "King";
        deck.push(`${suit} of ${suits[i]} has a value of ${val}`);
      }
    }
  }
  return deck;
};

getDeck();

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === "number";
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === "string";
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === "string";
console.log(`Random card has display value? ${cardHasDisplayVal}`);
