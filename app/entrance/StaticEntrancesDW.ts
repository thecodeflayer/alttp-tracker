import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesDW {
  thievesTown ={
    name: 'Thieves Town',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  skullWoodsFirstSectionDoor = {
    name: 'Skull Woods First Section Door',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods:true, bombShop:true}
  };
  skullWoodsSecondSectionDoorEast = {
    name: 'Skull Woods Second Section Door (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsSecondSectionDoorWest = {
    name: 'Skull Woods Second Section Door (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  skullWoodsFinalSection ={
    name: 'Skull Woods Final Section',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {skullWoods: true, bombShop: true}
  };
  icePalace = {
    name: 'Ice Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  miseryMire = {
    name: 'Misery Mire',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  palaceOfDarkness = {
    name: 'Palace of Darkness',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  swampPalace = {
    name: 'Swamp Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  turtleRock = {
    name: 'Turtle Rock',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  darkDeathMtnLedgeWest = {
    name: 'Dark Death Mountain Ledge (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true, mustExit: true}
  };
  darkDeathMtnLedgeEast = {
    name: 'Dark Death Mountain Ledge (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, mustExit: true}
  };
  turtleRockIsolatedLedgeEntrance= {
    name: 'Turtle Rock Isolated Ledge Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  };
  bumperCaveBottom = {
    name: 'Bumper Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, twoDoorCave: true}
  };
  bumperCaveTop = {
    name: 'Bumper Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true, twoDoorCave: true}
  }
  superBunnyCaveTop = {
    name: 'Superbunny Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  superBunnyCaveBottom = {
    name: 'Superbunny Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  hookshotCave = {
    name: 'Hookshot Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  }
  hookshotCaveBackEntrance = {
    name: 'Hookshot Cave Back Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {mustExit: true, twoDoorCave: true}
  }
  ganonTower = {
    name: 'Ganon\'s Tower',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  pyramidEntrance = {
    name: 'Pyramid Entrance',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{}
  }
  skullWoodsFirstSectionHoleWest ={
    name: 'Skull Woods First Section Hole (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleEast ={
    name: 'Skull Woods First Section Hole (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleNorth ={
    name: 'Skull Woods First Section Hole (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  skullWoodsSecondSectionHole = {
    name: 'Skull Woods Second Section Hole',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, skullWoods: true}
  };
  pyramidHole = { //not sure how this one is handled
    name: 'Pyramid Hole',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true}
  };
  pyramidFairy = { //TODO: only item in Singe_Cave_Doors in code, need to investigate.
    name: 'Pyramid Fairy',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true}
  };
  eastDarkWorldHint = {
    name: 'East Dark World Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  palaceOfDarknessHint = {
    name: 'Palace of Darkness Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaFairy = {
    name: 'Dark Lake Hylia Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaLedgeFairy = {
    name: 'Dark Lake Hylia Ledge Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true, bombShop:true}
  }
  darkLakeHyliaSpikeCave = {
    name: 'Dark Lake Hylia Ledge Spike Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaLedgeHint = {
    name: 'Dark Lake Hylia Ledge Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  hypeCave = {
    name: 'Hype Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  bonkFairyDark = {
    name: 'Bonk Fairy (Dark)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  brewery = {
    name: 'Brewery',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  cShapedHouse = {
    name: 'C-Shaped House',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  chestGame = {
    name: 'Chest Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldHammerPegCave = {
    name: 'Dark World Hammer Peg Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  redShieldShop = {
    name: 'Red Shield Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkSanctuaryHint = {
    name: 'Dark Sanctuary Hint',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  fortuneTellerDark = {
    name: 'Fortune Teller (Dark)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldShop = {
    name: 'Dark World Shop',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{singleCave: true}
  }
  darkWorldLumberjackShop = {
    name: 'Dark World Lumberjack Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkWorldPotionShop = {
    name: 'Dark World Potion Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  archeryGame = {
    name: 'Archery Game',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireShed = {
    name: 'Mire Shed',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireHint = {
    name: 'Mire Hint', //'Dark Desert Hint'
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  mireFairy = {
    name: 'Mire Fairy', //'Dark Desert Fairy'
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  spikeCave = {
    name: 'Spike Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  };
  caveShopDarkDeathMtn = {
    name: 'Cave Shop (Dark Death Mountain)',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkDeathMtnFairy = {
    name: 'Dark Death Mountain Fairy',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {singleCave: true}
  }
  mimicCave = {
    name: 'Mimic Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  bigBombShop = {
    name: 'Big Bomb Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  darkLakeHyliaShop = {
    name: 'Dark Lake Hylia Shop',
    direction: CEntrance.DIRECTION.BOTH,
    limits: {singleCave: true, bombShop: true}
  }
  thievesTownExit = {
    name: 'Thieves Town Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  skullWoodsFirstSectionExit = {
    name: 'Skull Woods First Section Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{skullWoods: true}
  }
  skullWoodsSecondSectionExitEast = {
    name: 'Skull Woods Second Section Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{skullWoods: true}
  }
  skullWoodsSecondSectionExitWest = {
    name: 'Skull Woods Second Section Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{skullWoods: true}
  }
  skullWoodsFinalSectionExit = {
    name: 'Skull Woods Final Section Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  palaceOfDarknessExit = {
    name: 'Palace of Darkness Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  swampPalaceExit = {
    name: 'Swamp Palace Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockExitFront = {
    name: 'Turtle Rock Exit (Front)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockExitWest = {
    name: 'Turtle Rock Exit (West)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockExitEast = {
    name: 'Turtle Rock Exit (East)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  turtleRockIsolatedLedgeExit = {
    name: 'Turtle Rock Isolated Ledge Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  bumperCaveExitTop = {
    name: 'Bumper Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  bumperCaveExitBottom = {
    name: 'Bumper Cave Exit (Bottom)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  superBunnyCaveExitTop = {
    name: 'Superbunny Cave Exit (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  superBunnyCaveExitBottom = {
    name: 'Superbunny Cave Exit (Bottom)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hookshotCaveExitSouth = {
    name: 'Hookshot Cave Exit (South)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  hookshotCaveExitNorth = {
    name: 'Hookshot Cave Exit (North)',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  ganonTowerExit = { //TODO: may have special handling
    name: 'Ganon\'s Tower Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  pyramidExit = { //TODO: may have special handling
    name: 'Pyramid Exit',
    direction: CEntrance.DIRECTION.EXIT,
    limits:{}
  }
  swampHealerFairy = {
    name: 'Swamp Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  darkLakeHyliaHealerFairy = {
    name: 'Dark Lake Hylia Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  darkLakeHyliaLedgeHealerFairy = {
    name: 'Dark Lake Hylia Ledge Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  mireHealerFairy = {
    name: 'Mire Healer Fairy', //'Dark Desert Healer Fairy'
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  darkDeathMtnHealerFairy = {
    name: 'Dark Death Mountain Healer Fairy',
    direction: CEntrance.DIRECTION.EXIT,
    limit: {singleCave: true}
  }
  tavern = { //TODO: may have special handling
    name: 'Tavern',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{}
  }
  skullWoodsSecondSectionDrop = {
    name: 'Skull Woods Second Section (Drop)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  skullWoodsSecondSectionLeft = {
    name: 'Skull Woods Second Section (Left)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  skullWoodsSecondSectionRight = {
    name: 'Skull Woods Second Section (Right)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  skullWoodsSecondSectionTop = {
    name: 'Skull Woods Second Section (Top)',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{holeTarget: true, skullWoods: true}
  }
  pyramid = { //TODO: may have special handling
    name: 'Pyramid',
    direction: CEntrance.DIRECTION.EXIT,
    limit:{}
  }

}
