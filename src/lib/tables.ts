export interface RandomTable {
  name: string;
  description: string;
  diceFormula: string;
  table: MinMaxRow[];
}

export interface MinMaxRow {
  min: number | null;
  max: number | null;
  description: string;
}

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

export const nearbyLocationEven: RandomTable = {
  name: 'Nearby Location (Even)',
  description: 'Randomly generated locations when 1d4 is even.',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'A small village' },
    { min: 2, max: 2, description: 'A metropolis' },
    { min: 3, max: 3, description: 'The Nexus' },
    { min: 4, max: 4, description: 'An oasis' },
    { min: 5, max: 5, description: 'A port' },
    { min: 6, max: 6, description: 'Enchanted forest' },
    { min: 7, max: 7, description: 'A wasteland' },
    { min: 8, max: 8, description: 'Alien settlement' },
    { min: 9, max: 9, description: 'Fire plane' },
    { min: 10, max: 10, description: 'Underwater city' },
    { min: 11, max: 11, description: 'Floating city' },
    { min: 12, max: 12, description: 'Volcanic island' },
    { min: 13, max: 13, description: 'Arctic tundra' },
    { min: 14, max: 14, description: 'Abandoned castle' },
    { min: 15, max: 15, description: 'Fairy kingdom' },
    { min: 16, max: 16, description: 'Wild west town' },
    { min: 17, max: 17, description: 'Underground caverns' },
    { min: 18, max: 18, description: 'Swamp' },
    { min: 19, max: 19, description: 'Island resort' },
    { min: 20, max: 20, description: 'Jungle' },
  ],
};

export const nearbyLocationOdd: RandomTable = {
  name: 'Nearby Location (Odd)',
  description: 'Randomly generated locations when 1d4 is odd.',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Secret underground laboratory' },
    { min: 2, max: 2, description: 'Island resort' },
    { min: 3, max: 3, description: 'Medieval fortress' },
    { min: 4, max: 4, description: 'Ghost Town' },
    { min: 5, max: 5, description: 'Amusement park' },
    { min: 6, max: 6, description: 'Mystic Garden' },
    { min: 7, max: 7, description: 'Pirate Cove' },
    { min: 8, max: 8, description: 'Haunted Mansion' },
    { min: 9, max: 9, description: 'Dark Forest' },
    { min: 10, max: 10, description: ' Ancient Ruins' },
    { min: 11, max: 11, description: ' Magical School' },
    { min: 12, max: 12, description: ' Waterfall' },
    { min: 13, max: 13, description: ' Mysterious Island' },
    { min: 14, max: 14, description: ' Dragon\'s Lair' },
    { min: 15, max: 15, description: ' A Tower' },
    { min: 16, max: 16, description: ' Prehistoric jungle' },
    { min: 17, max: 17, description: ' Rustic countryside' },
    { min: 18, max: 18, description: ' Meteorite impact zone' },
    { min: 19, max: 19, description: ' Starship graveyard' },
    { min: 20, max: 20, description: ' The ruins of a lost city' },
  ]
};

export const questTypes: RandomTable = {
  name: 'Quest Types',
  description: 'Randomly generated quest types',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Find an item ' },
    { min: 2, max: 2, description: ' Open a gate' },
    { min: 3, max: 3, description: 'Kill a villain ' },
    { min: 4, max: 4, description: 'Activate a monument' },
    { min: 5, max: 5, description: 'Rescue an NPC ' },
    { min: 6, max: 6, description: 'Disable an artifact' },
    { min: 7, max: 7, description: 'Uncover a secret ' },
    { min: 8, max: 8, description: 'Recover an item' },
    { min: 9, max: 9, description: 'Clear out monsters ' },
    { min: 10, max: 10, description: 'Convince an NPC' },
    { min: 11, max: 11, description: 'Protect a monument ' },
    { min: 12, max: 12, description: 'Awaken a monster' },
    { min: 13, max: 13, description: 'Protect an NPC ' },
    { min: 14, max: 14, description: 'Put a monster to sleep' },
    { min: 15, max: 15, description: 'Steal an item ' },
    { min: 16, max: 16, description: 'Bury a secret' },
    { min: 17, max: 17, description: 'Return an item ' },
    { min: 18, max: 18, description: 'Discover a monument' },
    { min: 19, max: 19, description: 'Close a gate ' },
    { min: 20, max: 20, description: 'Dig up an artifact' },
  ]
};

export const loot: RandomTable = {
  name: 'Loot',
  description: 'Randomly generated loot',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: '1d6 Cyphers' },
    { min: 2, max: 2, description: 'Artifact/Oddity' },
    { min: 3, max: 3, description: '1 inexpensive slot' },
    { min: 4, max: 4, description: '1 moderate slot' },
    { min: 5, max: 5, description: '1 expensive slot' },
    { min: 6, max: 6, description: 'Roll again X2 of result' },
  ]
};


export const creatureHealth: RandomTable = {
  name: 'Creature Health',
  description: 'Randomly generated creature health plus level',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: '0 pts' },
    { min: 2, max: 2, description: '10 pts' },
    { min: 3, max: 3, description: '20 pts' },
    { min: 4, max: 4, description: '30 pts' },
    { min: 5, max: 5, description: '40 pts' },
    { min: 6, max: 6, description: '50 pts' },
  ]
};

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

export const directionTable: RandomTable = {
  name: 'Directions',
  description: 'Determine random direction to go.',
  diceFormula: '1d8',
  table: [
    { min: 1, max: 1, description: 'North' },
    { min: 2, max: 2, description: 'North East' },
    { min: 3, max: 3, description: 'East' },
    { min: 4, max: 4, description: 'South East' },
    { min: 5, max: 5, description: 'South' },
    { min: 6, max: 6, description: 'South West' },
    { min: 7, max: 7, description: 'West' },
    { min: 8, max: 8, description: 'North West' },
  ]
}