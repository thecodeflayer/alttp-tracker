<template>
  <Page backgroundColor="black">
    <Navbar/>
    <GridLayout columns="*" rows="120,*,70">
      <StackLayout orientation="vertical" class="list-top-header">
        <GridLayout rows="64,*" columns="*,60,*">
          <StackLayout col="0" class="header-label">
            <Label :text="staticEntrance.name" textAlignment="center" verticalAlignment="center" textWrap="true"/>
          </StackLayout>
          <Image col="1" :src="actionImage" width="48" verticalAlignment="center"/>
          <StackLayout col="2"  class="header-label">
            <Label :text="staticLink.name" textAlignment="center" verticalAlignment="center" textWrap="true"/>
          </StackLayout>
          <Label row="1" colSpan="3" :text="logicText" textWrap="true" textAlignment="center" margin="5"/>
        </GridLayout>
      </StackLayout>
      <ScrollView row="1">
        <StackLayout orientation="vertical">
          <!-- MAIN MENU -->
          <StackLayout orientation="vertical" :visibility="drillArr.length === 0 ? 'visible':'collapsed'">
            <Button @tap="drillDown('lightworld')" class="btn standard padded">Light World</Button>
            <Button @tap="drillDown('darkworld')" class="btn standard padded">Dark World</Button>
          </StackLayout>
          <!-- LIGHT WORLD -->
          <StackLayout orientation="vertical" :visibility="drillArr.length === 1 && drillArr[0] === 'lightworld' ? 'visible':'collapsed'" marginLeft="10" marginRight="10">
            <GridLayout columns="*,5,*">
              <Button @tap="drillDown('dungeon')" class="btn standard padded">Dungeons</Button>
              <Button @tap="drillDown('deathmtn')" col="2" class="btn standard padded">Death Mountain</Button>
            </GridLayout>
            <GridLayout columns="*,5,*">
              <Button @tap="drillDown('kakariko')" class="btn standard padded">Kakariko</Button>
              <Button @tap="drillDown('northwest')" col="2" class="btn standard padded">North West</Button>
            </GridLayout>
            <GridLayout columns="*,5,*">
              <Button @tap="drillDown('south')" class="btn standard padded">South Shore</Button>
              <Button @tap="drillDown('other')" col="2" class="btn standard padded" style="font-size:16">Desert and North East</Button>
            </GridLayout>
          </StackLayout>
          <!-- DARK WORLD -->
          <StackLayout orientation="vertical" :visibility="drillArr.length === 1 && drillArr[0] === 'darkworld' ? 'visible':'collapsed'" marginLeft="10" marginRight="10">
            <GridLayout columns="*,5,*">
              <Button @tap="drillDown('dungeon')" class="btn standard padded">Dungeons</Button>
              <Button @tap="drillDown('deathmtn')" col="2" class="btn standard padded">Death Mountain</Button>
            </GridLayout>
            <GridLayout columns="*,5,*">
              <Button @tap="drillDown('village')" class="btn standard padded" style="font-size: 16">Village of Outcasts</Button>
              <Button @tap="drillDown('northwest')" col="2" class="btn standard padded">North West</Button>
            </GridLayout>
            <GridLayout columns="*,5,*">
              <Button @tap="drillDown('south')" class="btn standard padded">Dark South Shore</Button>
              <Button @tap="drillDown('other')" col="2" class="btn standard padded" style="font-size:16">Mire and North East</Button>
            </GridLayout>
          </StackLayout>
          <!-- DYNAMIC LOCATIONS -->
          <StackLayout orientation="vertical" :visibility="drillArr.length === 2 ? 'visible':'collapsed'">
            <Button v-for="loc in currentRegion" v-bind:key="loc.id" @tap="doLink(loc.id)" :text="loc.name" class="btn standard padded"></Button>
          </StackLayout>
        </StackLayout>
      </ScrollView>
      <StackLayout row="2" orientation="vertical">
        <Button class="btn empty padded" @tap="onBackButton">Back</Button>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script type="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import {EntranceHelper} from '@/utils/EntranceHelper';
  import DarkMap from '@/components/map/DarkMap.vue';
  import LightMap from '@/components/map/LightMap.vue';

  @Component
  export default class EntranceEditor extends Vue {
    @Prop() entranceKey;
    @Prop() action;
    staticEntrance = {};
    currentEntrance = {};
    staticLink = {};
    actionImage = '';
    logicText = '';
    drillArr = [];
    lwDrillObj = {};
    dwDrillObj = {};
    currentRegion = {};
    entranceHelper = new EntranceHelper(this.$sol, this.$modelManager);

    mounted() {
      this.staticEntrance = this.entranceHelper.getStaticEntrance(this.entranceKey);
      this.currentEntrance = this.entranceHelper.getEntrance(this.entranceKey);
      this.staticLink = this.entranceHelper.getStaticEntrance(this.currentEntrance[this.action]);
      this.actionImage = this.action === 'enterLink' ? '~/img/enter-link.png'
          : this.action === 'exitLink' ? '~/img/exit-link.png'
              : this.action === 'enterLinkedTo' ? '~/img/enter-linked-to.png'
                : '~/img/exit-linked-to.png';
      this.logicText = this.getLogicText();
      this.lwDrillObj = this.entranceHelper.getLightWorldRegionObject();
      this.dwDrillObj = this.entranceHelper.getDarkWorldRegionObject();
    }
    getLogicText(){
      if(this.action === 'enterLink') {
        return 'Entering '+this.staticEntrance.name+' overworld door leads to ' + this.staticLink.name;
      } else if(this.action === 'exitLink') {
        return 'Exiting '+this.staticEntrance.name+' leads to '+this.staticLink.name+' overworld door';
      } else if(this.action === 'enterLinkedTo') {
        return 'Entering '+this.staticLink.name+' overworld door leads to '+this.staticEntrance.name;
      } else {
        return 'Exiting '+this.staticLink.name+' leads to '+this.staticEntrance.name+' overworld door';
      }
    }
    drillDown(path) {
      if(this.drillArr.length<2){
        this.drillArr.push(path);
      }
      if(this.drillArr.length === 2) {
        this.currentRegion = this.drillArr[0] === 'lightworld' ? this.lwDrillObj[this.drillArr[1]] : this.dwDrillObj[this.drillArr[1]];
      }
      console.log(this.drillArr);
    }
    onBackButton() {
      if(this.drillArr.length === 0){
        this.$navigateBack();
      } else {
        this.drillArr.pop();
        this.currentRegion = {};
      }
    }
    doLink(id){
      this.currentEntrance[this.action] = this.entranceHelper.createLink(this.currentEntrance.id, id, this.action);
      this.logicText = this.getLogicText();
      this.$modelManager.saveEntrances();
      if(this.entranceHelper.isKeyDarkWorld(this.currentEntrance.id)) {
        this.$navigateTo(DarkMap);
      } else {
        this.$navigateTo(LightMap);
      }
    }
  }
</script>

<style scoped lang="scss">
  .header-label {
    background-color: #4c4c4c;
    border-color:white;
    border-width:2;
    margin: 4;
    height: 60;
    padding: 4;
  }
</style>
