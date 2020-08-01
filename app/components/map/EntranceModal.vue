<template>
  <GridLayout rows="50,*,78" columns="*" class="modal-dialog standard" style="padding: 0">
    <StackLayout orientation="vertical" class="modal-header">
      <Label class="list-title" :text="staticEntrance.name" textAlignment="center" fontSize="24"/>
    </StackLayout>
    <ScrollView class="scrollbox" row="1">
      <StackLayout orientation="vertical">
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('enterLink')">
          <Image row="0" col="0" :src="staticEntrance.isHole ? '~/img/enter-hole.png': '~/img/enter-link.png'" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="entranceHelper.getLogicText(staticEntrance, links.enterLink,'enterLink')"
                 textWrap="true" verticalAlignment="center" fontSize="14" marginRight="4"/>
        </GridLayout>
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('enterLinkedTo')">
          <Image row="0" col="0" src="~/img/enter-linked-to.png" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="entranceHelper.getLogicText(staticEntrance, links.enterLinkedTo, 'enterLinkedTo')"
                 textWrap="true" verticalAlignment="center" fontSize="14" marginRight="4"/>
        </GridLayout>
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('exitLink')">
          <Image row="0" col="0" src="~/img/exit-link.png" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="entranceHelper.getLogicText(staticEntrance, links.exitLink, 'exitLink')"
                 textWrap="true" verticalAlignment="center" fontSize="14" marginRight="4"/>
        </GridLayout>
        <GridLayout rows="*" columns="60,*" @tap="navToEntranceEditor('exitLinkedTo')">
          <Image row="0" col="0" src="~/img/exit-linked-to.png" width="48" margin="4 5"/>
          <Label row="0" col="1" :text="entranceHelper.getLogicText(staticEntrance, links.exitLinkedTo, 'exitLinkedTo')"
                 textWrap="true" verticalAlignment="center" fontSize="14" marginRight="4"/>
        </GridLayout>
      </StackLayout>
    </ScrollView>
    <StackLayout orientation="vertical" row="2" class="modal-footer">
      <Button class="btn standard padded" @tap="closeModal">Close</Button>
    </StackLayout>
  </GridLayout>
</template>

<script type="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import EntranceEditor from '@/components/entrance/EntranceEditor.vue';
  import {EntranceHelper} from '@/utils/EntranceHelper';

  @Component
  export default class EntranceModal extends Vue {
    @Prop() entranceKey;
    staticEntrance = {};
    currentEntrance = {};
    links = {};
    entranceHelper = new EntranceHelper(this.$sol, this.$modelManager);

    mounted() {
      this.staticEntrance = this.entranceHelper.getStaticEntrance(this.entranceKey);
      this.currentEntrance = this.entranceHelper.getEntrance(this.entranceKey);
      this.links.enterLink = this.entranceHelper.getStaticEntrance(this.currentEntrance.enterLink);
      this.links.exitLink = this.entranceHelper.getStaticEntrance(this.currentEntrance.exitLink);
      this.links.enterLinkedTo = this.entranceHelper.getStaticEntrance(this.currentEntrance.enterLinkedTo);
      this.links.exitLinkedTo = this.entranceHelper.getStaticEntrance(this.currentEntrance.exitLinkedTo);
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
