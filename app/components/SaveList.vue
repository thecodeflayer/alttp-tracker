<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
                <GridLayout columns="52,*,80" rows="*" orientation="horizontal" class="save-wrapper" v-for="game in gameSaves" v-bind="game.id"
                             :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'"
                              @tap="navToEdit(game.id)" >
                    <Image :src="'~/img/game-'+(game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid')+'.png'"
                           col="0" row="0" width="48"/>
                    <StackLayout col="1" row="0" orientation="vertical" verticalAlignment="center">
                        <Label v-if="game.timestamp" :text="game.gameMode"/>
                        <Label v-else text="Create New Game" />
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

    const labels = {
        standard: 'Standard',
        inverted: 'Inverted'
    }
    export default {
        data: function() {
            return {
                gameSaves: this.parseGameSaves()
            }
        },
        mounted() {
            this.gameSaves = this.parseGameSaves();
        },
        methods: {
            parseGameSaves() {
                const retval = {};
                const keys = Object.keys(this.$modelManager.gameSaves);
                let i = 0;
                for(const key of keys) {
                    const g = {
                        id:key,
                        name:'Game '+(i+1)
                    };
                    if(this.$modelManager.gameSaves[key].timestamp){
                        g.timestamp = this.parseDate(this.$modelManager.gameSaves[key].timestamp);
                        g.valid = this.$modelManager.validateGame(this.$modelManager.gameSaves[key]);
                        g.loaded = this.$modelManager.settings.gameSlot === i;
                        g.gameMode = labels[this.$modelManager.settings.gameMode];
                    }
                    retval[key]=g;
                    i++;
                }
                return retval;
            },
            parseDate(ts){
                if(!ts){return ''; }
                const d = new Date(ts);
                return d.getFullYear()+'-'+
                    this.pad(d.getMonth()+1)+
                    '-'+this.pad(d.getDate())
                    +' '+this.pad(d.getHours())+':'+this.pad(d.getMinutes());
            },
            pad(n) {
                return n<10 ? '0'+n : n;
            },
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
            color: black;
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
