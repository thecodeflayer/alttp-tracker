<template>
    <Page>
        <Navbar></Navbar>
        <StackLayout orientation="vertical">
            <StackLayout orientation="horizontal" class="top-header"  @tap="toggleMode">
                <Image height="16" width="16" src="~/img/lightworld/map_btn.png" style="padding-left:10"/>
                <Label style="padding:0 8" text="Return to Map" />
            </StackLayout>
            <ScrollView  ref="listScrollView" orientation="vertical" @loaded="onLoadScroll"
                         :height="mapHandler.keys.length * 54"
                         :scrollableHeight="mapHandler.keys.length * 54"
                         :scrollToVerticalOffset="scrollOffsetY"
                         @scroll="onScroll">
                <StackLayout orientation="vertical" backgroundColor="black">
                    <GridLayout class="locale-wrapper" v-for="key in mapHandler.keys" v-bind:key="mapHandler.keys" columns="40,*,40" rows="46">
                        <Image row="0" col="0" :src="mapHandler.locations[key].checked ? '~/img/checked.png' : '~/img/unchecked.png'" width="32" height="32" @tap="clickCheck(key)" />
                        <StackLayout row="0" col="1" orientation="vertical" style="padding-left:5">
                            <Label class="title" :text="mapHandler.staticLocations[key].title"/>
                            <StackLayout orientation="horizontal" style="padding-right:4">
                                <Image v-for="(img, index) in mapHandler.staticLocations[key].req" v-bind:key="img"
                                       width="16" height="16" :src="'~/img/'+img+'.png'" />
                            </StackLayout>
                        </StackLayout>
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
                },
                scrollTimout: undefined,
                scrollOffsetY: this.$modelManager.map.lightworld.scrollY;
            }
        },
        // mounted() {
        //     this.scrollOffsetY = this.$modelManager.map.lightworld.scrollY;
        //     //this.$refs.listScrollView.nativeView.scrollToVerticalOffset(this.scrollOffsetY, false);
        //
        // },
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
            },
            onScroll(args){
                console.log('save scroll', args.scrollY, this.scrollOffsetY);
                clearTimeout(this.scrollTimout);
                this.scrollTimout = setTimeout(() => {
                    this.scrollOffsetY = this.$modelManager.map.lightworld.scrollY = args.scrollY;
                    this.$modelManager.saveMap();
                }, 300);
            },
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
