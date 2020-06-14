<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" class="dungeon-stack">
                <GridLayout class="dungeon-grid" columns="*,*,*,*,*,*,*" v-for="(key, index) in dungeonKeys" v-bind:key="dungeonKeys">
                    <Image row="0" col="0" :src="images.crystals[key]" class="dungeon-img" @tap="clickItem(key,'crystal')"/>
                    <Image row="0" col="1" :src="images.bosses[key]" class="dungeon-img" @tap="clickItem(key,'boss')"/>
                    <Image row="0" col="2" :src="images.chests[key]" class="dungeon-img" @tap="clickItem(key,'chests')"/>
                    <Image row="0" col="3" :src="images.bosskeys[key]" class="dungeon-img" @tap="clickItem(key,'bosskey')"/>
                    <Image row="0" col="4" :src="images.maps[key]" class="dungeon-img" @tap="clickItem(key,'map')"/>
                    <Image row="0" col="5" :src="images.compasses[key]" class="dungeon-img" @tap="clickItem(key,'compass')" />
                    <Image row="0" col="6" :src="images.smallkeys[key]" class="dungeon-img" @tap="clickItem(key,'smallkeys')" />
                </GridLayout>
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
        navigatingTo() {
            console.log('nav to dungeons');
            this.dungeons = this.$modelManager.getDungeons();
            this.dungeonKeys = this.$modelManager.getDungeonKeys();
            this.images = this.getAllImages();
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
                    retval.crystals[key] = dungeons[key].maxCrystal === 0 ? '~/img/dungeons/blank.png' : '~/img/dungeons/crystal'+dungeons[key].crystal+'.png';
                    retval.chests[key] = '~/img/dungeons/chest'+dungeons[key].chests+'.png';
                    retval.bosskeys[key] = key === 'aga' ? '~/img/dungeons/blank.png' : '~/img/dungeons/bosskey'+(dungeons[key].bosskey ? '1' : '0')+'.png';
                    retval.maps[key] = key === 'aga' ? '~/img/dungeons/blank.png' : '~/img/dungeons/map'+(dungeons[key].map ? '1' : '0')+'.png';
                    retval.compasses[key] = key === 'aga' ? '~/img/dungeons/blank.png' : '~/img/dungeons/compass'+(dungeons[key].compass ? '1' : '0')+'.png';
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
