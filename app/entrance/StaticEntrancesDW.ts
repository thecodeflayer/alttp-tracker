import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesDW {
  thievesTown ={ //thievesTownExit
    x:187, y:730,
    name: 'Thieves Town',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  icePalace = { //icePalaceExit
    x: 1195, y: 1294,
    name: 'Ice Palace',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  miseryMire = { //miseryMireExit
    x: 111, y: 1209,
    name: 'Misery Mire',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  palaceOfDarkness = { //palaceOfDarknessExit
    x: 1439, y: 592,
    name: 'Palace of Darkness',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  swampPalace = { //swampPalaceExit
    x: 703, y: 1406,
    name: 'Swamp Palace',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  turtleRock = { //turtleRockExitFront
    x: 1412, y: 124,
    name: 'Turtle Rock',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  darkDeathMtnLedgeWest = { //turtleRockExitWest
    x: 1195, y: 140,
    name: 'Dark Death Mountain Ledge (West)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true, mustExit: true}
  };
  darkDeathMtnLedgeEast = { //turtleRockExitEast
    x: 1266, y: 140,
    name: 'Dark Death Mountain Ledge (East)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, mustExit: true}
  };
  turtleRockIsolatedLedgeEntrance= { //turtleRockIsolatedLedgeExit
    x: 1231, y: 173,
    name: 'Turtle Rock Isolated Ledge Entrance',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  };
  bumperCaveBottom = { //bumperCaveExitBottom
    x: 533, y: 267,
    name: 'Bumper Cave (Bottom)',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, twoDoorCave: true}
  };
  bumperCaveTop = { //bumperCaveExitTop
    x: 539, y: 233,
    name: 'Bumper Cave (Top)',
    region: 'northwest',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true, twoDoorCave: true}
  }
  superBunnyCaveTop = { //superBunnyCaveExitTop
    x: 1289, y: 97,
    name: 'Superbunny Cave (Top)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  superBunnyCaveBottom = { //superBunnyCaveExitBottom
    x: 1283, y: 221,
    name: 'Superbunny Cave (Bottom)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  hookshotCave = { //hookshotCaveExitSouth
    x: 1248, y: 99,
    name: 'Hookshot Cave',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  hookshotCaveBackEntrance = { //hookshotCaveExitNorth
    x: 1201, y: 24,
    name: 'Hookshot Cave Back Entrance',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {mustExit: true, twoDoorCave: true}
  }
  ganonTower = { //ganonTowerExit
    x: 844, y: 30,
    name: 'Ganon\'s Tower',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  pyramidEntrance = { //pyramidExit
    x: 650, y: 732,
    name: 'Pyramid Entrance',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{}
  }
  pyramidHole = { //pyramid //not sure how this one is handled
    x: 747, y: 612,
    isHole: true,
    name: 'Pyramid Hole',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true}
  };
  pyramidFairy = { //TODO: only item in Singe_Cave_Doors in code, need to investigate.
    x: 703, y: 731,
    isSingleCave: true,
    name: 'Pyramid Fairy',
    region: 'northeast',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true}
  };
  eastDarkWorldHint = {
    x:1470, y:1054,
    isSingleCave: true,
    name: 'East Dark World Hint',
    region: 'northeast',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  palaceOfDarknessHint = {
    x: 1274, y: 758,
    isSingleCave: true,
    name: 'Palace of Darkness Hint',
    region: 'northeast',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaFairy = { //darkLakeHyliaHealerFairy
    x:1236, y:972,
    isSingleCave: true,
    name: 'Dark Lake Hylia Fairy',
    region: 'south',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaLedgeFairy = { //darkLakeHyliaLedgeHealerFairy
    x:1342, y:1158,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Fairy',
    region: 'south',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaSpikeCave = {
    x:1371, y:1158,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Spike Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaLedgeHint = {
    x:1353, y:1178,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Hint',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  hypeCave = {
    x: 896, y: 1168,
    isSingleCave: true,
    name: 'Hype Cave',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  bonkFairyDark = { //swampHealerFairy
    x:709, y:977,
    isSingleCave: true,
    name: 'Bonk Fairy (Dark)',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  brewery = {
    x: 163, y: 878,
    isSingleCave: true,
    name: 'Brewery',
    region: 'village',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  cShapedHouse = {
    x: 310, y: 726,
    isSingleCave: true,
    name: 'C-Shaped House',
    region: 'village',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  chestGame = {
    x: 76, y: 702,
    isSingleCave: true,
    name: 'Chest Game',
    region: 'village',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldHammerPegCave = {
    x: 474, y: 908,
    isSingleCave: true,
    name: 'Dark World Hammer Peg Cave',
    region: 'village',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  redShieldShop = {
    x: 498, y: 691,
    isSingleCave: true,
    name: 'Red Shield Shop',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkSanctuaryHint = {
    x:692, y:416,
    isSingleCave: true,
    name: 'Dark Sanctuary Hint',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  fortuneTellerDark = {
    x:281, y:487,
    isSingleCave: true,
    name: 'Fortune Teller (Dark)',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldShop = {
    x:304, y:802,
    isSingleCave: true,
    name: 'Dark World Outcast Shop',
    region: 'village',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true}
  }
  darkWorldLumberjackShop = {
    x:504, y:88,
    isSingleCave: true,
    name: 'Dark World Lumberjack Shop',
    region: 'northwest',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldPotionShop = {
    x:1207, y:509,
    isSingleCave: true,
    name: 'Dark World Potion Shop',
    region: 'northeast',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  archeryGame = {
    x:322, y:1055,
    isSingleCave: true,
    name: 'Archery Game',
    region: 'village',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireShed = {
    x: 59, y: 1205,
    isSingleCave: true,
    name: 'Mire Shed',
    region: 'mire',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireHint = {
    x:298, y:1241,
    isSingleCave: true,
    name: 'Mire Hint', //'Dark Desert Hint'
    region: 'mire',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireFairy = { //mireHealerFairy
    x:164, y:1202,
    isSingleCave: true,
    name: 'Mire Fairy', //'Dark Desert Fairy'
    region: 'mire',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  spikeCave = {
    x: 862, y: 221,
    isSingleCave: true,
    name: 'Spike Cave',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  caveShopDarkDeathMtn = {
    x:1266, y:222,
    isSingleCave: true,
    name: 'Cave Shop (Dark Death Mountain)',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkDeathMtnFairy = { //darkDeathMtnHealerFairy
    x:609, y:287,
    isSingleCave: true,
    name: 'Dark Death Mountain Fairy',
    region: 'deathmtn',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  bigBombShop = {
    x: 820, y: 1036,
    isSingleCave: true,
    name: 'Big Bomb Shop',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaShop = {
    x:972, y:1207,
    isSingleCave: true,
    name: 'Dark Lake Hylia Shop',
    region: 'south',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  // thievesTownExit = {
  //   x: -20, y: -20,
  //   name: 'Thieves Town Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // palaceOfDarknessExit = {
  //   x: -20, y: -20,
  //   name: 'Palace of Darkness Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // swampPalaceExit = {
  //   x: -20, y: -20,
  //   name: 'Swamp Palace Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // turtleRockExitFront = {
  //   x: -20, y: -20,
  //   name: 'Turtle Rock Exit (Front)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // turtleRockExitWest = {
  //   x: -20, y: -20,
  //   name: 'Turtle Rock Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // turtleRockExitEast = {
  //   x: -20, y: -20,
  //   name: 'Turtle Rock Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // turtleRockIsolatedLedgeExit = {
  //   x: -20, y: -20,
  //   name: 'Turtle Rock Isolated Ledge Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // bumperCaveExitTop = {
  //   x: -20, y: -20,
  //   name: 'Bumper Cave Exit (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // bumperCaveExitBottom = {
  //   x: -20, y: -20,
  //   name: 'Bumper Cave Exit (Bottom)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // superBunnyCaveExitTop = {
  //   x: -20, y: -20,
  //   name: 'Superbunny Cave Exit (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // superBunnyCaveExitBottom = {
  //   x: -20, y: -20,
  //   name: 'Superbunny Cave Exit (Bottom)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // hookshotCaveExitSouth = {
  //   x: -20, y: -20,
  //   name: 'Hookshot Cave Exit (South)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // hookshotCaveExitNorth = {
  //   x: -20, y: -20,
  //   name: 'Hookshot Cave Exit (North)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // ganonTowerExit = { //TODO: may have special handling
  //   x: -20, y: -20,
  //   name: 'Ganon\'s Tower Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // pyramidExit = { //TODO: may have special handling
  //   x: -20, y: -20,
  //   name: 'Pyramid Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // swampHealerFairy = {
  //   x: -20, y: -20,
  //   name: 'Swamp Healer Fairy',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit: {singleCave: true}
  // }
  // darkLakeHyliaHealerFairy = {
  //   x: -20, y: -20,
  //   name: 'Dark Lake Hylia Healer Fairy',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit: {singleCave: true}
  // }
  // darkLakeHyliaLedgeHealerFairy = {
  //   x: -20, y: -20,
  //   name: 'Dark Lake Hylia Ledge Healer Fairy',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit: {singleCave: true}
  // }
  // mireHealerFairy = {
  //   x: -20, y: -20,
  //   name: 'Mire Healer Fairy', //'Dark Desert Healer Fairy'
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit: {singleCave: true}
  // }
  // darkDeathMtnHealerFairy = {
  //   x: -20, y: -20,
  //   name: 'Dark Death Mountain Healer Fairy',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit: {singleCave: true}
  // }
  // pyramid = { //TODO: may have special handling
  //   x: -20, y: -20,
  //   name: 'Pyramid',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit:{}
  // }
  // icePalaceExit = {
  //   x: -20, y: -20,
  //   name: 'Ice Palace Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  // miseryMireExit = {
  //   x: -20, y: -20,
  //   name: 'Misery Mire Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }
  skullWoodsFirstSectionDoor = { //skullWoodsFirstSectionExit
    x: 275, y: 224,
    name: 'Skull Woods First Section Door',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods:true, bombShop:true}
  };
  skullWoodsSecondSectionDoorEast = { //skullWoodsSecondSectionExitEast
    x: 217, y: 221,
    name: 'Skull Woods Second Section Door (East)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsSecondSectionDoorWest = { //skullWoodsSecondSectionExitWest
    x: 88, y: 196,
    name: 'Skull Woods Second Section Door (West)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsFinalSection ={ //skullWoodsFinalSectionExit
    x: 58, y: 77,
    name: 'Skull Woods Final Section',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  //HOLES
  skullWoodsFirstSectionHoleWest ={
    x: 293, y: 252,
    isHole: true,
    name: 'Skull Woods First Section Hole (West)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleEast ={
    x: 234, y: 263,
    isHole: true,
    name: 'Skull Woods First Section Hole (East)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleNorth ={
    x: 284, y: 197,
    isHole: true,
    name: 'Skull Woods First Section Hole (North)',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsSecondSectionHole = {
    x: 181, y: 135,
    isHole: true,
    name: 'Skull Woods Second Section Hole',
    region: 'dungeon',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  //HOLE EXITS
  // skullWoodsSecondSectionDrop = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods Second Section (Drop)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit:{holeTarget: true, skullWoods: true}
  // }
  // skullWoodsSecondSectionLeft = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods Second Section (Left)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit:{holeTarget: true, skullWoods: true}
  // }
  // skullWoodsSecondSectionRight = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods Second Section (Right)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit:{holeTarget: true, skullWoods: true}
  // }
  // skullWoodsSecondSectionTop = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods Second Section (Top)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limit:{holeTarget: true, skullWoods: true}
  // }
  // skullWoodsFirstSectionExit = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods First Section Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{skullWoods: true}
  // }
  // skullWoodsSecondSectionExitEast = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods Second Section Exit (East)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{skullWoods: true}
  // }
  // skullWoodsSecondSectionExitWest = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods Second Section Exit (West)',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{skullWoods: true}
  // }
  // skullWoodsFinalSectionExit = {
  //   x: -20, y: -20,
  //   name: 'Skull Woods Final Section Exit',
  //   direction: CEntrance.DIRECTION.EXIT,
  //   limits:{}
  // }

}
