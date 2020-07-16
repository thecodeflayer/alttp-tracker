<template>
  <Page backgroundColor="black">
    <Navbar></Navbar>
    <ScrollView orientation="vertical">
      <StackLayout orientation="vertical">
        <GridLayout class="item-grid" columns="*,*,*,*,*,*" rows="40,40,40,40,40">
          <Image v-for="(key, index) in itemKeys" v-bind:key="key" :row="Math.floor(index/6)" :col="index % 6" :src="items[key]" class="item" @tap="clickItem(key)"/>
        </GridLayout>
        <StackLayout orientation="horizontal" class="item-count">
          <Image src="~/img/chest.png" width="20" height="20" verticalAlignment="bottom"/>
          <Label :text="'('+itemCount+'/'+itemMax+')'" verticalAlignment="bottom" style="padding-left:5"/>
        </StackLayout>

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script type="ts">

  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Items extends Vue {

    items = this.getAllImages();
    itemKeys = this.$modelManager.getItemKeys();
    itemCount = 0;
    itemMax = this.$modelManager.getItemMax();

    mounted() {
        this.itemCount = this.$modelManager.getItemCount();
    }
    getImage(key) {
      if (typeof this.$modelManager.getItem(key) === "boolean") {
        if (this.$modelManager.getItem(key)){
          return '~/img/items/'+key+'1.png';
        } else {
          return '~/img/items/'+key+'0.png';
        }
      } else if (typeof this.$modelManager.getItem(key) === "number") {
        return '~/img/items/'+key+this.$modelManager.getItem(key)+'.png';
      } else {
        return '~/img/items/unknown.png';
      }
    }
    clickItem(key) {
      if (typeof this.$modelManager.getItem(key) === "boolean") {
        this.$modelManager.setItem(key, !this.$modelManager.getItem(key));
      } else if (typeof this.$modelManager.getItem(key) === "number") {
        let val = this.$modelManager.getItem(key) + 1;
        if(val > this.$sol.getStaticItems(this.$modelManager.getGameMode())[key]) {
          val = 0;
        }
        this.$modelManager.setItem(key, val);
      }
      this.items[key] = this.getImage(key);
      this.$modelManager.validateLocales();
    }
    getAllImages() {
      const retval = {};
      const keys = this.$modelManager.getItemKeys();
      for(const key of keys) {
        retval[key] = this.getImage(key);
      }
      return retval;
    }
  };
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
    font-size: 14;
    color: white;
    margin: 10;
  }
</style>
