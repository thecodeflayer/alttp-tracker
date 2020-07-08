<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <GridLayout columns="*", rows="50,50,50,50,50" style="margin-top:10">
            <Button row="0" col="0" class="btn" @tap="navSaveList">Saved Games</Button>
            <Label row="1" col="0" class="lbl" horizontalAlignment="center" verticalAlignment="center" :text="'Version: '+appVersion"/>
        </GridLayout>
    </Page>
</template>

<script>
    import SaveList from "~/components/SaveList";

    export default {
        data: function() {
            return {
                appVersion: this.$modelManager.appVersion
            }
        },
        methods: {
            navSaveList() {
                this.$navigateTo(SaveList);
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
