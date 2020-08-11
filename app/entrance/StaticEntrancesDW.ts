export class StaticEntrancesDW {
  /** DUNGEONS **/
  skullWoodsFinalSection = { //skullWoodsFinalSectionExit
    x: 58, y: 77,
    isSingleEntranceDungeon: true,
    name: 'Skull Woods Final Section',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFinalSection.png',
    intImg: '~/img/interior/skullWoodsFinalSection.png',
  };
  thievesTown = { //thievesTownExit
    x: 187, y: 730,
    isSingleEntranceDungeon: true,
    name: 'Thieves Town',
    region: 'dungeon',
    extImg: '~/img/entrance/thievesTown.png',
    intImg: '~/img/interior/thievesTown.png',
  };
  miseryMire = { //miseryMireExit
    x: 111, y: 1209,
    isSingleEntranceDungeon: true,
    name: 'Misery Mire',
    region: 'dungeon',
    extImg: '~/img/entrance/miseryMire.png',
    intImg: '~/img/interior/miseryMire.png',
  };
  swampPalace = { //swampPalaceExit
    x: 703, y: 1406,
    isSingleEntranceDungeon: true,
    name: 'Swamp Palace',
    region: 'dungeon',
    extImg: '~/img/entrance/swampPalace.png',
    intImg: '~/img/interior/swampPalace.png',
  };
  icePalace = { //icePalaceExit
    x: 1195, y: 1294,
    isSingleEntranceDungeon: true,
    name: 'Ice Palace',
    region: 'dungeon',
    extImg: '~/img/entrance/icePalace.png',
    intImg: '~/img/interior/icePalace.png',
  };
  turtleRock = { //turtleRockExitFront
    x: 1412, y: 124,
    isMultiEntranceDungeon: true,
    multiDir:'south',
    name: 'Turtle Rock',
    region: 'dungeon',
    extImg: '~/img/entrance/turtleRock.png',
    intImg: '~/img/interior/turtleRock.png',
  };
  darkDeathMtnLedgeWest = { //turtleRockExitWest
    x: 1195, y: 140,
    isMultiEntranceDungeon: true,
    multiDir:'west',
    name: 'Dark Death Mountain Ledge (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/darkDeathMtnLedgeWest.png',
    intImg: '~/img/interior/darkDeathMtnLedgeWest.png',
  };
  darkDeathMtnLedgeEast = { //turtleRockExitEast
    x: 1266, y: 140,
    multiDir:'north',
    isMultiEntranceDungeon: true,
    name: 'Dark Death Mountain Ledge (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/darkDeathMtnLedgeEast.png',
    intImg: '~/img/interior/darkDeathMtnLedgeEast.png',
  };
  turtleRockIsolatedLedgeEntrance = { //turtleRockIsolatedLedgeExit
    x: 1231, y: 173,
    multiDir:'east',
    isMultiEntranceDungeon: true,
    name: 'Turtle Rock Isolated Ledge Entrance',
    region: 'dungeon',
    extImg: '~/img/entrance/turtleRockIsolatedLedgeEntrance.png',
    intImg: '~/img/interior/turtleRockIsolatedLedgeEntrance.png',
  };
  palaceOfDarkness = { //palaceOfDarknessExit
    x: 1439, y: 592,
    isSingleEntranceDungeon: true,
    name: 'Palace of Darkness',
    region: 'dungeon',
    extImg: '~/img/entrance/palaceOfDarkness.png',
    intImg: '~/img/interior/palaceOfDarkness.png',
  };
  ganonTower = { //ganonTowerExit
    x: 844, y: 30,
    isSingleEntranceDungeon: true,
    name: 'Ganon\'s Tower',
    region: 'dungeon',
    extImg: '~/img/entrance/ganonTower.png',
    intImg: '~/img/interior/ganonTower.png',
  };
  /** DEATH MOUNTAIN **/
  darkDeathMtnFairy = { //darkDeathMtnHealerFairy
    x: 609, y: 287,
    isSingleCave: true,
    name: 'Dark Death Mountain Fairy',
    region: 'deathmtn',
    extImg: '~/img/entrance/darkDeathMtnFairy.png',
    intImg:'~/img/interior/singleFairyCave.png',
  }
  spikeCave = {
    x: 862, y: 221,
    isSingleCave: true,
    name: 'Spike Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/spikeCave.png',
    intImg: '~/img/interior/spikeCave.png',
  };
  hookshotCaveBackEntrance = { //hookshotCaveExitNorth
    x: 1201, y: 24,
    isMultiCave: true,
    name: 'Hookshot Cave Back Entrance',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotCaveBackEntrance.png',
    intImg: '~/img/interior/hookshotCaveBackEntrance.png',
  }
  hookshotCave = { //hookshotCaveExitSouth
    x: 1248, y: 99,
    isMultiCave: true,
    name: 'Hookshot Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotCave.png',
    intImg: '~/img/interior/hookshotCave.png',
  }
  caveShopDarkDeathMtn = {
    x: 1266, y: 222,
    isSingleCave: true,
    name: 'Cave Shop (Dark Death Mountain)',
    region: 'deathmtn',
    extImg: '~/img/entrance/superBunnyCaveBottom.png',
    intImg: '~/img/interior/caveShopDarkDeathMtn.png',
  }
  superBunnyCaveTop = { //superBunnyCaveExitTop
    x: 1289, y: 97,
    isMultiCave: true,
    name: 'Superbunny Cave (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/superBunnyCaveTop.png',
    intImg: '~/img/interior/superBunnyCaveTop.png',
  }
  superBunnyCaveBottom = { //superBunnyCaveExitBottom
    x: 1283, y: 221,
    isMultiCave: true,
    name: 'Superbunny Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/superBunnyCaveBottom.png',
    intImg: '~/img/interior/superBunnyCaveBottom.png',
  };
  /** NORTH WEST **/
  darkWorldLumberjackShop = {
    x: 504, y: 88,
    isSingleCave: true,
    name: 'Dark World Lumberjack Shop',
    region: 'northwest',
    extImg: '~/img/entrance/darkWorldLumberjackShop.png',
    intImg: '~/img/interior/darkWorldLumberjackShop.png',
  }
  bumperCaveTop = { //bumperCaveExitTop
    x: 539, y: 233,
    isMultiCave: true,
    name: 'Bumper Cave (Top)',
    region: 'northwest',
    extImg: '~/img/entrance/bumperCave.png',
    intImg: '~/img/interior/bumperCaveTop.png',
  }
  bumperCaveBottom = { //bumperCaveExitBottom
    x: 533, y: 267,
    isMultiCave: true,
    name: 'Bumper Cave (Bottom)',
    region: 'northwest',
    extImg: '~/img/entrance/bumperCave.png',
    intImg: '~/img/interior/bumperCaveBottom.png',
  };
  fortuneTellerDark = {
    x: 281, y: 487,
    isSingleCave: true,
    name: 'Fortune Teller (Dark)',
    region: 'northwest',
    extImg: '~/img/entrance/fortuneTellerDark.png',
    intImg: '~/img/interior/fortuneTellerDark.png',
  }
  redShieldShop = {
    x: 498, y: 691,
    isSingleCave: true,
    name: 'Red Shield Shop',
    region: 'northwest',
    extImg: '~/img/entrance/redShieldShop.png',
    intImg: '~/img/interior/redShieldShop.png',
  }
  darkSanctuaryHint = {
    x: 692, y: 416,
    isSingleCave: true,
    name: 'Dark Sanctuary Hint',
    region: 'northwest',
    extImg: '~/img/entrance/darkSanctuaryHint.png',
    intImg: '~/img/interior/darkSanctuaryHint.png',
  }
  /** VILLAGE **/
  chestGame = {
    x: 76, y: 702,
    isSingleCave: true,
    name: 'Chest Game',
    region: 'village',
    extImg: '~/img/entrance/chestGame.png',
    intImg: '~/img/interior/chestGame.png',
  }
  cShapedHouse = {
    x: 310, y: 726,
    isSingleCave: true,
    name: 'C-Shaped House',
    region: 'village',
    extImg: '~/img/entrance/cShapedHouse.png',
    intImg: '~/img/interior/cShapedHouse.png',
  }
  darkWorldShop = {
    x: 304, y: 802,
    isSingleCave: true,
    name: 'Dark World Outcast Shop',
    region: 'village',
    extImg: '~/img/entrance/darkWorldShop.png',
    intImg: '~/img/interior/darkWorldShop.png',
  }
  brewery = {
    x: 163, y: 878,
    isSingleCave: true,
    name: 'Brewery',
    region: 'village',
    extImg: '~/img/entrance/brewery.png',
    intImg: '~/img/interior/brewery.png',
  }
  darkWorldHammerPegCave = {
    x: 474, y: 908,
    isSingleCave: true,
    name: 'Dark World Hammer Peg Cave',
    region: 'village',
    extImg: '~/img/entrance/darkWorldHammerPegCave.png',
    intImg: '~/img/interior/darkWorldHammerPegCave.png',
  }
  archeryGame = {
    x: 322, y: 1055,
    isSingleCave: true,
    name: 'Archery Game',
    region: 'village',
    extImg: '~/img/entrance/archeryGame.png',
    intImg: '~/img/interior/archeryGame.png',
  }
  /** MIRE **/
  mireShed = {
    x: 59, y: 1205,
    isSingleCave: true,
    name: 'Mire Shed',
    region: 'mire',
    extImg: '~/img/entrance/mireShed.png',
    intImg: '~/img/interior/mireShed.png',
  }
  mireFairy = { //mireHealerFairy
    x: 164, y: 1202,
    isSingleCave: true,
    name: 'Mire Fairy', //'Dark Desert Fairy'
    region: 'mire',
    extImg: '~/img/entrance/mireFairy.png',
    intImg:'~/img/interior/singleFairyCave.png',
  }
  mireHint = {
    x: 298, y: 1241,
    isSingleCave: true,
    name: 'Mire Hint', //'Dark Desert Hint'
    region: 'mire',
    extImg: '~/img/entrance/mireHint.png',
    intImg: '~/img/interior/mireHint.png',
  }
  /** SOUTH **/
  bonkFairyDark = { //swampHealerFairy
    x: 709, y: 977,
    isSingleCave: true,
    name: 'Bonk Fairy (Dark)',
    region: 'south',
    extImg: '~/img/entrance/bonkFairyDark.png',
    intImg: '~/img/interior/bonkFairyLight.png',
  }
  bigBombShop = {
    x: 820, y: 1036,
    isSingleCave: true,
    name: 'Big Bomb Shop',
    region: 'south',
    extImg: '~/img/entrance/bigBombShop.png',
    intImg: '~/img/interior/bigBombShop.png',
  }
  hypeCave = {
    x: 896, y: 1168,
    isSingleCave: true,
    name: 'Hype Cave',
    region: 'south',
    extImg: '~/img/entrance/hypeCave.png',
    intImg: '~/img/interior/hypeCave.png',
  }
  darkLakeHyliaShop = {
    x: 972, y: 1207,
    isSingleCave: true,
    name: 'Dark Lake Hylia Shop',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaShop.png',
    intImg: '~/img/interior/darkWorldPotionShop.png',
  }
  darkLakeHyliaLedgeFairy = { //darkLakeHyliaLedgeHealerFairy
    x: 1342, y: 1158,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Fairy',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaLedge.png',
    intImg: '~/img/interior/singleFairyCave.png',
  }
  darkLakeHyliaLedgeHint = {
    x: 1353, y: 1178,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Hint',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaLedge.png',
    intImg: '~/img/interior/darkLakeHyliaLedgeHint.png',
  }
  darkLakeHyliaSpikeCave = {
    x: 1371, y: 1158,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Spike Cave',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaLedge.png',
    intImg: '~/img/interior/darkLakeHyliaSpikeCave.png',
  }
  /** NORTH EAST **/
  pyramidHole = { //pyramid //not sure how this one is handled
    x: 747, y: 612,
    isHole: true,
    name: 'Pyramid Hole',
    region: 'northeast',
    extImg: '~/img/entrance/pyramidHole.png',
    intImg: '~/img/interior/pyramidHole.png',
  };
  pyramidEntrance = { //pyramidExit
    x: 650, y: 732,
    isHoleExit: true,
    name: 'Pyramid Entrance',
    region: 'northeast',
    extImg: '~/img/entrance/pyramidEntrance.png',
    intImg: '~/img/interior/pyramidEntrance.png',
  }
  pyramidFairy = { //TODO: only item in Singe_Cave_Doors in code, need to investigate.
    x: 703, y: 731,
    isSingleCave: true,
    name: 'Pyramid Fairy',
    region: 'northeast',
    extImg: '~/img/entrance/pyramidFairy.png',
    intImg: '~/img/interior/pyramidFairy.png',
  };
  darkWorldPotionShop = {
    x: 1207, y: 509,
    isSingleCave: true,
    name: 'Dark World Potion Shop',
    region: 'northeast',
    extImg: '~/img/entrance/darkWorldPotionShop.png',
    intImg: '~/img/interior/darkWorldPotionShop.png',
  }
  darkLakeHyliaFairy = { //darkLakeHyliaHealerFairy
    x: 1236, y: 972,
    isSingleCave: true,
    name: 'Dark Lake Hylia Fairy',
    region: 'northeast',
    extImg: '~/img/entrance/darkLakeHyliaFairy.png',
    intImg:'~/img/interior/singleFairyCave.png',
  }
  palaceOfDarknessHint = {
    x: 1274, y: 758,
    isSingleCave: true,
    name: 'Palace of Darkness Hint',
    region: 'northeast',
    extImg: '~/img/entrance/palaceOfDarknessHint.png',
    intImg: '~/img/interior/palaceOfDarknessHint.png',
  }
  eastDarkWorldHint = {
    x: 1470, y: 1054,
    isSingleCave: true,
    name: 'East Dark World Hint',
    region: 'northeast',
    extImg: '~/img/entrance/eastDarkWorldHint.png',
    intImg: '~/img/interior/eastDarkWorldHint.png',
  };
  /** SKULL WOODS **/
  skullWoodsSecondSectionDoorWest = { //skullWoodsSecondSectionExitWest
    x: 88, y: 196,
    isHoleExit: true,
    isSkullWoods: true,
    name: 'Skull Woods Second Section Door (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsSecondSectionDoorWest.png',
    intImg: '~/img/interior/skullWoodsSecondSectionDoorWest.png',
  };
  skullWoodsSecondSectionDoorEast = { //skullWoodsSecondSectionExitEast
    x: 217, y: 221,
    isHoleExit: true,
    isSkullWoods: true,
    name: 'Skull Woods Second Section Door (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsSecondSectionDoorEast.png',
    intImg: '~/img/interior/skullWoodsSecondSectionDoorEast.png',
  };
  skullWoodsFirstSectionDoor = { //skullWoodsFirstSectionExit
    x: 275, y: 224,
    isHoleExit: true,
    isSkullWoods: true,
    name: 'Skull Woods First Section Door',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionDoor.png',
    intImg: '~/img/interior/skullWoodsFirstSectionDoor.png',
  };
  //HOLES
  skullWoodsFirstSectionHoleWest = {
    x: 293, y: 252,
    isHole: true,
    isSkullWoods: true,
    name: 'Skull Woods First Section Hole (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionHoleWest.png',
    intImg: '~/img/interior/skullWoodsFirstSectionHoleWest.png',
  };
  skullWoodsFirstSectionHoleEast = {
    x: 234, y: 263,
    isHole: true,
    isSkullWoods: true,
    name: 'Skull Woods First Section Hole (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionHoleEast.png',
    intImg: '~/img/interior/skullWoodsFirstSectionHoleEast.png',
  };
  skullWoodsFirstSectionHoleNorth = {
    x: 284, y: 197,
    isHole: true,
    isSkullWoods: true,
    name: 'Skull Woods First Section Hole (North)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionHoleNorth.png',
    intImg: '~/img/interior/skullWoodsFirstSectionHoleNorth.png',
  };
  skullWoodsSecondSectionHole = {
    x: 181, y: 135,
    isHole: true,
    isSkullWoods: true,
    name: 'Skull Woods Second Section Hole',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsSecondSectionHole.png',
    intImg: '~/img/interior/skullWoodsSecondSectionHole.png',
  };
}
