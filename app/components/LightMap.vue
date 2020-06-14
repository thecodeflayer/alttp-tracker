<template>
    <Page>
        <Navbar ref="navbar"></Navbar>
        <AbsoluteLayout @pan="onPan" @pinch="onPinch" backgroundColor="black">
            <AbsoluteLayout ref="mapWrapper" :top="pinchHandler.top" :left="pinchHandler.left" :scaleX="pinchHandler.currentScale" :scaleY="pinchHandler.currentScale">
                <Image v-for="tile in mapHandler.tiles" :top="tile.top" :left="tile.left" :width="tile.width" :height="tile.height" :src="tile.src" />
            </AbsoluteLayout>
        </AbsoluteLayout>
    </Page>
</template>

<script>
    export default {
        data: function() {
            return {
                panHandler: {
                    panMod: 1,
                    lastX: 0,
                    lastY: 0
                },
                pinchHandler: {
                    top: -375,
                    left: -375,
                    lastScale: 0.5,
                    currentScale: 0.5
                },
                mapHandler: {
                    tiles: this.populateTiles()
                }
            }
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
                    let newX = this.$refs.mapWrapper.nativeView.left + ((args.deltaX - this.panHandler.lastX) * this.panHandler.panMod);
                    let newY = this.$refs.mapWrapper.nativeView.top + ((args.deltaY - this.panHandler.lastY) * this.panHandler.panMod);
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
                    this.$refs.mapWrapper.nativeView.left = newX;
                    this.$refs.mapWrapper.nativeView.top = newY;
                    this.panHandler.lastX = args.deltaX;
                    this.panHandler.lastY = args.deltaY;
                } else if(args.state === 3) {
                    this.panHandler.lastX = 0;
                    this.panHandler.lastY = 0;
                }
            },
            onPinch(args) {
                let newScale = this.pinchHandler.lastScale * args.scale;
                console.log(args.eventName, args.scale, this.pinchHandler.lastScale, newScale);
                if(newScale < 0.3) {
                    newScale = 0.3;
                } else if (newScale > 1) {
                    newScale = 1
                }
                this.pinchHandler.currentScale = newScale;
                console.log(this.$refs.mapWrapper.nativeView.left, Math.floor(this.$refs.mapWrapper.nativeView.left * newScale));
                this.$refs.mapWrapper.nativeView.left = Math.floor(this.$refs.mapWrapper.nativeView.left * newScale);
                this.$refs.mapWrapper.nativeView.top = Math.floor(this.$refs.mapWrapper.nativeView.top * newScale);
                this.pinchHandler.top = -Math.abs(Math.floor((this.$refs.mapWrapper.nativeView.getMeasuredHeight() * 0.5) - ((this.$refs.mapWrapper.nativeView.getMeasuredHeight() * newScale) * 0.5)));
                this.pinchHandler.left = -Math.abs(Math.floor((this.$refs.mapWrapper.nativeView.getMeasuredWidth() * 0.5) - ((this.$refs.mapWrapper.nativeView.getMeasuredWidth() * newScale) * 0.5)));
                if(args.state === 3) {
                    this.pinchHandler.lastScale = newScale;
                }
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
        horizontal-align: center;
        vertical-align: center;
    }
</style>
