<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <Label text="derp" />
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" class="dungeon-stack">
                <StackLayout orientation="horizontal" class="dungeon-row" v-for="(key, index) in dungeonKeys" v-bind:key="dungeonKeys">
                    <Image :src="bossImages[key]" class="dungeon-img" />
                    <Image src="~/img/dungeons/crystal1.png" class="dungeon-img"/>
                    <Image src="~/img/dungeons/chest1.png" class="dungeon-img"/>
                    <Image src="~/img/dungeons/bosskey0.png" class="dungeon-img"/>
                    <Image src="~/img/dungeons/map0.png" class="dungeon-img"/>
                    <Image src="~/img/dungeons/compass0.png" class="dungeon-img" />
                    <Image src="~/img/dungeons/smallkey1.png" class="dungeon-img" />
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
                bossImages: this.getAllBossImages(),
            }
        },
        computed: {
        },
        created() {
        },
        methods: {
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
            getAllBossImages() {
                const retval = {};
                const dungeons = this.$modelManager.getDungeons();
                const keys = this.$modelManager.getDungeonKeys();
                for(const key of keys) {
                    retval[key] = '~/img/dungeons/'+key+'_boss'+(dungeons[key].boss ? '1' : '0')+'.png';
                }
                console.log(retval);
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
    .dungeon-stack {
        width: 100%;
    }
    .dungeon-row {
        background-color: black;
        margin: 4;
        padding: 4 10;
        color: white;
        width: 100%;
        horizontal-align: center;
    }
    .dungeon-img {
        height: 32px;
        margin: 2 4;
    }

</style>
