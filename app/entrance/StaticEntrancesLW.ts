import {CEntrance} from '@/entrance/CEntrance';

export class StaticEntrancesLW {
  desertPalaceEntranceSouth = {
    name: 'Desert Palace Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  }
  desertPalaceEntranceWest = {
    name: 'Desert Palace Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  desertPalaceEntranceNorth = {
    name: 'Desert Palace Entrance (North)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  desertPalaceEntranceEast = {
    name: 'Desert Palace Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{mustExit: true}
  }
  easternPalace = {
    name: 'Eastern Palace',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  };
  towerOfHera = {
    name: 'Tower of Hera',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop:true}
  };
  hyruleCastleEntranceSouth = {
    name: 'Hyrule Castle Entrance (South)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  hyruleCastleEntranceWest = {
    name: 'Hyrule Castle Entrance (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleEntranceEast = {
    name: 'Hyrule Castle Entrance (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  agaTower = {
    name: 'Agahnim\'s Tower',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  hyruleCastleSecretEntranceStairs = {
    name: 'Hyrule Castle Secret Entrance Stairs',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, bombShop:true}
  };
  kakarikoWellCave = {
    name: 'Kakariko Well Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance:true, blacksmith: true}
  };
  batCaveCave = {
    name: 'Bat Cave Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{holeEntrance: true, blacksmith: true}
  };
  elderHouseEast = {
    name: 'Elder House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith:true, twoDoorCave: true}
  };
  elderHouseWest = {
    name: 'Elder House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, twoDoorCave: true}
  };
  northFairyCave = {
    name: 'North Fairy Cave',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{holeEntrance:true, holeTarget: true, blacksmith: true}
  };
  lostWoodsHideoutStump = {
    name: 'Lost Woods Hideout Stump',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true, holeEntrance:true}
  };
  lumberjackTreeCave = {
    name: 'Lumberjack Tree Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance: true}
  };
  twoBrothersHouseEast = {
    name: 'Two Brothers House (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, blacksmith: true}
  };
  twoBrothersHouseWest = {
    name: 'Two Brothers House (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{twoDoorCave: true, bombShop: true}
  };
  sanctuary = {
    name: 'Sanctuary',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{blacksmith: true, holeEntrance:true, }
  };
  oldManCaveWest = {
    name: 'Old Man Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {blacksmith: true}
  }
  oldManCaveEast = {
    name: 'Old Man Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  oldManHouseBottom = {
    name: 'Old Man House (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop: true}
  };
  oldManHouseTop = {
    name: 'Old Man House (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveEast = {
    name: 'Death Mountain Return Cave (East)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{oldManEntrance: true, bombShop: true}
  };
  deathMtnReturnCaveWest = {
    name: 'Death Mountain Return Cave (West)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  }
  spectacleRockCavePeak = {
    name: 'Spectacle Rock Cave Peak',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCave = {
    name: 'Spectacle Rock Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  }
  spectacleRockCaveBottom = {
    name: 'Spectacle Rock Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true, oldManEntrance: true}
  };
  paradoxCaveBottom = {
    name: 'Paradox Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveMiddle = {
    name: 'Paradox Cave (Middle)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  paradoxCaveTop = {
    name: 'Paradox Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveBottom = {
    name: 'Fairy Ascension Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  fairyAscensionCaveTop = {
    name: 'Fairy Ascension Cave (Top)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits: {bombShop: true}
  };
  spiralCave = {
    name: 'Spiral Cave',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  };
  spiralCaveBottom = {
    name: 'Spiral Cave (Bottom)',
    direction: CEntrance.DIRECTION.ENTRANCE,
    limits:{bombShop:true}
  }
  waterfallOfWishing = {
    name: 'Waterfall of Wishing',
    direction: CEntrance.DIRECTION.BOTH,
    limits:{bombShop: true, singleCave: true}
  }



}

const Direction = {
  ENTRANCE: 'entrance',
  EXIT: 'exit',
  BOTH: 'both'
};


// LW_Dungeon_Entrances = ['Desert Palace Entrance (South)',
//   'Desert Palace Entrance (West)',
//   'Desert Palace Entrance (North)',
//   'Eastern Palace',
//   'Tower of Hera',
//   'Hyrule Castle Entrance (West)',
//   'Hyrule Castle Entrance (East)',
//   'Agahnims Tower']
