import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { rollOnTable, type RandomTable } from "../tables";

export const shiftTable: RandomTable = {
  name: 'Shift Table',
  description: 'Random determination of a shift',
  diceFormula: '1d8',
  table: [
    { min: 1, max: 1, description: 'Purple (high magic/high tech)' },
    { min: 2, max: 2, description: 'Magenta (high magic/no tech)' },
    { min: 3, max: 3, description: 'Red (high magic, low tech)' },
    { min: 4, max: 4, description: 'Orange (no magic, low tech)' },
    { min: 5, max: 5, description: 'Yellow (low magic, low tech)' },
    { min: 6, max: 6, description: 'Green (no magic, no tech)' },
    { min: 7, max: 7, description: 'Cyan (low magic, high tech)' },
    { min: 8, max: 8, description: 'Blue (no magic, high tech)' },
  ]
}

export const manifestationCount: RandomTable = {
  name: 'Manifestation Count',
  description: 'Random occurrences for manifestations upon each drift.',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'manifestation every hour' },
    { min: 2, max: 12, description: '1 manifestation/day' },
    { min: 13, max: 15, description: '2 per day' },
    { min: 16, max: 18, description: '3 per day' },
    { min: 19, max: 19, description: ' 1 manifestation entire stay' },
    { min: 20, max: 20, description: 'No manifestations' },
  ]
};

export const ascendantSpecies: RandomTable = {
  name: 'Ascendant Species',
  description: 'A random species from the Ascendant',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Bitten Therian' },
    { min: 2, max: 2, description: 'Dragon' },
    { min: 3, max: 3, description: 'Embraced Vampire' },
    { min: 4, max: 13, description: 'Human' },
    { min: 14, max: 14, description: 'Minorem' },
    { min: 15, max: 15, description: 'Netherborn' },
    { min: 16, max: 16, description: 'Path' },
    { min: 17, max: 17, description: 'Primeval Vampire' },
    { min: 18, max: 18, description: 'Sussuri Witch' },
    { min: 19, max: 19, description: 'Therianborn' },
    { min: 20, max: 20, description: 'Venatori' },
  ]
};

export const bloodlines: RandomTable = {
  name: 'Bloodlines',
  description: 'Random Bloodlines',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Animal Ken' },
    { min: 2, max: 2, description: 'Domination' },
    { min: 3, max: 3, description: 'Fear' },
    { min: 4, max: 4, description: 'Lust/Desire' },
    { min: 5, max: 5, description: 'Shadow' },
    { min: 6, max: 6, description: 'Reroll' },
  ]
};

export const chaosAura: RandomTable = {
  name: 'Chaos Aura',
  description: 'A random effect for the Chaos Aura',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: elementalDamage() },
    { min: 2, max: 2, description: 'all actions are hindered for one minute' },
    { min: 3, max: 3, description: 'Random Fire Ignites Nearby' },
    { min: 4, max: 4, description: 'Objects Around You Levitate Briefly' },
    { min: 5, max: 5, description: 'All Water Within 30ft Turns to Ice' },
    { min: 6, max: 6, description: 'A Patch of Wildflowers Bloom Instantly' },
    { min: 7, max: 7, description: 'Thunderous Roar Shakes the Ground' },
    { min: 8, max: 8, description: 'Creepy Dissonant Whispers emanate from everywhere' },
    { min: 9, max: 9, description: 'A Small Earthquake Rumbles Underfoot' },
    { min: 10, max: 10, description: 'A Gentle Breeze Fills the Air' },
    { min: 11, max: 11, description: 'A Bright Light Bathes the Area in Radiance' },
    { min: 12, max: 12, description: 'A Rain of Glitter Descends' },
    { min: 13, max: 13, description: 'Nearby Shadows Seem to Dance and Flicker' },
    { min: 14, max: 14, description: 'An Unusual Animal Appears and Observes You' },
    { min: 15, max: 15, description: 'A Mysterious Mist Envelops the Area' },
    { min: 16, max: 18, description: 'Nothing Happens' },
    { min: 19, max: 19, description: 'Anyone within an short distance makes a free recovery roll' },
    { min: 20, max: 20, description: 'All Cyphers in an immediate distance randomly change' },
  ]
};

export const elemental: RandomTable = {
  name: 'Elemental',
  description: 'A random element for elemental damage',
  diceFormula: '1d4',
  table: [
    { min: 1, max: 1, description: 'fire' },
    { min: 2, max: 2, description: 'earth' },
    { min: 3, max: 3, description: 'air' },
    { min: 4, max: 4, description: 'water' },
};

function elementalDamage() {
  return `${new DiceRoll('1d6').total} of ${rollOnTable(elemental).description} damage to anyone in a short distance`;
}