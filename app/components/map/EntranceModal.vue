<template>
  <GridLayout rows="50,*,78" columns="*" class="modal-dialog standard" style="padding: 0">
    <StackLayout orientation="vertical" class="modal-header">
      <Label class="list-title" :text="staticEntrance.name" textAlignment="center" fontSize="24"/>
      <!--
      <Label class="list-title" text="Entrance Links" textAlignment="center"/>
      -->
    </StackLayout>
    <ScrollView class="scrollbox" row="1">
      <StackLayout orientation="vertical">
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('enterLink')">
          <Image row="0" col="0" :src="staticEntrance.isHole ? '~/img/enter-hole.png': '~/img/enter-link.png'" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="links.enterLink" verticalAlignment="center"/>
        </GridLayout>
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('enterLinkedTo')">
          <Image row="0" col="0" src="~/img/enter-linked-to.png" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="links.enterLinkedTo" verticalAlignment="center"/>
        </GridLayout>
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('exitLink')">
          <Image row="0" col="0" src="~/img/exit-link.png" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="links.exitLink" verticalAlignment="center"/>
        </GridLayout>
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('exitLinkedTo')">
          <Image row="0" col="0" src="~/img/exit-linked-to.png" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="links.exitLinkedTo" verticalAlignment="center"/>
        </GridLayout>
      </StackLayout>
    </ScrollView>
    <StackLayout orientation="vertical" row="2" class="modal-footer">
      <!--
      <Button class="btn standard padded" @tap="navToEntranceEditor">Edit Entrance Links</Button>
      -->
      <Button class="btn standard padded" @tap="closeModal">Close</Button>
    </StackLayout>
  </GridLayout>
</template>

<script type="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import EntranceEditor from '@/components/entrance/EntranceEditor.vue';

  @Component
  export default class EntranceModal extends Vue {
    @Prop() entranceKey;
    lwEntrances = this.$sol.getStaticEntrancesLW(this.$modelManager.getEntranceShuffleMode());
    dwEntrances = this.$sol.getStaticEntrancesDW(this.$modelManager.getEntranceShuffleMode());
    allEntrances = this.$modelManager.getAllEntrances();
    currentIndex = -1;
    staticEntrance = {};
    currentEntrance = {};
    allKeys = [];
    dwIndex = -1;
    links = {};

    mounted() {
      const lwEntranceKeys = Object.keys(this.$sol.getStaticEntrancesLW(this.$modelManager.getEntranceShuffleMode()));
      const dwEntranceKeys = Object.keys(this.$sol.getStaticEntrancesDW(this.$modelManager.getEntranceShuffleMode()));
      this.dwIndex = lwEntranceKeys.length;
      this.allKeys = lwEntranceKeys.concat(dwEntranceKeys);
      this.currentIndex = this.allKeys.indexOf(this.entranceKey);
      this.staticEntrance = (this.currentIndex >= this.dwIndex) ? this.dwEntrances[this.entranceKey] : this.lwEntrances[this.entranceKey];
      this.currentEntrance = this.allEntrances[this.entranceKey];
      this.links.enterLink = this.currentEntrance.enterLink
          ? (this.allKeys.indexOf(this.currentEntrance.enterLink)>=this.dwIndex ? this.dwEntrances[this.currentEntrance.enterLink].name
              : this.lwEntrances[this.currentEntrance.enterLink].name ) : '???';
      this.links.exitLink = this.currentEntrance.exitLink
          ? (this.allKeys.indexOf(this.currentEntrance.exitLink)>=this.dwIndex ? this.dwEntrances[this.currentEntrance.exitLink].name
              : this.lwEntrances[this.currentEntrance.exitLink].name ) : '???';
      this.links.enterLinkedTo = this.currentEntrance.enterLinkedTo
          ? (this.allKeys.indexOf(this.currentEntrance.enterLinkedTo)>=this.dwIndex ? this.dwEntrances[this.currentEntrance.enterLinkedTo].name
              : this.lwEntrances[this.currentEntrance.enterLinkedTo].name ) : '???';
      this.links.exitLinkedTo = this.currentEntrance.exitLinkedTo
          ? (this.allKeys.indexOf(this.currentEntrance.exitLinkedTo)>=this.dwIndex ? this.dwEntrances[this.currentEntrance.exitLinkedTo].name
              : this.lwEntrances[this.currentEntrance.exitLinkedTo].name ) : '???';
    }
    navToEntranceEditor(action) {
      this.$navigateTo(EntranceEditor, {props:{entranceKey:this.entranceKey, action:action}});
      this.closeModal();
    }
    closeModal() {
      this['$modal'].close('cancel');
    }
  }
</script>

<style scoped lang="scss">
  @import "../../global_vars";
  .scrollbox {
    background-color: black;
    border-width: 0;
    &.empty {
      background-color: $standard-bg;
    }
  }
  .modal-header {
    border-color: $standard-border;
    border-width: 0 0 2 0;
    padding-top:10;
    &.empty {
      border-width: 0;
    }
  }
  .modal-footer {
    border-color: $standard-border;
    border-width: 2 0 0 0;
    padding-bottom:10;
    padding-top:10;
    &.empty {
      border-width: 0;
    }
  }
</style>
