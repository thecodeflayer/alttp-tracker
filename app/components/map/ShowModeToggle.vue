<template>
  <GridLayout marginLeft="5" marginTop="5">
    <Image v-if="currentMode === 'locations' && modeArr.length > 1" height="32" width="32" src="~/img/dungeons/map1.png" style="padding-left: 10" @tap="toggleMode" />
    <Image v-if="currentMode === 'shops'" height="32" width="32" src="~/img/shopDW.png" style="padding-left: 10" @tap="toggleMode" />
    <Image v-if="currentMode === 'entrances'" height="32" width="32" src="~/img/entrance.png" style="padding-left: 10" @tap="toggleMode" />
  </GridLayout>
</template>

<script type="ts">
  import {Component, Vue, Prop, Model, Emit} from 'vue-property-decorator';

  @Component
  export default class ShowModeToggle extends Vue {
    @Prop({default: false}) shopsEnabled;
    @Prop({default: false}) entrancesEnabled;
    @Model('toggle-mode', {required: true}) currentMode;
    modeArr = ['locations'];

    mounted() {
      if(this.shopsEnabled) {
        this.modeArr.push('shops');
      }
      if(this.entrancesEnabled) {
        this.modeArr.push('entrances');
      }
    }

    @Emit()
    toggleMode() {
      let i = this.modeArr.indexOf(this.currentMode)+1;
      if(i >= this.modeArr.length) {
        i = 0;
      }
      return this.currentMode = this.modeArr[i];
    }
  }
</script>

<style scoped lang="scss">

</style>
