import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesLW {
  desertPalaceEntranceSouth = {
    x:111, y:1270,
    name: 'Desert Palace Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  }
  desertPalaceEntranceWest = {
    x: -20, y: -20,
    name: 'Desert Palace Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  desertPalaceEntranceNorth = {
    x: -20, y: -20,
    name: 'Desert Palace Entrance (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  desertPalaceEntranceEast = {
    x: -20, y: -20,
    name: 'Desert Palace Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  }
  easternPalace = {
    x: -20, y: -20,
    name: 'Eastern Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  };
  towerOfHera = {
    x: -20, y: -20,
    name: 'Tower of Hera',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop:true}
  };
  hyruleCastleEntranceSouth = {
    x: -20, y: -20,
    name: 'Hyrule Castle Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  hyruleCastleEntranceWest = {
    x: -20, y: -20,
    name: 'Hyrule Castle Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleEntranceEast = {
    x: -20, y: -20,
    name: 'Hyrule Castle Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  agaTower = {
    x: -20, y: -20,
    name: 'Agahnim\'s Tower',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleSecretEntranceStairs = {
    x: -20, y: -20,
    name: 'Hyrule Castle Secret Entrance Stairs',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, bombShop:true}
  };
  kakarikoWellCave = {
    x: -20, y: -20,
    name: 'Kakariko Well Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, blacksmith: true}
  };
  batCaveCave = {
    x: -20, y: -20,
    name: 'Bat Cave Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, blacksmith: true}
  };
  elderHouseEast = {
    x: -20, y: -20,
    name: 'Elder House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith:true, twoDoorCave: true}
  };
  elderHouseWest = {
    x: -20, y: -20,
    name: 'Elder House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, twoDoorCave: true}
  };
  northFairyCave = {
    x: -20, y: -20,
    name: 'North Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{holeEntrance:true, holeTarget: true, blacksmith: true}
  };
  lostWoodsHideoutStump = {
    x: -20, y: -20,
    name: 'Lost Woods Hideout Stump',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true, holeEntrance:true}
  };
  lumberjackTreeCave = {
    x: -20, y: -20,
    name: 'Lumberjack Tree Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance: true}
  };
  twoBrothersHouseEast = {
    x: -20, y: -20,
    name: 'Two Brothers House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, blacksmith: true}
  };
  twoBrothersHouseWest = {
    x: -20, y: -20,
    name: 'Two Brothers House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  sanctuary = {
    x: -20, y: -20,
    name: 'Sanctuary',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance:true, }
  };
  oldManCaveWest = {
    x: -20, y: -20,
    name: 'Old Man Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  }
  oldManCaveEast = {
    x: -20, y: -20,
    name: 'Old Man Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  oldManHouseBottom = {
    x: -20, y: -20,
    name: 'Old Man House (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  oldManHouseTop = {
    x: -20, y: -20,
    name: 'Old Man House (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveEast = {
    x: -20, y: -20,
    name: 'Death Mountain Return Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveWest = {
    x: -20, y: -20,
    name: 'Death Mountain Return Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  spectacleRockCavePeak = {
    x: -20, y: -20,
    name: 'Spectacle Rock Cave Peak',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCave = {
    x: -20, y: -20,
    name: 'Spectacle Rock Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCaveBottom = {
    x: -20, y: -20,
    name: 'Spectacle Rock Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  };
  paradoxCaveBottom = {
    x: -20, y: -20,
    name: 'Paradox Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveMiddle = {
    x: -20, y: -20,
    name: 'Paradox Cave (Middle)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveTop = {
    x: -20, y: -20,
    name: 'Paradox Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveBottom = {
    x: -20, y: -20,
    name: 'Fairy Ascension Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveTop = {
    x: -20, y: -20,
    name: 'Fairy Ascension Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  spiralCave = {
    x: -20, y: -20,
    name: 'Spiral Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  };
  spiralCaveBottom = {
    x: -20, y: -20,
    name: 'Spiral Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  }
  waterfallOfWishing = {
    x: -20, y: -20,
    name: 'Waterfall of Wishing',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  }
  dam = {
    x: -20, y: -20,
    name: 'Dam',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  }
  blindsHideout = {
    x: -20, y: -20,
    name: 'Blind\'s Hideout',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{blacksmith: true, singleCave: true}
  };
  hyruleCastleSecretEntranceDrop = {
    x: -20, y: -20,
    name: 'Hyrule Castle Secret Entrance Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  bonkFairyLight = {
    x: -20, y: -20,
    name: 'Bonk Fairy (Light)',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  };
  lakeHyliaFairy = {
    x: -20, y: -20,
    name: 'Lake Hylia Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true, blacksmith: true}
  }
  lightHypeFairy = {
    x: -20, y: -20,
    name: 'Light Hype Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  desertFairy = {
    x: -20, y: -20,
    name: 'Desert Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, blacksmith: true}
  }
  kingsGrave = {
    x: -20, y: -20,
    name: 'Kings Grave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  tavernNorth = { //this always links to tavern. here for completeness
    x: -20, y: -20,
    name: 'Tavern North',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {fixedLocation: true}
  };
  chickenHut = {
    x: -20, y: -20,
    name: 'Chicken Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  aginahsCave = {
    x: -20, y: -20,
    name: 'Aginah\'s Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  sahasrahlasHut = {
    x: -20, y: -20,
    name: 'Sahasrahla\'s Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  caveShopLakeHylia = {
    x: -20, y: -20,
    name: 'Cave Shop (Lake Hylia)',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  }
  capacityUpgrade = {
    x: -20, y: -20,
    name: 'Capacity Upgrade',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, bombShop: true}
  }
  kakarikoWellDrop = {
    x: -20, y: -20,
    name: 'Kakariko Well Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  blacksmithsHut = {
    x: -20, y: -20,
    name: 'Blacksmith\'s Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  batCaveDrop = {
    x: -20, y: -20,
    name: 'Bat Cave Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  };
  sickKidsHouse = {
    x: -20, y: -20,
    name: 'Sick Kid\'s House',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{singleCave: true, blacksmith: true}
  };
  northFairyCaveDrop = {
    x: -20, y: -20,
    name: 'North Fairy Cave Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeDrop: true}
  }
  lostWoodsGamble = {
    x: -20, y: -20,
    name: 'Lost Woods Gamble',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  };
  fortuneTellerLight = {
    x: -20, y: -20,
    name: 'Fortune Teller (Light)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyEast = {
    x: -20, y: -20,
    name: 'Snitch Lady (East)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyWest = {
    x: -20, y: -20,
    name: 'Snitch Lady (West)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bushCoveredHouse = {
    x: -20, y: -20,
    name: 'Bush Covered House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  tavernFront = {
    x: -20, y: -20,
    name: 'Tavern (Front)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lightWorldBombHut = {
    x: -20, y: -20,
    name: 'Light World Bomb Hut',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoShop = {
    x: -20, y: -20,
    name: 'Kakariko Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lostWoodsHideoutDrop = {
    x: -20, y: -20,
    name: 'Lost Woods Hideout Drop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  };
  lumberjackTreeTree = {
    x: -20, y: -20,
    name: 'Lumberjack Tree Tree',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  cave45 = {
    x: -20, y: -20,
    name: 'Cave 45',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  graveyardCave = {
    x: -20, y: -20,
    name: 'Graveyard Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  checkerboardCave = {
    x: -20, y: -20,
    name: 'Checkerboard Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  miniMoldormCave = {
    x: -20, y: -20,
    name: 'Mini Moldorm Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  longFairyCave = {
    x: -20, y: -20,
    name: 'Long Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  goodBeeCave = {
    x: -20, y: -20,
    name: 'Good Bee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  twentyRupeeCave = {
    x: -20, y: -20,
    name: '20 Rupee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  fiftyRupeeCave = {
    x: -20, y: -20,
    name: '50 Rupee Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  iceRodCave = {
    x: -20, y: -20,
    name: 'Ice Rod Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  bonkRockCave = {
    x: -20, y: -20,
    name: 'Bonk Rock Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  library = {
    x: -20, y: -20,
    name: 'Library',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  potionShop = {
    x: -20, y: -20,
    name: 'Potion Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  sanctuaryGrave = {
    x: -20, y: -20,
    name: 'Sanctuary Grave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {holeDrop: true}
  }
  hookshotFairy = {
    x: -20, y: -20,
    name: 'Hookshot Fairy',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  lumberjackHouse = {
    x: -20, y: -20,
    name: 'Lumberjack House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  lakeHyliaFortuneTeller = {
    x: -20, y: -20,
    name: 'Lake Hylia Fortune Teller',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoGambleGame = {
    x: -20, y: -20,
    name: 'Kakariko Gamble Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, blacksmith: true}
  }
  desertPalaceExitSouth = {
    x: -20, y: -20,
    name: 'Desert Palace Exit (South)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  desertPalaceExitWest = {
    x: -20, y: -20,
    name: 'Desert Palace Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  };
  desertPalaceExitEast = {
    x: -20, y: -20,
    name: 'Desert Palace Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  desertPalaceExitNorth = {
    x: -20, y: -20,
    name: 'Desert Palace Exit (North)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  easternPalaceExit = {
    x: -20, y: -20,
    name: 'Eastern Palace Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  towerOfHeraExit = {
    x: -20, y: -20,
    name: 'Tower of Hera Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hyruleCastleExitSouth = {
    x: -20, y: -20,
    name: 'Hyrule Castle Exit (South)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hyruleCastleExitWest = {
    x: -20, y: -20,
    name: 'Hyrule Castle Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hyruleCastleExitEast = {
    x: -20, y: -20,
    name: 'Hyrule Castle Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  agaTowerExit = {
    x: -20, y: -20,
    name: 'Agahnims Tower Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  icePalaceExit = {
    x: -20, y: -20,
    name: 'Ice Palace Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  miseryMireExit = {
    x: -20, y: -20,
    name: 'Misery Mire Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hyruleCastleSecretEntranceExit = {
    x: -20, y: -20,
    name: 'Hyrule Castle Secret Entrance Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeExit:true}
  }
  kakarikoWellExit = {
    x: -20, y: -20,
    name: 'Kakariko Well Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeExit:true}
  }
  batCaveExit = {
    x: -20, y: -20,
    name: 'Bat Cave Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeExit:true}
  }
  elderHouseExitEast = {
    x: -20, y: -20,
    name: 'Elder House Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  elderHouseExitWest = {
    x: -20, y: -20,
    name: 'Elder House Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  northFairyCaveExit = {
    x: -20, y: -20,
    name: 'North Fairy Cave Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeExit:true}
  }
  lostWoodsHideoutExit = {
    x: -20, y: -20,
    name: 'Lost Woods Hideout Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeExit:true}
  }
  lumberjackTreeExit = {
    x: -20, y: -20,
    name: 'Lumberjack Tree Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeExit:true}
  }
  twoBrothersHouseExitEast = {
    x: -20, y: -20,
    name: 'Two Brothers House Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  twoBrothersHouseExitWest = {
    x: -20, y: -20,
    name: 'Two Brothers House Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  sanctuaryExit = { //TODO: this seems to have special properties.
    x: -20, y: -20,
    name: 'Sanctuary Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  oldManCaveExitEast = {
    x: -20, y: -20,
    name: 'Old Man Cave Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{oldManExit: true}
  }
  oldManCaveExitWest = {
    x: -20, y: -20,
    name: 'Old Man Cave Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{oldManExit: true}
  }
  oldManHouseExitBottom = {//TODO: has handling to insure this is exits to LW only.
    x: -20, y: -20,
    name: 'Old Man House Exit (Bottom)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{lwOnlyExit: true}
  }
  oldManHouseExitTop = {//TODO: has handling to insure this is exits to LW only.
    x: -20, y: -20,
    name: 'Old Man House Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{lwOnlyExit: true}
  }
  deathMtnReturnCaveExitWest = {
    x: -20, y: -20,
    name: 'Death Mountain Return Cave Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  deathMtnReturnCaveExitEast = {
    x: -20, y: -20,
    name: 'Death Mountain Return Cave Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  spectacleRockCaveExit = {
    x: -20, y: -20,
    name: 'Spectacle Rock Cave Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{threeCaveExit: true}
  }
  spectacleRockCaveExitPeak = {
    x: -20, y: -20,
    name: 'Spectacle Rock Cave Exit (Peak)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{threeCaveExit: true}
  }
  spectacleRockCaveExitTop = {
    x: -20, y: -20,
    name: 'Spectacle Rock Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{threeCaveExit: true}
  }
  paradoxCaveExitBottom = {
    x: -20, y: -20,
    name: 'Paradox Cave Exit (Bottom)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{threeCaveExit: true}
  }
  paradoxCaveExitMiddle = {
    x: -20, y: -20,
    name: 'Paradox Cave Exit (Middle)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{threeCaveExit: true}
  }
  paradoxCaveExitTop = {
    x: -20, y: -20,
    name: 'Paradox Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{threeCaveExit: true}
  }
  fairyAscensionCaveExitBottom = {
    x: -20, y: -20,
    name: 'Fairy Ascension Cave Exit (Bottom)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  fairyAscensionCaveExitTop = {
    x: -20, y: -20,
    name: 'Fairy Ascension Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  spiralCaveExit = {
    x: -20, y: -20,
    name: 'Spiral Cave Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  spiralCaveExitTop = {
    x: -20, y: -20,
    name: 'Spiral Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  desertHealerFairy = {
    x: -20, y: -20,
    name: 'Desert Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{singleCave: true}
  }
  kakarikoWellTop = {
    x: -20, y: -20,
    name: 'Kakariko Well (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }
  hyruleCastleSecretEntrance = {
    x: -20, y: -20,
    name: 'Hyrule Castle Secret Entrance',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }
  batCaveRight = {
    x: -20, y: -20,
    name: 'Bat Cave (Right)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }
  lostWoodsHideoutTop = {
    x: -20, y: -20,
    name: 'Lost Woods Hideout (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }
  lumberjackTreeTop = {
    x: -20, y: -20,
    name: 'Lumberjack Tree (top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }
  sewerDrop = { //TODO: may have special handling
    x: -20, y: -20,
    name: 'Sewer Drop',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{holeTarget: true}
  }


}

const Direction = {
  ENTRANCE: 'entrance',
  EXIT: 'exit',
  BOTH: 'both'
};

