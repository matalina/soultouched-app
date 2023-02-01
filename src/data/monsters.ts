import { DiceRoll } from "@dice-roller/rpg-dice-roller";

export function generateMonsters(option: string) {
  const roll = new DiceRoll('1d12');
  let WIN = 10;
  switch (option) {
    case 'special wilderness':
      WIN = 9;
      break;
    case 'standard room':
      WIN = 9;
      break;
    case 'special room':
      WIN = 9;
      break;
    case 'passage':
      WIN = 11;
      break;
    case 'standard wilderness':
    default:
      WIN = 10;
      break;
  }

  if (roll.total < WIN) return;


}