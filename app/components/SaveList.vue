<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
                <StackLayout orientation="vertical" class="btn" v-for="game in gameSaves" v-bind="game.id"
                             :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'">
                    <Label :text="game.name"/>
                    <Label :text="'Last Saved: '+game.timestamp" fontSize="16"/>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
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
        margin: 5;
        color: white;
        vertical-align: top;
        font-family: "Return of Ganon", "ReturnofGanon";
        &.loaded {
            background-color: #b68000;
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
