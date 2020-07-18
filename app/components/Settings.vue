<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <GridLayout columns="*" , rows="50,50,50,50,50" style="margin-top:10">
      <Button row="0" col="0" class="btn" @tap="navSaveList">Saved Games</Button>
      <Label row="2" col="0" class="lbl" horizontalAlignment="center" verticalAlignment="center"
             :text="'Version: '+appVersion"/>
      <Button row="3" col="0" class="btn" @tap="mailme">Email Me!</Button>
      <Button row="4" col="0" class="btn" @tap="navDebugger">Debugger</Button>

    </GridLayout>
  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SaveList from '@/components/SaveList.vue';
  import {openUrl} from 'tns-core-modules/utils/utils';
  import Debugger from '@/components/Debugger.vue';

  @Component
  export default class Settings extends Vue {

    appVersion = this.$modelManager.appVersion;
    navSaveList() {
      this.$navigateTo(SaveList);
    }
    navDebugger() {
      this.$navigateTo(Debugger);
    }
    mailme() {
      openUrl('mailto:alttp@codeflayer.com');
    }
  }
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/forest';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .lbl {
    font-size: 20;
    font-family: "Return of Ganon", "ReturnofGanon";
    color: white;
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
