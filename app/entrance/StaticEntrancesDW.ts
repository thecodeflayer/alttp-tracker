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

}
