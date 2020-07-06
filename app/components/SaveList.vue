<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView orientation="vertical">
            <Label color="white" :text="'Time: '+gameSaves.game0.timestamp"/>
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
            //this.gameSaves =
        },
        methods: {
            parseGameSaves() {
                const retval = {};
                for(let i = 0; i< 5; i++) {
                    const g = {
                        timestamp: this.parseDate(this.$modelManager.gameSaves['game'+i].timestamp)
                    }
                    retval['game'+i]=g;
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
        background-color: darkgreen;
        padding: 10;
        color: white;
        horizontal-align: center;
        vertical-align: center;
        font-family: "Return of Ganon", "ReturnofGanon";
        width: 90%
    }
</style>
