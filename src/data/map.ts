import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { generateNPCs } from "./characters";
import { generateClues } from "./clues";
import { generateEvent } from "./events";
import { generateTreasure } from "./loot";
import { generateMonsters } from "./monsters";

export interface MapTile {
  /* north?: MapTile;
  south?: MapTile;
  east?: MapTile;
  west?: MapTile; */

  monsters?: any;
  clues?: any;
  features?: any;
  npcs?: any;
  treasure?: any;
  event?: any;

  type: LandType;
  [key: string]: any;
}

export const landTypes = {
  desert: 'Desert',
  forest: 'Forest',
  frozen: 'Frozen Lands',
  hills: 'Hills',
  mountains: 'Mountains',
  plains: 'Plains',
  swamps: 'Swamps',
  waterway: 'Waterway',
  lake: 'Lake',
  coast: 'Coast',
  ocean: 'Ocean',
  settlement: 'Settlement',
  cave: 'Cave',
  dungeon: 'Dungeon',
} as const;

export const mapOptions = [
  'standard wilderness',
  'special wilderness',
  'standard room',
  'special room',
  'passage',
];

const landArray = Object.keys(landTypes);
export type LandType = typeof landArray[number];

export function generateTile(type: LandType, option: string): MapTile {
  const tile:MapTile = {
    type,
    //monsters: generateMonsters(option),
    //clues: generateClues(option),
    features: generateFeatures(option, type),
    //npcs: generateNPCs(option),
    //treasure: generateTreasure(option),
    //event: generateEvent(option),
  };

  return tile;
}

export function generateFeatures(option: string, type: LandType) {
  const roll = new DiceRoll('1d12');
  let HIGH = 12;
  let LOW = 7;
  let TWO = 11;
  let TRAP_HIGH = 12;
  let TRAP_LOW = 12;

  let featureCount = 0;
  let trapCount = 0;

  switch (option) {
    case 'special wilderness':
      HIGH = 10;
      LOW = 5
      TWO = 13;
      TRAP_HIGH = 12;
      TRAP_LOW = 11;
      break;
    case 'standard room':
      HIGH = 10;
      LOW = 10;
      TWO = 11;
      TRAP_HIGH = 12;
      TRAP_LOW = 12;
      break;
    case 'special room':
      HIGH = 10;
      LOW = 10
      TWO = 11
      TRAP_HIGH = 12;
      TRAP_LOW = 11;
      break;
    case 'passage':
      HIGH = 10;
      LOW = 9
      TWO = 11
      TRAP_HIGH = 12;
      TRAP_LOW = 12;
        break;
    case 'standard wilderness':
    default:
      HIGH = 10;
      LOW = 7
      TWO = 11
      TRAP_HIGH = 12;
      TRAP_LOW = 12;
      break;
  }
  if (roll.total < LOW) return;
  if (roll.total <= HIGH && roll.total >= LOW) featureCount = 1;
  if (roll.total === TWO) featureCount = 2;
  if (roll.total <= TRAP_HIGH && roll.total >= TRAP_LOW) trapCount = 1;

  if (featureCount > 0) return generateFeature(type);
  if (trapCount > 0) return generateTrap();
}

function generateFeature(type) {
  const roll = new DiceRoll('1d100');
  for (const i in wildernessFeatures) {
    const value = wildernessFeatures[i];
    if (roll.total >= value[0]) {
      if (roll.total <= value[1]) {
        return value[2];
      }
    }
  }
  return;
}

function generateTrap() {

}

export const wildernessFeatures = [
  [1, 5, 'campsite'],
  [6, 11, 'small castle'],
  [12, 16, 'large castle'],
  [17, 22, 'small ruins'],
  [23, 27, 'large ruins'],
  [28, 33, 'haunts'],
  [34, 38, 'cave'],
  [39, 44, 'extreme weather'],
  [45, 50, 'interesting natural feature'],
  [51, 55, 'bandits'],
  [56, 61, 'unmarked settlement'],
  [62, 66, 'unusual flora and fauna'],
  [67, 72, 'structure'],
  [78, 83, 'weird terrain feature'],
  [84, 88, 'farmlands'],
  [89, 94, 'monument'],
  [95, 100, 'travelers'],
]