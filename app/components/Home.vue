<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView>
      <StackLayout orientation="vertical" horizontalAlignment="center" verticalAlignment="top">
        <Label text="Welcome to the ALLTP Tracker!" class="welcome" fontSize="24" textAlignment="center"/>
        <Label text="Track item collection and dungeon progress as well as find locations using the maps." class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
        <Button :visibility="this.showUpgradeBtn?'collapsed':'visible'" class="btn highlight padded" @tap="showWhatsNew">What's New</Button>
        <Button :visibility="this.showUpgradeBtn?'visible':'collapsed'" class="btn danger padded" @tap="clickUpgrade">New Version! {{this.upgradeVersion}}</Button>
        <Label text="Special thanks to the randomizer community. Visit them!" class="welcome" textWrap="true" fontSize="20"  textAlignment="center"/>
        <Button class="btn highlight padded" @tap="clickRandomizer">ALTTP Randomizer</Button>
        <Button class="btn highlight padded" @tap="clickReddit">ALTTPR on Reddit</Button>
        <Button class="btn highlight padded" @tap="clickDiscord">ALTTPR Discord</Button>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {openUrl} from 'tns-core-modules/utils/utils';
  import * as convert from 'xml-js';

  @Component
  export default class Home extends Vue {

    showUpgradeBtn = false;
    upgradeLink = '';
    upgradeVersion = '';
    appVersion = this.$modelManager.appVersion;

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
    }

    showWhatsNew() {
      openUrl('https://github.com/thecodeflayer/alttp-tracker/blob/' + this.upgradeVersion + '/CHANGELOG.md');
    }

    clickUpgrade() {
      openUrl(this.upgradeLink);
    }

    clickRandomizer() {
      openUrl('https://alttpr.com/');
    }

    clickReddit() {
      openUrl('https://www.reddit.com/r/alttpr/');
    }

    clickDiscord() {
      openUrl('https://discord.gg/48sauwx');
    }
  }
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/forest';

  // Custom styles
  .welcome {
    color:white;
    font-family: "Return of Ganon", "ReturnofGanon";
    padding: 10;
  }
</style>
