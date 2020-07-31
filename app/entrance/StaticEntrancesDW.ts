import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesDW {
  thievesTown ={ //thievesTownExit
    x:190, y:717,
    name: 'Thieves Town',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  icePalace = { //icePalaceExit
    x: -20, y: -20,
    name: 'Ice Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  miseryMire = { //miseryMireExit
    x: -20, y: -20,
    name: 'Misery Mire',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  palaceOfDarkness = { //palaceOfDarknessExit
    x: -20, y: -20,
    name: 'Palace of Darkness',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  swampPalace = { //swampPalaceExit
    x: -20, y: -20,
    name: 'Swamp Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  turtleRock = { //turtleRockExitFront
    x: -20, y: -20,
    name: 'Turtle Rock',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  darkDeathMtnLedgeWest = { //turtleRockExitWest
    x: -20, y: -20,
    name: 'Dark Death Mountain Ledge (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true, mustExit: true}
  };
  darkDeathMtnLedgeEast = { //turtleRockExitEast
    x: -20, y: -20,
    name: 'Dark Death Mountain Ledge (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, mustExit: true}
  };
  turtleRockIsolatedLedgeEntrance= { //turtleRockIsolatedLedgeExit
    x: -20, y: -20,
    name: 'Turtle Rock Isolated Ledge Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  };
  bumperCaveBottom = { //bumperCaveExitBottom
    x: -20, y: -20,
    name: 'Bumper Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, twoDoorCave: true}
  };
  bumperCaveTop = { //bumperCaveExitTop
    x: -20, y: -20,
    name: 'Bumper Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true, twoDoorCave: true}
  }
  superBunnyCaveTop = { //superBunnyCaveExitTop
    x: -20, y: -20,
    name: 'Superbunny Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  superBunnyCaveBottom = { //superBunnyCaveExitBottom
    x: -20, y: -20,
    name: 'Superbunny Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  hookshotCave = { //hookshotCaveExitSouth
    x: -20, y: -20,
    name: 'Hookshot Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  hookshotCaveBackEntrance = { //hookshotCaveExitNorth
    x: -20, y: -20,
    name: 'Hookshot Cave Back Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {mustExit: true, twoDoorCave: true}
  }
  ganonTower = { //ganonTowerExit
    x: -20, y: -20,
    name: 'Ganon\'s Tower',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  pyramidEntrance = { //pyramidExit
    x: -20, y: -20,
    name: 'Pyramid Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{}
  }
  pyramidHole = { //pyramid //not sure how this one is handled
    x: -20, y: -20,
    isHole: true,
    name: 'Pyramid Hole',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true}
  };
  pyramidFairy = { //TODO: only item in Singe_Cave_Doors in code, need to investigate.
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Pyramid Fairy',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true}
  };
  eastDarkWorldHint = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'East Dark World Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  palaceOfDarknessHint = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Palace of Darkness Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaFairy = { //darkLakeHyliaHealerFairy
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark Lake Hylia Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaLedgeFairy = { //darkLakeHyliaLedgeHealerFairy
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaSpikeCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Spike Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaLedgeHint = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark Lake Hylia Ledge Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  hypeCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Hype Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  bonkFairyDark = { //swampHealerFairy
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Bonk Fairy (Dark)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  brewery = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Brewery',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  cShapedHouse = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'C-Shaped House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  chestGame = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Chest Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldHammerPegCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark World Hammer Peg Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  redShieldShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Red Shield Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkSanctuaryHint = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark Sanctuary Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  fortuneTellerDark = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Fortune Teller (Dark)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark World Shop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true}
  }
  darkWorldLumberjackShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark World Lumberjack Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldPotionShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark World Potion Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  archeryGame = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Archery Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireShed = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Mire Shed',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireHint = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Mire Hint', //'Dark Desert Hint'
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireFairy = { //mireHealerFairy
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Mire Fairy', //'Dark Desert Fairy'
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  spikeCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Spike Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  caveShopDarkDeathMtn = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Cave Shop (Dark Death Mountain)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkDeathMtnFairy = { //darkDeathMtnHealerFairy
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark Death Mountain Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  mimicCave = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Mimic Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  bigBombShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Big Bomb Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaShop = {
    x: -20, y: -20,
    isSingleCave: true,
    name: 'Dark Lake Hylia Shop',
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
    x: -20, y: -20,
    name: 'Skull Woods First Section Door',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods:true, bombShop:true}
  };
  skullWoodsSecondSectionDoorEast = { //skullWoodsSecondSectionExitEast
    x: -20, y: -20,
    name: 'Skull Woods Second Section Door (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsSecondSectionDoorWest = { //skullWoodsSecondSectionExitWest
    x: -20, y: -20,
    name: 'Skull Woods Second Section Door (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsFinalSection ={ //skullWoodsFinalSectionExit
    x: -20, y: -20,
    name: 'Skull Woods Final Section',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  //HOLES
  skullWoodsFirstSectionHoleWest ={
    x: -20, y: -20,
    isHole: true,
    name: 'Skull Woods First Section Hole (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleEast ={
    x: -20, y: -20,
    isHole: true,
    name: 'Skull Woods First Section Hole (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleNorth ={
    x: -20, y: -20,
    isHole: true,
    name: 'Skull Woods First Section Hole (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsSecondSectionHole = {
    x: -20, y: -20,
    isHole: true,
    name: 'Skull Woods Second Section Hole',
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
