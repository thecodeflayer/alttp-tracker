<template>
    <Page backgroundColor="black">
        <Navbar ref="navbar"></Navbar>
        <AbsoluteLayout @pan="onPan" @pinch="onPinch">
            <AbsoluteLayout ref="mapWrapper" top="0" left="0"
                            :visibility="menuHandler.mode === 0 ? 'visible':'collapsed'"
                            :scaleX="pinchHandler.currentScale" :scaleY="pinchHandler.currentScale" backgroundColor="red">
                <!-- <Image v-for="tile in mapHandler.tiles" :top="tile.top" :left="tile.left" :width="tile.width" :height="tile.height" :src="tile.src" /> -->
            </AbsoluteLayout>
            <StackLayout top="0" left="0" orientation="vertical" :visibility="menuHandler.mode === 1 ? 'visible':'collapsed'">
                <StackLayout orientation="horizontal" backgroundColor="#006400">
                    <Label text="Map Item Uno" />
                </StackLayout>
            </StackLayout>
            <GridLayout :top="10" left="0" columns="40,*" rows="20">
                <Image row="0" col="0" src="~/img/lightworld/compass_btn.png" style="padding-left:10"
                       :visibility="menuHandler.mode === 0 ? 'visible':'collapsed'" @tap="toggleMode" />
                <Image row="0" col="0" src="~/img/lightworld/map_btn.png" style="padding-left:10"
                       :visibility="menuHandler.mode === 1 ? 'visible': 'collapsed'" @tap="toggleMode"/>
                <Label visibility="visible" row="0" col="1" :text="debugInfo" textWrap="true" color="white" backgroundColor="black"/>
            </GridLayout>
        </AbsoluteLayout>

    </Page>
</template>

<script>
    import {screen} from 'tns-core-modules/platform'
    import {Image} from 'tns-core-modules/ui/Image'

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
                    currentScale: this.$modelManager.map.lightworld.scale
                },
                mapHandler: {
                    tiles: this.populateTiles()
                },
                mapWidth:1500,
                mapHeight:1500,
                screen: screen
            }
        },
        navigatingTo() {
            this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x;
            this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y;
            console.log('stored scale', this.$modelManager.map.lightworld.scale);
            const newScale = this.pinchHandler.currentScale = this.$modelManager.map.lightworld.scale;
            this.pinchHandler.top = -Math.abs(Math.floor( ((this.mapHeight * newScale) * 0.25)));
            this.pinchHandler.left = -Math.abs(Math.floor( ((this.mapWidth * newScale) * 0.25)));
        },
        mounted() {
            this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x;
            this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y;
            const tiles = this.populateTiles();
            for(const tile of tiles){
                const img = new Image(tile.width, tile.height);
                img.src=tile.src;
                img.top=tile.top;
                img.left=tile.left;
                this.$refs.mapWrapper.nativeView.addChild(img);
            }
            const newScale = this.pinchHandler.currentScale = this.$modelManager.map.lightworld.scale;
            this.pinchHandler.top = -Math.abs(Math.floor( ((this.mapHeight * newScale) * 0.25)));
            this.pinchHandler.left = -Math.abs(Math.floor( ((this.mapWidth * newScale) * 0.25)));
        },
        methods: {
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
                    //this.mapWidth = this.mapHeight = this.$refs.mapWrapper.nativeView.getChildAt(0).nativeView.getMeasuredHeight() * 5;
                }
                if(args.state === 2) {
                    let newX = this.$refs.mapWrapper.nativeView.left + ((args.deltaX - this.panHandler.lastX));
                    let newY = this.$refs.mapWrapper.nativeView.top + ((args.deltaY - this.panHandler.lastY));
                    if(newX > this.pinchHandler.left) {
                        newX = this.pinchHandler.left;
                    } else if((newX + this.pinchHandler.left) <
                        -Math.abs(this.screen.mainScreen.widthPixels - //$modelManager.screen.mainScreen.widthPixels -
                            this.mapWidth)){
                        newX = -Math.abs(Math.abs(this.pinchHandler.left) +
                            this.screen.mainScreen.widthPixels -
                            this.mapWidth);
                    }
                    if(newY > this.pinchHandler.top) {
                        newY = this.pinchHandler.top;
                    } else if((newY + this.pinchHandler.top) <
                        -Math.abs(this.screen.mainScreen.heightPixels -
                            this.$refs.navbar.nativeView.getMeasuredHeight() -
                            this.mapHeight)){
                        newY = -Math.abs(Math.abs(this.pinchHandler.top) +
                            this.screen.mainScreen.heightPixels -
                            this.$refs.navbar.nativeView.getMeasuredHeight() -
                            this.mapHeight);
                    }
                    this.debugInfo = 'pinch:' + this.pinchHandler.top +
                        ' screen:' + (this.screen.mainScreen.heightPixels - this.$refs.navbar.nativeView.getMeasuredHeight()) +
                        ' map:'+ this.$refs.mapWrapper.nativeView.getMeasuredHeight() +
                        ' scale:'+ (this.pinchHandler.currentScale+'').substr(0,4) +
                        ' newy'+ newY;
                    console.log('tile', this.$refs.mapWrapper.nativeView.getChildAt(0).nativeView.getMeasuredHeight());
                    this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x = newX;
                    this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y = newY;
                    this.panHandler.lastX = args.deltaX;
                    this.panHandler.lastY = args.deltaY;
                } else if(args.state === 3) {
                    this.panHandler.lastX = 0;
                    this.panHandler.lastY = 0;
                    this.$modelManager.saveMap();
                }
            },
            onPinch(args) {
                let lastScale = this.pinchHandler.lastScale === -1 ? this.pinchHandler.currentScale : this.pinchHandler.lastScale;
                let newScale = lastScale * args.scale;
                if(newScale < 0.28) {
                    newScale = 0.28;
                } else if (newScale > 1.5) {
                    newScale = 1.5
                }
                this.pinchHandler.currentScale = this.$modelManager.map.lightworld.scale = newScale;
                this.pinchHandler.top = -Math.abs(Math.floor((this.mapHeight * 0.5) - ((this.mapHeight * newScale) * 0.5)));
                this.pinchHandler.left = -Math.abs(Math.floor((this.mapWidth * 0.5) - ((this.mapWidth * newScale) * 0.5)));
                if(args.state === 3) {
                    this.pinchHandler.lastScale = newScale;
                }
            },
            toggleMode(){
                this.menuHandler.mode = this.$modelManager.map.lightworld.mode = this.$modelManager.map.lightworld.mode === 1 ? 0 : 1;
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
</style>
