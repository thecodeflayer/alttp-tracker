<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
                <GridLayout class="item-grid" columns="*,*,*,*,*,*" rows="40,40,40,40,40">
                    <Image v-for="(key, index) in itemKeys" v-bind:key="itemKeys" :row="Math.floor(index/6)" :col="index % 6" :src="items[key]" class="item" @tap="clickItem(key)"/>
                </GridLayout>
                <GridLayout class="dungeon-grid" columns="*,*,*,*" rows="70,70,70">
                    <GridLayout v-for="(key, index) in dungeonKeys" v-bind:key="dungeonKeys" :row="Math.floor(index/4)" :col="index % 4"
                                v-bind:style="{backgroundImage: '~/img/dungeons/'+key+'_boss'+(this.dungeons.boss ? '1':'0')+'.png'}"
                                class="dungeon-stack">
                        <Label text="test"></Label>
                    </GridLayout>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>

    export default {
        data: function() {
            return {
                items: this.getAllImages(),
                itemKeys: this.$modelManager.getItemKeys(),
                dungeons: this.getDungeons(),
                dungeonKeys: this.$modelManager.getDungeonKeys()
            }
        },
        computed: {
        },
        created() {
        },
        methods: {
            getImage(key) {
                if (typeof this.$modelManager.getItem(key) === "boolean") {
                    if (this.$modelManager.getItem(key)){
                        return '~/img/items/'+key+'1.png';
                    } else {
                        return '~/img/items/'+key+'0.png';
                    }
                } else if (typeof this.$modelManager.getItem(key) === "number") {
                    return '~/img/items/'+key+this.$modelManager.getItem(key)+'.png';
                } else {
                    return '~/img/items/unknown.png';
                }
            },
            clickItem(key) {
                if (typeof this.$modelManager.getItem(key) === "boolean") {
                    this.$modelManager.setItem(key, !this.$modelManager.getItem(key));
                } else if (typeof this.$modelManager.getItem(key) === "number") {
                    let val = this.$modelManager.getItem(key) + 1;
                    if(val > this.$maxItemValues[key]) {
                        val = 0;
                    }
                    this.$modelManager.setItem(key, val);
                }
                this.items[key] = this.getImage(key);
            },
            getAllImages() {
                const retval = {};
                const keys = this.$modelManager.getItemKeys();
                for(const key of keys) {
                    retval[key] = this.getImage(key);
                }
                return retval;
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
    .dungeon-stack {
        background-repeat: no-repeat;
        background-position: center;
    }

</style>
