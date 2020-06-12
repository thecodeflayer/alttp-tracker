<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <Label text="derp" />
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" class="dungeon-stack">
                <StackLayout orientation="horizontal" class="dungeon-row" v-for="(key, index) in dungeonKeys" v-bind:key="dungeonKeys">
                    <Image :src="images.bosses[key]" class="dungeon-img" @tap="clickItem(key,'boss')"/>
                    <Image :src="images.crystals[key]" class="dungeon-img" @tap="clickItem(key,'crystal')"/>
                    <Image :src="images.chests[key]" class="dungeon-img" @tap="clickItem(key,'chests')"/>
                    <Image :src="images.bosskeys[key]" class="dungeon-img" @tap="clickItem(key,'bosskey')"/>
                    <Image :src="images.maps[key]" class="dungeon-img" @tap="clickItem(key,'map')"/>
                    <Image :src="images.compasses[key]" class="dungeon-img" @tap="clickItem(key,'compass')" />
                    <Image :src="images.smallkeys[key]" class="dungeon-img" @tap="clickItem(key,'smallkeys')" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>

    export default {
        data: function() {
            return {
                dungeons: this.$modelManager.getDungeons(),
                dungeonKeys: this.$modelManager.getDungeonKeys(),
                images: this.getAllImages(),
            }
        },
        computed: {
        },
        created() {
        },
        methods: {
            clickItem(key, item) {
                if (typeof this.$modelManager.getDungeonValue(key, item) === "boolean") {
                    this.$modelManager.setDungeonValue(key, item, !this.$modelManager.getDungeonValue(key, item));
                } else if (typeof this.$modelManager.getDungeonValue(key, item) === "number") {
                    let val = -1;
                    let max = 'max'+item.substr(0, 1).toUpperCase()+item.substr(1);
                    if(item === 'chests') {
                        val = this.$modelManager.getDungeonValue(key, item) - 1;
                        if(val < 0) {
                            val = this.$modelManager.getDungeonValue(key, max);
                        }
                    } else {
                        val = this.$modelManager.getDungeonValue(key, item) + 1;
                        if(val > this.$modelManager.getDungeonValue(key, max)) {
                            val = 0;
                        }
                    }

                    this.$modelManager.setDungeonValue(key, item, val);
                }
                this.images = this.getAllImages();
            },
            getAllImages() {
                const retval = {
                    bosses: {},
                    crystals: {},
                    chests: {},
                    bosskeys: {},
                    maps: {},
                    compasses: {},
                    smallkeys: {}
                };
                const dungeons = this.$modelManager.getDungeons();
                const keys = this.$modelManager.getDungeonKeys();
                for(const key of keys) {
                    retval.bosses[key] = '~/img/dungeons/'+key+'_boss'+(dungeons[key].boss ? '1' : '0')+'.png';
                    retval.crystals[key] = '~/img/dungeons/crystal'+dungeons[key].crystal+'.png';
                    retval.chests[key] = '~/img/dungeons/chest'+dungeons[key].chests+'.png';
                    retval.bosskeys[key] = '~/img/dungeons/bosskey'+(dungeons[key].bosskey ? '1' : '0')+'.png';
                    retval.maps[key] = '~/img/dungeons/map'+(dungeons[key].map ? '1' : '0')+'.png';
                    retval.compasses[key] = '~/img/dungeons/compass'+(dungeons[key].compass ? '1' : '0')+'.png';
                    retval.smallkeys[key] = '~/img/dungeons/smallkey'+dungeons[key].smallkeys+'.png';
                }
                return retval;
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
    .dungeon-stack {
    }
    .dungeon-row {
        background-color: black;
        margin: 4;
        padding: 4 10;
        color: white;
    }
    .dungeon-img {
        height: 32;
        width: 32;
        margin: 2 4;
    }

</style>
