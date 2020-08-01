import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesLW {
  desertPalaceSouth = { //desertPalaceExitSouth
    x:111, y:1197,
    name: 'Desert Palace Entrance (South)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  }
  desertPalaceWest = { //desertPalaceExitWest
    x: 169, y: 1193,
    name: 'Desert Palace Entrance (West)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  desertPalaceNorth = { //desertPalaceExitNorth
    x: 111, y: 1154,
    name: 'Desert Palace Entrance (North)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  desertPalaceEast = { //desertPalaceExitEast
    x: 53, y: 1193,
    name: 'Desert Palace Entrance (East)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  }
  easternPalace = {//easternPalaceExit
    x: 1438, y: 585,
    name: 'Eastern Palace',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  };
  towerOfHera = { //towerOfHeraExit
    x: 841, y: 53,
    name: 'Tower of Hera',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop:true}
  };
  hyruleCastleSouth = { //hyruleCastleExitSouth
    x: 750, y: 662,
    name: 'Hyrule Castle Entrance (South)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  hyruleCastleWest = { //hyruleCastleExitWest
    x: 825, y: 584,
    name: 'Hyrule Castle Entrance (West)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleEast = { //hyruleCastleExitEast
    x: 674, y: 584,
    name: 'Hyrule Castle Entrance (East)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  agaTower = { //agaTowerExit
    x: 750, y: 602,
    name: 'Agahnim\'s Tower',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleSecretEntranceStairs = { //hyruleCastleSecretEntrance
    x: 826, y: 643,
    isHoleExit: true,
    region: 'dungeon',
    name: 'Hyrule Castle Secret Entrance Stairs',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, bombShop:true}
  };
  kakarikoWellCave = { //kakarikoWellExit
    x: 70, y: 644,
    isHoleExit: true,
    name: 'Kakariko Well Cave',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, blacksmith: true}
  };
  batCaveCave = { //batCaveExit
    x: 464, y: 837,
    isHoleExit: true,
    name: 'Bat Cave Cave',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, blacksmith: true}
  };
  elderHouseEast = { //elderHouseExitEast
    x: 258, y: 633,
    name: 'Elder House (East)',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith:true, twoDoorCave: true}
  };
  elderHouseWest = { //elderHouseExitWest
    x: 223, y: 633,
    name: 'Elder House (West)',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, twoDoorCave: true}
  };
  northFairyCave = { //northFairyCaveExit
    x: 1002, y: 415,
    isHoleExit: true,
    region: 'northwest',
    name: 'North Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{holeEntrance:true, holeTarget: true, blacksmith: true}
  };
  lostWoodsHideoutStump = { //lostWoodsHideoutExit
    x: 275, y: 227,
    isHoleExit: true,
    name: 'Lost Woods Hideout Stump',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true, holeEntrance:true}
  };
  lumberjackTreeCave = { //lumberjackTreeExit
    x: 498, y: 52,
    isHoleExit: true,
    name: 'Lumberjack Tree Cave',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance: true}
  };
  twoBrothersHouseEast = { //twoBrothersHouseExitEast
    x: 210, y: 1077,
    name: 'Two Brothers House (East)',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, blacksmith: true}
  };
  twoBrothersHouseWest = { //twoBrothersHouseExitWest
    x: 163, y: 1077,
    name: 'Two Brothers House (West)',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  sanctuary = { //sanctuaryExit
    x: 692, y: 406,
    name: 'Sanctuary',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance:true, }
  };
  oldManCaveWest = { //oldManCaveExitWest
    x: 532, y: 263,
    name: 'Old Man Cave (West)',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  }
  oldManCaveEast = { //oldManCaveExitEast
    x: 609, y: 286,
    name: 'Old Man Cave (East)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  oldManHouseBottom = { //oldManHouseExitBottom
    x: 674, y: 354,
    name: 'Old Man House (Bottom)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  oldManHouseTop = { //oldManHouseExitTop
    x: 802, y: 245,
    name: 'Old Man House (Top)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveEast = { //deathMtnReturnCaveExitEast
    x: 582, y: 209,
    name: 'Death Mountain Return Cave (East)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveWest = { //deathMtnReturnCaveExitWest
    x: 539, y: 233,
    name: 'Death Mountain Return Cave (West)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  spectacleRockCavePeak = { //spectacleRockCaveExitPeak
    x: 733, y: 156,
    name: 'Spectacle Rock Cave Peak',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCave = { //spectacleRockCaveExit
    x: 686, y: 209,
    name: 'Spectacle Rock Cave',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCaveBottom = { //spectacleRockCaveTop ?!?
    x: 733, y: 220,
    name: 'Spectacle Rock Cave (Bottom)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  };
  paradoxCaveBottom = { //paradoxCaveExitBottom
    x: 1295, y: 326,
    name: 'Paradox Cave (Bottom)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveMiddle = { //paradoxCaveExitMiddle
    x: 1283, y: 221,
    name: 'Paradox Cave (Middle)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveTop = { //paradoxCaveExitTop
    x: 1288, y: 98,
    name: 'Paradox Cave (Top)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveBottom = { //fairyAscensionCaveExitBottom
    x: 1230, y: 208,
    name: 'Fairy Ascension Cave (Bottom)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveTop = { //fairyAscensionCaveExitTop
    x: 1230, y: 173,
    name: 'Fairy Ascension Cave (Top)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  spiralCave = { //spiralCaveExit
    x: 1195, y: 140,
    name: 'Spiral Cave',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  };
  spiralCaveBottom = { //spiralCaveExitTop ?!?
    x: 1201, y: 197,
    name: 'Spiral Cave (Bottom)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  }
  waterfallOfWishing = {
    x: 1351, y: 206,
    isSingleCave: true,
    name: 'Waterfall of Wishing',
    region: 'northeast',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  }
  dam = {
    x: 703, y: 1405,
    isSingleCave: true,
    name: 'Dam',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  }
  blindsHideout = {
    x: 193, y: 632,
    isSingleCave: true,
    name: 'Blind\'s Hideout',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  };
  hyruleCastleSecretEntranceDrop = { //hyruleCastleSecretEntranceExit
    x: 893, y: 623,
    isHole:true,
    name: 'Hyrule Castle Secret Entrance Drop',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  bonkFairyLight = {
    x: 709, y: 978,
    isSingleCave: true,
    name: 'Bonk Fairy (Light)',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  };
  lakeHyliaFairy = {
    x: 1237, y: 973,
    isSingleCave: true,
    name: 'Lake Hylia Fairy',
    region: 'south',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true, blacksmith: true}
  }
  lightHypeFairy = {
    x: 896, y: 1171,
    isSingleCave: true,
    name: 'Light Hype Fairy',
    region: 'south',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  desertFairy = { //desertHealerFairy
    x: 416, y: 1342,
    isSingleCave: true,
    name: 'Desert Fairy',
    region: 'desert',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  kingsGrave = {
    x: 902, y: 445,
    isSingleCave: true,
    name: 'Kings Grave',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  chickenHut = {
    x: 146, y: 814,
    isSingleCave: true,
    name: 'Chicken Hut',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  aginahsCave = {
    x: 298, y: 1241,
    isSingleCave: true,
    name: 'Aginah\'s Cave',
    region: 'desert',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  sahasrahlasHut = {
    x: 1215, y: 683,
    isSingleCave: true,
    name: 'Sahasrahla\'s Hut',
    region: 'northeast',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  caveShopLakeHylia = {
    x: 1089, y: 1152,
    isSingleCave: true,
    name: 'Cave Shop (Lake Hylia)',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  capacityUpgrade = {
    x: 1189, y: 1282,
    isSingleCave: true,
    name: 'Capacity Upgrade',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, bombShop: true}
  }
  kakarikoWellDrop = { //kakarikoWellTop
    x: 35, y: 638,
    isHole:true,
    name: 'Kakariko Well Drop',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  blacksmithsHut = {
    x: 456, y: 801,
    isSingleCave: true,
    name: 'Blacksmith\'s Hut',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  batCaveDrop = { //batCaveRight
    x: 497, y: 843,
    isHole:true,
    name: 'Bat Cave Drop',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  sickKidsHouse = {
    x: 234, y: 808,
    isSingleCave: true,
    name: 'Sick Kid\'s House',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  northFairyCaveDrop = {
    x: 964, y: 465,
    isHole:true,
    name: 'North Fairy Cave Drop',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  }
  lostWoodsGamble = {
    x: 278, y: 24,
    isSingleCave: true,
    name: 'Lost Woods Gamble',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  };
  fortuneTellerLight = {
    x: 281, y: 484,
    isSingleCave: true,
    name: 'Fortune Teller (Light)',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyEast = {
    x: 310, y: 726,
    isSingleCave: true,
    name: 'Snitch Lady (East)',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyWest = {
    x: 76, y: 703,
    isSingleCave: true,
    name: 'Snitch Lady (West)',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bushCoveredHouse = {
    x: 304, y: 801,
    isSingleCave: true,
    name: 'Bush Covered House',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  tavernFront = {
    x: 240, y: 896,
    isSingleCave: true,
    name: 'Tavern (Front)',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lightWorldBombHut = {
    x: 41, y: 895,
    isSingleCave: true,
    name: 'Light World Bomb Hut',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoShop = {
    x: 163, y: 879,
    isSingleCave: true,
    name: 'Kakariko Shop',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lostWoodsHideoutDrop = { //lostWoodsHideoutTop
    x: 284, y: 196,
    isHole:true,
    name: 'Lost Woods Hideout Drop',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  };
  lumberjackTreeTree = { //lumberjackTreeTop
    isHole: true,
    x: 451, y: 111,
    name: 'Lumberjack Tree Tree',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  cave45 = {
    x: 399, y: 1240,
    isSingleCave: true,
    name: 'Cave 45',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  graveyardCave = {
    x: 855, y: 415,
    isSingleCave: true,
    name: 'Graveyard Cave',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  checkerboardCave = {
    x: 263, y: 1165,
    isSingleCave: true,
    name: 'Checkerboard Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  miniMoldormCave = {
    x: 978, y: 1412,
    isSingleCave: true,
    name: 'Mini Moldorm Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  longFairyCave = {
    x:1471, y:1053,
    isSingleCave: true,
    name: 'Long Fairy Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  goodBeeCave = {
    x:1371, y:1160,
    isSingleCave: true,
    name: 'Good Bee Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  twentyRupeeCave = {
    x:1353, y:1177,
    isSingleCave: true,
    name: '20 Rupee Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  fiftyRupeeCave = {
    x:468, y:1434,
    isSingleCave: true,
    name: '50 Rupee Cave',
    region: 'desert',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  iceRodCave = {
    x:1342, y:1160,
    isSingleCave: true,
    name: 'Ice Rod Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bonkRockCave = {
    x:710, y:979,
    isSingleCave: true,
    name: 'Bonk Rock Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  library = {
    x:243, y:990,
    isSingleCave: true,
    name: 'Library',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  potionShop = {
    x:1201, y:502,
    isSingleCave: true,
    name: 'Potion Shop',
    region: 'northeast',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  sanctuaryGrave = {
    x:778, y:439,
    isHole: true,
    name: 'Sanctuary Grave',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  hookshotFairy = {
    x:1266, y:221,
    isSingleCave: true,
    name: 'Hookshot Fairy',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  lumberjackHouse = {
    x:503, y:94,
    isSingleCave: true,
    name: 'Lumberjack House',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lakeHyliaFortuneTeller = {
    x:973, y:1206,
    isSingleCave: true,
    name: 'Lake Hylia Fortune Teller',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoGambleGame = {
    x:322, y:1054,
    isSingleCave: true,
    name: 'Kakariko Gamble Game',
    region: 'kakariko',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  mimicCave = {
    x:1266, y:140,
    isSingleCave: true,
    name: 'Mimic Cave',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  sewerDrop = { //TODO: may have special handling
    x: -120, y: -120,
    isHoleExit: true,
    name: 'Sewer Drop',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }
  // tavern = { //TODO: may have special handling
  //   x: -20, y: -20,
  //   name: 'Tavern',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit:{}
  // }
  // tavernNorth = { //this always links to tavern. here for completeness
  //   x: -20, y: -20,
  //   name: 'Tavern North',
  //   direction: CEntrance.DIRECTION.ENTRANCE,
  //   limits: {fixedLocation: true}
  // };
  // desertPalaceExitSouth = {
  //   x: -20, y: -20,
  //   name: 'Desert Palace Exit (South)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // desertPalaceExitWest = {
  //   x: -20, y: -20,
  //   name: 'Desert Palace Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // };
  // desertPalaceExitEast = {
  //   x: -20, y: -20,
  //   name: 'Desert Palace Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // desertPalaceExitNorth = {
  //   x: -20, y: -20,
  //   name: 'Desert Palace Exit (North)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // easternPalaceExit = {
  //   x: -20, y: -20,
  //   name: 'Eastern Palace Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // towerOfHeraExit = {
  //   x: -20, y: -20,
  //   name: 'Tower of Hera Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // hyruleCastleExitSouth = {
  //   x: -20, y: -20,
  //   name: 'Hyrule Castle Exit (South)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // hyruleCastleExitWest = {
  //   x: -20, y: -20,
  //   name: 'Hyrule Castle Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // hyruleCastleExitEast = {
  //   x: -20, y: -20,
  //   name: 'Hyrule Castle Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // agaTowerExit = {
  //   x: -20, y: -20,
  //   name: 'Agahnims Tower Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // hyruleCastleSecretEntranceExit = {
  //   x: -20, y: -20,
  //   name: 'Hyrule Castle Secret Entrance Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeExit:true}
  // }
  // kakarikoWellExit = {
  //   x: -20, y: -20,
  //   name: 'Kakariko Well Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeExit:true}
  // }
  // batCaveExit = {
  //   x: -20, y: -20,
  //   name: 'Bat Cave Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeExit:true}
  // }
  // elderHouseExitEast = {
  //   x: -20, y: -20,
  //   name: 'Elder House Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // elderHouseExitWest = {
  //   x: -20, y: -20,
  //   name: 'Elder House Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // northFairyCaveExit = {
  //   x: -20, y: -20,
  //   name: 'North Fairy Cave Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeExit:true}
  // }
  // lostWoodsHideoutExit = {
  //   x: -20, y: -20,
  //   name: 'Lost Woods Hideout Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeExit:true}
  // }
  // lumberjackTreeExit = {
  //   x: -20, y: -20,
  //   name: 'Lumberjack Tree Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeExit:true}
  // }
  // twoBrothersHouseExitEast = {
  //   x: -20, y: -20,
  //   name: 'Two Brothers House Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // twoBrothersHouseExitWest = {
  //   x: -20, y: -20,
  //   name: 'Two Brothers House Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // sanctuaryExit = { //TODO: this seems to have special properties.
  //   x: -20, y: -20,
  //   name: 'Sanctuary Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // oldManCaveExitEast = {
  //   x: -20, y: -20,
  //   name: 'Old Man Cave Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{oldManExit: true}
  // }
  // oldManCaveExitWest = {
  //   x: -20, y: -20,
  //   name: 'Old Man Cave Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{oldManExit: true}
  // }
  // oldManHouseExitBottom = {//TODO: has handling to insure this is exits to LW only.
  //   x: -20, y: -20,
  //   name: 'Old Man House Exit (Bottom)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{lwOnlyExit: true}
  // }
  // oldManHouseExitTop = {//TODO: has handling to insure this is exits to LW only.
  //   x: -20, y: -20,
  //   name: 'Old Man House Exit (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{lwOnlyExit: true}
  // }
  // deathMtnReturnCaveExitWest = {
  //   x: -20, y: -20,
  //   name: 'Death Mountain Return Cave Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // deathMtnReturnCaveExitEast = {
  //   x: -20, y: -20,
  //   name: 'Death Mountain Return Cave Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // spectacleRockCaveExit = {
  //   x: -20, y: -20,
  //   name: 'Spectacle Rock Cave Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{threeCaveExit: true}
  // }
  // spectacleRockCaveExitPeak = {
  //   x: -20, y: -20,
  //   name: 'Spectacle Rock Cave Exit (Peak)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{threeCaveExit: true}
  // }
  // spectacleRockCaveExitTop = {
  //   x: -20, y: -20,
  //   name: 'Spectacle Rock Cave Exit (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{threeCaveExit: true}
  // }
  // paradoxCaveExitBottom = {
  //   x: -20, y: -20,
  //   name: 'Paradox Cave Exit (Bottom)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{threeCaveExit: true}
  // }
  // paradoxCaveExitMiddle = {
  //   x: -20, y: -20,
  //   name: 'Paradox Cave Exit (Middle)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{threeCaveExit: true}
  // }
  // paradoxCaveExitTop = {
  //   x: -20, y: -20,
  //   name: 'Paradox Cave Exit (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{threeCaveExit: true}
  // }
  // fairyAscensionCaveExitBottom = {
  //   x: -20, y: -20,
  //   name: 'Fairy Ascension Cave Exit (Bottom)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // fairyAscensionCaveExitTop = {
  //   x: -20, y: -20,
  //   name: 'Fairy Ascension Cave Exit (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // spiralCaveExit = {
  //   x: -20, y: -20,
  //   name: 'Spiral Cave Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // spiralCaveExitTop = {
  //   x: -20, y: -20,
  //   name: 'Spiral Cave Exit (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // desertHealerFairy = {
  //   x: -20, y: -20,
  //   name: 'Desert Healer Fairy',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{singleCave: true}
  // }
  // kakarikoWellTop = {
  //   x: -20, y: -20,
  //   name: 'Kakariko Well (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeTarget: true}
  // }
  // hyruleCastleSecretEntrance = {
  //   x: -20, y: -20,
  //   name: 'Hyrule Castle Secret Entrance',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeTarget: true}
  // }
  // batCaveRight = {
  //   x: -20, y: -20,
  //   name: 'Bat Cave (Right)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeTarget: true}
  // }
  // lostWoodsHideoutTop = {
  //   x: -20, y: -20,
  //   name: 'Lost Woods Hideout (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeTarget: true}
  // }
  // lumberjackTreeTop = {
  //   x: -20, y: -20,
  //   name: 'Lumberjack Tree (top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{holeTarget: true}
  // }
}

