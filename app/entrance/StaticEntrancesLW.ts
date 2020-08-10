export class StaticEntrancesLW {
  /** DUNGEONS **/
  desertPalaceWest = { //desertPalaceExitWest
    x: 53, y: 1193,
    name: 'Desert Palace Entrance (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceWest.png',
    intImg: '~/img/interior/desertPalaceWest.png',
    limits: {bombShop: true}
  }
  desertPalaceNorth = { //desertPalaceExitNorth
    x: 111, y: 1154,
    name: 'Desert Palace Entrance (North)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceNorth.png',
    intImg: '~/img/interior/desertPalaceNorth.png',
    limits: {bombShop: true}
  };
  desertPalaceSouth = { //desertPalaceExitSouth
    x:111, y:1197,
    name: 'Desert Palace Entrance (South)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceSouth.png',
    intImg: '~/img/interior/desertPalaceSouth.png',
    limits:{bombShop: true}
  }
  desertPalaceEast = { //desertPalaceExitEast
    x: 169, y: 1193,
    name: 'Desert Palace Entrance (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/desertPalaceEast.png',
    intImg: '~/img/interior/desertPalaceEast.png',
    limits:{mustExit: true}
  }
  towerOfHera = { //towerOfHeraExit
    x: 841, y: 53,
    name: 'Tower of Hera',
    region: 'dungeon',
    extImg:'~/img/entrance/towerOfHera.png',
    intImg:'~/img/interior/towerOfHera.png',
    limits: {bombShop:true}
  };
  agaTower = { //agaTowerExit
    x: 750, y: 602,
    name: 'Agahnim\'s Tower',
    region: 'dungeon',
    extImg: '~/img/entrance/agaTower.png',
    intImg: '~/img/interior/agaTower.png',
    limits: {bombShop: true}
  };
  easternPalace = {//easternPalaceExit
    x: 1438, y: 585,
    name: 'Eastern Palace',
    region: 'dungeon',
    extImg:'~/img/entrance/easternPalace.png',
    intImg:'~/img/interior/easternPalace.png',
    limits: {blacksmith: true}
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
    limits: {singleCave: true, blacksmith: true}
  };
  lumberjackTreeTree = { //lumberjackTreeTop
    isHole: true,
    x: 451, y: 111,
    name: 'Lumberjack Tree Drop',
    region: 'northwest',
    extImg:'~/img/entrance/lumberjackTreeTree.png',
    limits: {holeDrop: true}
  }
  lumberjackTreeCave = { //lumberjackTreeExit
    x: 498, y: 52,
    isHoleExit: true,
    name: 'Lumberjack Tree Cave',
    region: 'northwest',
    extImg: '~/img/entrance/lumberjackTreeCave.png',
    limits:{blacksmith: true, holeEntrance: true}
  };
  lumberjackHouse = {
    x:503, y:94,
    isSingleCave: true,
    name: 'Lumberjack House',
    region: 'northwest',
    junk: true,
    extImg: '~/img/entrance/lumberjackHouse.png',
    limits: {singleCave: true, blacksmith: true}
  }
  lostWoodsHideoutDrop = { //lostWoodsHideoutTop
    x: 284, y: 196,
    isHole:true,
    name: 'Lost Woods Hideout Drop',
    region: 'northwest',
    extImg: '~/img/entrance/lostWoodsHideout.png',
    intImg: '~/img/interior/lostWoodsHideoutDrop.png',
    limits: {holeDrop: true}
  };
  lostWoodsHideoutStump = { //lostWoodsHideoutExit
    x: 275, y: 227,
    isHoleExit: true,
    name: 'Lost Woods Hideout Stump',
    region: 'northwest',
    extImg: '~/img/entrance/lostWoodsHideout.png',
    intImg: '~/img/interior/lostWoodsHideoutStump.png',
    limits: {blacksmith: true, holeEntrance:true}
  };
  deathMtnReturnCaveWest = { //deathMtnReturnCaveExitWest
    x: 539, y: 233,
    name: 'Death Mountain Return Cave (West)',
    region: 'northwest',
    extImg:'~/img/entrance/deathMtnReturnCaveWest.png',
    intImg:'~/img/interior/deathMtnReturnCaveWest.png',
    limits: {bombShop: true}
  }
  oldManCaveWest = { //oldManCaveExitWest
    x: 532, y: 263,
    name: 'Old Man Cave (West)',
    region: 'northwest',
    extImg: '~/img/entrance/oldManCaveWest.png',
    intImg: '~/img/interior/oldManCaveWest.png',
    limits: {blacksmith: true}
  }
  fortuneTellerLight = {
    x: 281, y: 484,
    isSingleCave: true,
    name: 'Fortune Teller (Light)',
    region: 'northwest',
    junk: true,
    extImg: '~/img/entrance/fortuneTellerLight.png',
    intImg: '~/img/interior/fortuneTellerLight.png',
    limits: {singleCave: true, blacksmith: true}
  }
  bonkRockCave = {
    x:585, y:437,
    isSingleCave: true,
    name: 'Bonk Rock Cave',
    region: 'northwest',
    extImg: '~/img/entrance/bonkRockCave.png',
    intImg: '~/img/interior/bonkRockCave.png',
    limits: {singleCave: true, bombShop: true}
  }
  sanctuary = { //sanctuaryExit
    x: 692, y: 406,
    name: 'Sanctuary',
    region: 'northwest',
    extImg:'~/img/entrance/sanctuary.png',
    limits:{blacksmith: true, holeEntrance:true, }
  };
  sanctuaryGrave = {
    x:778, y:439,
    isHole: true,
    name: 'Sanctuary Grave',
    region: 'northwest',
    extImg:'~/img/entrance/sanctuaryGrave.png',
    intImg:'~/img/interior/sanctuaryGrave.png',
    limits: {holeDrop: true}
  }
  graveyardCave = {
    x: 855, y: 415,
    isSingleCave: true,
    name: 'Graveyard Cave',
    region: 'northwest',
    extImg:'~/img/entrance/graveyardCave.png',
    limits: {singleCave: true, bombShop: true}
  }
  kingsGrave = {
    x: 902, y: 445,
    isSingleCave: true,
    name: 'Kings Grave',
    region: 'northwest',
    extImg: '~/img/entrance/kingsGrave.png',
    intImg: '~/img/interior/kingsGrave.png',
    limits: {singleCave: true, bombShop: true}
  };
  northFairyCaveDrop = {
    x: 964, y: 465,
    isHole:true,
    name: 'North Fairy Cave Drop',
    region: 'northwest',
    extImg:'~/img/entrance/northFairyCave.png',
    limits:{holeDrop: true}
  }
  northFairyCave = { //northFairyCaveExit
    x: 1002, y: 415,
    isHoleExit: true,
    region: 'northwest',
    name: 'North Fairy Cave',
    extImg:'~/img/entrance/northFairyCave.png',
    limits:{holeEntrance:true, holeTarget: true, blacksmith: true}
  };
  /** DEATH MTN **/
  deathMtnReturnCaveEast = { //deathMtnReturnCaveExitEast
    x: 582, y: 209,
    name: 'Death Mountain Return Cave (East)',
    region: 'deathmtn',
    extImg: '~/img/entrance/deathMtnReturnCaveEast.png',
    intImg: '~/img/interior/deathMtnReturnCaveEast.png',
    limits:{oldManEntrance: true, bombShop: true}
  };
  oldManCaveEast = { //oldManCaveExitEast
    x: 609, y: 286,
    name: 'Old Man Cave (East)',
    region: 'deathmtn',
    extImg: '~/img/entrance/oldManCaveEast.png',
    intImg: '~/img/interior/oldManCaveEast.png',
    limits: {oldManEntrance: true, bombShop: true}
  };
  spectacleRockCave = { //spectacleRockCaveExit
    x: 686, y: 209,
    name: 'Spectacle Rock Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/spectacleRockCave.png',
    intImg: '~/img/interior/spectacleRockCave.png',
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCavePeak = { //spectacleRockCaveExitPeak
    x: 733, y: 156,
    name: 'Spectacle Rock Cave Peak',
    region: 'deathmtn',
    extImg: '~/img/entrance/spectacleRockCavePeak.png',
    intImg: '~/img/interior/spectacleRockCavePeak.png',
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCaveBottom = { //spectacleRockCaveTop ?!?
    x: 733, y: 220,
    name: 'Spectacle Rock Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/spectacleRockCaveBottom.png',
    intImg: '~/img/interior/spectacleRockCaveBottom.png',
    limits: {bombShop: true, oldManEntrance: true}
  };
  oldManHouseBottom = { //oldManHouseExitBottom
    x: 674, y: 354,
    name: 'Old Man House (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/oldManHouseBottom.png',
    intImg: '~/img/interior/oldManHouseBottom.png',
    limits:{bombShop: true}
  };
  oldManHouseTop = { //oldManHouseExitTop
    x: 802, y: 245,
    name: 'Old Man House (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/oldManHouseTop.png',
    intImg: '~/img/interior/oldManHouseTop.png',
    limits: {oldManEntrance: true, bombShop: true}
  };
  spiralCave = { //spiralCaveExit
    x: 1195, y: 140,
    name: 'Spiral Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/spiralCave.png',
    intImg: '~/img/interior/spiralCave.png',
    limits:{bombShop:true}
  };
  spiralCaveBottom = { //spiralCaveExitTop ?!?
    x: 1201, y: 197,
    name: 'Spiral Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/spiralCaveBottom.png',
    intImg: '~/img/interior/spiralCaveBottom.png',
    limits:{bombShop:true}
  }
  fairyAscensionCaveTop = { //fairyAscensionCaveExitTop
    x: 1230, y: 173,
    name: 'Fairy Ascension Cave (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/fairyAscensionCaveTop.png',
    limits: {bombShop: true}
  };
  fairyAscensionCaveBottom = { //fairyAscensionCaveExitBottom
    x: 1230, y: 208,
    name: 'Fairy Ascension Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/fairyAscensionCaveBottom.png',
    limits: {bombShop: true}
  };
  mimicCave = {
    x:1266, y:140,
    isSingleCave: true,
    name: 'Mimic Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/mimicCave.png',
    intImg: '~/img/interior/mimicCave.png',
    limits: {singleCave: true, bombShop: true}
  }
  hookshotFairy = {
    x:1266, y:221,
    isSingleCave: true,
    name: 'Hookshot Fairy',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotFairy.png',
    limits: {singleCave: true, bombShop: true}
  }
  paradoxCaveTop = { //paradoxCaveExitTop
    x: 1288, y: 98,
    name: 'Paradox Cave (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/paradoxCaveTop.png',
    intImg: '~/img/interior/paradoxCaveTop.png',
    limits: {bombShop: true}
  };
  paradoxCaveMiddle = { //paradoxCaveExitMiddle
    x: 1283, y: 221,
    name: 'Paradox Cave (Middle)',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotFairy.png',
    intImg: '~/img/interior/paradoxCaveMiddle.png',
    limits: {bombShop: true}
  };
  paradoxCaveBottom = { //paradoxCaveExitBottom
    x: 1295, y: 326,
    name: 'Paradox Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/paradoxCaveBottom.png',
    intImg: '~/img/interior/paradoxCaveBottom.png',
    limits: {bombShop: true}
  };
  /** KAKARIKO **/
  kakarikoWellDrop = { //kakarikoWellTop
    x: 35, y: 638,
    isHole:true,
    name: 'Kakariko Well Drop',
    region: 'kakariko',
    extImg:'~/img/entrance/kakarikoWell.png',
    intImg:'~/img/interior/kakarikoWellDrop.png',
    limits:{holeDrop: true}
  };
  kakarikoWellCave = { //kakarikoWellExit
    x: 70, y: 644,
    isHoleExit: true,
    name: 'Kakariko Well Cave',
    region: 'kakariko',
    extImg:'~/img/entrance/kakarikoWell.png',
    intImg:'~/img/interior/kakarikoWellCave.png',
    limits:{holeEntrance:true, blacksmith: true}
  };
  blindsHideout = {
    x: 193, y: 632,
    isSingleCave: true,
    name: 'Blind\'s Hideout',
    region: 'kakariko',
    extImg: '~/img/entrance/blindsHideout.png',
    intImg: '~/img/interior/blindsHideout.png',
    limits:{blacksmith: true, singleCave: true}
  };
  elderHouseWest = { //elderHouseExitWest
    x: 223, y: 633,
    name: 'Elder House (West)',
    region: 'kakariko',
    extImg:'~/img/entrance/elderHouse.png',
    intImg:'~/img/interior/elderHouseWest.png',
    limits:{blacksmith: true, twoDoorCave: true}
  };
  elderHouseEast = { //elderHouseExitEast
    x: 258, y: 633,
    name: 'Elder House (East)',
    region: 'kakariko',
    extImg:'~/img/entrance/elderHouse.png',
    intImg:'~/img/interior/elderHouseEast.png',
    limits:{blacksmith:true, twoDoorCave: true}
  };
  snitchLadyWest = {
    x: 76, y: 703,
    isSingleCave: true,
    name: 'Snitch Lady (West)',
    region: 'kakariko',
    extImg: '~/img/entrance/snitchLadyWest.png',
    limits: {singleCave: true, blacksmith: true}
  }
  snitchLadyEast = {
    x: 310, y: 726,
    isSingleCave: true,
    name: 'Snitch Lady (East)',
    region: 'kakariko',
    extImg: '~/img/entrance/snitchLadyEast.png',
    limits: {singleCave: true, blacksmith: true}
  }
  chickenHut = {
    x: 146, y: 814,
    isSingleCave: true,
    name: 'Chicken Hut',
    region: 'kakariko',
    extImg:'~/img/entrance/chickenHut.png',
    intImg:'~/img/interior/chickenHut.png',
    limits:{singleCave: true, blacksmith: true}
  };
  sickKidsHouse = {
    x: 234, y: 808,
    isSingleCave: true,
    name: 'Sick Kid\'s House',
    region: 'kakariko',
    extImg: '~/img/entrance/sickKidsHouse.png',
    limits:{singleCave: true, blacksmith: true}
  };
  bushCoveredHouse = {
    x: 304, y: 801,
    isSingleCave: true,
    name: 'Bush Covered House',
    region: 'kakariko',
    extImg: '~/img/entrance/bushCoveredHouse.png',
    intImg: '~/img/interior/bushCoveredHouse.png',
    limits: {singleCave: true, blacksmith: true}
  }
  blacksmithsHut = {
    x: 456, y: 801,
    isSingleCave: true,
    name: 'Blacksmith\'s Hut',
    region: 'kakariko',
    extImg: '~/img/entrance/blacksmithsHut.png',
    limits:{singleCave: true, blacksmith: true}
  };
  batCaveDrop = { //batCaveRight
    x: 497, y: 843,
    isHole:true,
    name: 'Bat Cave Drop',
    region: 'kakariko',
    extImg: '~/img/entrance/batCave.png',
    intImg: '~/img/interior/batCaveDrop.png',
    limits:{holeDrop: true}
  };
  batCaveCave = { //batCaveExit
    x: 464, y: 837,
    isHoleExit: true,
    name: 'Bat Cave Exit',
    region: 'kakariko',
    extImg: '~/img/entrance/batCave.png',
    intImg: '~/img/interior/batCaveCave.png',
    limits:{holeEntrance: true, blacksmith: true}
  };
  lightWorldBombHut = {
    x: 41, y: 895,
    isSingleCave: true,
    name: 'Light World Bomb Hut',
    region: 'kakariko',
    extImg: '~/img/entrance/lightWorldBombHut.png',
    intImg: '~/img/interior/lightWorldBombHut.png',
    limits: {singleCave: true, blacksmith: true}
  }
  kakarikoShop = {
    x: 163, y: 879,
    isSingleCave: true,
    name: 'Kakariko Shop',
    region: 'kakariko',
    extImg: '~/img/entrance/kakarikoShop.png',
    limits: {singleCave: true, blacksmith: true}
  }
  tavernFront = {
    x: 240, y: 896,
    isSingleCave: true,
    name: 'Tavern (Front)',
    region: 'kakariko',
    extImg: '~/img/entrance/tavern.png',
    intImg: '~/img/interior/tavern.png',
    limits: {singleCave: true, blacksmith: true}
  }
  library = {
    x:243, y:990,
    isSingleCave: true,
    name: 'Library',
    region: 'kakariko',
    extImg:'~/img/entrance/library.png',
    intImg:'~/img/interior/library.png',
    limits: {singleCave: true, blacksmith: true}
  }
  twoBrothersHouseWest = { //twoBrothersHouseExitWest
    x: 163, y: 1077,
    name: 'Two Brothers House (West)',
    region: 'kakariko',
    extImg: '~/img/entrance/twoBrothersHouse.png',
    intImg: '~/img/interior/twoBrothersHouseWest.png',
    limits:{twoDoorCave: true, bombShop: true}
  };
  twoBrothersHouseEast = { //twoBrothersHouseExitEast
    x: 210, y: 1077,
    name: 'Two Brothers House (East)',
    region: 'kakariko',
    extImg: '~/img/entrance/twoBrothersHouse.png',
    intImg: '~/img/interior/twoBrothersHouseEast.png',
    limits:{twoDoorCave: true, blacksmith: true}
  };
  kakarikoGambleGame = {
    x:322, y:1054,
    isSingleCave: true,
    name: 'Kakariko Gamble Game',
    region: 'kakariko',
    extImg: '~/img/entrance/kakarikoGambleGame.png',
    intImg: '~/img/interior/kakarikoGambleGame.png',
    limits: {singleCave: true, blacksmith: true}
  }
  /** DESERT **/
  checkerboardCave = {
    x: 263, y: 1165,
    isSingleCave: true,
    name: 'Checkerboard Cave',
    region: 'desert',
    extImg:'~/img/entrance/checkerboardCave.png',
    intImg:'~/img/interior/checkerboardCave.png',
    limits: {singleCave: true, bombShop: true}
  }
  aginahsCave = {
    x: 298, y: 1241,
    isSingleCave: true,
    name: 'Aginah\'s Cave',
    region: 'desert',
    extImg:'~/img/entrance/aginahsCave.png',
    intImg:'~/img/interior/aginahsCave.png',
    limits:{singleCave: true, blacksmith: true}
  }
  desertFairy = { //desertHealerFairy
    x: 416, y: 1342,
    isSingleCave: true,
    name: 'Desert Fairy',
    region: 'desert',
    extImg:'~/img/entrance/desertFairy.png',
    limits: {singleCave: true, blacksmith: true}
  }
  fiftyRupeeCave = {
    x:468, y:1434,
    isSingleCave: true,
    name: '50 Rupee Cave',
    region: 'desert',
    extImg:'~/img/entrance/fiftyRupeeCave.png',
    intImg:'~/img/interior/fiftyRupeeCave.png',
    limits: {singleCave: true, blacksmith: true}
  }
  /** SOUTH **/
  cave45 = {
    x: 399, y: 1240,
    isSingleCave: true,
    name: 'Cave 45',
    region: 'south',
    extImg: '~/img/entrance/cave45.png',
    intImg: '~/img/interior/cave45.png',
    limits: {singleCave: true, bombShop: true}
  }
  dam = {
    x: 703, y: 1405,
    isSingleCave: true,
    name: 'Dam',
    region: 'south',
    extImg: '~/img/entrance/dam.png',
    intImg: '~/img/interior/dam.png',
    limits:{blacksmith: true, singleCave: true}
  }
  bonkFairyLight = {
    x: 709, y: 978,
    isSingleCave: true,
    name: 'Bonk Fairy (Light)',
    region: 'south',
    extImg:'~/img/entrance/bonkFairyLight.png',
    limits:{bombShop: true, singleCave: true}
  };
  linksHouse = {
    x: 820, y: 1036,
    isSingleCave: true,
    name: 'Link\'s House',
    region: 'south',
    extImg: '~/img/entrance/linksHouse.png',
    limits:{singleCave: true}
  }
  lightHypeFairy = {
    x: 896, y: 1171,
    isSingleCave: true,
    name: 'Light Hype Fairy',
    region: 'south',
    extImg:'~/img/entrance/lightHypeFairy.png',
    limits: {singleCave: true, blacksmith: true}
  }
  lakeHyliaFortuneTeller = {
    x:973, y:1206,
    isSingleCave: true,
    name: 'Lake Hylia Fortune Teller',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaFortuneTeller.png',
    limits: {singleCave: true, blacksmith: true}
  }
  caveShopLakeHylia = {
    x: 1089, y: 1152,
    isSingleCave: true,
    name: 'Cave Shop (Lake Hylia)',
    region: 'south',
    extImg: '~/img/entrance/caveShopLakeHylia.png',
    limits:{singleCave: true, blacksmith: true}
  }
  miniMoldormCave = {
    x: 978, y: 1412,
    isSingleCave: true,
    name: 'Mini Moldorm Cave',
    region: 'south',
    extImg:'~/img/entrance/miniMoldormCave.png',
    intImg:'~/img/interior/miniMoldormCave.png',
    limits: {singleCave: true, bombShop: true}
  }
  capacityUpgrade = {
    x: 1189, y: 1282,
    isSingleCave: true,
    name: 'Capacity Upgrade',
    region: 'south',
    extImg:'~/img/entrance/capacityUpgrade.png',
    limits:{singleCave: true, bombShop: true}
  }
  iceRodCave = {
    x:1342, y:1160,
    isSingleCave: true,
    name: 'Ice Rod Cave',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaLedge.png',
    intImg: '~/img/interior/iceRodCave.png',
    limits: {singleCave: true, blacksmith: true}
  }
  twentyRupeeCave = {
    x:1353, y:1177,
    isSingleCave: true,
    name: '20 Rupee Cave',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaLedge.png',
    intImg: '~/img/interior/twentyRupeeCave.png',
    limits: {singleCave: true, blacksmith: true}
  }
  goodBeeCave = {
    x:1371, y:1160,
    isSingleCave: true,
    name: 'Good Bee Cave',
    region: 'south',
    extImg: '~/img/entrance/lakeHyliaLedge.png',
    intImg: '~/img/interior/iceRodCave.png',
    limits: {singleCave: true, blacksmith: true}
  }
  /** HYRULE CASTLE **/
  hyruleCastleWest = { //hyruleCastleExitWest
    x: 674, y: 584,
    name: 'Hyrule Castle Entrance (West)',
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleWest.png',
    intImg: '~/img/interior/hyruleCastleWest.png',
    limits: {bombShop: true}
  };
  hyruleCastleSouth = { //hyruleCastleExitSouth
    x: 750, y: 662,
    name: 'Hyrule Castle Entrance (South)',
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleSouth.png',
    intImg: '~/img/interior/hyruleCastleSouth.png',
    limits: {bombShop: true}
  }
  hyruleCastleEast = { //hyruleCastleExitEast
    x: 825, y: 584,
    name: 'Hyrule Castle Entrance (East)',
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleEast.png',
    intImg: '~/img/interior/hyruleCastleEast.png',
    limits: {bombShop: true}
  };
  hyruleCastleSecretEntranceDrop = { //hyruleCastleSecretEntranceExit
    x: 893, y: 623,
    isHole:true,
    name: 'Hyrule Castle Secret Entrance Drop',
    extImg: '~/img/entrance/hyruleCastleSecretEntranceDrop.png',
    intImg: '~/img/interior/hyruleCastleSecretEntranceDrop.png',
    region: 'castle',
    limits:{holeDrop: true}
  };
  hyruleCastleSecretEntranceStairs = { //hyruleCastleSecretEntrance
    x: 826, y: 643,
    isHoleExit: true,
    region: 'castle',
    extImg: '~/img/entrance/hyruleCastleSecretEntranceStairs.png',
    intImg: '~/img/interior/hyruleCastleSecretEntranceStairs.png',
    name: 'Hyrule Castle Secret Entrance Stairs',
    limits:{holeEntrance:true, bombShop:true}
  };
  /** NORTH EAST **/
  waterfallOfWishing = {
    x: 1351, y: 206,
    isSingleCave: true,
    name: 'Waterfall of Wishing',
    region: 'northeast',
    extImg:'~/img/entrance/waterfallOfWishing.png',
    intImg:'~/img/interior/waterfallOfWishing.png',
    limits:{bombShop: true, singleCave: true}
  }
  potionShop = {
    x:1201, y:502,
    isSingleCave: true,
    name: 'Potion Shop',
    region: 'northeast',
    extImg:'~/img/entrance/potionShop.png',
    limits: {singleCave: true, blacksmith: true}
  }
  sahasrahlasHut = {
    x: 1215, y: 683,
    isSingleCave: true,
    name: 'Sahasrahla\'s Hut',
    region: 'northeast',
    extImg: '~/img/entrance/sahasrahlasHut.png',
    intImg: '~/img/interior/sahasrahlasHut.png',
    limits:{singleCave: true, blacksmith: true}
  };
  lakeHyliaFairy = {
    x: 1237, y: 973,
    isSingleCave: true,
    name: 'Lake Hylia Fairy',
    region: 'northeast',
    extImg:'~/img/entrance/lakeHyliaFairy.png',
    limits:{singleCave: true, blacksmith: true}
  }

  longFairyCave = {
    x:1471, y:1053,
    isSingleCave: true,
    name: 'Long Fairy Cave',
    region: 'northeast',
    extImg:'~/img/entrance/longFairyCave.png',
    intImg:'~/img/interior/longFairyCave.png',
    limits: {singleCave: true, blacksmith: true}
  }
}

