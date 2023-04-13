import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { getRandomItem, getRandomItems } from "../random";
import { subtleCyphers } from "./subtle";

export function getRandomCyphers(count = 3) {
  return getRandomItems(cyphers, count);
}

export function getRandomCypher() {
  return getRandomItem(cyphers);
}

interface Cypher {
  name: string;
  type: string;
  level: string;
  effect: string;
}

export function printCypher(cypher: Cypher): string {
  const level = new DiceRoll(cypher.level).total;
  return `<strong class="font-bold">L${level} ${cypher.name}:</strong> ${cypher.effect}`;
}

const cyphers: Cypher[] = [
  ...subtleCyphers,
];