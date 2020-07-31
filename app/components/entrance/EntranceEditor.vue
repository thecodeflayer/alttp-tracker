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
            <Label :text="currentLink.name" textAlignment="center" verticalAlignment="center" textWrap="true"/>
          </StackLayout>
          <Label row="1" colSpan="3" :text="logicText" textWrap="true" textAlignment="center" margin="5"/>
        </GridLayout>
      </StackLayout>
      <ScrollView row="1">
        <StackLayout orientation="vertical">
          <StackLayout orientation="vertical" :visibility="drillArr.length === 0 ? 'visible':'collapsed'">
            <Button @tap="drillDown('lightworld')" class="btn standard padded">Light World</Button>
            <Button @tap="drillDown('darkworld')" class="btn standard padded">Dark World</Button>
          </StackLayout>
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
          <StackLayout orientation="vertical" :visibility="drillArr.length === 2 ? 'visible':'collapsed'">
            <Button v-for="loc in currentRegion" v-bind:key="loc.id" :text="loc.name" class="btn standard padded"></Button>
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

  @Component
  export default class EntranceEditor extends Vue {
    @Prop() entranceKey;
    @Prop() action;
    lwEntrances = this.$sol.getStaticEntrancesLW(this.$modelManager.getEntranceShuffleMode());
    dwEntrances = this.$sol.getStaticEntrancesDW(this.$modelManager.getEntranceShuffleMode());
    allEntrances = this.$modelManager.getAllEntrances();
    currentIndex = -1;
    staticEntrance = {};
    currentEntrance = {};
    allKeys = [];
    dwIndex = -1;
    currentLink = {};
    actionImage = '';
    logicText = '';
    drillArr = [];
    lwDrillObj = {
      dungeon:{},
      deathmtn:{},
      kakariko:{},
      northwest:{},
      south:{},
      other:{}
    };
    dwDrillObj = {
      dungeon:{},
      deathmtn:{},
      thievestown:{},
      northwest:{},
      south:{},
      other:{}
    }
    currentRegion = {};

    mounted() {
      const lwEntranceKeys = Object.keys(this.$sol.getStaticEntrancesLW(this.$modelManager.getEntranceShuffleMode()));
      const dwEntranceKeys = Object.keys(this.$sol.getStaticEntrancesDW(this.$modelManager.getEntranceShuffleMode()));
      this.dwIndex = lwEntranceKeys.length;
      this.allKeys = lwEntranceKeys.concat(dwEntranceKeys);
      this.currentIndex = this.allKeys.indexOf(this.entranceKey);
      this.staticEntrance = (this.currentIndex >= this.dwIndex) ? this.dwEntrances[this.entranceKey] : this.lwEntrances[this.entranceKey];
      this.currentEntrance = this.allEntrances[this.entranceKey];
      this.currentLink = this.currentEntrance[this.action]
          ? (this.allKeys.indexOf(this.currentEntrance[this.action])>=this.dwIndex ? this.dwEntrances[this.currentEntrance[this.action]]
              : this.lwEntrances[this.currentEntrance[this.action]] ) : {name:'???'};
      this.actionImage = this.action === 'enterLink' ? '~/img/enter-link.png'
          : this.action === 'exitLink' ? '~/img/exit-link.png'
              : this.action === 'enterLinkedTo' ? '~/img/enter-linked-to.png'
                : '~/img/exit-linked-to.png';
      this.logicText = this.getLogicText();
      for(const key of lwEntranceKeys) {
        const region = this.lwEntrances[key].region === 'northeast' || this.lwEntrances[key].region === 'desert' ? 'other' : this.lwEntrances[key].region;
        this.lwDrillObj[region][key] = {id:key, name:this.lwEntrances[key].name};
      }
      // for(const key of dwEntranceKeys) {
      //   const region = this.dwEntrances[key].region === 'northeast' || this.dwEntrances[key].region === 'mire' ? 'other' : this.dwEntrances[key].region;
      //   this.dwDrillObj[region][key] = {id:key, name:this.dwEntrances[key].name};
      // }
    }
    getLogicText(){
      if(this.action === 'enterLink') {
        return 'Entering '+this.staticEntrance.name+' overworld door leads to ' + this.currentLink.name;
      } else if(this.action === 'exitLink') {
        return 'Exiting '+this.staticEntrance.name+' leads to '+this.currentLink.name+' overworld door';
      } else if(this.action === 'enterLinkedTo') {
        return 'Entering '+this.currentLink.name+' overworld door leads to '+this.staticEntrance.name;
      } else {
        return 'Exiting '+this.currentLink.name+' leads to '+this.staticEntrance.name+' overworld door';
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
