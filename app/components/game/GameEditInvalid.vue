<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView>
      <StackLayout orientation="vertical" class="save-wrapper danger">
        <Label :text="game.name" fontSize="24" />
        <Label :text="'Game Mode: '+game.gameMode"/>
        <Label :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label"/>
        <Label :text="'Goal: '+goalOptions[game.goal].label"/>
        <Button class="btn danger padded" @tap="deleteGame">Delete</Button>
        <Label textWrap="true" fontSize="16" textAlignment="center"
               text="NOTE: This game is based on an old version. You must delete this game."/>
        <Label :visibility="!allowDelete && game.timestamp ? 'visible': 'collapsed'" textWrap="true" fontSize="16" textAlignment="center"
               text="NOTE: At least one game must be active. Create another game using an empty game slot before deleting this game."/>
      </StackLayout>
    </ScrollView>

  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SaveList from '@/components/game/SaveList.vue';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';

  @Component
  export default class GameEditInvalid extends Vue {

    allowDelete = this.$modelManager.allowGameDelete();
    itemShuffleOptions = GameSaveHelper.itemShuffleOptions;
    goalOptions = GameSaveHelper.goalOptions;
    game = this.$modelManager.editGame;

    deleteGame() {
      this.$modelManager.deleteGame(this.game.id);
      this.$navigateTo(SaveList);
    }
  }
</script>

<style scoped lang="scss">

</style>
