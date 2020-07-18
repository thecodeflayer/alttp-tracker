<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView>
      <StackLayout orientation="vertical" class="save-wrapper">
        <Label :text="game.name" fontSize="24" />
        <Label :text="'Game Mode: '+game.gameMode"/>
        <Label :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label"/>
        <Label :text="'Goal: '+goalOptions[game.goal].label"/>
        <Label height="15"/>
        <Button class="btn" @tap="loadGame">Load Game</Button>
        <Button class="btn" @tap="openModal">Delete</Button>
        <Button class="btn" @tap="cancel">Back</Button>
        <Label height="15"/>
        <Label :visibility="!allowDelete && game.timestamp ? 'visible': 'collapsed'" textWrap="true" fontSize="16" textAlignment="center"
               text="NOTE: At least one game must be active. Create another game using an empty game slot before deleting this game."/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SaveList from '@/components/SaveList.vue';
  import GameEditModal from '@/components/GameEditModal.vue';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';

  @Component
  export default class GameEditValid extends Vue {

    allowDelete = this.$modelManager.allowGameDelete();
    game = this.$modelManager.editGame;
    itemShuffleOptions = GameSaveHelper.itemShuffleOptions;
    goalOptions = GameSaveHelper.goalOptions;

    async openModal() {
      const retval = await this.$showModal(GameEditModal, {props:{modalAction:'deleteGame'}});
      if(retval !== 'cancel') {
        this.$navigateTo(SaveList);
      }
    }

    loadGame() {
      this.$modelManager.loadGame(this.game.id);
      this.$navigateTo(SaveList);
    }

    cancel() {
      this.$navigateTo(SaveList);
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
    width: 100%;
    background-color: #005500;
  }
  .save-wrapper {
    font-size: 20;
    margin: 4;
    padding: 10;
    color: white;
    border-width: 2;
    border-color: #003400;
    vertical-align: top;
    font-family: "Return of Ganon", "ReturnofGanon";
    background-color: darkgreen;
  }
</style>
