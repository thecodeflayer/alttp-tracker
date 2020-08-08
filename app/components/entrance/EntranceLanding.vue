<template>
  <Page backgroundColor="black">
    <Navbar/>
    <GridLayout rows="80,*,78" columns="*">
      <StackLayout orientation="vertical" class="list-top-header">
        <Label class="list-title" :text="staticEntrance.name" textAlignment="center" fontSize="24"/>
        <GridLayout columns="*,*,*,*,*,*,*,*" rows="30">
          <Image col="0" @tap="onClickPin('moonpearl')" :src="currentEntrance.pin === 'moonpearl' ?  '~/img/items/moonpearl1.png':'~/img/items/moonpearl0.png'" width="16"/>
          <Image col="1" @tap="onClickPin('mirror')" :src="currentEntrance.pin === 'mirror' ? '~/img/items/mirror1.png':'~/img/items/mirror0.png'" width="16"/>
          <Image col="2" @tap="onClickPin('crystal')" :src="currentEntrance.pin === 'crystal' ? '~/img/dungeons/crystal3.png': '~/img/crystal-disabled2.png'" width="16"/>
          <Image col="3" @tap="onClickPin('ganon')" :src="currentEntrance.pin === 'ganon' ? '~/img/items/ganon.png' : '~/img/ganon-disabled.png'" width="16"/>
          <Image col="4" @tap="onClickPin('chest')" :src="currentEntrance.pin === 'chest' ? '~/img/chest.png' : '~/img/chest-disabled.png'" width="16"/>
          <Image col="5" @tap="onClickPin('glove')" :src="currentEntrance.pin === 'glove' ?  '~/img/items/glove2.png':'~/img/items/glove0.png'" width="16"/>
          <Image col="6" @tap="onClickPin('flute')" :src="currentEntrance.pin === 'flute' ?  '~/img/items/flute1.png':'~/img/items/flute0.png'" width="16"/>
          <Image col="7" @tap="onClickPin('shovel')" :src="currentEntrance.pin === 'shovel' ?  '~/img/items/shovel1.png':'~/img/items/shovel0.png'" width="16"/>
        </GridLayout>
      </StackLayout>
      <ScrollView class="scrollbox" row="1">
        <StackLayout orientation="vertical" class="lbl">
          <GridLayout rows="*" columns="60,*,36" @tap="navToEntranceEditor('enterLink')">
            <Image row="0" col="0" :src="staticEntrance.isHole ? '~/img/enter-hole.png': '~/img/enter-link-alt.png'" width="48" margin="4 5"/>
            <Label row="0" col="1" textWrap="true" verticalAlignment="center" fontSize="16" marginRight="4">
              <FormattedString>
                <Span v-for="t in entranceHelper.getLogicText(staticEntrance, links.enterLink,'enterLink')" :text="t.text" :color="t.color"/>
              </FormattedString>
            </Label>
            <Image :visibility="currentEntrance.enterLink && junkLinks.indexOf(currentEntrance.enterLink)<0 ? 'visible':'collapsed'" row="0" col="2" src="~/img/items/boomerang0.png" height="48" @tap="doJump(currentEntrance.enterLink)"/>
          </GridLayout>
          <GridLayout :visibility="staticEntrance.isHole?'collapsed':'visible'" rows="*" columns="60,*,36" @tap="navToEntranceEditor('exitLink')">
            <Image row="0" col="0" src="~/img/exit-link-alt.png" width="48" margin="4 5"/>
            <Label row="0" col="1" textWrap="true" verticalAlignment="center" fontSize="16" marginRight="4">
              <FormattedString>
                <Span v-for="t in entranceHelper.getLogicText(staticEntrance, links.exitLink, 'exitLink')" :text="t.text" :color="t.color"/>
              </FormattedString>
            </Label>
            <Image :visibility="currentEntrance.exitLink && junkLinks.indexOf(currentEntrance.exitLink)<0  ? 'visible':'collapsed'" row="0" col="2" src="~/img/items/boomerang0.png" height="48" @tap="doJump(currentEntrance.exitLink)"/>
          </GridLayout>
          <GridLayout :visibility="staticEntrance.isHole?'collapsed':'visible'" rows="*" columns="36,*,60" @tap="navToEntranceEditor('exitLinkedTo')">
            <Image :visibility="currentEntrance.exitLinkedTo && junkLinks.indexOf(currentEntrance.exitLinkedTo)<0  ? 'visible':'collapsed'" row="0" col="0" style="transform: scaleX(-1);"
                   src="~/img/items/boomerang0.png" height="48" @tap="doJump(currentEntrance.exitLinkedTo)"/>
            <Label row="0" col="1" textWrap="true" verticalAlignment="center" fontSize="16" marginRight="4" textAlignment="right">
              <FormattedString>
                <Span v-for="t in entranceHelper.getLogicText(staticEntrance, links.exitLinkedTo, 'exitLinkedTo')" :text="t.text" :color="t.color"/>
              </FormattedString>
            </Label>
            <Image row="0" col="2" src="~/img/exit-linked-to-alt.png" width="48" margin="4 5"/>
          </GridLayout>
          <GridLayout rows="*" columns="36,*,60" @tap="navToEntranceEditor('enterLinkedTo')">
            <Image :visibility="currentEntrance.enterLinkedTo && junkLinks.indexOf(currentEntrance.enterLinkedTo)<0  ? 'visible':'collapsed'" row="0" col="0" style="transform: scaleX(-1);"
                   src="~/img/items/boomerang0.png" height="48" @tap="doJump(currentEntrance.enterLinkedTo)"/>
            <Label row="0" col="1" textWrap="true" verticalAlignment="center" fontSize="16" marginRight="4" textAlignment="right">
              <FormattedString>
                <Span v-for="t in entranceHelper.getLogicText(staticEntrance, links.enterLinkedTo, 'enterLinkedTo')" :text="t.text" :color="t.color"/>
              </FormattedString>
            </Label>
            <Image row="0" col="2" :src="staticEntrance.isHole ? '~/img/enter-linked-hole.png':'~/img/enter-linked-to-alt.png'" width="48" margin="4 5"/>
          </GridLayout>
        </StackLayout>
      </ScrollView>
      <StackLayout orientation="vertical" row="2" class="list-top-header">
        <Button class="btn standard padded" @tap="closeModal">Return to Map</Button>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script type="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import EntranceEditor from '@/components/entrance/EntranceEditor.vue';
  import {EntranceHelper} from '@/utils/EntranceHelper';
  import DarkMap from '@/components/map/DarkMap.vue';
  import LightMap from '@/components/map/LightMap.vue';

  @Component
  export default class EntranceModal extends Vue {
    @Prop() entranceKey;
    staticEntrance = {};
    currentEntrance = {};
    links = {};
    entranceHelper = new EntranceHelper(this.$sol, this.$modelManager);
    isJump = false;
    junkLinks = EntranceHelper.junkLinks;

    mounted() {
      this.doInit();
    }
    doInit() {
      this.staticEntrance = this.entranceHelper.getStaticEntrance(this.entranceKey);
      this.currentEntrance = this.entranceHelper.getEntrance(this.entranceKey);
      this.links.enterLink = this.entranceHelper.getStaticEntrance(this.currentEntrance.enterLink);
      this.links.exitLink = this.entranceHelper.getStaticEntrance(this.currentEntrance.exitLink);
      this.links.enterLinkedTo = this.entranceHelper.getStaticEntrance(this.currentEntrance.enterLinkedTo);
      this.links.exitLinkedTo = this.entranceHelper.getStaticEntrance(this.currentEntrance.exitLinkedTo);
    }
    navToEntranceEditor(action) {
      if(this.isJump){
        this.isJump = false;
      } else {
        this.$navigateTo(EntranceEditor, {props:{entranceKey:this.entranceKey, action:action}});
      }
    }
    closeModal() {
      if(this.entranceHelper.isKeyDarkWorld(this.currentEntrance.id)) {
        this.$modelManager.map.darkworld.centerEntranceKey = this.currentEntrance.id;
        this.$modelManager.map.darkworld.centerShopKey = undefined;
        this.$modelManager.map.darkworld.centerKey = undefined;
        this.$modelManager.map.darkworld.showMode = 'entrances';
        this.$navigateTo(DarkMap, {clearHistory:true});
      } else {
        this.$modelManager.map.lightworld.centerEntranceKey = this.currentEntrance.id;
        this.$modelManager.map.lightworld.centerShopKey = undefined;
        this.$modelManager.map.lightworld.centerKey = undefined;
        this.$modelManager.map.lightworld.showMode = 'entrances';
        this.$navigateTo(LightMap, {clearHistory:true});
      }
    }
    doJump(id) {
      this.isJump = true;
      this.entranceKey = id;
      this.doInit();
    }
    onClickPin(pin) {
      this.currentEntrance.pin = this.$modelManager.entrances[this.entranceKey].pin = this.currentEntrance.pin === pin ? undefined : pin;
    }
  }
</script>

<style scoped lang="scss">
  @import "../../global_vars";
  .scrollbox {
    background-color: black;
    border-width: 0;
    &.empty {
      background-color: $standard-bg;
    }
  }
  .modal-header {
    border-color: $standard-border;
    border-width: 0 0 2 0;
    padding-top:10;
    &.empty {
      border-width: 0;
    }
  }
  .modal-footer {
    border-color: $standard-border;
    border-width: 2 0 0 0;
    padding-bottom:10;
    padding-top:10;
    &.empty {
      border-width: 0;
    }
  }
</style>
