<template>
    <Page backgroundColor="black">
        <Navbar ref="navbar"></Navbar>
        <AbsoluteLayout @pan="onPan" @pinch="onPinch">
            <AbsoluteLayout ref="mapWrapper" top="0" left="0" :scaleX="pinchHandler.currentScale" :scaleY="pinchHandler.currentScale">
                <Image v-for="tile in mapHandler.tiles" v-bind:key="mapHandler.tiles" :top="tile.top" :left="tile.left" :width="tile.width" :height="tile.height" :src="tile.src" />
                <Label v-if="mapHandler.centerKey" :visibility="pinchHandler.pinching ? 'collapsed': 'visible'"
                       class="center-key"
                       :width="Math.floor(30 * (1 / pinchHandler.localeScale))"
                       :height="Math.floor(30 * (1 / pinchHandler.localeScale))"
                       :left="Math.floor(mapHandler.staticLocations[mapHandler.centerKey].x - (15 * (1 / pinchHandler.localeScale)))"
                       :top="Math.floor(mapHandler.staticLocations[mapHandler.centerKey].y - (15 * (1 / pinchHandler.localeScale)))"
                       @tap="onClickLocale(mapHandler.centerKey)" />
                <Label v-for="key in mapHandler.keys" v-bind:key="mapHandler.keys" :visibility="pinchHandler.pinching ? 'collapsed': 'visible'"
                       :class="mapHandler.locations[key].checked ? 'locale-gray' : mapHandler.locations[key].klass"
                       :width="Math.floor(20 * (1 / pinchHandler.localeScale))"
                       :height="Math.floor(20 * (1 / pinchHandler.localeScale))"
                       :left="Math.floor(mapHandler.staticLocations[key].x - (10 * (1 / pinchHandler.localeScale)))"
                       :top="Math.floor(mapHandler.staticLocations[key].y - (10 * (1 / pinchHandler.localeScale)))"
                       @tap="onClickLocale(key)"/>
                <Label v-for="dkey in mapHandler.dungeonKeys" v-bind:dkey="mapHandler.dungeonKeys" :visibility="pinchHandler.pinching ? 'collapsed' : 'visible'"
                       :class="(mapHandler.staticDungeonValues[dkey].maxChests === 0 ? (mapHandler.dungeonValues[dkey].boss) : mapHandler.dungeonValues[dkey].chests === 0) ? 'locale-gray' : mapHandler.dungeons[dkey].klass"
                       :width="Math.floor(46 * (1 / pinchHandler.localeScale))"
                       :height="Math.floor(46 * (1 / pinchHandler.localeScale))"
                       :left="Math.floor(mapHandler.staticDungeons[dkey].x - (23 * (1 / pinchHandler.localeScale)))"
                       :top="Math.floor(mapHandler.staticDungeons[dkey].y - (23 * (1 / pinchHandler.localeScale)))" />
                <Label v-for="bkey in mapHandler.dungeonKeys" v-bind:bkey="mapHandler.dungeonKeys" :visibility="pinchHandler.pinching ? 'collapsed' : 'visible'"
                       style="border-width: 0"
                       :class="mapHandler.dungeonValues[bkey].boss ? 'locale-gray' : mapHandler.bosses[bkey].klass"
                       :width="Math.floor(30 * (1 / pinchHandler.localeScale))"
                       :height="Math.floor(30 * (1 / pinchHandler.localeScale))"
                       :left="Math.floor(mapHandler.staticDungeons[bkey].x - (15 * (1 / pinchHandler.localeScale)))"
                       :top="Math.floor(mapHandler.staticDungeons[bkey].y - (15 * (1 / pinchHandler.localeScale)))" />
                <Image v-for="bkey in mapHandler.dungeonKeys" v-bind:bkey="mapHandler.dungeonKeys" :visibility="pinchHandler.pinching ? 'collapsed' : 'visible'"
                       :src="'~/img/dungeons/'+bkey+'_boss0.png'"
                       :width="Math.floor(20 * (1 / pinchHandler.localeScale))"
                       :height="Math.floor(20 * (1 / pinchHandler.localeScale))"
                       :left="Math.floor(mapHandler.staticDungeons[bkey].x - (10 * (1 / pinchHandler.localeScale)))"
                       :top="Math.floor(mapHandler.staticDungeons[bkey].y - (10 * (1 / pinchHandler.localeScale)))" />
            </AbsoluteLayout>
            <GridLayout top="10" left="0" columns="40,*" rows="*">
                <Image row="0" col="0" height="32" width="32" src="~/img/dungeons/compass1.png" style="padding-left:10" @tap="toggleMode" />
                <Label visibility="collapsed" row="0" col="1" width="300" :text="debugInfo" textWrap="true" color="white" backgroundColor="black"/>
            </GridLayout>
        </AbsoluteLayout>

    </Page>
</template>

<script>
    import {screen} from 'tns-core-modules/platform';
    import * as app from 'tns-core-modules/application'
    import * as utils from 'tns-core-modules/utils/utils';
    import DarkList from "~/components/DarkList";

    export default {
        data: function() {
            return {
                debugInfo: 'Debug info here',
                menuHandler: {
                    mode: this.$modelManager.map.darkworld.mode
                },
                panHandler: {
                    lastX: 0,
                    lastY: 0
                },
                pinchHandler: {
                    top: 0,
                    left: 0,
                    lastScale: -1,
                    currentScale: this.$modelManager.map.darkworld.scale,
                    localeScale: this.$modelManager.map.darkworld.scale,
                    pinching: false
                },
                mapHandler: {
                    tiles: this.populateTiles(),
                    keys: Object.keys(this.$sol.getStaticMapDW(this.$modelManager.getGameMode())),
                    staticLocations: this.$sol.getStaticMapDW(this.$modelManager.getGameMode()),
                    locations: this.$modelManager.map.darkworld.locations,
                    dungeonKeys: Object.keys(this.$sol.getStaticMapDungeonsDW(this.$modelManager.getGameMode())),
                    staticDungeons: this.$sol.getStaticMapDungeonsDW(this.$modelManager.getGameMode()),
                    dungeons: this.$modelManager.map.darkworld.dungeons,
                    bosses: this.$modelManager.map.darkworld.bosses,
                    dungeonValues: this.$modelManager.dungeons,
                    staticDungeonValues: this.$sol.getStaticDungeons(this.$modelManager.getGameMode()),
                    centerKey: undefined
                },
                mapWidth:1500,
                mapHeight:1500,
                screen: screen,
                screenWidth: 0,
                screenHeight: 0,
                statusBarHeight: 0,
                topNavHeight: 0,
                bottomNavHeight:0,
                viewHeight:0,
            }
        },
        mounted() {
            this.$modelManager.validateLocales();
            this.screenWidth = this.getMainScreenWidth();
            this.screenHeight = this.getMainScreenHeight();
            this.statusBarHeight = this.getStatusBarHeight();
            this.bottomNavHeight = this.getBottomNavbarHeight();
            this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.darkworld.x;
            this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.darkworld.y;
            const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.darkworld.scale;
            this.pinchHandler.top = this.getPinchTop(newScale);
            this.pinchHandler.left = this.getPinchLeft(newScale);
            setTimeout(() => {
                this.topNavHeight = this.getViewHeight(this.$refs.navbar.nativeView);
                if(this.$modelManager.map.darkworld.centerKey) {
                    this.centerOnKey();
                }
            },300);

        },
        methods: {
            getStatusBarHeight() {
                let result = 0;
                if (app.android) {
                    const resourceId = (app.android.foregroundActivity || app.android.startActivity).getResources().getIdentifier('status_bar_height', 'dimen', 'android');
                    if (resourceId) {
                        result = (app.android.foregroundActivity || app.android.startActivity).getResources().getDimensionPixelSize(resourceId);

                        //result = result / this.screen.mainScreen.scale;
                        result = utils.layout.toDeviceIndependentPixels(result);
                    }
                }
                return result;
            },
            getBottomNavbarHeight() {
                if(app.android) {
                    let navBarHeight = 0;
                    let windowManager = app.android.context
                        .getSystemService(android.content.Context.WINDOW_SERVICE);
                    let d = windowManager.getDefaultDisplay();

                    let realDisplayMetrics = new android.util.DisplayMetrics();
                    d.getRealMetrics(realDisplayMetrics);

                    let realHeight = realDisplayMetrics.heightPixels;
                    let realWidth = realDisplayMetrics.widthPixels;

                    let displayMetrics = new android.util.DisplayMetrics();
                    d.getMetrics(displayMetrics);

                    let displayHeight = displayMetrics.heightPixels;
                    let displayWidth = displayMetrics.widthPixels;

                    if((realHeight - displayHeight) > 0) { // Portrait
                        navBarHeight = realHeight - displayHeight;
                    } else if ((realWidth - displayWidth) > 0) { // Landscape
                        //return zero for now. only so many wonky things to deal with at a time.
                        //navBarHeight = realWidth - displayWidth;
                        return 0;
                    }
                    // add a few pixels if height is greater than zero
                    // if(navBarHeight > 0) {
                    //     navBarHeight = navBarHeight + (10 * this.screen.mainScreen.scale);
                    // }
                    return Math.floor(navBarHeight / this.screen.mainScreen.scale);

                    // return (navBarHeight
                    //     / app.android.currentContext
                    //         .getResources().getDisplayMetrics().density);

                }
                return 0;
            },
            populateTiles() {
                const retval = [];
                for(let i = 0; i < 25; i ++) {
                    const obj = {};
                    obj.src = '~/img/darkworld/'+this.$modelManager.getGameModeMap()+'/map'+(i+1)+'.png';
                    obj.width = 300;
                    obj.height = 300;
                    obj.top = Math.floor(i / 5) * 300;
                    obj.left = (i % 5) * 300;
                    retval.push(obj);
                }
                return retval;
            },
            onPan(args) {
                if(args.state === 1) {
                }
                if(args.state === 2) {
                    let newX = this.$refs.mapWrapper.nativeView.left + ((args.deltaX - this.panHandler.lastX));
                    let newY = this.$refs.mapWrapper.nativeView.top + ((args.deltaY - this.panHandler.lastY));
                    this.keepInBounds(newX, newY);
                    this.panHandler.lastX = args.deltaX;
                    this.panHandler.lastY = args.deltaY;
                    // this.debugInfo = 'pinch:' + this.pinchHandler.left + ', ' +this.pinchHandler.top +
                    //     ' screen raw:' + (this.screen.mainScreen.heightPixels - this.$refs.navbar.nativeView.getMeasuredHeight()) +
                    //     ' screen calc:' + (this.screenHeight - this.topNavHeight) +
                    //     ' map raw:'+ this.$refs.mapWrapper.nativeView.getMeasuredHeight() +
                    //     ' scale:'+ (this.pinchHandler.currentScale+'').substr(0,4) +
                    //     ' minscale' + this.getMinScale() +
                    //     ' newy:'+ (newY +'').substr(0,4) +
                    //     ' screen scale:' + this.screen.mainScreen.scale;this.panHandler.lastX = args.deltaX;
                    // '';
                } else if(args.state === 3) {
                    this.panHandler.lastX = 0;
                    this.panHandler.lastY = 0;
                    this.$modelManager.saveMap();
                }
            },
            onPinch(args) {
                if(args.state === 1) {
                    this.pinchHandler.pinching = true;
                }
                let lastScale = this.pinchHandler.lastScale === -1 ? this.pinchHandler.currentScale : this.pinchHandler.lastScale;
                let newScale = lastScale * args.scale;
                if(newScale < this.getMinScale()) {
                    newScale = this.getMinScale();
                } else if (newScale > 1) {
                    newScale = 1
                }
                this.pinchHandler.currentScale = this.$modelManager.map.darkworld.scale = newScale;
                this.pinchHandler.top = this.getPinchTop(newScale);
                this.pinchHandler.left = this.getPinchLeft(newScale);

                if(args.state === 3) {
                    this.pinchHandler.lastScale = newScale;
                    this.pinchHandler.localeScale = this.pinchHandler.currentScale;
                    this.pinchHandler.pinching = false;
                }
            },
            centerOnKey() {
                const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.darkworld.scale = 1;
                this.pinchHandler.top = this.getPinchTop(newScale);
                this.pinchHandler.left = this.getPinchLeft(newScale);
                const locale = this.mapHandler.staticLocations[this.$modelManager.map.darkworld.centerKey];
                this.mapHandler.centerKey = this.$modelManager.map.darkworld.centerKey;
                this.$modelManager.map.darkworld.centerKey = undefined;
                const halfWidth = Math.floor(this.screenWidth / 2);
                const halfHeight = Math.floor((this.screenHeight - this.topNavHeight - this.statusBarHeight) / 2);
                let newX = Math.floor(-Math.abs(locale.x) + halfWidth);
                let newY = Math.floor(-Math.abs(locale.y) + halfHeight);
                this.keepInBounds(newX, newY);
                this.$modelManager.saveMap();
            },
            keepInBounds(newX, newY) {
                const minX = -Math.abs((this.screenWidth + Math.abs(this.pinchHandler.left)) - this.mapWidth);
                if(newX > this.pinchHandler.left) {
                    newX = this.pinchHandler.left;
                } else if(newX < minX) {
                    newX = minX;
                }
                const minY = -Math.abs(((this.screenHeight - this.topNavHeight - this.statusBarHeight - this.bottomNavHeight) + Math.abs(this.pinchHandler.top)) - (this.mapHeight));
                //console.log(this.screenHeight, this.topNavHeight, this.statusBarHeight, this.bottomNavHeight, this.pinchHandler.top);
                //console.log(this.getViewHeight(this.$refs.navbar.nativeView));
                //console.log(minY, newY);
                if(newY > this.pinchHandler.top) {
                    newY = this.pinchHandler.top;
                } else if(newY < minY) {
                    newY = minY;
                }
                this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.darkworld.x = newX;
                this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.darkworld.y = newY;
            },
            toggleMode(){
                this.menuHandler.mode = this.$modelManager.map.darkworld.mode = this.$modelManager.map.darkworld.mode = 1;
                this.$modelManager.saveMap();
                this.$navigateTo(DarkList);
            },
            getViewWidth(view) {
                return Math.floor(view.getMeasuredWidth() / this.screen.mainScreen.scale);
            },
            getViewHeight(view) {
                return Math.floor(view.getMeasuredHeight() / this.screen.mainScreen.scale);
            },
            getMainScreenWidth() {
                return Math.floor(this.screen.mainScreen.widthPixels / this.screen.mainScreen.scale);
            },
            getMainScreenHeight() {
                return Math.floor(this.screen.mainScreen.heightPixels / this.screen.mainScreen.scale);
            },
            getMinScale(){
                const height = this.screenHeight - this.topNavHeight -this.statusBarHeight - this.bottomNavHeight;
                const useHeight = height > this.screenWidth;
                if(useHeight){
                    return height / (this.mapHeight);
                } else {
                    return this.screenWidth / this.mapWidth;
                }
            },
            getPinchLeft(newScale) {
                return -Math.abs(Math.floor((this.mapWidth * 0.5) - ((this.mapWidth * newScale) * 0.5)));
            },
            getPinchTop(newScale) {
                const val = (((this.mapHeight) * 0.5) * newScale);
                return -Math.abs(Math.floor(((this.mapHeight) * 0.5) - val));
            },
            onClickLocale(key){
                this.mapHandler.locations[key].checked = this.$modelManager.map.darkworld.locations[key].checked = !this.mapHandler.locations[key].checked;
                this.mapHandler.centerKey = undefined;
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
    .location-label {
        font-family: "Return of Ganon";
        font-size: 16;
        color: #fff;
    }
    .locale-green {
        border-width: 3;
        border-color: black;
        background-color: aqua;
    }
    .locale-gray {
        border-width: 3;
        border-color: black;
        background-color: gray;
    }
    .locale-red {
        border-width: 3;
        border-color: black;
        background-color: red;
    }
    .center-key{
        border-width: 3;
        border-color: black;
        background-color: yellow;
    }
</style>
