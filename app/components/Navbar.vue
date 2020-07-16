<template>
  <ActionBar backgroundColor="#006400" class="action-bar">
    <StackLayout orientation="horizontal">
      <StackLayout orientation="vertical" @tap="navHome">
        <Image src="~/img/navbar/home.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Home" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout orientation="vertical" @tap="navItems">
        <Image src="~/img/navbar/items.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Items" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout orientation="vertical" @tap="navDungeons">
        <Image src="~/img/navbar/dungeons.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Dungeons" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout orientation="vertical" @tap="navLightMap">
        <Image src="~/img/navbar/lightmap.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Lightworld" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout orientation="vertical" @tap="navDarkMap">
        <Image src="~/img/navbar/darkmap.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Darkworld" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
      <StackLayout orientation="vertical" @tap="navSettings">
        <Image src="~/img/navbar/settings.png" verticalAlignment="bottom" height="32" width="32" />
        <Label text="Settings" verticalAlignment="top" class="btn-label"/>
      </StackLayout>
    </StackLayout>
  </ActionBar>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Home from "@/components/Home.vue";
  import LightMap from "@/components/LightMap.vue";
  import DarkMap from "@/components/DarkMap.vue";
  import Items from "@/components/Items.vue";
  import Settings from "@/components/Settings.vue";
  import Dungeons from "@/components/Dungeons.vue";
  import LightList from "@/components/LightList.vue";
  import DarkList from "@/components/DarkList.vue";

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
  };
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/forest';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .action-bar {
    margin-left: -12;
    margin-top:0;
  }

  .btn-label {
    padding: 0;
    margin:0;
    width:52;
    text-align: center;
    font-family: "Return of Ganon", "ReturnofGanon";
    font-size: 14;
  }
</style>
