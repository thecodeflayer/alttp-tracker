import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesLW {
  desertPalaceSouth = { //desertPalaceExitSouth
    x:111, y:1270,
    name: 'Desert Palace Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  }
  desertPalaceWest = { //desertPalaceExitWest
    x: -20, y: -20,
    name: 'Desert Palace Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  desertPalaceNorth = { //desertPalaceExitNorth
    x: -20, y: -20,
    name: 'Desert Palace Entrance (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  desertPalaceEast = { //desertPalaceExitEast
    x: -20, y: -20,
    name: 'Desert Palace Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  }
  easternPalace = {//easternPalaceExit
    x: -20, y: -20,
    name: 'Eastern Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  };
  towerOfHera = { //towerOfHeraExit
    x: -20, y: -20,
    name: 'Tower of Hera',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop:true}
  };
  hyruleCastleSouth = { //hyruleCastleExitSouth
    x: -20, y: -20,
    name: 'Hyrule Castle Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  hyruleCastleWest = { //hyruleCastleExitWest
    x: -20, y: -20,
    name: 'Hyrule Castle Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleEast = { //hyruleCastleExitEast
    x: -20, y: -20,
    name: 'Hyrule Castle Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  agaTower = { //agaTowerExit
    x: -20, y: -20,
    name: 'Agahnim\'s Tower',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleSecretEntranceStairs = { //hyruleCastleSecretEntrance
    x: -20, y: -20,
    isHoleExit: true,
    name: 'Hyrule Castle Secret Entrance Stairs',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, bombShop:true}
  };
  kakarikoWellCave = { //kakarikoWellExit
    x: -20, y: -20,
    isHoleExit: true,
    name: 'Kakariko Well Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, blacksmith: true}
  };
  batCaveCave = { //batCaveExit
    x: -20, y: -20,
    isHoleExit: true,
    name: 'Bat Cave Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, blacksmith: true}
  };
  elderHouseEast = { //elderHouseExitEast
    x: -20, y: -20,
    name: 'Elder House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith:true, twoDoorCave: true}
  };
  elderHouseWest = { //elderHouseExitWest
    x: -20, y: -20,
    name: 'Elder House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, twoDoorCave: true}
  };
  northFairyCave = { //northFairyCaveExit
    x: -20, y: -20,
    isHoleExit: true,
    name: 'North Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{holeEntrance:true, holeTarget: true, blacksmith: true}
  };
  lostWoodsHideoutStump = { //lostWoodsHideoutExit
    x: -20, y: -20,
    isHoleExit: true,
    name: 'Lost Woods Hideout Stump',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true, holeEntrance:true}
  };
  lumberjackTreeCave = { //lumberjackTreeExit
    x: -20, y: -20,
    isHoleExit: true,
    name: 'Lumberjack Tree Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance: true}
  };
  twoBrothersHouseEast = { //twoBrothersHouseExitEast
    x: -20, y: -20,
    name: 'Two Brothers House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, blacksmith: true}
  };
  twoBrothersHouseWest = { //twoBrothersHouseExitWest
    x: -20, y: -20,
    name: 'Two Brothers House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  sanctuary = { //sanctuaryExit
    x: -20, y: -20,
    name: 'Sanctuary',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance:true, }
  };
  oldManCaveWest = { //oldManCaveExitWest
    x: -20, y: -20,
    name: 'Old Man Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  }
  oldManCaveEast = { //oldManCaveExitEast
    x: -20, y: -20,
    name: 'Old Man Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  oldManHouseBottom = { //oldManHouseExitBottom
    x: -20, y: -20,
    name: 'Old Man House (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  oldManHouseTop = { //oldManHouseExitTop
    x: -20, y: -20,
    name: 'Old Man House (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveEast = { //deathMtnReturnCaveExitEast
    x: -20, y: -20,
    name: 'Death Mountain Return Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveWest = { //deathMtnReturnCaveExitWest
    x: -20, y: -20,
    name: 'Death Mountain Return Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  spectacleRockCavePeak = { //spectacleRockCaveExitPeak
    x: -20, y: -20,
    name: 'Spectacle Rock Cave Peak',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCave = { //spectacleRockCaveExit
    x: -20, y: -20,
    name: 'Spectacle Rock Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCaveBottom = { //spectacleRockCaveTop ?!?
    x: -20, y: -20,
    name: 'Spectacle Rock Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  };
  paradoxCaveBottom = { //paradoxCaveExitBottom
    x: -20, y: -20,
    name: 'Paradox Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveMiddle = { //paradoxCaveExitMiddle
    x: -20, y: -20,
    name: 'Paradox Cave (Middle)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveTop = { //paradoxCaveExitTop
    x: -20, y: -20,
    name: 'Paradox Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveBottom = { //fairyAscensionCaveExitBottom
    x: -20, y: -20,
    name: 'Fairy Ascension Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveTop = { //fairyAscensionCaveExitTop
    x: -20, y: -20,
    name: 'Fairy Ascension Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  spiralCave = { //spiralCaveExit
    x: -20, y: -20,
    name: 'Spiral Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  };
  spiralCaveBottom = { //spiralCaveExitTop ?!?
    x: -20, y: -20,
    name: 'Spiral Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  }
  waterfallOfWishing = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Waterfall of Wishing',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  }
  dam = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dam',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  }
  blindsHideout = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Blind\'s Hideout',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  };
  hyruleCastleSecretEntranceDrop = { //hyruleCastleSecretEntranceExit
    x: -20, y: -20,
    isHole:true,
    name: 'Hyrule Castle Secret Entrance Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  bonkFairyLight = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Bonk Fairy (Light)',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  };
  lakeHyliaFairy = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Lake Hylia Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true, blacksmith: true}
  }
  lightHypeFairy = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Light Hype Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  desertFairy = { //desertHealerFairy
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Desert Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  kingsGrave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Kings Grave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  chickenHut = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Chicken Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  aginahsCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Aginah\'s Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  sahasrahlasHut = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Sahasrahla\'s Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  caveShopLakeHylia = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Cave Shop (Lake Hylia)',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  capacityUpgrade = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Capacity Upgrade',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, bombShop: true}
  }
  kakarikoWellDrop = { //kakarikoWellTop
    x: -20, y: -20,
    isHole:true,
    name: 'Kakariko Well Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  blacksmithsHut = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Blacksmith\'s Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  batCaveDrop = { //batCaveRight
    x: -20, y: -20,
    isHole:true,
    name: 'Bat Cave Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  sickKidsHouse = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Sick Kid\'s House',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  northFairyCaveDrop = {
    x: -20, y: -20,
    isHole:true,
    name: 'North Fairy Cave Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  }
  lostWoodsGamble = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Lost Woods Gamble',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  };
  fortuneTellerLight = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Fortune Teller (Light)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyEast = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Snitch Lady (East)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyWest = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Snitch Lady (West)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bushCoveredHouse = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Bush Covered House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  tavernFront = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Tavern (Front)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lightWorldBombHut = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Light World Bomb Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Kakariko Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lostWoodsHideoutDrop = { //lostWoodsHideoutTop
    x: -20, y: -20,
    isHole:true,
    name: 'Lost Woods Hideout Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  };
  lumberjackTreeTree = { //lumberjackTreeTop
    isHole: true,
    x: -20, y: -20,
    name: 'Lumberjack Tree Tree',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  cave45 = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Cave 45',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  graveyardCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Graveyard Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  checkerboardCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Checkerboard Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  miniMoldormCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Mini Moldorm Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  longFairyCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Long Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  goodBeeCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Good Bee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  twentyRupeeCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: '20 Rupee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  fiftyRupeeCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: '50 Rupee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  iceRodCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Ice Rod Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bonkRockCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Bonk Rock Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  library = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Library',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  potionShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Potion Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  sanctuaryGrave = {
    x: -20, y: -20,
    isHole: true,
    name: 'Sanctuary Grave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  hookshotFairy = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Hookshot Fairy',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  lumberjackHouse = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Lumberjack House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lakeHyliaFortuneTeller = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Lake Hylia Fortune Teller',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoGambleGame = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Kakariko Gamble Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  sewerDrop = { //TODO: may have special handling
    x: -20, y: -20,
    isHoleExit: true,
    name: 'Sewer Drop',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }
  tavernSouth = { //TODO: added manually. Not sure if this is truly single cave.
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Tavern South',
    direction: CEntrance.DIRECTION.BOTH,
    limit:{}
  };
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

