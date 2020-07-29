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
    limits:{hole: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleEast ={
    name: 'Skull Woods First Section Hole (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{hole: true, skullWoods: true}
  };
  skullWoodsFirstSectionHoleNorth ={
    name: 'Skull Woods First Section Hole (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{hole: true, skullWoods: true}
  };
  skullWoodsSecondSectionHole = {
    name: 'Skull Woods Second Section Hole',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{hole: true, skullWoods: true}
  };
  pyramidHole = { //not sure how this one is handled
    name: 'Pyramid Hole',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{hole: true}
  };

}

// DW_Dungeon_Entrances = ['Thieves Town',
//   'Skull Woods Final Section',
//   'Ice Palace',
//   'Misery Mire',
//   'Palace of Darkness',
//   'Swamp Palace',
//   'Turtle Rock',
//   'Dark Death Mountain Ledge (West)']
