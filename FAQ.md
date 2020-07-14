# ALTTP-Tracker FAQ

A compendium of Frequently Asked Questions and documentation about the tracker. If you would like something added, please file an
[issue](https://github.com/thecodeflayer/alttp-tracker/issues) or email me at [alttp@codeflayer.com](mailto:alttp@codeflayer.com).

### Contents
- [General Questions](#general-questions)
    - [Can I quickly navigate between the light world and the dark world maps?]
    - [There should be 216 items. Where are the missing items?](#there-should-be-216-items-where-are-the-missing-items)
- [New Game Settings](#new-game-settings)
    - [Item Shuffle Settings](#item-shuffle-settings)

## General Questions

#### Can I quickly navigate between the light world and the dark world maps?

Yes! You can double-tap the map to toggle between worlds at the same position and scale.

#### There should be 216 items. Where are the missing items?

As described, the [Item Shuffle Settings](#item-shuffle-settings) only count relevant items and never count Hyrule Castle items. The three Hyrule Castle items not counted are:

- Hyrule Castle Map
- Hyrule Castle Big Key
- Hyrule Castle Small Key

If you feel there is an error in item counts, please file an [issue](https://github.com/thecodeflayer/alttp-tracker/issues).

## New Game Settings

### Item Shuffle Settings
Item Shuffle Settings are selectable when creating a new game.
The primary effect this has on the tracker is the number of available chests and whether small keys increment or decrement when clicked.
Additionally, the total number of items on the Items page will change depending on the Item Shuffle option chosen.

To learn more about the randomizer options for item shuffle please read Item Settings > Dungeon Item Shuffle section of
[alttpr.com/en/options](https://alttpr.com/en/options).

**Standard**

In this mode, dungeon items (big keys, small keys, maps and compasses) are not counted in the overall item count.
The chest count for dungeons only reflects non-dungeon items. The overall item count in this mode is 155 items.

In this mode small keys will decrement from their maximum number found in the dungeon.
This is to help newer players by making it more obvious how many total small keys are in each dungeon.

**Maps and Compasses**

In this mode, maps and compasses (excluding Hyrule Castle) are added to the item pool since they can be found anywhere.
The chest count for dungeons increases for each dungeon with a map and compass. The overall item count in this mode is 175.

In this mode small keys will increment from zero.

**Maps, Compasses and Small Keys**

In this mode, maps, compasses and the 28 small keys found in dungeons (excluding Hyrule Castle) are added to the item pool.
The chest count for dungeons is increased as in the Maps and Compasses option with the inclusion of small keys.
The overall item count in this mode is 203.

In this mode small keys will increment from zero. Note that the small key counter does not affect the item count.
The small key counter reflects all the small keys in the dungeon whether they are in a chest, a drop or from pots.
To increment item count when you find a small key in a chest you should click the chest icon to decrement the chest count.

**Keysanity**

In this mode, maps, compasses, small keys and big keys (excluding Hyrule Castle) are added to the item pool.
The chest count for dungeons is increased as in the Maps, Compasses and Small Keys option with the inclusion of big keys.
The overall item count in this mode is 212.

In this mode small keys will increment from zero. Note that, like the Maps, Compasses and Small Keys option, the small key counter does not affect the item count.
The small key counter reflects all the small keys in the dungeon whether they are in a chest, a drop or from pots.
To increment item count when you find a small key in a chest you should click the chest icon to decrement the chest count.


