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
          <Label row="1" colSpan="3" textWrap="true" textAlignment="center" margin="5">
            <FormattedString>
              <Span v-for="t in logicText" :text="t.text" :color="t.color"/>
            </FormattedString>
          </Label>
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
            <GridLayout v-for="loc in currentRegion" columns="68,*" rows="68" v-bind:key="loc.id" @tap="doLink(loc.id)" class="btn standard padded" margin="2 0" padding="2" height="68">
              <Image col="0" v-if="loc.image" :src="loc.image" height="64" horizontalAlignment="center" verticalAlignment="center"/>
              <Label col="1" :text="loc.name" horizontalAlignment="left" verticalAlignment="center" textWrap="true"
                     marginLeft="10" :fontSize="loc.name.length>32 ? '16': loc.name.length>28? '18':'20'"/>
            </GridLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
      <GridLayout row="2" columns="*,5,*" class="list-top-header" margin="0 5 5 5">
        <Button class="btn empty padded" @tap="onBackButton">Back</Button>
        <Button col="2" class="btn danger padded" @tap="closeEditor">Close</Button>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script type="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import {EntranceHelper} from '@/utils/EntranceHelper';
  import EntranceLanding from '@/components/entrance/EntranceLanding.vue';

  @Component
  export default class EntranceEditor extends Vue {
    @Prop() entranceKey;
    @Prop() action;
    staticEntrance = {};
    currentEntrance = {};
    staticLink = {};
    actionImage = '';
    logicText = [];
    drillArr = [];
    lwDrillObj = {};
    dwDrillObj = {};
    currentRegion = {};
    entranceHelper = new EntranceHelper(this.$sol, this.$modelManager);

    mounted() {
      this.staticEntrance = this.entranceHelper.getStaticEntrance(this.entranceKey);
      this.currentEntrance = this.entranceHelper.getEntrance(this.entranceKey);
      this.lwDrillObj = this.entranceHelper.getLightWorldRegionObject();
      this.dwDrillObj = this.entranceHelper.getDarkWorldRegionObject();
      this.staticLink = this.entranceHelper.getStaticEntrance(this.currentEntrance[this.action]);
      this.actionImage = this.action === 'enterLink' ? '~/img/enter-link-alt.png'
          : this.action === 'exitLink' ? '~/img/exit-link-alt.png'
              : this.action === 'enterLinkedTo' ? '~/img/enter-linked-to-alt.png'
                : '~/img/exit-linked-to-alt.png';
      this.logicText = this.entranceHelper.getLogicText(this.staticEntrance, this.staticLink, this.action);

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
        this.closeEditor();
      } else {
        this.drillArr.pop();
        this.currentRegion = {};
      }
    }
    doLink(id){
      this.currentEntrance[this.action] = this.entranceHelper.createLink(this.currentEntrance.id, id, this.action);
      this.$modelManager.saveEntrances();
      this.closeEditor();
    }
    closeEditor() {
      this.$navigateTo(EntranceLanding, {props:{entranceKey:this.entranceKey}});
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
