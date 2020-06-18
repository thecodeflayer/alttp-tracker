<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView>
            <StackLayout orientation="vertical" horizontalAlignment="center" verticalAlignment="top">
                <Label text="Welcome to the ALLTP Tracker!" class="welcome" fontSize="24" textAlignment="center"/>
                <Label text="Track item collection and dungeon progress as well as find locations using the maps." class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
                <Label text="More features will be coming as I have time including other modes and glitches." class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
                <Label text="Special thanks to the randomizer community. Visit them!" class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
                <Button class="btn" @tap="clickRandomizer">ALTTP Randomizer</Button>
                <Button class="btn" @tap="clickReddit">ALTTP on Reddit</Button>
                <Button class="btn" @tap="clickDiscord">ALTTP Discord</Button>
                <Button class="btn" @tap="clickPayPal">Buy Me A Beer!</Button>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import {openUrl} from 'tns-core-modules/utils/utils';
    export default {
        computed: {

        },
        methods: {
            clickRandomizer() {
                openUrl('https://alttpr.com/');
            },
            clickReddit() {
                openUrl('https://www.reddit.com/r/alttpr/');
            },
            clickDiscord() {
                openUrl('https://discord.gg/48sauwx');
            },
            clickPayPal(){
                openUrl('https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=LCTX9KX4EJ4FY&currency_code=USD&source=url');
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
    .welcome {
        color:white;
        font-family: "Return of Ganon", "ReturnofGanon";
        padding: 10;
    }
    .btn {
        font-size: 20;
        background-color: darkgreen;
        padding: 10;
        color: white;
        horizontal-align: center;
        vertical-align: center;
        font-family: "Return of Ganon", "ReturnofGanon";
        width: 90%
    }
</style>
