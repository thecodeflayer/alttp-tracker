<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <StackLayout orientation="vertical" class="save-wrapper"
                     :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">
            <Label :text="game.name +(game.loaded ? ': Active Game':'')" fontSize="24" />
            <Label v-if="!game.timestamp" text="Game Slot Empty"/>
            <Label v-if="game.timestamp" :text="'Game Mode: '+game.gameMode"/>
            <Label v-if="allowDelete && game.timestamp && game.loaded" textWrap="true" fontSize="16"
                   text="Cannot delete active game. Load another game before deleting this one."/>
            <Label v-if="!allowDelete && game.timestamp" textWrap="true" fontSize="16"
                   text="At least one game must be active. Create another game using an empty game slot before deleting this game."/>
            <Label fontSize="10" text=" "/>
            <Button v-if="!game.loaded && game.valid && game.timestamp" class="btn" @tap="loadGame"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Load Game</Button>
            <Button v-if="!game.timestamp" class="btn" @tap="createGame"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Create</Button>
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

        </StackLayout>
    </Page>
</template>

<script>
    import SaveList from "~/components/SaveList";
    import {GameSaveHelper} from "~/GameSaveHelper";

    export default {
        props:['game'],
        data: function() {
            return {
                allowDelete: this.$modelManager.allowGameDelete()
            }
        },
        mounted() {

        },
        methods: {
            loadGame() {
                this.$modelManager.loadGame(this.game.id);
                this.$navigateTo(SaveList);
            },
            createGame() {
                this.$modelManager.createGame(this.game.id);
                this.game = GameSaveHelper.parseGameSaves(this.$modelManager)[this.game.id];
            },
            deleteGame() {
                this.$modelManager.deleteGame(this.game.id);
                this.game = GameSaveHelper.parseGameSaves(this.$modelManager)[this.game.id];
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
        padding: 4;
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
