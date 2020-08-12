# What's New in Version 1.2.0

### Entrance Shuffle BETA
Entrance tracking has been added. This is a BETA release of the feature. As such, not everything has been tested and your feedback is encouraged.

When creating a new game you can select an option for Entrance Shuffle. You can find out more on the [FAQ page](https://github.com/thecodeflayer/alttp-tracker/blob/master/FAQ.md#entrance-shuffle-settings).

### Enhancements and Bug Fixes

- Game Edit settings UI has been updated.
- "Back History" is now cleared periodically when navigating to the maps. This should reduce some issues that can appear when the "Back History" gets too large.

---

## What's New in Version 1.1.1

### Location Item Requirements Modal
Required items for locations can now be shown by "long pressing" on the location.

- From the Maps, this works for locations, shops and dungeons.
- From the Location Lists this works by long pressing the location title.

### Enhancements and Bug Fixes

- Fixed issue with chest saves in Dungeons screen where chest counts set to zero would be reset to max value when reloading the save.
- Fixed issue with item counts in various item shuffle modes. Items should now add up correctly. 
- Location list views now have a sleeker UI.

## What's New in Version 1.1.0

### Retro Game Mode
Retro mode harkens back to the original Legend of Zelda. 
For information on this game mode please read Gameplay > World State > Retro section of [alttpr.com/en/options](https://alttpr.com/en/options).
 
For the tracker the following features have been added:

- Retro option in  Game Mode section of Game Creation screen. 
- New _Quiver_ item on Items screen.
- Small keys are not tracked in this mode.
- Dungeon chest counts reflect that small keys can be found anywhere.
- Shop/Take Any tracking on the Map and List screens. (Just called Shops in the app)
- Location logic updates taking into account quiver requirement for bow logic.

### Enhancements and Bug Fixes
- OpenGT and Ganon Crystal requirements now editable from Items screen.
- Triforce goal now editable from Items screen (when goal is Triforce Pieces).
- Long press map location for modal showing name of the location.
- Moved around items on the Items screen to better align with in game menu.
- App now stays in Portrait mode (Landscape mode never worked correctly)
- Fixed a bug with maps where position, scale and view mode were not getting saved. 

## What's New in Version 1.0.0

### Logic Fixes and Testing
I've added over 1000 tests to the project to validate logic for Standard and Inverted modes.
This has given me the confidence to finally move the project to version 1.0.0.

As part of that testing a number of logic bugs have been fixed.

Thanks to the helpful folks on the [ALTTPR Discord](https://discord.gg/48sauwx) for answering all my questions and a shoutout to Dook for pushing me to solidify the logic.

### Goal Enhancements
The Items screen now has more indicators for game goal tracking.

## What's New in Version 0.9.7

### Support for Game Goals!
You can now select various game goals as well as setting Crystals
required to open Ganon's Tower and to Access Ganon. This includes a display of
the goal and the Crystal requirements on the Items screen.

The _Triforce Pieces_ goal also has a clickable counter on the items screen.

### Inverted Mode bug fixes.
Several logic bugs for inverted mode have been fixed.

### Code Base Converted to TypeScript
While this has no impact on the usage of the app it does make development a
bit easier. I should be able to address bugs more quickly. The downside is that
there is a chance old games will not load.

**NOTE:** I've done the testing I could with this, and I'm hopeful that there will be
no issues other than the inability to load old games. Please file an  [issue](https://github.com/thecodeflayer/alttp-tracker/issues)
if you run into trouble.

This will hopefully be the last time I have to post about losing game data as the TypeScript conversion should make this more manageable going forward.

###I Can't Click on Anything?!?
You should be able to clear the app's storage from the App menu under settings.
This should correct the problem.

### Various bug fixes and minor enhancements.
As always there are a few things I fixed along the way.

## What's New in Version 0.9.6

### Inverted Game Mode is here!
Inverted Game Mode is now an option when creating new games.

Learn more about inverted mode under
Gameplay > World State > Inverted at [alttpr.com/en/options](https://alttpr.com/en/options).

NOTE: This is a new game mode and logic may not be 100%.
If you find an issue please file them [here](https://github.com/thecodeflayer/alttp-tracker/issues).

### Various bug fixes including:
- Fixed several issues with game saves.
- Updated some image assets to be better quality.
- Item counts for various shuffle modes should now be correct.
- Hyrule Castle items are now counted under 'Back of Escape'
