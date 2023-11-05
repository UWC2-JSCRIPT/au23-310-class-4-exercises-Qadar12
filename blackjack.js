// const blackjackDeck = getDeck();
const getDeck = [
  { val: 2, displayVal: "2", suit: "hearts" },
  { val: 3, displayVal: "3", suit: "hearts" },
  { val: 4, displayVal: "4", suit: "hearts" },
  { val: 5, displayVal: "5", suit: "hearts" },
  { val: 6, displayVal: "6", suit: "hearts" },
  { val: 7, displayVal: "7", suit: "hearts" },
  { val: 8, displayVal: "8", suit: "hearts" },
  { val: 9, displayVal: "9", suit: "hearts" },
  { val: 10, displayVal: "10", suit: "hearts" },
  { val: 10, displayVal: "Jack", suit: "hearts" },
  { val: 10, displayVal: "Queen", suit: "hearts" },
  { val: 10, displayVal: "King", suit: "hearts" },
  { val: 11, displayVal: "Ace", suit: "hearts" },
];
// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  drawCard() {
    let ranNum = Math.floor(Math.random() * 5);
    this.hand.push(getDeck[ranNum]);
    return { name: this.name, hand: this.hand };
  }
}

// // CREATE TWO NEW CardPlayers
const player = new CardPlayer("Neo");
const dealer = new CardPlayer("Agent Smith");

console.log(player.drawCard());
console.log(dealer.drawCard());

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
const calcPoints = (hand) => {
  let counter = 0;
  let total;
  let isSoft = true;

  // convert vals into array and check if ace in deck
  const getDisplayVal = hando.map((x) => x.displayVal);

  const includesAce = getDisplayVal.includes("Ace");

  for (let i = 0; i < hand.length; i++) {
    total = counter += hand[i].val;
  }
  if (total > 21 && includesAce === true) {
    total -= 10;
    isSoft = false;
  }
  return { total, isSoft };
};

const hando = [
  { val: 8, displayVal: "8", suit: "hearts" },
  { val: 10, displayVal: "Kind", suit: "hearts" },
];

console.log(calcPoints(hando));

// /**
//  * Determines whether the dealer should draw another card.
//  *
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
// const dealerShouldDraw = (dealerHand) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore
//  * @param {number} dealerScore
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
// const determineWinner = (playerScore, dealerScore) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count
//  * @param {string} dealerCard
//  */
// const getMessage = (count, dealerCard) => {
//   return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
// }

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player
//  */
// const showHand = (player) => {
//   const displayHand = player.hand.map((card) => card.displayVal);
//   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
// }

// /**
//  * Runs Blackjack Game
//  */
// const startGame = function() {
//   player.drawCard();
//   dealer.drawCard();
//   player.drawCard();
//   dealer.drawCard();

//   let playerScore = calcPoints(player.hand).total;
//   showHand(player);
//   while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
//     player.drawCard();
//     playerScore = calcPoints(player.hand).total;
//     showHand(player);
//   }
//   if (playerScore > 21) {
//     return 'You went over 21 - you lose!';
//   }
//   console.log(`Player stands at ${playerScore}`);

//   let dealerScore = calcPoints(dealer.hand).total;
//   while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
//     dealer.drawCard();
//     dealerScore = calcPoints(dealer.hand).total;
//     showHand(dealer);
//   }
//   if (dealerScore > 21) {
//     return 'Dealer went over 21 - you win!';
//   }
//   console.log(`Dealer stands at ${dealerScore}`);

//   return determineWinner(playerScore, dealerScore);
// }
// // console.log(startGame());

/*
class CardPlayer {
  constructor(name) {
    this.name = name;
    let hand = [];

    const drawCard = () => {
      let ranNum = Math.floor(Math.random() * 52);
      hand.push(getDeck[ranNum]);
      return [this.name, hand];
    };
  }
}
*/
