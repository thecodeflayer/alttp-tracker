<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <GridLayout class="item-grid" columns="40,40" rows="40,40">
            <Image row="0" col="0" :src="items.moonpearl" class="item" @tap="clickItem('moonpearl')" />
            <Image row="0" col="1" :src="items.mirror" class="item" @tap="clickItem('mirror')"/>
        </GridLayout>
    </Page>
</template>

<script>

    export default {
        data() {
            return {
                items: {
                    moonpearl: false,
                    mirror: false
                }
            }
        },
        computed: {
        },
        created() {
            this.items.moonpearl = this.getImage('moonpearl');
            this.items.mirror = this.getImage('mirror');
        },
        methods: {
            getImage(key) {
                if (typeof this.$modelManager.getItem(key) === "boolean") {
                    if (this.$modelManager.getItem(key)){
                        return '~/assets/images/'+key+'.png';
                    } else {
                        return '~/assets/images/disabled/'+key+'.png';
                    }
                } else if (typeof this.$modelManager.getItem(key) === "number") {
                    return '~/assets/images/'+key+this.$modelManager.getItem(key)+'.png';
                }
            },
            clickItem(key) {
                if (typeof this.$modelManager.getItem(key) === "boolean") {
                    this.$modelManager.setItem(key, !this.$modelManager.getItem(key));
                } else if (typeof this.$modelManager.getItem(key) === "number") {
                    return '~/assets/images/'+key+this.$modelManager.getItem(key)+'.png';
                }
                this.items[key] = this.getImage(key);
                //console.log(this[key]);
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
    .item-grid {
        background-color: black;
    }
    .item {
        width: 32;
        height: 32;
        margin: 4;
    }

</style>
