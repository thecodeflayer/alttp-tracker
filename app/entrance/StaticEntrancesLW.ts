import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesLW {
  desertPalaceEntranceSouth = {
    name: 'Desert Palace Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  }
  desertPalaceEntranceWest = {
    name: 'Desert Palace Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  desertPalaceEntranceNorth = {
    name: 'Desert Palace Entrance (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  desertPalaceEntranceEast = {
    name: 'Desert Palace Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  }
  easternPalace = {
    name: 'Eastern Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  };
  towerOfHera = {
    name: 'Tower of Hera',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop:true}
  };
  hyruleCastleEntranceSouth = {
    name: 'Hyrule Castle Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  hyruleCastleEntranceWest = {
    name: 'Hyrule Castle Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleEntranceEast = {
    name: 'Hyrule Castle Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  agaTower = {
    name: 'Agahnim\'s Tower',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleSecretEntranceStairs = {
    name: 'Hyrule Castle Secret Entrance Stairs',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, bombShop:true}
  };
  kakarikoWellCave = {
    name: 'Kakariko Well Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, blacksmith: true}
  };
  batCaveCave = {
    name: 'Bat Cave Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, blacksmith: true}
  };
  elderHouseEast = {
    name: 'Elder House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith:true, twoDoorCave: true}
  };
  elderHouseWest = {
    name: 'Elder House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, twoDoorCave: true}
  };
  northFairyCave = {
    name: 'North Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{holeEntrance:true, holeTarget: true, blacksmith: true}
  };
  lostWoodsHideoutStump = {
    name: 'Lost Woods Hideout Stump',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true, holeEntrance:true}
  };
  lumberjackTreeCave = {
    name: 'Lumberjack Tree Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance: true}
  };
  twoBrothersHouseEast = {
    name: 'Two Brothers House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, blacksmith: true}
  };
  twoBrothersHouseWest = {
    name: 'Two Brothers House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  sanctuary = {
    name: 'Sanctuary',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance:true, }
  };
  oldManCaveWest = {
    name: 'Old Man Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  }
  oldManCaveEast = {
    name: 'Old Man Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  oldManHouseBottom = {
    name: 'Old Man House (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  oldManHouseTop = {
    name: 'Old Man House (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveEast = {
    name: 'Death Mountain Return Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveWest = {
    name: 'Death Mountain Return Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  spectacleRockCavePeak = {
    name: 'Spectacle Rock Cave Peak',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCave = {
    name: 'Spectacle Rock Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCaveBottom = {
    name: 'Spectacle Rock Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  };
  paradoxCaveBottom = {
    name: 'Paradox Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveMiddle = {
    name: 'Paradox Cave (Middle)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveTop = {
    name: 'Paradox Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveBottom = {
    name: 'Fairy Ascension Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveTop = {
    name: 'Fairy Ascension Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  spiralCave = {
    name: 'Spiral Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  };
  spiralCaveBottom = {
    name: 'Spiral Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  }
  waterfallOfWishing = {
    name: 'Waterfall of Wishing',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  }
  dam = {
    name: 'Dam',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  }
  blindsHideout = {
    name: 'Blind\'s Hideout',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  };
  hyruleCastleSecretEntranceDrop = {
    name: 'Hyrule Castle Secret Entrance Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  bonkFairyLight = {
    name: 'Bonk Fairy (Light)',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  };
  lakeHyliaFairy = {
    name: 'Lake Hylia Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true, blacksmith: true}
  }
  lightHypeFairy = {
    name: 'Light Hype Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  desertFairy = {
    name: 'Desert Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  kingsGrave = {
    name: 'Kings Grave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  tavernNorth = { //this always links to tavern. here for completeness
    name: 'Tavern North',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {fixedLocation: true}
  };
  chickenHut = {
    name: 'Chicken Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  aginahsCave = {
    name: 'Aginah\'s Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  sahasrahlasHut = {
    name: 'Sahasrahla\'s Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  caveShopLakeHylia = {
    name: 'Cave Shop (Lake Hylia)',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  capacityUpgrade = {
    name: 'Capacity Upgrade',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, bombShop: true}
  }
  kakarikoWellDrop = {
    name: 'Kakariko Well Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  blacksmithsHut = {
    name: 'Blacksmith\'s Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  batCaveDrop = {
    name: 'Bat Cave Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  sickKidsHouse = {
    name: 'Sick Kid\'s House',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  northFairyCaveDrop = {
    name: 'North Fairy Cave Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  }
  lostWoodsGamble = {
    name: 'Lost Woods Gamble',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  };
  fortuneTellerLight = {
    name: 'Fortune Teller (Light)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyEast = {
    name: 'Snitch Lady (East)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyWest = {
    name: 'Snitch Lady (West)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bushCoveredHouse = {
    name: 'Bush Covered House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  tavernFront = {
    name: 'Tavern (Front)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lightWorldBombHut = {
    name: 'Light World Bomb Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoShop = {
    name: 'Kakariko Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lostWoodsHideoutDrop = {
    name: 'Lost Woods Hideout Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  };
  lumberjackTreeTree = {
    name: 'Lumberjack Tree Tree',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  cave45 = {
    name: 'Cave 45',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  graveyardCave = {
    name: 'Graveyard Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  checkerboardCave = {
    name: 'Checkerboard Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  miniMoldormCave = {
    name: 'Mini Moldorm Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  longFairyCave = {
    name: 'Long Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  goodBeeCave = {
    name: 'Good Bee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  twentyRupeeCave = {
    name: '20 Rupee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  fiftyRupeeCave = {
    name: '50 Rupee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  iceRodCave = {
    name: 'Ice Rod Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bonkRockCave = {
    name: 'Bonk Rock Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  library = {
    name: 'Library',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  potionShop = {
    name: 'Potion Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  sanctuaryGrave = {
    name: 'Sanctuary Grave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  hookshotFairy = {
    name: 'Hookshot Fairy',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  lumberjackHouse = {
    name: 'Lumberjack House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lakeHyliaFortuneTeller = {
    name: 'Lake Hylia Fortune Teller',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoGambleGame = {
    name: 'Kakariko Gamble Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  desertPalaceExitSouth = {
    name: 'Desert Palace Exit (South)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  desertPalaceExitWest = {
    name: 'Desert Palace Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  };
  desertPalaceExitEast = {
    name: 'Desert Palace Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  desertPalaceExitNorth = {
    name: 'Desert Palace Exit (North)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  easternPalaceExit = {
    name: 'Eastern Palace Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  towerOfHeraExit = {
    name: 'Tower of Hera Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }


}

const Direction = {
  ENTRANCE: 'entrance',
  EXIT: 'exit',
  BOTH: 'both'
};

