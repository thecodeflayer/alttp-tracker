<template>
    <Page>
        <Navbar></Navbar>
        <GridLayout>
            <Button class="info" @tap="resetItems">Reset Items</Button>
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

    .info {
        font-size: 20;
        background-color: darkgreen;
        padding: 10;
        color: white;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
