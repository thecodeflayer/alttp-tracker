<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
                <GridLayout columns="52,*,80" rows="*" orientation="horizontal" class="save-wrapper" v-for="game in gameSaves" v-bind="game.id"
                             :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'"
                              @tap="navToEdit(game)" >
                    <Image :src="'~/img/game-'+(game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid')+'.png'"
                           col="0" row="0" width="48"/>
                    <StackLayout col="1" row="0" orientation="vertical" verticalAlignment="center">
                        <Label v-if="game.timestamp" :text="game.name + (game.loaded?': Active Game':'')"/>
                        <Label v-else text="Empty"/>
                        <Label v-if="game.timestamp" :text="game.gameMode" fontSize="16"/>
                        <Label v-else text="Create New Game" fontSize="16" />
                        <Label v-if="game.timestamp" :text="'Last Saved: '+game.timestamp" fontSize="16" verticalAlignment="bottom"/>
                        <Label v-else text=" " fontSize="16" verticalAlignment="bottom" />
                    </StackLayout>
                    <StackLayout col="2" row="0" orientation="vertical" horizontalAlignment="right">

                    </StackLayout>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import GameEdit from "~/components/GameEdit";
    import {GameSaveHelper} from '~/GameSaveHelper'

    export default {
        data: function() {
            return {
                gameSaves: GameSaveHelper.parseGameSaves(this.$modelManager)
            }
        },
        mounted() {
            this.gameSaves = GameSaveHelper.parseGameSaves(this.$modelManager);
        },
        methods: {
            navToEdit(game) {
                this.$navigateTo(GameEdit, {
                    props:{
                        game:game
                    }
                })
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
