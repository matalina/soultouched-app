import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { getRandomKeywords } from "./keywords";
import { getRandomCyphers, printCypher } from "./cypher/cyphers";

const developer = [
  () => '<strong>Automatic Failure</strong>',
  () => `<strong>And...</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => 'None',
  () => `<strong>And...</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => 'None',
  () => `<strong>But...</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => 'None',
  () => `<strong>But...</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => `<strong>GM Intrusion: +1XP</strong><br/>${getRandomKeywords(3).join(', ')}`,
  randomCyphers,
  randomCyphers,
  () => `<strong>GM Intrusion: +1XP</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => `<strong>PC Inhibitor</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => 'None',
  () => `<strong>PC Enabler</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => 'None',
  () => `<strong>NPC Inhibitor</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => 'None',
  () => `<strong>NPC Enabler</strong><br/>${getRandomKeywords(3).join(', ')}`,
  () => '<strong>Automatic Success</strong>',
];

function randomCyphers(): string {
  let roll = new DiceRoll('1d6');
  let cyphers = getRandomCyphers(roll.total);
  let output = `<strong>Find 1d6 Cyphers</strong><br/>`;
  output += `<small class="font-normal text-xs text-blue-500">${roll.output}</small><br/>`;
  output += `<ol class="list-decimal list-inside font-normal text-xs text-justify">`;
  for (let i in cyphers) {
    output += `<li>${printCypher(cyphers[i])}</li>`;
  }
  output += `</ol>`;
  return output;
}

export function getDeveloper() {
  let dev = new DiceRoll('1d20');
  console.log(dev.total);
  const output = developer[dev.total - 1]();
  let string = `Developer: ${output}<br/>`;
  string += `<small class="font-normal text-xs text-blue-500" > (${dev.output})</small>`;
  return { roll: dev, developer: string };
}
