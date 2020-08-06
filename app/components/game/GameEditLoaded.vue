<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView>
      <StackLayout orientation="vertical" class="save-wrapper highlight">
        <Label :text="game.name +': Active Game'" fontSize="24" />
        <Label :text="'Game Mode: '+game.gameMode"/>
        <Label :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label"/>
        <Label :text="'Entrance Shuffle: '+entranceShuffleOptions[game.entranceShuffle].label"/>
        <Label :text="'Goal: '+goalOptions[game.goal].label"/>
        <Label height="15"/>
        <Button class="btn highlight padded" @tap="openModal('resetItems')">Reset Items</Button>
        <Button class="btn highlight padded" @tap="openModal('resetDungeons')">Reset Dungeons</Button>
        <Button class="btn highlight padded" @tap="openModal('resetMap')">Reset Map</Button>
        <Button class="btn highlight padded" @tap="openModal('resetEntrances')"
                :visibility="game.entranceShuffle!==entranceShuffleOptions.none.id ? 'visible':'collapsed'">Reset Entrances</Button>
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
  import SaveList from '@/components/game/SaveList.vue';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';
  import GameEditModal from '@/components/game/GameEditModal.vue';
  import DarkMap from '@/components/map/DarkMap.vue';

  @Component
  export default class GameEditLoaded extends Vue {

    itemShuffleOptions = GameSaveHelper.itemShuffleOptions;
    entranceShuffleOptions = GameSaveHelper.entranceShuffleOptions;
    goalOptions = GameSaveHelper.goalOptions;
    game = this.$modelManager.editGame;

    openModal(opt) {
      this.$showModal(GameEditModal, {props:{modalAction: opt}});
    }
    cancel() {
      this.$navigateTo(SaveList, {clearHistory:true});
    }
  }
</script>

<style scoped lang="scss">

</style>
