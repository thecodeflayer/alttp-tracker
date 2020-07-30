import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesDW {
  thievesTown ={
    x:190, y:717,
    name: 'Thieves Town',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  skullWoodsFirstSectionDoor = {
    x: -20, y: -20,
    name: 'Skull Woods First Section Door',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods:true, bombShop:true}
  };
  skullWoodsSecondSectionDoorEast = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section Door (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsSecondSectionDoorWest = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section Door (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsFinalSection ={
    x: -20, y: -20,
    name: 'Skull Woods Final Section',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  icePalace = {
    x: -20, y: -20,
    name: 'Ice Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  miseryMire = {
    x: -20, y: -20,
    name: 'Misery Mire',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  palaceOfDarkness = {
    x: -20, y: -20,
    name: 'Palace of Darkness',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  swampPalace = {
    x: -20, y: -20,
    name: 'Swamp Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  turtleRock = {
    x: -20, y: -20,
    name: 'Turtle Rock',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  darkDeathMtnLedgeWest = {
    x: -20, y: -20,
    name: 'Dark Death Mountain Ledge (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true, mustExit: true}
  };
  darkDeathMtnLedgeEast = {
    x: -20, y: -20,
    name: 'Dark Death Mountain Ledge (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, mustExit: true}
  };
  turtleRockIsolatedLedgeEntrance= {
    x: -20, y: -20,
    name: 'Turtle Rock Isolated Ledge Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  };
  bumperCaveBottom = {
    x: -20, y: -20,
    name: 'Bumper Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, twoDoorCave: true}
  };
  bumperCaveTop = {
    x: -20, y: -20,
    name: 'Bumper Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true, twoDoorCave: true}
  }
  superBunnyCaveTop = {
    x: -20, y: -20,
    name: 'Superbunny Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  superBunnyCaveBottom = {
    x: -20, y: -20,
    name: 'Superbunny Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  hookshotCave = {
    x: -20, y: -20,
    name: 'Hookshot Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  hookshotCaveBackEntrance = {
    x: -20, y: -20,
    name: 'Hookshot Cave Back Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {mustExit: true, twoDoorCave: true}
  }
  ganonTower = {
    x: -20, y: -20,
    name: 'Ganon\'s Tower',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  pyramidEntrance = {
    x: -20, y: -20,
    name: 'Pyramid Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{}
  }
  skullWoodsFirstSectionHoleWest ={
    x: -20, y: -20,
    name: 'Skull Woods First Section Hole (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleEast ={
    x: -20, y: -20,
    name: 'Skull Woods First Section Hole (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleNorth ={
    x: -20, y: -20,
    name: 'Skull Woods First Section Hole (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsSecondSectionHole = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section Hole',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  pyramidHole = { //not sure how this one is handled
    x: -20, y: -20,
    name: 'Pyramid Hole',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true}
  };
  pyramidFairy = { //TODO: only item in Singe_Cave_Doors in code, need to investigate.
    x: -20, y: -20,
    name: 'Pyramid Fairy',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true}
  };
  eastDarkWorldHint = {
    x: -20, y: -20,
    name: 'East Dark World Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  palaceOfDarknessHint = {
    x: -20, y: -20,
    name: 'Palace of Darkness Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaFairy = {
    x: -20, y: -20,
    name: 'Dark Lake Hylia Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaLedgeFairy = {
    x: -20, y: -20,
    name: 'Dark Lake Hylia Ledge Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaSpikeCave = {
    x: -20, y: -20,
    name: 'Dark Lake Hylia Ledge Spike Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaLedgeHint = {
    x: -20, y: -20,
    name: 'Dark Lake Hylia Ledge Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  hypeCave = {
    x: -20, y: -20,
    name: 'Hype Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  bonkFairyDark = {
    x: -20, y: -20,
    name: 'Bonk Fairy (Dark)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  brewery = {
    x: -20, y: -20,
    name: 'Brewery',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  cShapedHouse = {
    x: -20, y: -20,
    name: 'C-Shaped House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  chestGame = {
    x: -20, y: -20,
    name: 'Chest Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldHammerPegCave = {
    x: -20, y: -20,
    name: 'Dark World Hammer Peg Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  redShieldShop = {
    x: -20, y: -20,
    name: 'Red Shield Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkSanctuaryHint = {
    x: -20, y: -20,
    name: 'Dark Sanctuary Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  fortuneTellerDark = {
    x: -20, y: -20,
    name: 'Fortune Teller (Dark)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldShop = {
    x: -20, y: -20,
    name: 'Dark World Shop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true}
  }
  darkWorldLumberjackShop = {
    x: -20, y: -20,
    name: 'Dark World Lumberjack Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldPotionShop = {
    x: -20, y: -20,
    name: 'Dark World Potion Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  archeryGame = {
    x: -20, y: -20,
    name: 'Archery Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireShed = {
    x: -20, y: -20,
    name: 'Mire Shed',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireHint = {
    x: -20, y: -20,
    name: 'Mire Hint', //'Dark Desert Hint'
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireFairy = {
    x: -20, y: -20,
    name: 'Mire Fairy', //'Dark Desert Fairy'
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  spikeCave = {
    x: -20, y: -20,
    name: 'Spike Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  caveShopDarkDeathMtn = {
    x: -20, y: -20,
    name: 'Cave Shop (Dark Death Mountain)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkDeathMtnFairy = {
    x: -20, y: -20,
    name: 'Dark Death Mountain Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  mimicCave = {
    x: -20, y: -20,
    name: 'Mimic Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  bigBombShop = {
    x: -20, y: -20,
    name: 'Big Bomb Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaShop = {
    x: -20, y: -20,
    name: 'Dark Lake Hylia Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  thievesTownExit = {
    x: -20, y: -20,
    name: 'Thieves Town Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  skullWoodsFirstSectionExit = {
    x: -20, y: -20,
    name: 'Skull Woods First Section Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{skullWoods: true}
  }
  skullWoodsSecondSectionExitEast = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{skullWoods: true}
  }
  skullWoodsSecondSectionExitWest = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{skullWoods: true}
  }
  skullWoodsFinalSectionExit = {
    x: -20, y: -20,
    name: 'Skull Woods Final Section Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  palaceOfDarknessExit = {
    x: -20, y: -20,
    name: 'Palace of Darkness Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  swampPalaceExit = {
    x: -20, y: -20,
    name: 'Swamp Palace Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockExitFront = {
    x: -20, y: -20,
    name: 'Turtle Rock Exit (Front)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockExitWest = {
    x: -20, y: -20,
    name: 'Turtle Rock Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockExitEast = {
    x: -20, y: -20,
    name: 'Turtle Rock Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockIsolatedLedgeExit = {
    x: -20, y: -20,
    name: 'Turtle Rock Isolated Ledge Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  bumperCaveExitTop = {
    x: -20, y: -20,
    name: 'Bumper Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  bumperCaveExitBottom = {
    x: -20, y: -20,
    name: 'Bumper Cave Exit (Bottom)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  superBunnyCaveExitTop = {
    x: -20, y: -20,
    name: 'Superbunny Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  superBunnyCaveExitBottom = {
    x: -20, y: -20,
    name: 'Superbunny Cave Exit (Bottom)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hookshotCaveExitSouth = {
    x: -20, y: -20,
    name: 'Hookshot Cave Exit (South)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hookshotCaveExitNorth = {
    x: -20, y: -20,
    name: 'Hookshot Cave Exit (North)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  ganonTowerExit = { //TODO: may have special handling
    x: -20, y: -20,
    name: 'Ganon\'s Tower Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  pyramidExit = { //TODO: may have special handling
    x: -20, y: -20,
    name: 'Pyramid Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  swampHealerFairy = {
    x: -20, y: -20,
    name: 'Swamp Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  darkLakeHyliaHealerFairy = {
    x: -20, y: -20,
    name: 'Dark Lake Hylia Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  darkLakeHyliaLedgeHealerFairy = {
    x: -20, y: -20,
    name: 'Dark Lake Hylia Ledge Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  mireHealerFairy = {
    x: -20, y: -20,
    name: 'Mire Healer Fairy', //'Dark Desert Healer Fairy'
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  darkDeathMtnHealerFairy = {
    x: -20, y: -20,
    name: 'Dark Death Mountain Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  tavern = { //TODO: may have special handling
    x: -20, y: -20,
    name: 'Tavern',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{}
  }
  skullWoodsSecondSectionDrop = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section (Drop)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  skullWoodsSecondSectionLeft = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section (Left)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  skullWoodsSecondSectionRight = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section (Right)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  skullWoodsSecondSectionTop = {
    x: -20, y: -20,
    name: 'Skull Woods Second Section (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  pyramid = { //TODO: may have special handling
    x: -20, y: -20,
    name: 'Pyramid',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{}
  }

}
