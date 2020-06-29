<template>
    <Page>
        <Navbar></Navbar>
        <StackLayout orientation="vertical">
            <GridLayout columns="18,*,*" rows="18" class="top-header">
                <Image col="0" row="0" height="16" width="16" src="~/img/map_btn.png" style="padding-left:10" @tap="toggleMode" verticalAlignment="top"/>
                <Label col="1" row="0" style="padding:0 8" text="Return to Map" @tap="toggleMode"/>
                <Label col="2" row="0" horizontalAlignment="right" @tap="setFilterList"
                       :text="'Filter: '+(filterList === 3 ? 'Unavailable' : filterList === 2 ? 'Available' : filterList === 1 ? 'Checked' : 'All')"/>
            </GridLayout>
            <ScrollView  ref="listScrollView" orientation="vertical"
                         :height="mapHandler.keys.length * 54"
                         :scrollableHeight="mapHandler.keys.length * 54"
                         @scroll="onScroll">
                <StackLayout orientation="vertical" backgroundColor="black">
                    <GridLayout class="locale-wrapper" v-for="key in mapHandler.keys" v-bind:key="mapHandler.keys"
                                columns="*,48" rows="60"
                                :backgroundColor="mapHandler.locations[key].checked ? 'gray' : mapHandler.locations[key].klass === 'locale-green' ? 'darkgreen':'darkred'">
                        <StackLayout row="0" col="0" orientation="vertical" style="padding-left:5">
                            <StackLayout orientation="horizontal">
                                <Image :src="mapHandler.locations[key].checked ? '~/img/checked.png' : '~/img/unchecked.png'" width="32" height="32" @tap="clickCheck(key)" />
                                <Label class="title" :text="mapHandler.staticLocations[key].title"/>
                            </StackLayout>
                            <StackLayout orientation="horizontal" style="padding-right:4;padding-top:6;">
                                <Image v-for="img in mapHandler.staticLocations[key].req" v-bind:key="img"
                                       height="16" :src="'~/img/'+img+'.png'" />
                            </StackLayout>
                        </StackLayout>
                        <StackLayout row="0" col="1" orientation="vertical">
                            <Image row="0" col="1" src="~/img/dungeons/compass1.png" width="32" height="32" @tap="clickCompass(key)" horizontalAlignment="center" />
                            <StackLayout orientation="horizontal" style="margin-top:4;" horizontalAlignment="right">
                                <Image src="~/img/chest.png" height="16" width="16" />
                                <Label class="title" fontSize="16" :text="'x'+mapHandler.staticLocations[key].itemCount"/>
                            </StackLayout>

                        </StackLayout>
                    </GridLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </Page>
</template>

    <script>

        import LightMap from "~/components/LightMap";

        export default {
            data: function() {
                return {
                    menuHandler: {
                        mode: this.$modelManager.map.lightworld.mode
                    },
                    mapHandler: {
                        keys: Object.keys(this.$sol.getStaticMapLW(this.$modelManager.getGameMode())),
                        staticLocations: this.$sol.getStaticMapLW(this.$modelManager.getGameMode()),
                        locations: this.$modelManager.map.lightworld.locations
                    },
                    scrollTimout: undefined,
                    scrollOffsetY: this.$modelManager.map.lightworld.scrollY,
                    filterList: this.$modelManager.map.lightworld.filterList
                }
            },
            mounted() {
                this.scrollOffsetY = this.$modelManager.map.lightworld.scrollY;
                const sv = this.$refs.listScrollView.nativeView;
                setTimeout(() => {
                    try{
                        sv.scrollToVerticalOffset(this.scrollOffsetY);
                    }catch(err){console.log(err);}
                }, 300);

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
                },
                onScroll(args){
                    clearTimeout(this.scrollTimout);
                    this.scrollTimout = setTimeout(() => {
                        this.scrollOffsetY = this.$modelManager.map.lightworld.scrollY = args.scrollY;
                        this.$modelManager.saveMap();
                    }, 300);
                },
                getVisible(key) {
                    return ((this.filterList === 3 && this.mapHandler.locations[key].klass === 'locale-red')
                        || (this.filterList === 2 && this.mapHandler.locations[key].klass === 'locale-green')
                        || (this.filterList === 1 && this.mapHandler.locations[key].checked)
                        || this.filterList === 0) ? 'visible' : 'collapsed'
                },
                setFilterList() {
                    let val = this.filterList;
                    if(val === null || val === undefined){
                        val = 0;
                    }
                    val = val + 1;
                    if(val > 3) {
                        val = 0;
                    }
                    this.filterList = this.$modelManager.map.lightworld.filterList = val;
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
        .title {
            font-family: "Return of Ganon", "ReturnofGanon";
            font-size: 20;
            padding:5;
        }
    </style>
