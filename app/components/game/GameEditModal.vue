<template>
    <ScrollView>
      <StackLayout orientation="vertical" class="modal-dialog danger">
        <Label :visibility="modalAction === 'deleteGame' ? 'visible':'collapsed'" textWrap="true"
               textAlignment="center" style="padding-bottom: 10"
               text="Are you sure you want to delete this game?"/>
        <Label :visibility="modalAction === 'resetItems' ? 'visible':'collapsed'" textWrap="true"
               textAlignment="center" style="padding-bottom: 10"
               text="Are you sure you want to reset the item data for this game?"/>
        <Label :visibility="modalAction === 'resetDungeons' ? 'visible':'collapsed'" textWrap="true"
               textAlignment="center" style="padding-bottom: 10"
               text="Are you sure you want to reset the dungeon data for this game?"/>
        <Label :visibility="modalAction === 'resetMap' ? 'visible':'collapsed'" textWrap="true"
               textAlignment="center" style="padding-bottom: 10"
               text="Are you sure you want to reset the map data for this game?"/>
        <Label :visibility="modalAction === 'resetEntrances' ? 'visible':'collapsed'" textWrap="true"
               textAlignment="center" style="padding-bottom: 10"
               text="Are you sure you want to reset the entrance data for this game?"/>
        <Label text="This cannot be undone!" textAlignment="center" style="padding-bottom: 10"/>
        <StackLayout orientation="vertical">
          <Button class="btn danger padded" @tap="closeModal(true)">OK</Button>
          <Button class="btn danger padded" @tap="closeModal(false)">Cancel</Button>
        </StackLayout>
      </StackLayout>
    </ScrollView>
</template>

<script type="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component
  export default class GameEditModal extends Vue {
    @Prop({type: String, default: ''}) modalAction;
    game = this.$modelManager.editGame;

    created() {
      console.log('modalAction:', this.modalAction);

    }

    closeModal(doAction) {
      if (doAction) {
        if (this.modalAction === 'deleteGame') {
          this.deleteGame();
        } else if (this.modalAction === 'resetItems') {
          this.resetItems();
        } else if (this.modalAction === 'resetDungeons') {
          this.resetDungeons();
        } else if (this.modalAction === 'resetMap') {
          this.resetMap();
        } else if(this.modalAction === 'resetEntrances') {
          this.resetEntrances();
        }
      }
      this['$modal'].close(doAction ? this.modalAction : 'cancel');
    }

    deleteGame() {
      this.$modelManager.deleteGame(this.game.id);
      this.game = this.$modelManager.editGame;
    }

    resetItems() {
      this.$modelManager.resetItems();
    }

    resetDungeons() {
      this.$modelManager.resetDungeons();
    }

    resetMap() {
      this.$modelManager.resetMap();
    }

    resetEntrances() {
      this.$modelManager.resetEntrances();
    }
  }
</script>

<style scoped lang="scss">

</style>
