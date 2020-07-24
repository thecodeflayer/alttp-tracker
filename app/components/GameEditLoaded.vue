<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView>
      <StackLayout orientation="vertical" class="save-wrapper highlight">
        <Label :text="game.name +': Active Game'" fontSize="24" />
        <Label :text="'Game Mode: '+game.gameMode"/>
        <Label :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label"/>
        <Label :text="'Goal: '+goalOptions[game.goal].label"/>
        <Label height="15"/>
        <Button class="btn highlight padded" @tap="openModal('resetItems')">Reset Items</Button>
        <Button class="btn highlight padded" @tap="openModal('resetDungeons')">Reset Dungeons</Button>
        <Button class="btn highlight padded" @tap="openModal('resetMap')">Reset Map</Button>
        <Button class="btn highlight padded" @tap="cancel">Back</Button>
        <Label height="15"/>
        <Label textWrap="true" fontSize="16" textAlignment="center"
               text="NOTE: You cannot delete the active game. Load another game before deleting this one."/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SaveList from '@/components/SaveList.vue';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';
  import GameEditModal from '@/components/GameEditModal.vue';

  @Component
  export default class GameEditLoaded extends Vue {

    itemShuffleOptions = GameSaveHelper.itemShuffleOptions;
    goalOptions = GameSaveHelper.goalOptions;
    game = this.$modelManager.editGame;

    openModal(opt) {
      this.$showModal(GameEditModal, {props:{modalAction: opt}});
    }
    cancel() {
      this.$navigateTo(SaveList);
    }
  }
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/forest';

</style>
