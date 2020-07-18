# What's new in Version 0.9.7

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

####I Can't Click on Anything?!?
You should be able to clear the app's storage from the App menu under settings.
This should correct the problem.

### Various bug fixes and minor enhancements.
As always there are a few things I fixed along the way.

## What's new in Version 0.9.6

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
