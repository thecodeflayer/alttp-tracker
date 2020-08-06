<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView>
      <StackLayout v-if="!game.timestamp" orientation="vertical" class="save-wrapper empty">
        <Label :text="game.name" fontSize="24" />
        <Label text="Game Slot Empty"/>
        <StackLayout orientation="vertical">
          <Label text="Game Mode:"/>
          <StackLayout orientation="horizontal" v-for="mode in gameModes" @tap="clickGameMode(mode)" v-bind:key="mode">
            <Image :src="getGameModeCheckImage(mode)" width="20" height="20" />
            <Label :text="gameModeLabels[mode]" verticalAlignment="center" marginLeft="5" fontSize="20" />
          </StackLayout>
          <Label text="Item Shuffle:"/>
          <StackLayout orientation="horizontal" v-for="key in itemShuffleKeys" @tap="clickItemShuffle(key)" v-bind:key="key">
            <Image :src="getItemShuffleCheckImage(key)" width="20" height="20" />
            <Label :text="itemShuffleOptions[key].label" verticalAlignment="center" marginLeft="5" fontSize="20" />
          </StackLayout>

          <Label text="Entrance Shuffle:"/>
          <StackLayout orientation="horizontal" v-for="key in entranceShuffleKeys" @tap="clickEntranceShuffle(key)" v-bind:key="key">
            <Image :src="getEntranceShuffleCheckImage(key)" width="20" height="20" />
            <Label :text="entranceShuffleOptions[key].label" verticalAlignment="center" marginLeft="5" fontSize="20" />
          </StackLayout>

          <Label text="Goal:"/>
          <StackLayout orientation="horizontal" v-for="goal in goalKeys" v-bind:key="goal" @tap="clickGoal(goal)">
            <Image :src="getGoalCheckImage(goal)" width="20" height="20" />
            <Label :text="goalOptions[goal].label" verticalAlignment="center" marginLeft="5" fontSize="20" />
          </StackLayout>
          <StackLayout :visibility="game.goal === goalOptions.triforce.id ? 'visible':'collapsed'" orientation="vertical">
            <Label :text="'Triforce Pieces Goal: '+game.triforceGoal" />
            <GridLayout row="20" columns="20,*,20" style="margin:0;padding:0">
              <Label col="0" text="1" fontSize="16" verticalAlignment="center" textAlignment="right"/>
              <Slider col="1" :value="game.triforceGoal" @valueChange="sliderChangeTriforce"
                      style="margin:5 0"
                      minValue="1" maxValue="30" backgroundColor="white" color="white" verticalAlignment="center" />
              <Label col="2" text="30" fontSize="16" verticalAlignment="center"/>
            </GridLayout>
          </StackLayout>
          <StackLayout orientation="vertical">
            <Label :text="'Crystals to Open Tower: '+game.openGT" />
            <GridLayout row="20" columns="20,*,20" style="margin:0;padding:0">
              <Label col="0" text="0" fontSize="16" verticalAlignment="center" textAlignment="right"/>
              <Slider col="1" :value="game.openGT" @valueChange="sliderChangeGT"
                      style="margin:5 0"
                      minValue="0" maxValue="7" backgroundColor="white" color="white" verticalAlignment="center" />
              <Label col="2" text="7" fontSize="16" verticalAlignment="center"/>
            </GridLayout>
          </StackLayout>
          <StackLayout orientation="vertical">
            <Label :text="'Crystals to Access Ganon: '+game.openGanon" />
            <GridLayout row="20" columns="20,*,20" style="margin:0;padding:0">
              <Label col="0" text="0" fontSize="16" verticalAlignment="center" textAlignment="right"/>
              <Slider col="1" :value="game.openGanon" @valueChange="sliderChangeGanon"
                      style="margin:5 0"
                      minValue="0" maxValue="7" backgroundColor="white" color="white" verticalAlignment="center" />
              <Label col="2" text="7" fontSize="16" verticalAlignment="center"/>
            </GridLayout>
          </StackLayout>
        </StackLayout>
        <Label height="15"/>
        <Button class="btn empty" @tap="createGame">Create New Game</Button>
        <Button class="btn empty" @tap="cancel">Back</Button>
        <Label height="15"/>
        <Label textWrap="true" fontSize="16" textAlignment="center"
               text="NOTE: More game options coming soon!"/>
      </StackLayout>
    </ScrollView>

  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SaveList from '@/components/game/SaveList.vue';
  import GameEditValid from '@/components/game/GameEditValid.vue';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';
  import DarkMap from '@/components/map/DarkMap.vue';

  @Component
  export default class GameEditEmpty extends Vue {

    itemShuffleOptions = GameSaveHelper.itemShuffleOptions;
    itemShuffleKeys = Object.keys(GameSaveHelper.itemShuffleOptions);
    entranceShuffleOptions = GameSaveHelper.entranceShuffleOptions;
    entranceShuffleKeys = Object.keys(GameSaveHelper.entranceShuffleOptions);
    goalOptions = GameSaveHelper.goalOptions;
    goalKeys = Object.keys(GameSaveHelper.goalOptions);
    game = this.$modelManager.editGame;
    gameModes = Object.keys(GameSaveHelper.labels);
    gameModeLabels = GameSaveHelper.labels;

    created() {
      this.checkEmptyGameState();
    }

    createGame() {
      if (!this.game.itemShuffle || !this.game.gameMode || !this.game.goal) {
        return;
      }
      this.$modelManager.createGame(this.game.id, this.game.itemShuffle, this.game.gameMode, this.game.goal, this.game.triforceGoal, this.game.openGT, this.game.openGanon, this.game.entranceShuffle);
      this.game = this.$modelManager.editGame;
      this.$navigateTo(GameEditValid, {clearHistory:true});
    }

    cancel() {
      this.$navigateTo(SaveList, {clearHistory:true});
    }

    clickItemShuffle(id) {
      this.game.itemShuffle = id;
    }

    clickEntranceShuffle(id) {
      this.game.entranceShuffle = id;
    }

    clickGameMode(id) {
      this.game.gameMode = id;
    }

    clickGoal(id) {
      this.game.goal = id;
    }

    checkEmptyGameState() {
      if (!this.game.timestamp) {
        this.game.itemShuffle = this.itemShuffleOptions.standard.id;
        this.game.gameMode = this.gameModes[0];
        this.game.goal = this.goalOptions.ganon.id;
      }
    }

    getItemShuffleCheckImage(key) {
      return this.game.itemShuffle === key ? '~/img/checked.png' : '~/img/unchecked.png';
    }

    getEntranceShuffleCheckImage(key) {
      return this.game.entranceShuffle === key ? '~/img/checked.png' : '~/img/unchecked.png';
    }

    getGameModeCheckImage(key) {
      return this.game.gameMode === key ? '~/img/checked.png' : '~/img/unchecked.png';
    }
    getGoalCheckImage(key) {
      return this.game.goal === key ? '~/img/checked.png' : '~/img/unchecked.png';
    }
    sliderChangeTriforce(val){
      this.game.triforceGoal = val.value;
    }
    sliderChangeGT(val){
      this.game.openGT = val.value;
    }
    sliderChangeGanon(val) {
      this.game.openGanon = val.value;
    }
  }
</script>

<style scoped lang="scss">

</style>
