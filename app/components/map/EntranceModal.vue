<template>
  <GridLayout rows="80,*,140" columns="*" class="modal-dialog standard" style="padding: 0">
    <StackLayout orientation="vertical" class="modal-header">
      <Label class="list-title" :text="currentEntrance.name" textAlignment="center" fontSize="24"/>
      <Label class="list-title" text="Entrance Links" textAlignment="center"/>
    </StackLayout>
    <ScrollView class="scrollbox" row="1">
      <StackLayout orientation="vertical">

      </StackLayout>
    </ScrollView>
    <StackLayout orientation="vertical" row="2" class="modal-footer">
      <Button class="btn standard padded" @tap="navToEntranceEditor">Edit Entrance Links</Button>
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
    currentIndex = -1;
    currentEntrance = {};
    allKeys = [];
    dwIndex = -1;

    mounted() {
      const lwEntranceKeys = Object.keys(this.$sol.getStaticEntrancesLW(this.$modelManager.getEntranceShuffleMode()));
      const dwEntranceKeys = Object.keys(this.$sol.getStaticEntrancesDW(this.$modelManager.getEntranceShuffleMode()));
      this.dwIndex = lwEntranceKeys.length;
      this.allKeys = lwEntranceKeys.concat(dwEntranceKeys);
      this.currentIndex = this.allKeys.indexOf(this.entranceKey);
      this.currentEntrance = (this.currentIndex >= this.dwIndex) ? this.dwEntrances[this.entranceKey] : this.lwEntrances[this.entranceKey];
    }
    navToEntranceEditor() {
      this.$navigateTo(EntranceEditor, {props:{key:this.entranceKey}});
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
    background-color: #006c00;
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
