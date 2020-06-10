<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <GridLayout class="item-grid" columns="*,40" rows="40,40">
            <Image row="0" col="0" :src="moonpearl" class="item" @tap="clickItem('moonpearl')" />
            <Image row="0" col="1" :src="getImage('mirror')" class="item" @tap="clickItem('mirror')"/>
            <Label :text="moonpearl" color="white" row="1" col="0" />
        </GridLayout>
    </Page>
</template>

<script>

    export default {
        data() {
            return {
                moonpearl: false
            }
        },
        computed: {

        },
        created() {
            this.moonpearl = this.getImage('moonpearl');
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
                this[key] = this.getImage(key);
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
