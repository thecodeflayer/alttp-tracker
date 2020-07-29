<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView orientation="vertical">
      <StackLayout orientation="vertical">
        <GridLayout columns="52,*" rows="*" orientation="horizontal" class="save-list-wrapper" v-for="game in gameSaves"
                    v-bind:key="game.id"
                    :class="game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid'"
                    @tap="navToEdit(game)">
          <Image
              :src="'~/img/game-'+(game.loaded ? 'loaded' : !game.timestamp ? 'empty' : game.valid ? 'valid': 'invalid')
                    +(game.timestamp && game.valid ? '-'+game.gameMode.toLowerCase() : '')+'.png'"
              col="0" row="0" width="48"/>
          <StackLayout col="1" row="0" orientation="vertical" verticalAlignment="center">
            <Label v-if="game.timestamp" :text="game.name + (game.loaded?': Active Game':'')"/>
            <Label v-else text="Empty"/>
            <Label v-if="game.timestamp" :text="'Game Mode: '+game.gameMode" fontSize="16"/>
            <Label v-else text="Create New Game" fontSize="16"/>
            <Label v-if="game.timestamp" :text="'Item Shuffle: '+itemShuffleOptions[game.itemShuffle].label" fontSize="16"/>
            <Label v-if="game.timestamp" :text="'Entrance Shuffle: '+entranceShuffleOptions[game.entranceShuffle].label" fontSize="16"/>
            <Label v-if="game.timestamp" :text="'Goal: '+(game.goal ? goalOptions[game.goal].label : 'undefined')" fontSize="16"/>
            <Label v-if="game.timestamp" :text="'Last Saved: '+game.timestamp" fontSize="16"
                   verticalAlignment="bottom"/>
            <Label v-else text=" " fontSize="16" verticalAlignment="bottom"/>
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GameEditValid from '@/components/game/GameEditValid.vue';
  import GameEditLoaded from '@/components/game/GameEditLoaded.vue';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';
  import GameEditInvalid from '@/components/game/GameEditInvalid.vue';
  import GameEditEmpty from '@/components/game/GameEditEmpty.vue';

  @Component
  export default class SaveList extends Vue {
    gameSaves = GameSaveHelper.parseGameSaves(this.$modelManager);
    itemShuffleOptions = GameSaveHelper.itemShuffleOptions;
    entranceShuffleOptions = GameSaveHelper.entranceShuffleOptions;
    goalOptions = GameSaveHelper.goalOptions;

    mounted() {
      this.gameSaves = GameSaveHelper.parseGameSaves(this.$modelManager);
    }

    navToEdit(game) {
      this.$modelManager.editGame = game;
      if(!game.loaded && game.valid) {
        this.$navigateTo(GameEditValid);
      } else if (game.loaded && game.valid) {
        this.$navigateTo(GameEditLoaded);
      } else if (game.timestamp && !game.valid) {
        this.$navigateTo(GameEditInvalid);
      } else if(!game.timestamp) {
        this.$navigateTo(GameEditEmpty);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../global_vars";

  // Custom styles

  .save-list-wrapper {
    font-size: 20;
    margin: 4;
    padding: 4;
    color: $standard-font-color;
    border-width: 2;
    vertical-align: top;
    font-family: $font-ganon;

    &.loaded {
      background-color: $highlight-bg;
      border-color: $highlight-border;
    }

    &.empty {
      background-color: $empty-bg;
      border-color: $empty-border;
    }

    &.valid {
      background-color: $standard-bg;
      border-color: $standard-border;
    }

    &.invalid {
      background-color: $danger-bg;
      border-color: $danger-border;
    }
  }
</style>
