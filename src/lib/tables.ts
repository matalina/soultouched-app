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

export const dispositionTable: RandomTable = {
  name: 'NPC Disposition',
  description: 'Determine a random disposition of an NPC.',
  diceFormula: '1d100',
  table: [
    { min: 1, max: 2, description: 'Shy' },
    { min: 3, max: 4, description: 'Aloof/Superior' },
    { min: 5, max: 8, description: 'Foolish/Idiotic' },
    { min: 9, max: 10, description: 'Cocky/Arrogant' },
    { min: 11, max: 12, description: 'Envious' },
    { min: 13, max: 14, description: 'Grumpy' },
    { min: 15, max: 16, description: 'Mischievous (good or evil)' },
    { min: 17, max: 20, description: 'Playful/Joking' },
    { min: 21, max: 22, description: 'Insane' },
    { min: 23, max: 24, description: 'Abrupt/Unpredictable' },
    { min: 25, max: 26, description: 'Melancholic/Airy' },
    { min: 27, max: 30, description: 'Romantic' },
    { min: 31, max: 32, description: 'Frustrated' },
    { min: 33, max: 34, description: 'Stressed' },
    { min: 35, max: 36, description: 'Weird' },
    { min: 37, max: 40, description: 'Serene/Peaceful' },
    { min: 41, max: 42, description: 'Cagy/Mysterious' },
    { min: 43, max: 44, description: 'Distracted' },
    { min: 45, max: 46, description: 'Sad' },
    { min: 47, max: 50, description: 'Single Minded' },
    { min: 51, max: 52, description: 'Angry' },
    { min: 53, max: 54, description: 'Blase' },
    { min: 55, max: 56, description: 'Joyous' },
    { min: 57, max: 60, description: 'Vengeful' },
    { min: 61, max: 62, description: 'Malicious' },
    { min: 63, max: 64, description: 'Afraid' },
    { min: 65, max: 66, description: 'Disgusted' },
    { min: 67, max: 70, description: 'Resignation' },
    { min: 71, max: 72, description: 'Nostalgic' },
    { min: 73, max: 74, description: 'Envious' },
    { min: 75, max: 76, description: 'Determined' },
    { min: 77, max: 80, description: 'Pity' },
    { min: 81, max: 82, description: 'Disdain' },
    { min: 83, max: 85, description: 'Hopelessness' },
    { min: 86, max: 88, description: 'Amused' },
    { min: 89, max: 92, description: 'Reckless' },
    { min: 93, max: 95, description: 'Lonely' },
    { min: 96, max: 98, description: 'Frivolous' },
    { min: 99, max: 100, description: 'Disoriented' },
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

export const mapConnections: RandomTable = {
  name: 'Map Connections',
  description: 'Random map connections',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 2, description: 'Crossroads' },
    { min: 3, max: 3, description: 'A T-intersection' },
    { min: 4, max: 4, description: 'A Straightaway' },
    { min: 5, max: 5, description: 'A curve/corner/turn' },
    { min: 6, max: 6, description: 'Special' },
  ]
};

export const wildness: RandomTable = {
  name: 'Wilderness',
  description: 'Random Wilderness areas',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Plains' },
    { min: 2, max: 2, description: 'Mountains' },
    { min: 3, max: 3, description: 'Settlement' },
    { min: 4, max: 4, description: 'Forest' },
    { min: 5, max: 5, description: 'Swamp' },
    { min: 6, max: 6, description: 'Special' },
  ]
};

export const outerSpace: RandomTable = {
  name: 'Outer Space',
  description: 'Random outer space areas',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Void' },
    { min: 2, max: 2, description: 'Planet' },
    { min: 3, max: 3, description: 'Star' },
    { min: 4, max: 4, description: 'Moon' },
    { min: 5, max: 5, description: 'Floater' },
    { min: 6, max: 6, description: 'Special' },
  ]
};

export const urbanDistricts: RandomTable = {
  name: 'Urban Districts',
  description: 'Random urban districts',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Business District' },
    { min: 2, max: 2, description: 'Residential District' },
    { min: 3, max: 3, description: 'Marketplace' },
    { min: 4, max: 4, description: 'Entertainment District' },
    { min: 5, max: 5, description: 'Government District' },
    { min: 6, max: 6, description: 'Special' },
  ]
};

export const environmentFeatures: RandomTable = {
  name: 'Environment Features',
  description: 'Random environment features',
  diceFormula: '1d12',
  table: [
    { min: 1, max: 4, description: 'Nothing Special' },
    { min: 5, max: 10, description: '1 Feature' },
    { min: 11, max: 11, description: '2 Features' },
    { min: 12, max: 12, description: 'Trapped Feature' },
  ]
};

export const weather: RandomTable = {
  name: 'Weather',
  description: 'Random weather',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Cold' },
    { min: 2, max: 4, description: 'Precipitation' },
    { min: 5, max: 8, description: 'Overcast' },
    { min: 9, max: 11, description: 'Clear' },
    { min: 12, max: 18, description: 'Warm' },
    { min: 19, max: 20, description: 'Hot' },
  ]
};