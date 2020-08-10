export class StaticEntrancesDW {
  /** DUNGEONS **/
  skullWoodsFinalSection = { //skullWoodsFinalSectionExit
    x: 58, y: 77,
    name: 'Skull Woods Final Section',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFinalSection.png',
    intImg: '~/img/interior/skullWoodsFinalSection.png',
    limits: {skullWoods: true, bombShop: true}
  };
  thievesTown = { //thievesTownExit
    x: 187, y: 730,
    name: 'Thieves Town',
    region: 'dungeon',
    extImg: '~/img/entrance/thievesTown.png',
    intImg: '~/img/interior/thievesTown.png',
    limits: {bombShop: true}
  };
  miseryMire = { //miseryMireExit
    x: 111, y: 1209,
    name: 'Misery Mire',
    region: 'dungeon',
    extImg: '~/img/entrance/miseryMire.png',
    intImg: '~/img/interior/miseryMire.png',
    limits: {bombShop: true}
  };
  swampPalace = { //swampPalaceExit
    x: 703, y: 1406,
    name: 'Swamp Palace',
    region: 'dungeon',
    extImg: '~/img/entrance/swampPalace.png',
    intImg: '~/img/interior/swampPalace.png',
    limits: {bombShop: true}
  };
  icePalace = { //icePalaceExit
    x: 1195, y: 1294,
    name: 'Ice Palace',
    region: 'dungeon',
    extImg: '~/img/entrance/icePalace.png',
    intImg: '~/img/interior/icePalace.png',
    limits: {bombShop: true}
  };
  turtleRock = { //turtleRockExitFront
    x: 1412, y: 124,
    name: 'Turtle Rock',
    region: 'dungeon',
    extImg: '~/img/entrance/turtleRock.png',
    intImg: '~/img/interior/turtleRock.png',
    limits: {bombShop: true}
  };
  darkDeathMtnLedgeWest = { //turtleRockExitWest
    x: 1195, y: 140,
    name: 'Dark Death Mountain Ledge (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/darkDeathMtnLedgeWest.png',
    intImg: '~/img/interior/darkDeathMtnLedgeWest.png',
    limits: {bombShop: true, mustExit: true}
  };
  darkDeathMtnLedgeEast = { //turtleRockExitEast
    x: 1266, y: 140,
    name: 'Dark Death Mountain Ledge (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/darkDeathMtnLedgeEast.png',
    intImg: '~/img/interior/darkDeathMtnLedgeEast.png',
    limits: {bombShop: true, mustExit: true}
  };
  turtleRockIsolatedLedgeEntrance = { //turtleRockIsolatedLedgeExit
    x: 1231, y: 173,
    name: 'Turtle Rock Isolated Ledge Entrance',
    region: 'dungeon',
    extImg: '~/img/entrance/turtleRockIsolatedLedgeEntrance.png',
    intImg: '~/img/interior/turtleRockIsolatedLedgeEntrance.png',
    limits: {mustExit: true}
  };
  palaceOfDarkness = { //palaceOfDarknessExit
    x: 1439, y: 592,
    name: 'Palace of Darkness',
    region: 'dungeon',
    extImg: '~/img/entrance/palaceOfDarkness.png',
    intImg: '~/img/interior/palaceOfDarkness.png',
    limits: {bombShop: true}
  };
  ganonTower = { //ganonTowerExit
    x: 844, y: 30,
    name: 'Ganon\'s Tower',
    region: 'dungeon',
    extImg: '~/img/entrance/ganonTower.png',
    intImg: '~/img/interior/ganonTower.png',
    limits: {bombShop: true}
  };
  /** DEATH MOUNTAIN **/
  darkDeathMtnFairy = { //darkDeathMtnHealerFairy
    x: 609, y: 287,
    isSingleCave: true,
    name: 'Dark Death Mountain Fairy',
    region: 'deathmtn',
    extImg: '~/img/entrance/darkDeathMtnFairy.png',
    intImg:'~/img/interior/singleFairyCave.png',
    limits: {singleCave: true}
  }
  spikeCave = {
    x: 862, y: 221,
    isSingleCave: true,
    name: 'Spike Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/spikeCave.png',
    intImg: '~/img/interior/spikeCave.png',
    limits: {singleCave: true, bombShop: true}
  };
  hookshotCaveBackEntrance = { //hookshotCaveExitNorth
    x: 1201, y: 24,
    name: 'Hookshot Cave Back Entrance',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotCaveBackEntrance.png',
    intImg: '~/img/interior/hookshotCaveBackEntrance.png',
    limits: {mustExit: true, twoDoorCave: true}
  }
  hookshotCave = { //hookshotCaveExitSouth
    x: 1248, y: 99,
    name: 'Hookshot Cave',
    region: 'deathmtn',
    extImg: '~/img/entrance/hookshotCave.png',
    intImg: '~/img/interior/hookshotCave.png',
    limits: {twoDoorCave: true, bombShop: true}
  }
  caveShopDarkDeathMtn = {
    x: 1266, y: 222,
    isSingleCave: true,
    name: 'Cave Shop (Dark Death Mountain)',
    region: 'deathmtn',
    extImg: '~/img/entrance/superBunnyCaveBottom.png',
    intImg: '~/img/interior/caveShopDarkDeathMtn.png',
    limits: {singleCave: true, bombShop: true}
  }
  superBunnyCaveTop = { //superBunnyCaveExitTop
    x: 1289, y: 97,
    name: 'Superbunny Cave (Top)',
    region: 'deathmtn',
    extImg: '~/img/entrance/superBunnyCaveTop.png',
    intImg: '~/img/interior/superBunnyCaveTop.png',
    limits: {twoDoorCave: true, bombShop: true}
  }
  superBunnyCaveBottom = { //superBunnyCaveExitBottom
    x: 1283, y: 221,
    name: 'Superbunny Cave (Bottom)',
    region: 'deathmtn',
    extImg: '~/img/entrance/superBunnyCaveBottom.png',
    intImg: '~/img/interior/superBunnyCaveBottom.png',
    limits: {twoDoorCave: true, bombShop: true}
  };
  /** NORTH WEST **/
  darkWorldLumberjackShop = {
    x: 504, y: 88,
    isSingleCave: true,
    name: 'Dark World Lumberjack Shop',
    region: 'northwest',
    extImg: '~/img/entrance/darkWorldLumberjackShop.png',
    intImg: '~/img/interior/darkWorldLumberjackShop.png',
    limits: {singleCave: true, bombShop: true}
  }
  bumperCaveTop = { //bumperCaveExitTop
    x: 539, y: 233,
    name: 'Bumper Cave (Top)',
    region: 'northwest',
    extImg: '~/img/entrance/bumperCave.png',
    intImg: '~/img/interior/bumperCaveTop.png',
    limits: {mustExit: true, twoDoorCave: true}
  }
  bumperCaveBottom = { //bumperCaveExitBottom
    x: 533, y: 267,
    name: 'Bumper Cave (Bottom)',
    region: 'northwest',
    extImg: '~/img/entrance/bumperCave.png',
    intImg: '~/img/interior/bumperCaveBottom.png',
    limits: {bombShop: true, twoDoorCave: true}
  };
  fortuneTellerDark = {
    x: 281, y: 487,
    isSingleCave: true,
    name: 'Fortune Teller (Dark)',
    region: 'northwest',
    extImg: '~/img/entrance/fortuneTellerDark.png',
    intImg: '~/img/interior/fortuneTellerDark.png',
    limits: {singleCave: true, bombShop: true}
  }
  redShieldShop = {
    x: 498, y: 691,
    isSingleCave: true,
    name: 'Red Shield Shop',
    region: 'northwest',
    extImg: '~/img/entrance/redShieldShop.png',
    intImg: '~/img/interior/redShieldShop.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkSanctuaryHint = {
    x: 692, y: 416,
    isSingleCave: true,
    name: 'Dark Sanctuary Hint',
    region: 'northwest',
    extImg: '~/img/entrance/darkSanctuaryHint.png',
    intImg: '~/img/interior/darkSanctuaryHint.png',
    limits: {singleCave: true, bombShop: true}
  }
  /** VILLAGE **/
  chestGame = {
    x: 76, y: 702,
    isSingleCave: true,
    name: 'Chest Game',
    region: 'village',
    extImg: '~/img/entrance/chestGame.png',
    intImg: '~/img/interior/chestGame.png',
    limits: {singleCave: true, bombShop: true}
  }
  cShapedHouse = {
    x: 310, y: 726,
    isSingleCave: true,
    name: 'C-Shaped House',
    region: 'village',
    extImg: '~/img/entrance/cShapedHouse.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldShop = {
    x: 304, y: 802,
    isSingleCave: true,
    name: 'Dark World Outcast Shop',
    region: 'village',
    extImg: '~/img/entrance/darkWorldShop.png',
    limits: {singleCave: true}
  }
  brewery = {
    x: 163, y: 878,
    isSingleCave: true,
    name: 'Brewery',
    region: 'village',
    extImg: '~/img/entrance/brewery.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldHammerPegCave = {
    x: 474, y: 908,
    isSingleCave: true,
    name: 'Dark World Hammer Peg Cave',
    region: 'village',
    extImg: '~/img/entrance/darkWorldHammerPegCave.png',
    limits: {singleCave: true, bombShop: true}
  }
  archeryGame = {
    x: 322, y: 1055,
    isSingleCave: true,
    name: 'Archery Game',
    region: 'village',
    extImg: '~/img/entrance/archeryGame.png',
    limits: {singleCave: true, bombShop: true}
  }
  /** MIRE **/
  mireShed = {
    x: 59, y: 1205,
    isSingleCave: true,
    name: 'Mire Shed',
    region: 'mire',
    extImg: '~/img/entrance/mireShed.png',
    intImg: '~/img/interior/mireShed.png',
    limits: {singleCave: true, bombShop: true}
  }
  mireFairy = { //mireHealerFairy
    x: 164, y: 1202,
    isSingleCave: true,
    name: 'Mire Fairy', //'Dark Desert Fairy'
    region: 'mire',
    extImg: '~/img/entrance/mireFairy.png',
    limits: {singleCave: true}
  }
  mireHint = {
    x: 298, y: 1241,
    isSingleCave: true,
    name: 'Mire Hint', //'Dark Desert Hint'
    region: 'mire',
    extImg: '~/img/entrance/mireHint.png',
    limits: {singleCave: true, bombShop: true}
  }
  /** SOUTH **/
  bonkFairyDark = { //swampHealerFairy
    x: 709, y: 977,
    isSingleCave: true,
    name: 'Bonk Fairy (Dark)',
    region: 'south',
    extImg: '~/img/entrance/bonkFairyDark.png',
    limits: {singleCave: true, bombShop: true}
  }
  bigBombShop = {
    x: 820, y: 1036,
    isSingleCave: true,
    name: 'Big Bomb Shop',
    region: 'south',
    extImg: '~/img/entrance/bigBombShop.png',
    limits: {singleCave: true, bombShop: true}
  }
  hypeCave = {
    x: 896, y: 1168,
    isSingleCave: true,
    name: 'Hype Cave',
    region: 'south',
    extImg: '~/img/entrance/hypeCave.png',
    intImg: '~/img/interior/hypeCave.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaShop = {
    x: 972, y: 1207,
    isSingleCave: true,
    name: 'Dark Lake Hylia Shop',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaShop.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaLedgeFairy = { //darkLakeHyliaLedgeHealerFairy
    x: 1342, y: 1158,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Fairy',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaLedge.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaLedgeHint = {
    x: 1353, y: 1178,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Hint',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaLedge.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaSpikeCave = {
    x: 1371, y: 1158,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Spike Cave',
    region: 'south',
    extImg: '~/img/entrance/darkLakeHyliaLedge.png',
    limits: {singleCave: true, bombShop: true}
  }
  /** NORTH EAST **/
  pyramidHole = { //pyramid //not sure how this one is handled
    x: 747, y: 612,
    isHole: true,
    name: 'Pyramid Hole',
    region: 'northeast',
    extImg: '~/img/entrance/pyramidHole.png',
    limits: {holeEntrance: true}
  };
  pyramidEntrance = { //pyramidExit
    x: 650, y: 732,
    isHoleExit: true,
    name: 'Pyramid Entrance',
    region: 'northeast',
    extImg: '~/img/entrance/pyramidEntrance.png', limits: {}
  }
  pyramidFairy = { //TODO: only item in Singe_Cave_Doors in code, need to investigate.
    x: 703, y: 731,
    isSingleCave: true,
    name: 'Pyramid Fairy',
    region: 'northeast',
    extImg: '~/img/entrance/pyramidFairy.png',
    limits: {singleCave: true}
  };
  darkWorldPotionShop = {
    x: 1207, y: 509,
    isSingleCave: true,
    name: 'Dark World Potion Shop',
    region: 'northeast',
    extImg: '~/img/entrance/darkWorldPotionShop.png',
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaFairy = { //darkLakeHyliaHealerFairy
    x: 1236, y: 972,
    isSingleCave: true,
    name: 'Dark Lake Hylia Fairy',
    region: 'northeast',
    extImg: '~/img/entrance/darkLakeHyliaFairy.png',
    limits: {singleCave: true, bombShop: true}
  }
  palaceOfDarknessHint = {
    x: 1274, y: 758,
    isSingleCave: true,
    name: 'Palace of Darkness Hint',
    region: 'northeast',
    extImg: '~/img/entrance/palaceOfDarknessHint.png',
    limits: {singleCave: true, bombShop: true}
  }
  eastDarkWorldHint = {
    x: 1470, y: 1054,
    isSingleCave: true,
    name: 'East Dark World Hint',
    region: 'northeast',
    extImg: '~/img/entrance/eastDarkWorldHint.png',
    limits: {singleCave: true, bombShop: true}
  };
  /** SKULL WOODS **/
  skullWoodsSecondSectionDoorWest = { //skullWoodsSecondSectionExitWest
    x: 88, y: 196,
    isHoleExit: true,
    name: 'Skull Woods Second Section Door (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsSecondSectionDoorWest.png',
    intImg: '~/img/interior/skullWoodsSecondSectionDoorWest.png',
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsSecondSectionDoorEast = { //skullWoodsSecondSectionExitEast
    x: 217, y: 221,
    isHoleExit: true,
    name: 'Skull Woods Second Section Door (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsSecondSectionDoorEast.png',
    intImg: '~/img/interior/skullWoodsSecondSectionDoorEast.png',
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsFirstSectionDoor = { //skullWoodsFirstSectionExit
    x: 275, y: 224,
    isHoleExit: true,
    name: 'Skull Woods First Section Door',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionDoor.png',
    intImg: '~/img/interior/skullWoodsFirstSectionDoor.png',
    limits: {skullWoods: true, bombShop: true}
  };
  //HOLES
  skullWoodsFirstSectionHoleWest = {
    x: 293, y: 252,
    isHole: true,
    name: 'Skull Woods First Section Hole (West)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionHoleWest.png',
    intImg: '~/img/interior/skullWoodsFirstSectionHoleWest.png',
    limits: {holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleEast = {
    x: 234, y: 263,
    isHole: true,
    name: 'Skull Woods First Section Hole (East)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionHoleEast.png',
    intImg: '~/img/interior/skullWoodsFirstSectionHoleEast.png',
    limits: {holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleNorth = {
    x: 284, y: 197,
    isHole: true,
    name: 'Skull Woods First Section Hole (North)',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsFirstSectionHoleNorth.png',
    intImg: '~/img/interior/skullWoodsFirstSectionHoleNorth.png',
    limits: {holeEntrance: true, skullWoods: true}
  };
  skullWoodsSecondSectionHole = {
    x: 181, y: 135,
    isHole: true,
    name: 'Skull Woods Second Section Hole',
    region: 'dungeon',
    extImg: '~/img/entrance/skullWoodsSecondSectionHole.png',
    intImg: '~/img/interior/skullWoodsSecondSectionHole.png',
    limits: {holeEntrance: true, skullWoods: true}
  };
}
