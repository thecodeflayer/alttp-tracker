<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <GridLayout>
            <StackLayout v-if="(game.timestamp && game.valid)" :key="updateKey"
                         orientation="vertical" class="save-wrapper" :class="game.loaded ? 'loaded' : 'valid'">
                <Label :text="game.name +(game.loaded ? ': Active Game':'')" fontSize="24" />
                <Label :text="'Game Mode: '+game.gameMode"/>
                <Label :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label"/>
                <Label height="15"/>
                <Button :visibility="!game.loaded && game.valid && game.timestamp ? 'visible': 'collapsed'" class="btn" @tap="loadGame"
                        :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Load Game</Button>
                <Button :visibility="allowDelete && game.timestamp && !game.loaded ? 'visible': 'collapsed'" class="btn" @tap="openModal('deleteGame')"
                        :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Delete</Button>
                <Button :visibility="game.loaded ? 'visible': 'collapsed'" class="btn" @tap="openModal('resetItems')"
                        :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Reset Items</Button>
                <Button :visibility="game.loaded ? 'visible': 'collapsed'" class="btn" @tap="openModal('resetDungeons')"
                        :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Reset Dungeons</Button>
                <Button :visibility="game.loaded ? 'visible': 'collapsed'" class="btn" @tap="openModal('resetMap')"
                        :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Reset Map</Button>
                <Button class="btn" @tap="cancel"
                        :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">Back</Button>
                <Label height="15"/>
                <Label :visibility="allowDelete && game.timestamp && game.loaded ? 'visible': 'collapsed'" textWrap="true" fontSize="16" textAlignment="center"
                       text="NOTE: You cannot delete the active game. Load another game before deleting this one."/>
                <Label :visibility="!allowDelete && game.timestamp ? 'visible': 'collapsed'" textWrap="true" fontSize="16" textAlignment="center"
                       text="NOTE: At least one game must be active. Create another game using an empty game slot before deleting this game."/>
            </StackLayout>
            <StackLayout v-if="(game.timestamp && !game.valid)" :key="updateKey"
                         orientation="vertical" class="save-wrapper invalid">
                <Label :text="game.name" fontSize="24" />
                <Label :text="'Game Mode: '+game.gameMode"/>
                <Label :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label"/>
                <Button :visibility="allowDelete && game.timestamp && !game.loaded ? 'visible': 'collapsed'"
                        class="btn invalid" @tap="deleteGame">Delete</Button>
                <Label textWrap="true" fontSize="16" textAlignment="center"
                       text="NOTE: This game is based on an old version. You must delete this game."/>
                <Label :visibility="!allowDelete && game.timestamp ? 'visible': 'collapsed'" textWrap="true" fontSize="16" textAlignment="center"
                       text="NOTE: At least one game must be active. Create another game using an empty game slot before deleting this game."/>
            </StackLayout>
            <StackLayout v-if="!game.timestamp" orientation="vertical" class="save-wrapper empty" :key="updateKey">
                <Label :text="game.name" fontSize="24" />
                <Label text="Game Slot Empty"/>
                <StackLayout orientation="vertical">
                    <Label text="Game Mode: Standard"/>
                    <Label text="Item Shuffle:"/>
                    <StackLayout orientation="horizontal" v-for="key in itemShuffleKeys" @tap="clickItemShuffle(key)">
                        <Image :key="updateKey" :src="getItemShuffleCheckImage(key)" width="20" height="20" />
                        <Label :text="itemShuffleOptions[key].label" verticalAlignment="center" marginLeft="5" fontSize="20" />
                    </StackLayout>
                </StackLayout>
                <Label height="15"/>
                <Button class="btn empty" @tap="createGame">Create New Game</Button>
                <Button class="btn empty" @tap="cancel">Back</Button>
                <Label height="15"/>
                <Label textWrap="true" fontSize="16" textAlignment="center"
                       text="NOTE: More game options coming soon!"/>
            </StackLayout>
            <AbsoluteLayout class="modal-wrapper" :class="{'open': modalOpen, 'closed':!modalAnimating}">
                <AbsoluteLayout class="modal-bg" @tap="interceptClick"/>
                <StackLayout orientation="vertical" class="modal-dialog" :width="modalWidth" :class="{'open': modalOpen}">
                    <Label :visibility="modalAction === 'deleteGame' ? 'visible':'collapsed'" textWrap="true"
                           textAlignment="center" style="padding-bottom: 10"
                           text="Are you sure you want to delete this game?"/>
                    <Label :visibility="modalAction === 'resetItems' ? 'visible':'collapsed'" textWrap="true"
                           textAlignment="center" style="padding-bottom: 10"
                           text="Are you sure you want to reset the item data for this game?"/>
                    <Label :visibility="modalAction === 'resetDungeons' ? 'visible':'collapsed'" textWrap="true"
                           textAlignment="center" style="padding-bottom: 10"
                           text="Are you sure you want to reset the dungeon data for this game?"/>
                    <Label :visibility="modalAction === 'resetMap' ? 'visible':'collapsed'" textWrap="true"
                           textAlignment="center" style="padding-bottom: 10"
                           text="Are you sure you want to reset the map data for this game?"/>
                    <Label text="This cannot be undone!" textAlignment="center" style="padding-bottom: 10"/>
                    <Button class="btn invalid" @tap="closeModal(true)">OK</Button>
                    <Button class="btn invalid" @tap="closeModal(false)">Cancel</Button>
                </StackLayout>
            </AbsoluteLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import SaveList from "~/components/SaveList";
    import {GameSaveHelper} from "~/GameSaveHelper";
    import {screen} from 'tns-core-modules/platform';

    export default {
        props:['game_id'],
        data: function() {
            return {
                allowDelete: this.$modelManager.allowGameDelete(),
                itemShuffleOptions: GameSaveHelper.itemShuffleOptions,
                itemShuffleKeys: Object.keys(GameSaveHelper.itemShuffleOptions),
                game: GameSaveHelper.parseGameSaves(this.$modelManager)[this.$props.game_id],
                updateKey:Date.now(),
                modalOpen:false,
                screen: screen,
                modalWidth: 0,
                modalAnimating: false,
                modalAction: undefined
            }
        },
        created() {
            this.checkEmptyGameState();
            this.modalWidth = (this.screen.mainScreen.widthPixels / this.screen.mainScreen.scale) - 40;
            console.log(this.modalWidth);
        },
        mounted() {

        },
        methods: {
            interceptClick() {
                console.log('no clicky!');
            },
            openModal(opt) {
                this.modalAction = opt;
                this.modalOpen = true;
                this.modalAnimating=true;
            },
            closeModal(doAction) {
                if(doAction){
                    if(this.modalAction === 'deleteGame') {
                        this.deleteGame();
                    } else if(this.modalAction === 'resetItems'){
                        this.resetItems();
                    } else if(this.modalAction === 'resetDungeons'){
                        this.resetDungeons();
                    } else if(this.modalAction === 'resetMap'){
                        this.resetMap();
                    }
                }
                this.modalAction = undefined;
                this.modalOpen = false;
                setTimeout(()=>{this.modalAnimating=false;},500);
            },
            loadGame() {
                this.$modelManager.loadGame(this.game.id);
                this.$navigateTo(SaveList);
            },
            createGame() {
                if(!this.game.itemShuffle) {return; }
                this.$modelManager.createGame(this.game.id, this.game.itemShuffle);
                this.game = GameSaveHelper.parseGameSaves(this.$modelManager)[this.game.id];
                this.updateKey = Date.now();
            },
            deleteGame() {
                this.$modelManager.deleteGame(this.game.id);
                this.game = GameSaveHelper.parseGameSaves(this.$modelManager)[this.game.id];
                this.checkEmptyGameState();
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
                this.updateKey = Date.now();
            },
            checkEmptyGameState(){
                if(!this.game.timestamp) {
                    this.game.itemShuffle = this.itemShuffleOptions.standard.id;
                }
                this.updateKey = Date.now();
            },
            getItemShuffleCheckImage(key) {
                return this.game.itemShuffle === key ? '~/img/checked.png' : '~/img/unchecked.png';
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
    .modal-wrapper {
        visibility: visible;
        width: 100%;
        height: 100%;
        background-color: transparent;
        animation-name:fade-out;
        animation-duration: 500ms;
        animation-fill-mode: forwards;
        &.closed {
            visibility: collapsed;
        }
        &.open {
            visibility: visible;
            animation-duration: 500ms;
            animation-name:fade-in;
            animation-fill-mode: forwards;
        }
    }
    .modal-bg {
        background-color: black;
        opacity: 0.4;
        width: 100%;
        height: 100%;
    }
    .modal-dialog {
        background-color: darkred;
        border-width: 2px;
        border-color: #004c00;
        padding: 10;
        margin: 20;
        color: white;
        font-family: "Return of Ganon", "ReturnofGanon";
        font-size: 20;
        animation-name:slide-up;
        animation-duration: 500ms;
        animation-fill-mode: forwards;
        &.open {
            animation-duration: 1s;
            animation-name:slide-down;
            animation-fill-mode: forwards;
        }
    }
    @keyframes fade-out {
        from {opacity: 1;}
        to {opacity: 0;}
    }
    @keyframes fade-in {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @keyframes slide-up {
        from {transform:translate(0,0);}
        to {transform:translate(0,-400);}
    }
    @keyframes slide-down {
        from {transform:translate(0,-400);}
        to {transform:translate(0,0);}
    }
</style>
