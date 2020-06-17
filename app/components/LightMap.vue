<template>
    <Page backgroundColor="black">
        <Navbar ref="navbar"></Navbar>
        <AbsoluteLayout @pan="onPan" @pinch="onPinch">
            <AbsoluteLayout ref="mapWrapper" top="0" left="0" :scaleX="pinchHandler.currentScale" :scaleY="pinchHandler.currentScale">
                <Image v-for="tile in mapHandler.tiles" v-bind:key="mapHandler.tiles" :top="tile.top" :left="tile.left" :width="tile.width" :height="tile.height" :src="tile.src" />
                <Label v-for="key in mapHandler.keys" v-bind:key="mapHandler.keys" :visibility="pinchHandler.pinching ? 'collapsed': 'visible'"
                       :class="mapHandler.locations[key].checked ? 'locale-gray' : mapHandler.locations[key].klass"
                       :width="Math.floor(20 * (1 / pinchHandler.localeScale))"
                       :height="Math.floor(20 * (1 / pinchHandler.localeScale))"
                       :left="Math.floor(mapHandler.staticLocations[key].x - (10 * (1 / pinchHandler.localeScale)))"
                       :top="Math.floor(mapHandler.staticLocations[key].y - (10 * (1 / pinchHandler.localeScale)))"
                        @tap="onClickLocale(key)"/>
                <Label v-for="dkey in mapHandler.dungeonKeys" v-bind:dkey="mapHandler.dungeonKeys" :visibility="pinchHandler.pinching ? 'collapsed' : 'visible'"
                       :class="mapHandler.dungeonValues[dkey].chests === 0 ? 'locale-gray' : mapHandler.dungeons[dkey].klass"
                       :width="Math.floor(50 * (1 / pinchHandler.localeScale))"
                       :height="Math.floor(50 * (1 / pinchHandler.localeScale))"
                       :left="Math.floor(mapHandler.staticDungeons[dkey].x - (25 * (1 / pinchHandler.localeScale)))"
                       :top="Math.floor(mapHandler.staticDungeons[dkey].y - (25 * (1 / pinchHandler.localeScale)))" />
            </AbsoluteLayout>
            <GridLayout top="10" left="0" columns="40,*" rows="*">
                <Image row="0" col="0" height="16" width="16" src="~/img/lightworld/compass_btn.png" style="padding-left:10" @tap="toggleMode" />
                <Label visibility="collapsed" row="0" col="1" width="300" :text="debugInfo" textWrap="true" color="white" backgroundColor="black"/>
            </GridLayout>
        </AbsoluteLayout>

    </Page>
</template>

<script>
    import {screen} from 'tns-core-modules/platform';
    import {staticMapLW} from "~/staticMapLW";
    import * as app from 'tns-core-modules/application'
    import LightList from "~/components/LightList";
    import {staticMapDungeonsLW} from "~/staticMapDungeonsLW";

    export default {
        data: function() {
            return {
                debugInfo: 'Debug info here',
                menuHandler: {
                    mode: this.$modelManager.map.lightworld.mode
                },
                panHandler: {
                    lastX: 0,
                    lastY: 0
                },
                pinchHandler: {
                    top: 0,
                    left: 0,
                    lastScale: -1,
                    currentScale: this.$modelManager.map.lightworld.scale,
                    localeScale: this.$modelManager.map.lightworld.scale,
                    pinching: false
                },
                mapHandler: {
                    tiles: this.populateTiles(),
                    keys: Object.keys(staticMapLW),
                    staticLocations: staticMapLW,
                    locations: this.$modelManager.map.lightworld.locations,
                    dungeonKeys: Object.keys(staticMapDungeonsLW),
                    staticDungeons: staticMapDungeonsLW,
                    dungeons: this.$modelManager.map.lightworld.dungeons,
                    dungeonValues: this.$modelManager.dungeons
                },
                mapWidth:1500,
                mapHeight:1500,
                screen: screen,
            }
        },
        mounted() {
            this.$modelManager.validateLocales();
            this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x;
            this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y;
            const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.lightworld.scale;
            this.pinchHandler.top = -Math.abs(Math.floor((this.mapHeight * 0.5) - ((this.mapHeight * newScale) * 0.5)));
            this.pinchHandler.left = -Math.abs(Math.floor((this.mapWidth * 0.5) - ((this.mapWidth * newScale) * 0.5)));
            if(this.$modelManager.map.lightworld.centerKey) {
                this.centerOnKey();
            }
            this.mapHeight = this.getMapHeight();

        },
        methods: {
            getMapHeight() {
                let retval = 1500;
                retval = 1500 + this.getNavbarHeight();
                return retval;
            },
            getNavbarHeight() {
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
                    return Math.floor(navBarHeight / this.screen.mainScreen.scale);

                }
                return 0;
            },
            populateTiles() {
                const retval = [];
                for(let i = 0; i < 25; i ++) {
                    const obj = {};
                    obj.src = '~/img/lightworld/map'+(i+1)+'.png';
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
                    // this.debugInfo = 'pinch:' + this.pinchHandler.top +
                    //     ' screen raw:' + (this.screen.mainScreen.heightPixels - this.$refs.navbar.nativeView.getMeasuredHeight()) +
                    //     ' screen calc:' + (this.getMainScreenHeight() - this.getViewHeight(this.$refs.navbar.nativeView)) +
                    //     ' map raw:'+ this.$refs.mapWrapper.nativeView.getMeasuredHeight() +
                    //     ' scale:'+ (this.pinchHandler.currentScale+'').substr(0,4) +
                    //     ' minscale' + this.getMinScale() +
                    //     ' newy:'+ (newY +'').substr(0,4) +
                    //     ' screen scale:' + this.screen.mainScreen.scale;this.panHandler.lastX = args.deltaX;
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
                this.pinchHandler.currentScale = this.$modelManager.map.lightworld.scale = newScale;
                this.pinchHandler.top = -Math.abs(Math.floor((this.mapHeight * 0.5) - ((this.mapHeight * newScale) * 0.5)));
                this.pinchHandler.left = -Math.abs(Math.floor((this.mapWidth * 0.5) - ((this.mapWidth * newScale) * 0.5)));

                if(args.state === 3) {
                    this.pinchHandler.lastScale = newScale;
                    this.pinchHandler.localeScale = this.pinchHandler.currentScale;
                    this.pinchHandler.pinching = false;
                }
            },
            centerOnKey() {
                const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.lightworld.scale = 1;
                this.pinchHandler.top = -Math.abs(Math.floor((this.mapHeight * 0.5) - ((this.mapHeight * newScale) * 0.5)));
                this.pinchHandler.left = -Math.abs(Math.floor((this.mapWidth * 0.5) - ((this.mapWidth * newScale) * 0.5)));
                const locale = this.mapHandler.staticLocations[this.$modelManager.map.lightworld.centerKey];
                this.$modelManager.map.lightworld.centerKey = undefined;
                const halfWidth = Math.floor(this.getMainScreenWidth() / 2);
                const halfHeight = Math.floor((this.getMainScreenHeight() - this.getViewHeight(this.$refs.navbar.nativeView)) / 2);
                let newX = Math.floor(-Math.abs(locale.x) + halfWidth);
                let newY = Math.floor(-Math.abs(locale.y) + halfHeight);
                console.log('x',locale.x, halfWidth, this.pinchHandler.currentScale,  newX);
                console.log('y',locale.y, halfHeight, this.pinchHandler.currentScale,  newY);
                this.keepInBounds(newX, newY);
                this.$modelManager.saveMap();
            },
            keepInBounds(newX, newY) {
                if(newX > this.pinchHandler.left) {
                    newX = this.pinchHandler.left;
                } else if((newX + this.pinchHandler.left) <
                    -Math.abs(this.getMainScreenWidth() -
                        this.mapWidth)){
                    newX = -Math.abs(Math.abs(this.pinchHandler.left) +
                        this.getMainScreenWidth() -
                        this.mapWidth);
                }
                if(newY > this.pinchHandler.top) {
                    newY = this.pinchHandler.top;
                } else if((newY + this.pinchHandler.top) <
                    -Math.abs((this.getMainScreenHeight()) -
                        this.getViewHeight(this.$refs.navbar.nativeView) -
                        this.mapHeight)){
                    newY = -Math.abs(Math.abs(this.pinchHandler.top) +
                        (this.getMainScreenHeight()) -
                        this.getViewHeight(this.$refs.navbar.nativeView) -
                        this.mapHeight);
                }
                this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x = newX;
                this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y = newY;
            },
            toggleMode(){
                this.menuHandler.mode = this.$modelManager.map.lightworld.mode = this.$modelManager.map.lightworld.mode = 1;
                this.$modelManager.saveMap();
                this.$navigateTo(LightList);
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
                const height = this.getMainScreenHeight() - this.getViewHeight(this.$refs.navbar.nativeView);
                const useHeight = height > this.getMainScreenWidth();
                if(useHeight){
                    return height / this.mapHeight;
                } else {
                    return this.getMainScreenWidth() / this.mapHeight;
                }
            },
            onClickLocale(key){
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
</style>
