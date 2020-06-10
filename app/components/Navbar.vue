<template>
    <ActionBar backgroundColor="#006400">
        <StackLayout orientation="horizontal">
            <StackLayout orientation="vertical" @tap="navHome">
                <Image src="~/assets/images/drop-fairy.png" verticalAlignment="bottom" height="20" width="20" />
                <Label text="Home" verticalAlignment="top" fontSize="14" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navItems">
                <Image src="~/assets/images/0058.png" verticalAlignment="bottom" height="20" width="20" />
                <Label text="Items" verticalAlignment="top" fontSize="14" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navLightMap">
                <Image src="~/assets/images/mirror.png" verticalAlignment="bottom" height="20" width="20" />
                <Label text="Light Map" verticalAlignment="top" fontSize="14" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navDarkMap">
                <Image src="~/assets/images/moonpearl.png" verticalAlignment="bottom" height="20" width="20" />
                <Label text="Dark Map" verticalAlignment="top" fontSize="14" class="btn-label"/>
            </StackLayout>
            <StackLayout orientation="vertical" @tap="navSettings">
                <Image src="~/assets/images/lttp_big_key.png" verticalAlignment="bottom" height="20" width="20" />
                <Label text="Settings" verticalAlignment="top" fontSize="14" class="btn-label"/>
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
