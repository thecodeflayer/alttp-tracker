export class StaticEntrancesLW {
  /** DUNGEONS **/
  desertPalaceWest = { //desertPalaceExitWest
    x: 53, y: 1193,
    isMultiEntranceDungeon: true,
    multiDir:'west',
    multiLinks:{north:'desertPalaceNorth', south:'desertPalaceSouth', east:'desertPalaceEast'},
    name: 'Desert Palace Entrance (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceWest.png',
    intImg: '~/img/interior/desertPalaceWest.png',
  }
  desertPalaceNorth = { //desertPalaceExitNorth
    x: 111, y: 1154,
    isMultiEntranceDungeon: true,
    multiDir:'north',
    multiLinks:{west:'desertPalaceWest', south:'desertPalaceSouth', east:'desertPalaceEast'},
    name: 'Desert Palace Entrance (North)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceNorth.png',
    intImg: '~/img/interior/desertPalaceNorth.png',
  };
  desertPalaceSouth = { //desertPalaceExitSouth
    x:111, y:1197,
    isMultiEntranceDungeon: true,
    multiDir:'south',
    multiLinks:{north:'desertPalaceNorth', west:'desertPalaceWest', east:'desertPalaceEast'},
    name: 'Desert Palace Entrance (South)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceSouth.png',
    intImg: '~/img/interior/desertPalaceSouth.png',
  }
  desertPalaceEast = { //desertPalaceExitEast
    x: 169, y: 1193,
    isMultiEntranceDungeon: true,
    multiDir:'east',
    multiLinks:{north:'desertPalaceNorth', south:'desertPalaceSouth', west:'desertPalaceWest'},
    name: 'Desert Palace Entrance (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceEast.png',
    intImg: '~/img/interior/desertPalaceEast.png',
  }
  towerOfHera = { //towerOfHeraExit
    x: 841, y: 53,
    isSingleEntranceDungeon: true,
    name: 'Tower of Hera',
    region: 'dungeon',
    extImg:'~/img/entrance/towerOfHera.png',
    intImg:'~/img/interior/towerOfHera.png',
  };
  agaTower = { //agaTowerExit
    x: 750, y: 602,
    isMultiEntranceDungeon: true,
    multiDir:'north',
    multiLinks:{west:'hyruleCastleWest', south:'hyruleCastleSouth', east:'hyruleCastleEast'},
    name: 'Agahnim\'s Tower',
    region: 'dungeon',
    extImg: '~/img/entrance/agaTower.png',
    intImg: '~/img/interior/agaTower.png',
  };
  easternPalace = {//easternPalaceExit
    x: 1438, y: 585,
    isSingleEntranceDungeon: true,
    name: 'Eastern Palace',
    region: 'dungeon',
    extImg:'~/img/entrance/easternPalace.png',
    intImg:'~/img/interior/easternPalace.png',
  };
  /** NORTH WEST **/
  lostWoodsGamble = {
    x: 278, y: 24,
    isSingleCave: true,
    name: 'Lost Woods Gamble',
    region: 'northwest',
    extImg: '~/img/entrance/lostWoodsGamble.png',
    intImg: '~/img/interior/lostWoodsGamble.png',
    junk:true,
  };
  lumberjackTreeTree = { //lumberjackTreeTop
    isHole: true,
    holeLink: 'lumberjackTreeCave',
    x: 451, y: 111,
    name: 'Lumberjack Tree Drop',
    region: 'northwest',
    extImg:'~/img/entrance/lumberjackTreeTree.png',
    intImg:'~/img/interior/lumberjackTreeTree.png',
  }
  lumberjackTreeCave = { //lumberjackTreeExit
    x: 498, y: 52,
    isHoleExit: true,
    holeLink: 'lumberjackTreeTree',
    name: 'Lumberjack Tree Cave',
    region: 'northwest',
    extImg: '~/img/entrance/lumberjackTreeCave.png',
    intImg: '~/img/interior/lumberjackTreeCave.png',
  };
  lumberjackHouse = {
    x:503, y:94,
    isSingleCave: true,
    name: 'Lumberjack House',
    region: 'northwest',
    junk: true,
    extImg: '~/img/entrance/lumberjackHouse.png',
    intImg: '~/img/interior/lumberjackHouse.png',
  }
  lostWoodsHideoutDrop = { //lostWoodsHideoutTop
    x: 284, y: 196,
    isHole:true,
    holeLink:'lostWoodsHideoutStump',
    name: 'Lost Woods Hideout Drop',
    region: 'northwest',
    extImg: '~/img/entrance/lostWoodsHideout.png',
    intImg: '~/img/interior/lostWoodsHideoutDrop.png',
  };
  lostWoodsHideoutStump = { //lostWoodsHideoutExit
    x: 275, y: 227,
    isHoleExit: true,
    holeLink: 'lostWoodsHideoutDrop',
    name: 'Lost Woods Hideout Stump',
    region: 'northwest',
    extImg: '~/img/entrance/lostWoodsHideout.png',
    intImg: '~/img/interior/lostWoodsHideoutStump.png',
  };
  deathMtnReturnCaveWest = { //deathMtnReturnCaveExitWest
    x: 539, y: 233,
    isMultiCave: true,
    name: 'Death Mountain Return Cave (West)',
    region: 'northwest',
    extImg:'~/img/entrance/deathMtnReturnCaveWest.png',
    intImg:'~/img/interior/deathMtnReturnCaveWest.png',
  }
  oldManCaveWest = { //oldManCaveExitWest
    x: 532, y: 263,
    isMultiCave: true,
    name: 'Old Man Cave (West)',
    region: 'northwest',
    extImg: '~/img/entrance/oldManCaveWest.png',
    intImg: '~/img/interior/oldManCaveWest.png',
  }
  fortuneTellerLight = {
    x: 281, y: 484,
    isSingleCave: true,
    name: 'Fortune Teller (Light)',
    region: 'northwest',
    junk: true,
    extImg: '~/img/entrance/fortuneTellerLight.png',
    intImg: '~/img/interior/fortuneTellerLight.png',
  }
  bonkRockCave = {
    x:585, y:437,
    isSingleCave: true,
    name: 'Bonk Rock Cave',
    region: 'northwest',
    extImg: '~/img/entrance/bonkRockCave.png',
    intImg: '~/img/interior/bonkRockCave.png',
  }
  sanctuary = { //sanctuaryExit
    x: 692, y: 406,
    isHoleExit: true,
    holeLink: 'sanctuaryGrave',
    name: 'Sanctuary',
    region: 'northwest',
    extImg:'~/img/entrance/sanctuary.png',
    intImg:'~/img/interior/sanctuary.png',
  };
  sanctuaryGrave = {
    x:778, y:439,
    isHole: true,
    holeLink: 'sanctuary',
    name: 'Sanctuary Grave',
    region: 'northwest',
    extImg:'~/img/entrance/sanctuaryGrave.png',
    intImg:'~/img/interior/sanctuaryGrave.png',
  }
  graveyardCave = {
    x: 855, y: 415,
    isSingleCave: true,
    name: 'Graveyard Cave',
    region: 'northwest',
    extImg:'~/img/entrance/graveyardCave.png',
    intImg:'~/img/interior/graveyardCave.png',
  }
  kingsGrave = {
    x: 902, y: 445,
    isSingleCave: true,
    name: 'Kings Grave',
    region: 'northwest',
    extImg: '~/img/entrance/kingsGrave.png',
    intImg: '~/img/interior/kingsGrave.png',
  };
  northFairyCaveDrop = {
    x: 964, y: 465,
    isHole:true,
    holeLink: 'northFairyCave',
    name: 'North Fairy Cave Drop',
    region: 'northwest',
    extImg:'~/img/entrance/northFairyCave.png',
    intImg:'~/img/interior/northFairyCaveDrop.png',
  }
  northFairyCave = { //northFairyCaveExit
    x: 1002, y: 415,
    isHoleExit: true,
    holeLink: 'northFairyCaveDrop',
    region: 'northwest',
    name: 'North Fairy Cave',
    extImg:'~/img/entrance/northFairyCave.png',
    intImg:'~/img/interior/northFairyCave.png',
  };
  /** DEATH MTN **/
  deathMtnReturnCaveEast = { //deathMtnReturnCaveExitEast
    x: 582, y: 209,
    isLWDM:true,
    name: 'Death Mountain Return Cave (East)',
    region: 'deathmtn',
    extImg: '~/img/entrance/deathMtnReturnCaveEast.png',
    intImg: '~/img/interior/deathMtnReturnCaveEast.png',
  };
  oldManCaveEast = { //oldManCaveExitEast
    x: 609, y: 286,
    isLWDM:true,
    name: 'Old Man Cave (East)',
    region: 'deathmtn',
    extImg: '~/img/entrance/oldManCaveEast.png',
    intImg: '~/img/interior/oldManCaveEast.png',
  };
  spectacleRockCave = { //spectacleRockCaveExit
    x: 686, y: 209,
    isLWDM:true,
    name: 'Spectacle Rock Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/spectacleRockCave.png',
    intImg: '~/img/interior/spectacleRockCave.png',
  }
  spectacleRockCavePeak = { //spectacleRockCaveExitPeak
    x: 733, y: 156,
    isLWDM:true,
    name: 'Spectacle Rock Cave Peak',
    region: 'deathmtn',
    extImg: '~/img/entrance/spectacleRockCavePeak.png',
    intImg: '~/img/interior/spectacleRockCavePeak.png',
  }
  spectacleRockCaveBottom = { //spectacleRockCaveTop ?!?
    x: 733, y: 220,
    isLWDM:true,
    name: 'Spectacle Rock Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/spectacleRockCaveBottom.png',
    intImg: '~/img/interior/spectacleRockCaveBottom.png',
  };
  oldManHouseBottom = { //oldManHouseExitBottom
    x: 674, y: 354,
    isLWDM:true,
    name: 'Old Man House (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/oldManHouseBottom.png',
    intImg: '~/img/interior/oldManHouseBottom.png',
  };
  oldManHouseTop = { //oldManHouseExitTop
    x: 802, y: 245,
    isLWDM:true,
    name: 'Old Man House (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/oldManHouseTop.png',
    intImg: '~/img/interior/oldManHouseTop.png',
  };
  spiralCave = { //spiralCaveExit
    x: 1195, y: 140,
    isLWDM:true,
    name: 'Spiral Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/spiralCave.png',
    intImg: '~/img/interior/spiralCave.png',
  };
  spiralCaveBottom = { //spiralCaveExitTop ?!?
    x: 1201, y: 197,
    isLWDM:true,
    name: 'Spiral Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/spiralCaveBottom.png',
    intImg: '~/img/interior/spiralCaveBottom.png',
  }
  fairyAscensionCaveTop = { //fairyAscensionCaveExitTop
    x: 1230, y: 173,
    isLWDM:true,
    name: 'Fairy Ascension Cave (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/fairyAscensionCaveTop.png',
    intImg: '~/img/interior/fairyAscensionCaveTop.png',
  };
  fairyAscensionCaveBottom = { //fairyAscensionCaveExitBottom
    x: 1230, y: 208,
    isLWDM:true,
    name: 'Fairy Ascension Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/fairyAscensionCaveBottom.png',
    intImg: '~/img/interior/fairyAscensionCaveBottom.png',
  };
  mimicCave = {
    x:1266, y:140,
    isSingleCave: true,
    name: 'Mimic Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/mimicCave.png',
    intImg: '~/img/interior/mimicCave.png',
  }
  hookshotFairy = {
    x:1266, y:221,
    isSingleCave: true,
    name: 'Hookshot Fairy',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotFairy.png',
    intImg: '~/img/interior/hookshotFairy.png',
  }
  paradoxCaveTop = { //paradoxCaveExitTop
    x: 1288, y: 98,
    isLWDM:true,
    name: 'Paradox Cave (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/paradoxCaveTop.png',
    intImg: '~/img/interior/paradoxCaveTop.png',
  };
  paradoxCaveMiddle = { //paradoxCaveExitMiddle
    x: 1283, y: 221,
    isLWDM:true,
    name: 'Paradox Cave (Middle)',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotFairy.png',
    intImg: '~/img/interior/paradoxCaveMiddle.png',
  };
  paradoxCaveBottom = { //paradoxCaveExitBottom
    x: 1295, y: 326,
    isLWDM:true,
    name: 'Paradox Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/paradoxCaveBottom.png',
    intImg: '~/img/interior/paradoxCaveBottom.png',
  };
  /** KAKARIKO **/
  kakarikoWellDrop = { //kakarikoWellTop
    x: 35, y: 638,
    isHole:true,
    holeLink: 'kakarikoWellCave',
    name: 'Kakariko Well Drop',
    region: 'kakariko',
    extImg:'~/img/entrance/kakarikoWell.png',
    intImg:'~/img/interior/kakarikoWellDrop.png',
  };
  kakarikoWellCave = { //kakarikoWellExit
    x: 70, y: 644,
    isHoleExit: true,
    holeLink: 'kakarikoWellDrop',
    name: 'Kakariko Well Cave',
    region: 'kakariko',
    extImg:'~/img/entrance/kakarikoWell.png',
    intImg:'~/img/interior/kakarikoWellCave.png',
  };
  blindsHideout = {
    x: 193, y: 632,
    isSingleCave: true,
    name: 'Blind\'s Hideout',
    region: 'kakariko',
    extImg: '~/img/entrance/blindsHideout.png',
    intImg: '~/img/interior/blindsHideout.png',
  };
  elderHouseWest = { //elderHouseExitWest
    x: 223, y: 633,
    isMultiCave: true,
    name: 'Elder House (West)',
    region: 'kakariko',
    extImg:'~/img/entrance/elderHouse.png',
    intImg:'~/img/interior/elderHouseWest.png',
  };
  elderHouseEast = { //elderHouseExitEast
    x: 258, y: 633,
    isMultiCave: true,
    name: 'Elder House (East)',
    region: 'kakariko',
    extImg:'~/img/entrance/elderHouse.png',
    intImg:'~/img/interior/elderHouseEast.png',
  };
  snitchLadyWest = {
    x: 76, y: 703,
    isSingleCave: true,
    name: 'Snitch Lady (West)',
    region: 'kakariko',
    extImg: '~/img/entrance/snitchLadyWest.png',
    intImg: '~/img/interior/snitchLadyWest.png',
  }
  snitchLadyEast = {
    x: 310, y: 726,
    isSingleCave: true,
    name: 'Snitch Lady (East)',
    region: 'kakariko',
    extImg: '~/img/entrance/snitchLadyEast.png',
    intImg: '~/img/interior/snitchLadyEast.png',
  }
  chickenHut = {
    x: 146, y: 814,
    isSingleCave: true,
    name: 'Chicken Hut',
    region: 'kakariko',
    extImg:'~/img/entrance/chickenHut.png',
    intImg:'~/img/interior/chickenHut.png',
  };
  sickKidsHouse = {
    x: 234, y: 808,
    isSingleCave: true,
    name: 'Sick Kid\'s House',
    region: 'kakariko',
    extImg: '~/img/entrance/sickKidsHouse.png',
    intImg: '~/img/interior/sickKidsHouse.png',
  };
  bushCoveredHouse = {
    x: 304, y: 801,
    isSingleCave: true,
    name: 'Bush Covered House',
    region: 'kakariko',
    extImg: '~/img/entrance/bushCoveredHouse.png',
    intImg: '~/img/interior/bushCoveredHouse.png',
  }
  blacksmithsHut = {
    x: 456, y: 801,
    isSingleCave: true,
    name: 'Blacksmith\'s Hut',
    region: 'kakariko',
    extImg: '~/img/entrance/blacksmithsHut.png',
    intImg: '~/img/interior/blacksmithsHut.png',
  };
  batCaveDrop = { //batCaveRight
    x: 497, y: 843,
    isHole:true,
    holeLink: 'batCaveCave',
    name: 'Bat Cave Drop',
    region: 'kakariko',
    extImg: '~/img/entrance/batCave.png',
    intImg: '~/img/interior/batCaveDrop.png',
  };
  batCaveCave = { //batCaveExit
    x: 464, y: 837,
    isHoleExit: true,
    holeLink: 'batCaveDrop',
    name: 'Bat Cave Exit',
    region: 'kakariko',
    extImg: '~/img/entrance/batCave.png',
    intImg: '~/img/interior/batCaveCave.png',
  };
  lightWorldBombHut = {
    x: 41, y: 895,
    isSingleCave: true,
    name: 'Light World Bomb Hut',
    region: 'kakariko',
    extImg: '~/img/entrance/lightWorldBombHut.png',
    intImg: '~/img/interior/lightWorldBombHut.png',
  }
  kakarikoShop = {
    x: 163, y: 879,
    isSingleCave: true,
    name: 'Kakariko Shop',
    region: 'kakariko',
    extImg: '~/img/entrance/kakarikoShop.png',
    intImg: '~/img/interior/kakarikoShop.png',
  }
  tavernFront = {
    x: 240, y: 896,
    isSingleCave: true,
    name: 'Tavern (Front)',
    region: 'kakariko',
    extImg: '~/img/entrance/tavern.png',
    intImg: '~/img/interior/tavern.png',
  }
  library = {
    x:243, y:990,
    isSingleCave: true,
    name: 'Library',
    region: 'kakariko',
    extImg:'~/img/entrance/library.png',
    intImg:'~/img/interior/library.png',
  }
  twoBrothersHouseWest = { //twoBrothersHouseExitWest
    x: 163, y: 1077,
    isMultiCave: true,
    name: 'Two Brothers House (West)',
    region: 'kakariko',
    extImg: '~/img/entrance/twoBrothersHouse.png',
    intImg: '~/img/interior/twoBrothersHouseWest.png',
  };
  twoBrothersHouseEast = { //twoBrothersHouseExitEast
    x: 210, y: 1077,
    isMultiCave: true,
    name: 'Two Brothers House (East)',
    region: 'kakariko',
    extImg: '~/img/entrance/twoBrothersHouse.png',
    intImg: '~/img/interior/twoBrothersHouseEast.png',
  };
  kakarikoGambleGame = {
    x:322, y:1054,
    isSingleCave: true,
    name: 'Kakariko Gamble Game',
    region: 'kakariko',
    extImg: '~/img/entrance/kakarikoGambleGame.png',
    intImg: '~/img/interior/kakarikoGambleGame.png',
  }
  /** DESERT **/
  checkerboardCave = {
    x: 263, y: 1165,
    isSingleCave: true,
    name: 'Checkerboard Cave',
    region: 'desert',
    extImg:'~/img/entrance/checkerboardCave.png',
    intImg:'~/img/interior/checkerboardCave.png',
  }
  aginahsCave = {
    x: 298, y: 1241,
    isSingleCave: true,
    name: 'Aginah\'s Cave',
    region: 'desert',
    extImg:'~/img/entrance/aginahsCave.png',
    intImg:'~/img/interior/aginahsCave.png',
  }
  desertFairy = { //desertHealerFairy
    x: 416, y: 1342,
    isSingleCave: true,
    name: 'Desert Fairy',
    region: 'desert',
    extImg:'~/img/entrance/desertFairy.png',
    intImg:'~/img/interior/singleFairyCave.png',
  }
  fiftyRupeeCave = {
    x:468, y:1434,
    isSingleCave: true,
    name: '50 Rupee Cave',
    region: 'desert',
    extImg:'~/img/entrance/fiftyRupeeCave.png',
    intImg:'~/img/interior/fiftyRupeeCave.png',
  }
  /** SOUTH **/
  cave45 = {
    x: 399, y: 1240,
    isSingleCave: true,
    name: 'Cave 45',
    region: 'south',
    extImg: '~/img/entrance/cave45.png',
    intImg: '~/img/interior/cave45.png',
  }
  dam = {
    x: 703, y: 1405,
    isSingleCave: true,
    name: 'Dam',
    region: 'south',
    extImg: '~/img/entrance/dam.png',
    intImg: '~/img/interior/dam.png',
  }
  bonkFairyLight = {
    x: 709, y: 978,
    isSingleCave: true,
    name: 'Bonk Fairy (Light)',
    region: 'south',
    extImg:'~/img/entrance/bonkFairyLight.png',
    intImg:'~/img/interior/bonkFairyLight.png',
  };
  linksHouse = {
    x: 820, y: 1036,
    isSingleCave: true,
    name: 'Link\'s House',
    region: 'south',
    extImg: '~/img/entrance/linksHouse.png',
    intImg: '~/img/interior/linksHouse.png',
  }
  lightHypeFairy = {
    x: 896, y: 1171,
    isSingleCave: true,
    name: 'Light Hype Fairy',
    region: 'south',
    extImg:'~/img/entrance/lightHypeFairy.png',
    intImg:'~/img/interior/singleFairyCave.png',
  }
  lakeHyliaFortuneTeller = {
    x:973, y:1206,
    isSingleCave: true,
    name: 'Lake Hylia Fortune Teller',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaFortuneTeller.png',
    intImg: '~/img/interior/fortuneTellerLight.png',
  }
  caveShopLakeHylia = {
    x: 1089, y: 1152,
    isSingleCave: true,
    name: 'Cave Shop (Lake Hylia)',
    region: 'south',
    extImg: '~/img/entrance/caveShopLakeHylia.png',
    intImg: '~/img/interior/caveShopLakeHylia.png',
  }
  miniMoldormCave = {
    x: 978, y: 1412,
    isSingleCave: true,
    name: 'Mini Moldorm Cave',
    region: 'south',
    extImg:'~/img/entrance/miniMoldormCave.png',
    intImg:'~/img/interior/miniMoldormCave.png',
  }
  capacityUpgrade = {
    x: 1189, y: 1282,
    isSingleCave: true,
    name: 'Capacity Upgrade',
    region: 'south',
    extImg:'~/img/entrance/capacityUpgrade.png',
    intImg:'~/img/interior/capacityUpgrade.png',
  }
  iceRodCave = {
    x:1342, y:1160,
    isSingleCave: true,
    name: 'Ice Rod Cave',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaLedge.png',
    intImg: '~/img/interior/iceRodCave.png',
  }
  twentyRupeeCave = {
    x:1353, y:1177,
    isSingleCave: true,
    name: '20 Rupee Cave',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaLedge.png',
    intImg: '~/img/interior/twentyRupeeCave.png',
  }
  goodBeeCave = {
    x:1371, y:1160,
    isSingleCave: true,
    name: 'Good Bee Cave',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaLedge.png',
    intImg: '~/img/interior/iceRodCave.png',
  }
  /** HYRULE CASTLE **/
  hyruleCastleWest = { //hyruleCastleExitWest
    x: 674, y: 584,
    isMultiEntranceDungeon: true,
    multiDir:'west',
    multiLinks:{north:'agaTower', south:'hyruleCastleSouth', east:'hyruleCastleEast'},
    name: 'Hyrule Castle Entrance (West)',
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleWest.png',
    intImg: '~/img/interior/hyruleCastleWest.png',
  };
  hyruleCastleSouth = { //hyruleCastleExitSouth
    x: 750, y: 662,
    isMultiEntranceDungeon: true,
    multiDir:'south',
    multiLinks:{north:'agaTower', west:'hyruleCastleWest', east:'hyruleCastleEast'},
    name: 'Hyrule Castle Entrance (South)',
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleSouth.png',
    intImg: '~/img/interior/hyruleCastleSouth.png',
  }
  hyruleCastleEast = { //hyruleCastleExitEast
    x: 825, y: 584,
    isMultiEntranceDungeon: true,
    multiDir:'east',
    multiLinks:{north:'agaTower', south:'hyruleCastleSouth', west:'hyruleCastleWest'},
    name: 'Hyrule Castle Entrance (East)',
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleEast.png',
    intImg: '~/img/interior/hyruleCastleEast.png',
  };
  hyruleCastleSecretEntranceDrop = { //hyruleCastleSecretEntranceExit
    x: 893, y: 623,
    isHole:true,
    holeLink: 'hyruleCastleSecretEntranceStairs',
    name: 'Hyrule Castle Secret Entrance Drop',
    extImg: '~/img/entrance/hyruleCastleSecretEntranceDrop.png',
    intImg: '~/img/interior/hyruleCastleSecretEntranceDrop.png',
    region: 'castle',
  };
  hyruleCastleSecretEntranceStairs = { //hyruleCastleSecretEntrance
    x: 826, y: 643,
    isHoleExit: true,
    holeLink: 'hyruleCastleSecretEntranceDrop',
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleSecretEntranceStairs.png',
    intImg: '~/img/interior/hyruleCastleSecretEntranceStairs.png',
    name: 'Hyrule Castle Secret Entrance Stairs',
  };
  /** NORTH EAST **/
  waterfallOfWishing = {
    x: 1351, y: 206,
    isSingleCave: true,
    name: 'Waterfall of Wishing',
    region: 'northeast',
    extImg:'~/img/entrance/waterfallOfWishing.png',
    intImg:'~/img/interior/waterfallOfWishing.png',
  }
  potionShop = {
    x:1201, y:502,
    isSingleCave: true,
    name: 'Potion Shop',
    region: 'northeast',
    extImg:'~/img/entrance/potionShop.png',
    intImg:'~/img/interior/potionShop.png',
  }
  sahasrahlasHut = {
    x: 1215, y: 683,
    isSingleCave: true,
    name: 'Sahasrahla\'s Hut',
    region: 'northeast',
    extImg: '~/img/entrance/sahasrahlasHut.png',
    intImg: '~/img/interior/sahasrahlasHut.png',
  };
  lakeHyliaFairy = {
    x: 1237, y: 973,
    isSingleCave: true,
    name: 'Lake Hylia Fairy',
    region: 'northeast',
    extImg:'~/img/entrance/lakeHyliaFairy.png',
    intImg:'~/img/interior/singleFairyCave.png',
  }
  longFairyCave = {
    x:1471, y:1053,
    isSingleCave: true,
    name: 'Long Fairy Cave',
    region: 'northeast',
    extImg:'~/img/entrance/longFairyCave.png',
    intImg:'~/img/interior/longFairyCave.png',
  }
}

