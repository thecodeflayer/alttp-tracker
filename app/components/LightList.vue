<template>
    <Page>
        <Navbar></Navbar>
        <StackLayout orientation="vertical">
            <StackLayout orientation="horizontal" class="top-header"  @tap="toggleMode">
                <Image height="16" width="16" src="~/img/lightworld/map_btn.png" style="padding-left:10"/>
                <Label style="padding:0 8" text="Return to Map" />
            </StackLayout>
            <ScrollView orientation="vertical">
                <StackLayout orientation="vertical" backgroundColor="black">
                    <GridLayout class="locale-wrapper" v-for="key in mapHandler.keys" v-bind:key="mapHandler.keys" columns="40,*,52,40" rows="46">
                        <Image row="0" col="0" :src="mapHandler.locations[key].checked ? '~/img/checked.png' : '~/img/unchecked.png'" width="32" height="32" @tap="clickCheck(key)" />
                        <StackLayout row="0" col="1" orientation="vertical" style="padding-left:5">
                            <Label class="title" :text="mapHandler.staticLocations[key].title"/>
                            <Label :text="mapHandler.staticLocations[key].desc" fontSize="14" />
                        </StackLayout>
                        <GridLayout row="0" col="2" columns="18,18,18" rows="18,18" verticalAlignment="center">
                            <Image row="0" col="0" width="16" height="16" src="~/img/items/bombs1.png"/>
                            <Image row="0" col="1" width="16" height="16" src="~/img/items/bombs1.png"/>
                            <Image row="0" col="2" width="16" height="16" src="~/img/items/bombs1.png"/>
                            <Image row="1" col="0" width="16" height="16" src="~/img/items/bombs1.png"/>
                            <Image row="1" col="1" width="16" height="16" src="~/img/items/bombs1.png"/>
                            <Image row="1" col="2" width="16" height="16" src="~/img/items/bombs1.png"/>
                        </GridLayout>
                        <Image row="0" col="3" src="~/img/dungeons/compass1.png" width="32" height="32" @tap="clickCompass(key)" />
                    </GridLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </Page>
</template>

<script>

    import LightMap from "~/components/LightMap";
    import {staticMapLW} from "~/staticMapLW";

    export default {
        data: function() {
            return {
                menuHandler: {
                    mode: this.$modelManager.map.lightworld.mode
                },
                mapHandler: {
                    keys: Object.keys(staticMapLW),
                    staticLocations: staticMapLW,
                    locations: this.$modelManager.map.lightworld.locations
                }
            }
        },
        methods: {
            toggleMode(){
                this.menuHandler.mode = this.$modelManager.map.lightworld.mode = this.$modelManager.map.lightworld.mode = 0;
                this.$modelManager.saveMap();
                this.$navigateTo(LightMap);
            },
            clickCompass(key) {
                this.menuHandler.mode = this.$modelManager.map.lightworld.mode = this.$modelManager.map.lightworld.mode = 0;
                this.$modelManager.map.lightworld.centerKey = key;
                this.$modelManager.saveMap();
                this.$navigateTo(LightMap);
            },
            clickCheck(key) {
                this.mapHandler.locations[key].checked = this.$modelManager.map.lightworld.locations[key].checked = !this.mapHandler.locations[key].checked;
                this.$modelManager.saveMap();
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
    .rog {
        @include colorize($color: accent);
    }
    .top-header {
        background-color: black;
        padding:8;
        font-family: "Return of Ganon", "ReturnofGanon";
        font-size: 18;
        color: white;
    }
    .locale-wrapper {
        background-color: darkgreen;
        margin:4;
        border-width: 2;
        border-color: #003400;
        color: white;
        padding: 4;
        font-family: "Return of Ganon", "ReturnofGanon";
        font-size: 20
    }
</style>
