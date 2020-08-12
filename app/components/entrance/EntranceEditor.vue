<template>
  <Page backgroundColor="black">
    <Navbar/>
    <GridLayout columns="*" rows="86,*,70">
      <StackLayout orientation="vertical" class="list-top-header">
        <GridLayout rows="80" columns="50,*" margin="0 10">
          <Image col="0" :src="actionImage" width="48" verticalAlignment="center"/>
          <Label col="1" textWrap="true" margin="5" verticalAlignment="center">
            <FormattedString>
              <Span v-for="t in logicText" :text="t.text" :color="t.color"/>
            </FormattedString>
          </Label>
        </GridLayout>
      </StackLayout>
      <ScrollView row="1">
        <StackLayout orientation="vertical">
          <GridLayout v-for="loc in availableLinks" columns="68,*" :rows="loc.isLink? '68':'48'" v-bind:key="loc.id"
                      @tap="loc.isLink ? doLink(loc.id) : doDrill(loc.id)" class="btn padded" :class="loc.klass" margin="2 0" padding="2">
            <Image :src="(action === 'enterLink' && loc.intImg) ? loc.intImg : loc.extImg"
                   :visibility="loc.isLink ? 'visible':'collapsed'"
                   col="0" height="64" horizontalAlignment="center" verticalAlignment="center"/>
            <Label :col="loc.isLink? '1' : '0'" :colSpan="loc.isLink ? '1':'2'" :text="loc.name"
                   :horizontalAlignment="loc.isLink ? 'left' : 'center'" verticalAlignment="center" textWrap="true"
                   :marginLeft="loc.isLink ? '10':'0'" :fontSize="loc.name.length>28? '18':'20'"/>
          </GridLayout>
        </StackLayout>
      </ScrollView>
      <GridLayout row="2" columns="*,5,*" class="list-top-header" margin="0 10 5 10">
        <Button :visibility="this.path.length || this.showAlreadyLinked ? 'visible':'collapsed'" class="btn empty" @tap="onBackButton">Back</Button>
        <Button :col="this.path.length || this.showAlreadyLinked ? '2':'0'" :colSpan="this.path.length || this.showAlreadyLinked ? '1':'3'" class="btn danger" @tap="closeEditor">Close</Button>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script type="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import EntranceLanding from '@/components/entrance/EntranceLanding.vue';
  import {EntranceHelper} from '@/utils/EntranceHelper';

  @Component
  export default class EntranceEditor extends Vue {
    @Prop() entranceKey;
    @Prop() action;
    staticEntrance = {};
    currentEntrance = {};
    staticLink = {};
    actionImage = '';
    logicText = [];
    entranceHelper = new EntranceHelper(this.$sol, this.$modelManager);
    availableLinks = [];
    path=[];
    showAlreadyLinked = false;

    mounted() {
      this.staticEntrance = this.entranceHelper.getStaticEntrance(this.entranceKey);
      this.currentEntrance = this.entranceHelper.getEntrance(this.entranceKey);
      this.staticLink = this.entranceHelper.getStaticEntrance(this.currentEntrance[this.action]);
      this.actionImage = (this.staticEntrance.isHole && this.action === 'enterLink') ? '~/img/enter-hole.png'
          : this.action === 'enterLink' ? '~/img/enter-link-alt.png'
              : this.action === 'exitLink' ? '~/img/exit-link-alt.png'
                  : (this.staticEntrance.isHole && this.action === 'enterLinkedTo') ? '~/img/enter-linked-hole.png'
                      : this.action === 'enterLinkedTo' ? '~/img/enter-linked-to-alt.png'
                          : '~/img/exit-linked-to-alt.png';
      this.logicText = this.entranceHelper.getLogicText(this.staticEntrance, this.staticLink, this.action);
      this.availableLinks = this.entranceHelper.getAvailableLinks(this.staticEntrance, this.entranceHelper.getReverseAction(this.action));
    }
    onBackButton() {
      if(this.showAlreadyLinked) {
        this.showAlreadyLinked = false;
      } else if(this.path.length){
        this.path.pop();
      }
      this.availableLinks = this.entranceHelper.getAvailableLinks(this.staticEntrance, this.entranceHelper.getReverseAction(this.action), this.path, false);
    }
    doLink(id){
      this.currentEntrance[this.action] = this.entranceHelper.createLinkR(this.currentEntrance.id, id, this.action);
      this.$modelManager.saveEntrances();
      this.closeEditor();
    }
    doDrill(id) {
      if(id === 'alreadyLinked') {
        this.showAlreadyLinked = true;
        this.availableLinks = this.entranceHelper.getAvailableLinks(this.staticEntrance, this.entranceHelper.getReverseAction(this.action), this.path, true);
      } else {
        this.showAlreadyLinked = false;
        this.path.push(id);
        this.availableLinks = this.entranceHelper.getAvailableLinks(this.staticEntrance, this.entranceHelper.getReverseAction(this.action), this.path, false);
      }
    }
    closeEditor() {
      this.$navigateTo(EntranceLanding, {props:{entranceKey:this.entranceKey}});
    }

  }
</script>

<style scoped lang="scss">

</style>
