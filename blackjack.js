// const blackjackDeck = getDeck();
const getDeck = () => {
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  let deck = [];
  let val;
  let suit;
  let displayVal;
  // loop over suits
  for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
      if (j >= 2 && j <= 10) {
        val = j;
        suit = suits[i];
        displayVal = j.toString();
      } else if (j === 1) {
        val = 11;
        suit = suits[i];
        displayVal = "Ace";
      } else if (j === 11) {
        val = 10;
        suit = suits[i];
        displayVal = "Jack";
      } else if (j === 12) {
        val = 10;
        suit = suits[i];
        displayVal = "Queen";
      } else if (j === 13) {
        val = 10;
        suit = suits[i];
        displayVal = "King";
      }

      let card = { val, suit, displayVal };
      deck.push(card);
    }
  }
  return deck;
};
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
    let ranNum = Math.floor(Math.random() * 52);
    let deck = getDeck();
    this.hand.push(deck[ranNum]); // use random num
    return { name: this.name, hand: this.hand };
  }
}

// // CREATE TWO NEW CardPlayers

const player = new CardPlayer("Neo");
const dealer = new CardPlayer("Agent Smith");

//console.log(player.drawCard());
//console.log(dealer.drawCard());

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
  let isSoft = false;

  // convert vals into array
  const getDisplayVal = hand.map((x) => x.displayVal);
  //and check if ace in deck
  const includesAce = getDisplayVal.includes("Ace");

  for (let i = 0; i < hand.length; i++) {
    total = counter += hand[i].val;
  }
  if (total > 21 && includesAce === true) {
    total -= 10; // remove 10 from 11 = 1
    isSoft = false;
  } else if (total <= 21 && includesAce === true) {
    isSoft = true;
  }
  return { total, isSoft };
};

/*
const hando = [
  { val: 8, displayVal: "8", suit: "hearts" },
  { val: 10, displayVal: "Kind", suit: "hearts" },
];

console.log(calcPoints(hando));
*/

// /**
//  * Determines whether the dealer should draw another card.
//  *
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */

const dealerShouldDraw = (dealerHand) => {
  let handValue = calcPoints(dealerHand);
  if (handValue.total <= 16) {
    return true; // draw card
  } else if (handValue.total === 17 && handValue.isSoft === true) {
    return true;
  } else if (handValue.total >= 17 && handValue.total < 21) {
    return false; // dont draw
  } else if (handValue.total > 21) {
    return false;
  }
};

/*
let dealerHand = [
  { val: 11, displayVal: "8", suit: "hearts" },
  { val: 11, displayVal: "Ace", suit: "hearts" },
];

console.log(dealerShouldDraw(dealerHand));
*/
// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore
//  * @param {number} dealerScore
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
const determineWinner = (playerScore, dealerScore) => {
  if (playerScore === dealerScore) {
    return `player's score ${playerScore}, the dealer's score ${dealerScore} and it was a Tie!`;
  } else if (playerScore > dealerScore) {
    return `player's score ${playerScore}, the dealer's score ${dealerScore} and the winner is the Player!!!`;
  } else {
    return `player's score ${playerScore}, the dealer's score ${dealerScore} and the winner is the Dealer`;
  }
};
/*
let playerScore = 21;
let dealerScore = 19;

determineWinner(playerScore, dealerScore);
*/

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count
//  * @param {string} dealerCard
//  */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`;
};

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player
//  */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(
    `${player.name}'s hand is ${displayHand.join(", ")} (${
      calcPoints(player.hand).total
    })`
  );
};

// /**
//  * Runs Blackjack Game
//  */
const startGame = function () {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return "You went over 21 - you lose!";
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return "Dealer went over 21 - you win!";
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
};
console.log(startGame());
