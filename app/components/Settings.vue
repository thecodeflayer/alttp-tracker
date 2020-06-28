<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <GridLayout columns="*", rows="50,50,50,50" style="margin-top:10">
            <Button row="0" col="0" class="btn" @tap="resetItems">Reset Items</Button>
            <Button row="1" col="0" class="btn" @tap="resetDungeons">Reset Dungeons</Button>
            <Button row="2" col="0" class="btn" @tap="resetMap">Reset Map</Button>
            <Label row="3" col="0" class="lbl" horizontalAlignment="center" verticalAlignment="center" text="Version: 0.8.11"/>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        computed: {

        },
        methods: {
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
        background-color: darkgreen;
        padding: 10;
        color: white;
        horizontal-align: center;
        vertical-align: center;
        font-family: "Return of Ganon", "ReturnofGanon";
        width: 90%
    }
</style>
