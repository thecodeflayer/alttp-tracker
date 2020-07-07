<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <StackLayout orientation="vertical" class="save-wrapper">
            <Label :text="$props.game"/>
        </StackLayout>
    </Page>
</template>

<script>
    const labels = {
        standard: 'Standard',
        inverted: 'Inverted'
    }
    export default {
        props:['game'],
        data: function() {
            return {

            }
        },
        mounted() {
            console.log(this.game);
        },
        methods: {

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
