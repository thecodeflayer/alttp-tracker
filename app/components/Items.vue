<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView orientation="vertical">
      <StackLayout orientation="vertical">
        <GridLayout class="item-grid" columns="*,*,*,*,*,*" :rows="gameMode === 'retro' ? '40,40,40,40,40,40' : '40,40,40,40,40'">
          <Image v-for="(key, index) in itemKeys" v-bind:key="key" :row="Math.floor(index/6)" :col="index % 6" :src="items[key]" class="item" @tap="clickItem(key)"/>
        </GridLayout>
        <GridLayout class="item-grid" columns="*,*,*,*,*,*" rows="100">
          <StackLayout orientation="vertical" row="0" col="0" colSpan="3" height="100" paddingTop="4" paddingLeft="10">
            <StackLayout :visibility="goal === 'triforce' ? 'visible':'collapsed'" orientation="horizontal" class="item-count" height="32"
                         horizontalAlignment="left" @tap="clickTriforce">
              <Image src="~/img/items/triforce.png" width="20" height="20" verticalAlignment="center" />
              <Label :text="'('+triforceCount+'/'+triforceGoal+')'" verticalAlignment="center" style="padding-left:5"/>
            </StackLayout>
            <StackLayout :visibility="goal === 'pedestal' ? 'visible':'collapsed'" orientation="horizontal" class="item-count" height="32"
                         horizontalAlignment="left">
              <Image :src="pedestalPendants.g ? '~/img/crystal-green.png':'~/img/crystal-disabled.png'" width="30" height="30" class="item" verticalAlignment="center"/>
              <Image :src="pedestalPendants.rb0 ? '~/img/dungeons/crystal2.png':'~/img/crystal-disabled.png'" width="30" height="30" class="item" verticalAlignment="center"/>
              <Image :src="pedestalPendants.rb1 ? '~/img/dungeons/crystal2.png':'~/img/crystal-disabled.png'" width="30" height="30" class="item" verticalAlignment="center"/>
            </StackLayout>
            <StackLayout :visibility="goal === 'ganon' || goal === 'fastGanon' ? 'visible':'collapsed'"
                         orientation="horizontal" class="item-count" height="32" horizontalAlignment="left">
              <Image v-for="idx in (goal === 'ganon' && openGT > openGanon) ? openGT : openGanon" v-bind:key="idx"
                :src="crystalCount >= idx ? '~/img/dungeons/crystal3.png' : '~/img/crystal-disabled2.png'"
                width="16" height="16" marginLeft="3" verticalAlignment="center"/>
            </StackLayout>
            <GridLayout :visibility="goal === 'allDungeons' ? 'visible':'collapsed'" orientation="horizontal" class="item-count"
                        rows="24,24" columns="24,24,24,24,24,24" horizontalAlignment="left">
              <Image v-for="(boss, idx) in dungeonKeys" v-bind:key="boss" width="20" height="20"
                     :src="'~/img/dungeons/'+boss+'_boss'+(dungeons[boss].boss ? '1':'0')+'.png'"
                     :row="Math.floor(idx/6)" :col="idx%6"/>
            </GridLayout>
            <StackLayout orientation="horizontal" class="item-count" height="32" horizontalAlignment="left">
              <Image src="~/img/chest.png" width="20" height="20" verticalAlignment="center"/>
              <Label :text="'('+itemCount+'/'+itemMax+')'" verticalAlignment="center" style="padding-left:5"/>
            </StackLayout>
          </StackLayout>
          <GridLayout columns="*,*,*" rows="100" row="0" col="3" colSpan="3" @tap="editGoal">
            <Image class="item" row="0" col="0" height="32" width="32" verticalAlignment="top"
                   :src="goal === 'triforce' ? '~/img/items/triforce.png' : goal === 'pedestal'
                 ? '~/img/items/pedestal.png' : goal === 'fastGanon' ? '~/img/items/fast-ganon.png'
                 : goal === 'allDungeons' ? '~/img/items/all-dungeons.png' : '~/img/items/ganon.png'" />
            <Image class="item" row="0" col="1" :src="'~/img/items/req-crystals'+openGT+'.png'" height="32" width="32" verticalAlignment="top"/>
            <Image class="item" row="0" col="2" :src="'~/img/items/req-ganon'+openGanon+'.png'" height="32" width="32" verticalAlignment="top"/>
          </GridLayout>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script type="ts">

  import {Component, Vue} from 'vue-property-decorator';
  import GameEditModal from '@/components/game/GameEditModal.vue';
  import GoalEditModal from '@/components/GoalEditModal.vue';

  @Component
  export default class Items extends Vue {

    items = this.getAllImages();
    itemKeys = this.$modelManager.getItemKeys();
    itemCount = 0;
    itemMax = this.$modelManager.getItemMax();
    gameMode = this.$modelManager.settings.gameMode;
    goal = this.$modelManager.settings.goal;
    openGT = this.$modelManager.settings.openGT;
    openGanon = this.$modelManager.settings.openGanon;
    triforceGoal = this.$modelManager.settings.triforceGoal;
    triforceCount = this.$modelManager.settings.triforceCount;
    pedestalPendants = {rb0:false, rb1:false, g:false};
    crystalCount = 0;
    dungeons = this.$modelManager.dungeons;
    dungeonKeys = Object.keys(this.$modelManager.dungeons);

    mounted() {
        this.itemCount = this.$modelManager.getItemCount();
        this.pedestalPendants = this.getPedestalPendants();
        this.crystalCount = this.getCrystalCount();
    }
    getImage(key) {
      if (typeof this.$modelManager.getItem(key) === 'boolean') {
        if (this.$modelManager.getItem(key)){
          return '~/img/items/'+key+'1.png';
        } else {
          return '~/img/items/'+key+'0.png';
        }
      } else if (typeof this.$modelManager.getItem(key) === 'number') {
        return '~/img/items/'+key+this.$modelManager.getItem(key)+'.png';
      } else {
        return '~/img/items/unknown.png';
      }
    }
    clickItem(key) {
      if (typeof this.$modelManager.getItem(key) === 'boolean') {
        this.$modelManager.setItem(key, !this.$modelManager.getItem(key));
      } else if (typeof this.$modelManager.getItem(key) === 'number') {
        let val = this.$modelManager.getItem(key) + 1;
        if(val > this.$sol.getStaticItems(this.$modelManager.getGameMode())[key]) {
          val = 0;
        }
        this.$modelManager.setItem(key, val);
      }
      this.items[key] = this.getImage(key);
      this.$modelManager.validateLocales();
    }
    clickTriforce(){
      this.$modelManager.settings.triforceCount++;
      if(this.$modelManager.settings.triforceCount > this.$modelManager.settings.triforceGoal) {
        this.$modelManager.settings.triforceCount = 0;
      }
      this.triforceCount = this.$modelManager.settings.triforceCount;
      this.$modelManager.saveSettings();
    }
    getAllImages() {
      const retval = {};
      const keys = this.$modelManager.getItemKeys();
      for(const key of keys) {
        retval[key] = this.getImage(key);
      }
      return retval;
    }
    getPedestalPendants() {
      const retval = {rb0:false, rb1:false, g:false};
      if(this.goal === 'pedestal') {
        const keys = Object.keys(this.$modelManager.dungeons);
        let rb = 0;
        let g = false;
        for(const key of keys) {
          if(this.$modelManager.dungeons[key].crystal === 2){
            rb = rb + 1;
          }
          if(this.$modelManager.dungeons[key].crystal === 1) {
            g = true;
          }
        }
        retval.rb0 = rb > 0;
        retval.rb1 = rb > 1;
        retval.g = g;
      }
      return retval;
    }
    getCrystalCount() {
      let retval = 0;
      const keys = Object.keys(this.$modelManager.dungeons);
      for(const key of keys) {
        if(this.$modelManager.dungeons[key].crystal > 2){
          retval = retval +1;
        }
      }
      return retval;
    }
    async editGoal() {
      await this.$showModal(GoalEditModal);
      this.openGT = this.$modelManager.settings.openGT;
      this.openGanon = this.$modelManager.settings.openGanon;
      this.triforceGoal = this.$modelManager.settings.triforceGoal;
    }
  }
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/forest';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }
  .item-grid {
    background-color: black;
  }
  .item {
    width: 32;
    height: 32;
    margin: 4;
  }
  .item-count {
    font-family: PressStart2P-vaV7;
    font-size: 12;
    color: white;
    margin: 2;
  }
</style>
