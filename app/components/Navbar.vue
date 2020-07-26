<template>
  <ActionBar backgroundColor="#006400" class="action-bar">
    <GridLayout columns="*,*,*,*,*,*" rows="54">
      <StackLayout col="0" orientation="vertical" @tap="navHome" verticalAlignment="center">
        <Image src="~/img/navbar/home.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Home" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout col="1" orientation="vertical" @tap="navItems" verticalAlignment="center">
        <Image src="~/img/navbar/items.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Items" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout col="2" orientation="vertical" @tap="navDungeons" verticalAlignment="center">
        <Image src="~/img/navbar/dungeons.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Dungeons" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout col="3" orientation="vertical" @tap="navLightMap" verticalAlignment="center">
        <Image src="~/img/navbar/lightmap.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Lightworld" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout col="4" orientation="vertical" @tap="navDarkMap" verticalAlignment="center">
        <Image src="~/img/navbar/darkmap.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Darkworld" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout col="5" orientation="vertical" @tap="navSettings" verticalAlignment="center">
        <Image src="~/img/navbar/settings.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Settings" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
    </GridLayout>
  </ActionBar>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Home from '@/components/Home.vue';
  import LightMap from '@/components/map/LightMap.vue';
  import DarkMap from '@/components/map/DarkMap.vue';
  import Items from '@/components/Items.vue';
  import Settings from '@/components/Settings.vue';
  import Dungeons from '@/components/Dungeons.vue';
  import LightList from '@/components/map/LightList.vue';
  import DarkList from '@/components/map/DarkList.vue';

  @Component
  export default class Navbar extends Vue {

    navHome() {
      this.$navigateTo(Home);
    }
    navLightMap() {
      if(this.$modelManager.map.lightworld.mode === 1) {
        this.$navigateTo(LightList);
      } else {
        this.$navigateTo(LightMap);
      }
    }
    navDarkMap() {
      if(this.$modelManager.map.darkworld.mode === 1) {
        this.$navigateTo(DarkList);
      } else {
        this.$navigateTo(DarkMap);
      }
    }
    navItems() {
      this.$navigateTo(Items);
    }
    navSettings() {
      this.$navigateTo(Settings);
    }
    navDungeons() {
      this.$navigateTo(Dungeons);
    }
  }
</script>

<style scoped lang="scss">
  @import '../global_vars';
  .action-bar {
    margin-left: -12;
    margin-top:0;
  }

  .btn-label {
    padding: 0;
    margin:3 0 0 0;
    width:52;
    text-align: center;
    font-family: $font-ganon;
    font-size: 14;
  }
</style>
