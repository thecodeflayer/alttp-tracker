<template>
    <Page backgroundColor="black">
        <Navbar ref="navbar"></Navbar>
        <AbsoluteLayout @pan="onPan" @pinch="onPinch">
            <AbsoluteLayout ref="mapWrapper" top="-375" left="-375" :visibility="menuHandler.mode === 0 ? 'visible':'collapsed'" :scaleX="pinchHandler.currentScale" :scaleY="pinchHandler.currentScale">
                <Image v-for="tile in mapHandler.tiles" :top="tile.top" :left="tile.left" :width="tile.width" :height="tile.height" :src="tile.src" />
            </AbsoluteLayout>
            <StackLayout top="0" left="0" orientation="vertical" :visibility="menuHandler.mode === 1 ? 'visible':'collapsed'">
                <StackLayout orientation="horizontal" backgroundColor="#006400">
                    <Label text="Map Item Uno" />
                </StackLayout>
            </StackLayout>
            <GridLayout :top="menuHandler.top" left="0" columns="40" rows="20">
                <Image row="0" col="0" src="~/img/lightworld/compass_btn.png" style="padding-left:10"
                       :visibility="menuHandler.mode === 0 ? 'visible':'collapsed'" @tap="toggleMode" />
                <Image row="0" col="0" src="~/img/lightworld/map_btn.png" style="padding-left:10"
                       :visibility="menuHandler.mode === 1 ? 'visible': 'collapsed'" @tap="toggleMode"/>
            </GridLayout>
        </AbsoluteLayout>

    </Page>
</template>

<script>
    export default {
        data: function() {
            return {
                menuHandler: {
                    top: this.$modelManager.screen.mainScreen.heightPixels - 120,
                    mode: this.$modelManager.map.lightworld.mode
                },
                panHandler: {
                    lastX: 0,
                    lastY: 0
                },
                pinchHandler: {
                    top: this.$modelManager.map.lightworld.top,
                    left: this.$modelManager.map.lightworld.left,
                    lastScale: -1,
                    currentScale: this.$modelManager.map.lightworld.scale
                },
                mapHandler: {
                    tiles: this.populateTiles()
                }
            }
        },
        mounted() {
            this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x;
            this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y;
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
                if(args.state === 2) {
                    let newX = this.$refs.mapWrapper.nativeView.left + ((args.deltaX - this.panHandler.lastX));
                    let newY = this.$refs.mapWrapper.nativeView.top + ((args.deltaY - this.panHandler.lastY));
                    if(newX > this.pinchHandler.left) {
                        newX = this.pinchHandler.left;
                    } else if((newX + this.pinchHandler.left) <
                        -Math.abs(this.$modelManager.screen.mainScreen.widthPixels -
                            this.$refs.mapWrapper.nativeView.getMeasuredWidth())){
                        newX = -Math.abs(Math.abs(this.pinchHandler.left) +
                            this.$modelManager.screen.mainScreen.widthPixels -
                            this.$refs.mapWrapper.nativeView.getMeasuredWidth());
                    }
                    if(newY > this.pinchHandler.top) {
                        newY = this.pinchHandler.top;
                    } else if((newY + this.pinchHandler.top) <
                        -Math.abs(this.$modelManager.screen.mainScreen.heightPixels -
                            this.$refs.navbar.nativeView.getMeasuredHeight() -
                            this.$refs.mapWrapper.nativeView.getMeasuredHeight())){
                        newY = -Math.abs(Math.abs(this.pinchHandler.top) +
                            this.$modelManager.screen.mainScreen.heightPixels -
                            this.$refs.navbar.nativeView.getMeasuredHeight() -
                            this.$refs.mapWrapper.nativeView.getMeasuredHeight());
                    }
                    this.$refs.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x = newX;
                    this.$refs.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y = newY;
                    this.panHandler.lastX = args.deltaX;
                    this.panHandler.lastY = args.deltaY;
                } else if(args.state === 3) {
                    this.panHandler.lastX = 0;
                    this.panHandler.lastY = 0;
                }
            },
            onPinch(args) {
                let lastScale = this.pinchHandler.lastScale === -1 ? this.pinchHandler.currentScale : this.pinchHandler.lastScale;
                let newScale = lastScale * args.scale;
                if(newScale < 0.28) {
                    newScale = 0.28;
                } else if (newScale > 1) {
                    newScale = 1
                }
                this.pinchHandler.currentScale = this.$modelManager.map.lightworld.scale = newScale;
                this.pinchHandler.top = this.$modelManager.map.lightworld.top = -Math.abs(Math.floor((this.$refs.mapWrapper.nativeView.getMeasuredHeight() * 0.5) - ((this.$refs.mapWrapper.nativeView.getMeasuredHeight() * newScale) * 0.5)));
                this.pinchHandler.left = this.$modelManager.map.lightworld.left = -Math.abs(Math.floor((this.$refs.mapWrapper.nativeView.getMeasuredWidth() * 0.5) - ((this.$refs.mapWrapper.nativeView.getMeasuredWidth() * newScale) * 0.5)));
                if(args.state === 3) {
                    this.pinchHandler.lastScale = newScale;
                    this.$modelManager.saveMap();
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
