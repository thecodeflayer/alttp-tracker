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
  import SaveList from '@/components/SaveList.vue';
  import GameEditValid from '@/components/GameEditValid.vue';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';

  @Component
  export default class GameEditEmpty extends Vue {

    itemShuffleOptions = GameSaveHelper.itemShuffleOptions;
    itemShuffleKeys = Object.keys(GameSaveHelper.itemShuffleOptions);
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
      this.$modelManager.createGame(this.game.id, this.game.itemShuffle, this.game.gameMode, this.game.goal, this.game.triforceGoal, this.game.openGT, this.game.openGanon);
      this.game = this.$modelManager.editGame;
      this.$navigateTo(GameEditValid);
    }

    cancel() {
      this.$navigateTo(SaveList);
    }

    clickItemShuffle(id) {
      this.game.itemShuffle = id;
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
    background-color: #616161;
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
    background-color: gray;
  }
</style>
