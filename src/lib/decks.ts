import { TarotCard } from "./tarot";

export interface Card {
  name: string;
  suit: string;
  value: number;
}

export type Deck =  Card[] | TarotCard[];

function makeDeck(deck: Deck, suits: string[], face: string[], faceValue: number[]) {
  const cards = [...deck];
  for (let i in suits) {
    let suit = suits[i];
    for (let j = 2; j <= 10; j++) {
      cards.push({
        name: `${j.toString()} of ${suit}`,
        suit,
        value: j,
      });
    }
    for(let j in face) {
      let f = `${face[j]} of ${suit}`;
      cards.push({
        name: f,
        suit,
        value: faceValue[j],
      });
    }
  }
  return cards;
}

const cards = []

cards.push({
  name: 'Joker',
  suit: 'Red',
  value: 0,
},{
  name: 'Joker',
  suit: 'Black',
  value: 0,
});

let suits =  ['Hearts','Clubs','Diamonds','Spades'];
let face = ['Jack','Queen','King','Ace'];
let faceValue = [11,12,13,1];

export const playingCards:Deck = makeDeck(cards, suits, face, faceValue);

export function shuffle(deck: Deck) {
  let currentIndex = deck.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}
