<template>
    <ActionBar backgroundColor="#006400">
        <StackLayout orientation="horizontal">
            <StackLayout orientation="vertical" @tap="navHome">
                <Image src="~/img/navbar/home.png" verticalAlignment="bottom" height="32" width="32" />
                <Label text="Home" verticalAlignment="top" fontSize="10" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navItems">
                <Image src="~/img/navbar/items.png" verticalAlignment="bottom" height="32" width="32" />
                <Label text="Items" verticalAlignment="top" fontSize="10" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navDungeons">
                <Image src="~/img/navbar/dungeons.png" verticalAlignment="bottom" height="32" width="32" />
                <Label text="Dungeons" verticalAlignment="top" fontSize="10" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navLightMap">
                <Image src="~/img/navbar/lightmap.png" verticalAlignment="bottom" height="32" width="32" />
                <Label text="Light World" verticalAlignment="top" fontSize="10" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navDarkMap">
                <Image src="~/img/navbar/darkmap.png" verticalAlignment="bottom" height="32" width="32" />
                <Label text="Dark World" verticalAlignment="top" fontSize="10" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navSettings">
                <Image src="~/img/navbar/settings.png" verticalAlignment="bottom" height="32" width="32" />
                <Label text="Settings" verticalAlignment="top" fontSize="10" class="btn-label"/>
            </StackLayout>
        </StackLayout>
    </ActionBar>
</template>

<script>
    import Home from "~/components/Home";
    import LightMap from "~/components/LightMap";
    import DarkMap from "~/components/DarkMap";
    import Items from "~/components/Items";
    import Settings from "~/components/Settings";
    import Dungeons from "~/components/Dungeons";

    export default {
        computed: {

        },
        methods: {
            navHome() {
                this.$navigateTo(Home);
            },
            navLightMap() {
                this.$navigateTo(LightMap);
            },
            navDarkMap() {
                this.$navigateTo(DarkMap);
            },
            navItems() {
                this.$navigateTo(Items);
            },
            navSettings() {
                this.$navigateTo(Settings);
            },
            navDungeons() {
                this.$navigateTo(Dungeons);
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

    .btn-label {
        padding:0 5;
        margin:0;
    }
</style>
