<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <StackLayout orientation="vertical" class="save-wrapper"
                     :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">
            <Label :text="game.name +(game.loaded ? ': Active Game':'')" fontSize="24" />
            <Label v-if="!game.timestamp" text="Game Slot Empty"/>
            <Label v-if="game.timestamp" :text="'Game Mode: '+game.gameMode"/>
            <Label v-if="game.timestamp" :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label"/>
            <StackLayout orientation="vertical" v-if="!game.timestamp">
                <Label text="Item Shuffle:"/>
                <StackLayout orientation="horizontal" v-for="option in itemShuffleOptions" v-bind:key="option.id" @tap="clickItemShuffle(option.id)">
                    <Image :src="option.id === game.itemShuffle ? '~/img/checked.png' : '~/img/unchecked.png'" width="20" height="20" />
                    <Label :text="option.label" verticalAlignment="center" marginLeft="5" fontSize="20" />
                </StackLayout>
            </StackLayout>
            <Label height="15"/>
            <Button v-if="!game.loaded && game.valid && game.timestamp" class="btn" @tap="loadGame"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Load Game</Button>
            <Button v-if="!game.timestamp" class="btn" @tap="createGame"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Create New Game</Button>
            <Button v-if="allowDelete && game.timestamp && !game.loaded" class="btn" @tap="deleteGame"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Delete</Button>
            <Button v-if="game.loaded" class="btn" @tap="resetItems"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Reset Items</Button>
            <Button v-if="game.loaded" class="btn" @tap="resetDungeons"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Reset Dungeons</Button>
            <Button v-if="game.loaded" class="btn" @tap="resetMap"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Reset Map</Button>
            <Button class="btn" @tap="cancel"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Back</Button>
            <Label height="15"/>
            <Label v-if="!game.timestamp" textWrap="true" fontSize="16" textAlignment="center"
                   text="NOTE: Game options coming soon! For now all games are Standard."/>
            <Label v-if="allowDelete && game.timestamp && game.loaded" textWrap="true" fontSize="16" textAlignment="center"
                   text="NOTE: You cannot delete the active game. Load another game before deleting this one."/>
            <Label v-if="!allowDelete && game.timestamp" textWrap="true" fontSize="16" textAlignment="center"
                   text="NOTE: At least one game must be active. Create another game using an empty game slot before deleting this game."/>

        </StackLayout>
    </Page>
</template>

<script>
    import SaveList from "~/components/SaveList";
    import {GameSaveHelper} from "~/GameSaveHelper";

    export default {
        props:['game_id'],
        data: function() {
            return {
                allowDelete: this.$modelManager.allowGameDelete(),
                itemShuffleOptions: GameSaveHelper.itemShuffleOptions,
                game: GameSaveHelper.parseGameSaves(this.$modelManager)[this.$props.game_id]
            }
        },
        mounted() {
            if(!this.game.timestamp) {
                this.game.itemShuffle = this.itemShuffleOptions.standard.id;
                this.$forceUpdate();
            }
        },
        methods: {
            loadGame() {
                this.$modelManager.loadGame(this.game.id);
                this.$navigateTo(SaveList);
            },
            createGame() {
                this.$modelManager.createGame(this.game.id, this.game.itemShuffle);
                this.game = GameSaveHelper.parseGameSaves(this.$modelManager)[this.game.id];
                this.$forceUpdate();
            },
            deleteGame() {
                this.$modelManager.deleteGame(this.game.id);
                this.game = GameSaveHelper.parseGameSaves(this.$modelManager)[this.game.id];
                this.$forceUpdate();
            },
            cancel() {
                this.$navigateTo(SaveList);
            },
            resetItems() {
                this.$modelManager.resetItems();
            },
            resetDungeons() {
                this.$modelManager.resetDungeons();
            },
            resetMap() {
                this.$modelManager.resetMap();
            },
            clickItemShuffle(id) {
                this.game.itemShuffle = id;
                this.$forceUpdate();
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/forest';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }
    .lbl {
        font-size: 20;
        font-family: "Return of Ganon", "ReturnofGanon";
        color: white;
    }
    .btn {
        font-size: 20;
        padding: 10;
        margin: -3;
        color: white;
        horizontal-align: center;
        vertical-align: center;
        font-family: "Return of Ganon", "ReturnofGanon";
        width: 100%;
        &.loaded {
            background-color: darkgreen;
        }
        &.empty {
            background-color: #616161;
        }
        &.valid {
            background-color: #005500;
        }
        &.invalid {
            background-color: #6a0000;
        }
    }
    .save-wrapper {
        font-size: 20;
        margin: 4;
        padding: 10;
        color: white;
        border-width: 2;
        border-color: #003400;
        vertical-align: top;
        font-family: "Return of Ganon", "ReturnofGanon";
        &.loaded {
            background-color: forestgreen;
        }
        &.empty {
            background-color: gray;
        }
        &.valid {
            background-color: darkgreen;
        }
        &.invalid {
            background-color: darkred;
        }
    }
</style>
