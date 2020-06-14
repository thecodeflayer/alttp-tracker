<template>
    <Page>
        <Navbar></Navbar>
        <GridLayout columns="*", rows="50,50,50,50" style="margin-top:10">
            <Button row="0" col="0" class="btn" @tap="resetItems">Reset Items</Button>
            <Button row="1" col="0" class="btn" @tap="resetDungeons">Reset Dungeons</Button>
            <Button row="2" col="0" class="btn" @tap="resetMap">Reset Map</Button>
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

    .btn {
        font-size: 20;
        background-color: darkgreen;
        padding: 10;
        color: white;
        horizontal-align: center;
        vertical-align: center;
        width: 90%
    }
</style>
