<template>
  <Page backgroundColor="black" color="white">
    <Navbar></Navbar>
    <ScrollView>
      <StackLayout orientation="vertical" horizontalAlignment="center" verticalAlignment="top">
        <StackLayout orientation="vertical">
          <Label text="settings:"/>
          <TextField :text="settings" ref="settingsField" class="textfield"/>
          <Button class="btn" @tap="saveString('settings')">Save</Button>
        </StackLayout>
        <StackLayout orientation="vertical">
          <Label text="items:"/>
          <TextField :text="items" ref="itemsField" class="textfield"/>
          <Button class="btn" @tap="saveString('items')">Save</Button>
        </StackLayout>
        <StackLayout orientation="vertical">
          <Label text="dungeons:"/>
          <TextField :text="dungeons" ref="dungeonsField" class="textfield"/>
          <Button class="btn" @tap="saveString('dungeons')">Save</Button>
        </StackLayout>
        <StackLayout orientation="vertical">
          <Label text="map:"/>
          <TextField :text="map" ref="mapField" class="textfield"/>
          <Button class="btn" @tap="saveString('map')">Save</Button>
        </StackLayout>
        <StackLayout orientation="vertical">
          <Label text="games:"/>
          <TextField :text="gameSaves" ref="gameSavesField" class="textfield"/>
          <Button class="btn" @tap="saveString('gameSaves')">Save</Button>
        </StackLayout>
        <Label height="300"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
  import {Component, Ref, Vue} from 'vue-property-decorator';
  import {
    getString,
    setString,
  } from 'tns-core-modules/application-settings';

  @Component
  export default class Home extends Vue {
    @Ref('settingsField') settingsField;
    @Ref('itemsField') itemsField;
    @Ref('dungeonsField') dungeonsField;
    @Ref('mapField') mapField;
    @Ref('gameSavesField') gameSavesField;

    settings = getString('settings');
    items = getString('items');
    dungeons = getString('dungeons');
    map = getString('map');
    gameSaves = getString('gameSaves');

    saveString(id:string) {
      console.log(id+'Field');
      if(this[id+'Field']) {
        const val = this[id+'Field'].nativeView.text;
        console.log(val);
        setString(id, val);
        if(id === 'settings') {
          console.log('loading settings');
          this.$modelManager.validateSettingsFromStorage();
        } else if(id === 'items') {
          console.log('loading items');
          this.$modelManager.validateItemsFromStorage();
        } else if(id === 'dungeons') {
          console.log('loading dungeons');
          this.$modelManager.validateDungeonsFromStorage();
        } else if(id === 'map') {
          console.log('loading map');
          this.$modelManager.validateMapFromStorage();
        } else if(id === 'gameSaves') {
          console.log('loading game saves');
          this.$modelManager.validateGameSavesFromStorage();
        }
      } else {
        console.log(id+'Field', 'not found!');
      }

    }

  }
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/forest';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }
  .welcome {
    color:white;
    font-family: "Return of Ganon", "ReturnofGanon";
    padding: 10;
  }
  .btn {
    font-size: 20;
    background-color: darkgreen;
    padding: 10;
    color: white;
    horizontal-align: center;
    vertical-align: center;
    font-family: "Return of Ganon", "ReturnofGanon";
    width: 90%
  }
  .textfield {
    color: black;
    background-color: #aaa;
  }
</style>
