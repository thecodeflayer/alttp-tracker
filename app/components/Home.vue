<template>
    <Page backgroundColor="black">
        <Navbar></Navbar>
        <ScrollView>
            <StackLayout orientation="vertical" horizontalAlignment="center" verticalAlignment="top">
                <Label text="Welcome to the ALLTP Tracker!" class="welcome" fontSize="24" textAlignment="center"/>
                <Label text="Track item collection and dungeon progress as well as find locations using the maps." class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
                <Label text="More features will be coming as I have time including other modes and glitches." class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
                <Label text="Special thanks to the randomizer community. Visit them!" class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
                <Button :visibility="this.showUpgradeBtn?'visible':'collapsed'" class="btn" @tap="clickUpgrade" backgroundColor="#8b0000">New Version! {{this.upgradeVersion}}</Button>
                <Button class="btn" @tap="clickRandomizer">ALTTP Randomizer</Button>
                <Button class="btn" @tap="clickReddit">ALTTPR on Reddit</Button>
                <Button class="btn" @tap="clickDiscord">ALTTPR Discord</Button>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import {openUrl} from 'tns-core-modules/utils/utils';
    import * as convert from 'xml-js';

    export default {
        data: function() {
            return {
                showUpgradeBtn: false,
                upgradeLink: '',
                upgradeVersion: '',
                appVersion: this.$modelManager.appVersion
            }
        },
        mounted() {
            fetch('https://github.com/thecodeflayer/alttp-tracker/releases.atom')
                .then((response) => response.text())
                .then((xml) => {
                    const res = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 2}));
                    this.upgradeVersion = res.feed.entry[0].title._text;
                    this.upgradeLink = res.feed.entry[0].link._attributes.href;
                    this.showUpgradeBtn = (this.upgradeVersion !== this.appVersion);
                    console.log(this.appVersion, this.upgradeVersion, this.upgradeLink, this.showUpgradeBtn);
                }).catch((err) => {
                    console.log(err);
                });
        },
        methods: {
            clickUpgrade() {
                openUrl(this.upgradeLink);
            },
            clickRandomizer() {
                openUrl('https://alttpr.com/');
            },
            clickReddit() {
                openUrl('https://www.reddit.com/r/alttpr/');
            },
            clickDiscord() {
                openUrl('https://discord.gg/48sauwx');
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
