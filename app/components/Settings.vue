<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView>
      <GridLayout columns="*" , rows="60,60,60,60,60,60,60" style="margin-top:10">
        <Button row="0" col="0" class="btn highlight padded" @tap="navSaveList">Saved Games</Button>
        <Label row="2" col="0" class="lbl" horizontalAlignment="center" verticalAlignment="center"
               :text="'Version: '+appVersion"/>
        <Button row="3" col="0" class="btn highlight padded" @tap="navFAQ">FAQ Page</Button>
        <Button row="4" col="0" class="btn highlight padded" @tap="mailme">Email Me!</Button>
        <!--
        <Button row="5" col="0" class="btn danger padded" @tap="navDebugger">Debugger</Button>
        -->
      </GridLayout>
    </ScrollView>
  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SaveList from '@/components/game/SaveList.vue';
  import {openUrl} from 'tns-core-modules/utils/utils';
  import Debugger from '@/components/debug/Debugger.vue';

  @Component
  export default class Settings extends Vue {

    appVersion = this.$modelManager.appVersion;
    navSaveList() {
      this.$navigateTo(SaveList);
    }
    mailme() {
      openUrl('mailto:alttp@codeflayer.com');
    }
    navFAQ(){
      openUrl('https://github.com/thecodeflayer/alttp-tracker/blob/master/FAQ.md');
    }
    navDebugger() {
      this.$navigateTo(Debugger);
    }
  }
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/forest';

</style>
