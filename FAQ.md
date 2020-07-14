# ALTTP-Tracker FAQ

A compendium of Frequently Asked Questions and documentation about the tracker. If you would like something added, please file an
[issue](https://github.com/thecodeflayer/alttp-tracker/issues) or email me at [alttp@codeflayer.com](mailto:alttp@codeflayer.com).

### Contents
- [General Questions](#general-questions)
    - [I clicked on items, but the item count doesn't increase. Why?](#i-clicked-on-items-but-the-item-count-doesnt-increase-why)
    - [Can I quickly navigate between the light world and dark world maps?](#can-i-quickly-navigate-between-the-light-world-and-dark-world-maps)
    - [A location should/should not be accessible with the items I have! What gives?](#a-location-shouldshould-not-be-accessible-with-the-items-i-have-what-gives)
    - [There should be 216 items. Where are the missing items?](#there-should-be-216-items-where-are-the-missing-items)
    - [Why are you not on the Play Store?](#why-are-you-not-on-the-play-store)
- [New Game Settings](#new-game-settings)
    - [Item Shuffle Settings](#item-shuffle-settings)
    - [Game Mode Settings](#game-mode-settings)

## General Questions

#### I clicked on items, but the item count doesn't increase. Why?

There are several items that contribute to the count that are not present on the items screen (rupees, hearts, arrows etc.).
Therefore, the Item Count is based on locations checked. To increase the item count, check off locations and dungeon chests.

#### Can I quickly navigate between the light world and dark world maps?

Yes! You can double-tap the map to toggle between worlds at the same position and scale.

#### A location should/should not be accessible with the items I have! What gives?

If you've found an issue with location logic please please submit an [issue](https://github.com/thecodeflayer/alttp-tracker/issues)!
In coding location logic I attempted to follow the randomizer logic as closely as I could and have even done several runs to try and test
the logic. However, I am only one person and can only do so much on my own. Inverted mode has not been tested nearly enough, and I welcome
any help finding and squashing the logic bugs.

#### There should be 216 items. Where are the missing items?

As described in the [Item Shuffle Settings](#item-shuffle-settings). The tracker only counts relevant items and never counts Hyrule Castle items. The three Hyrule Castle items not counted are:

- Hyrule Castle Map
- Hyrule Castle Big Key
- Hyrule Castle Small Key

If you feel there is an error in item counts, please file an [issue](https://github.com/thecodeflayer/alttp-tracker/issues).

#### Why are you not on the Play Store?
The short version is "I'm trying."

The Play Store has very strict policies regarding popular IPs. Navigating this has proven to be a challenge. I will continue to pursue publication on the play store. Meanwhile, I'm hosting here for immidiate access. I'll continue distributing from Github as the update process for the Play Store is also slow and will always be behind what I can distribute here.


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

In this mode, maps, compasses, and the 28 small keys found in dungeons (excluding Hyrule Castle) are added to the item pool.
The chest count for dungeons will be increased as in the Maps and Compasses option with the inclusion of small keys.
The overall item count in this mode is 203.

In this mode small keys will increment from zero. Note that the small key counter does not affect the item count.
The small key counter reflects all the small keys in the dungeon whether they are in a chest, a drop or from pots.
To increment item count when you find a small key in a chest you should click the chest icon to decrement the chest count.

**Keysanity**

In this mode, maps, compasses, small keys and big keys (excluding Hyrule Castle) are added to the item pool.
The chest count for dungeons will be increased as in the Maps, Compasses and Small Keys option with the inclusion of big keys.
The overall item count in this mode is 213.

In this mode small keys will increment from zero. Note that, like the Maps, Compasses and Small Keys option, the small key counter does not affect the item count.
The small key counter reflects all the small keys in the dungeon whether they are in a chest, a drop or from pots.
To increment item count when you find a small key in a chest you should click the chest icon to decrement the chest count.

### Game Mode Settings

**Standard**

The Standard mode covers Standard and Open modes in the randomizer. These modes are generally what new players will start out with.

**Inverted**

In this mode Link starts in the Dark World and must navigate to the Light World.
The map in this mode is slightly different and logic to access locations has changed.

To learn more about the randomizer options for these modes please read the 'World State' section of
[alttpr.com/en/options](https://alttpr.com/en/options).




