<template>
  <ScrollView>
    <StackLayout orientation="vertical" class="modal-dialog">
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
      <StackLayout orientation="vertical">
        <Button class="btn standard padded" @tap="updateGoals">OK</Button>
        <Button class="btn standard padded" @tap="closeModal">Back</Button>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {GameSaveHelper} from '@/utils/GameSaveHelper';

  @Component
  export default class GoalEditModal extends Vue {
    game = this.$modelManager.settings.getCopy();
    goalOptions = GameSaveHelper.goalOptions;

    sliderChangeTriforce(val){
      this.game.triforceGoal = val.value;
    }
    sliderChangeGT(val){
      this.game.openGT = val.value;
    }
    sliderChangeGanon(val) {
      this.game.openGanon = val.value;
    }
    updateGoals() {
      if(this.game.goal === this.goalOptions.triforce.id) {
        this.$modelManager.settings.triforceGoal = this.game.triforceGoal;
      }
      this.$modelManager.settings.openGT = this.game.openGT;
      this.$modelManager.settings.openGanon = this.game.openGanon;
      this.$modelManager.saveSettings();
      this.closeModal();
    }
    closeModal() {
      this['$modal'].close('cancel');
    }
  }
</script>

<style scoped lang="scss">

</style>
