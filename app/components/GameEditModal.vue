<template>
    <ScrollView>
      <StackLayout orientation="vertical" class="modal-dialog">
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
        <Label text="This cannot be undone!" textAlignment="center" style="padding-bottom: 10"/>
        <Button class="btn invalid" @tap="closeModal(true)">OK</Button>
        <Button class="btn invalid" @tap="closeModal(false)">Cancel</Button>
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
    padding: 10;
    margin: -3;
    color: white;
    horizontal-align: center;
    vertical-align: center;
    font-family: "Return of Ganon", "ReturnofGanon";
    background-color: #6a0000;
    width: 100%;
  }
  .modal-dialog {
    background-color: darkred;
    border-width: 2px;
    border-color: #004c00;
    padding: 10;
    color: white;
    font-family: "Return of Ganon", "ReturnofGanon";
    font-size: 20;
  }
</style>
