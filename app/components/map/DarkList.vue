<template>
  <Page>
    <Navbar></Navbar>
    <StackLayout orientation="vertical">
      <GridLayout columns="28,*,*" rows="20" class="list-top-header">
        <Image col="0" row="0" height="16" width="16" src="~/img/map_btn.png" style="padding-left:10" @tap="toggleMode" verticalAlignment="top"/>
        <Label col="1" row="0" style="padding:0 8 0 0" text="Return to Map" @tap="toggleMode"/>
        <Label col="2" row="0" style="padding:0 8" horizontalAlignment="right" @tap="setFilterList"
               :text="'Filter: '+(filterList === 5 ? 'Shops' : filterList === 4 ? 'Locations' : filterList === 3 ? 'Unavailable'
                                  : filterList === 2 ? 'Available'
                                    : filterList === 1 ? 'Checked' : 'All')"/>
      </GridLayout>
      <ScrollView ref="listScrollView" orientation="vertical"
                  :height="(mapHandler.keys.length + shopHandler.keys.length) * 54"
                  :scrollableHeight="(mapHandler.keys.length + shopHandler.keys.length) * 54"
                  @scroll="onScroll">
        <StackLayout orientation="vertical" backgroundColor="black">
          <GridLayout class="locale-wrapper" v-for="key in mapHandler.keys" v-bind:key="key"
                      :visibility="getVisible(key)"
                      columns="36,*,36,36" rows="40"
                      :class="getBackgroundColor(mapHandler.locations[key])">
            <Image col="0"
                   :src="mapHandler.locations[key].checked ? '~/img/checked.png' : '~/img/unchecked.png'"
                   width="36" height="36" @tap="clickCheck(key)" marginRight="5"/>
            <Label col="1" :fontSize="mapHandler.staticLocations[key].title.length < 23 ? 20 : 18"
                   @longpress="onLongPress(key, 'location')"
                   class="list-title" :text="mapHandler.staticLocations[key].title" verticalAlignment="center"/>
            <StackLayout col="2" orientation="vertical">
              <Image src="~/img/chest.png" height="16" width="16"/>
              <Label class="list-title" fontSize="16" textAlignment="center"
                     :text="'x'+mapHandler.staticLocations[key].itemCount"/>
            </StackLayout>
            <Image col="3" src="~/img/dungeons/compass1.png" width="32" height="32"
                   @tap="clickCompass(key)" horizontalAlignment="center"/>
          </GridLayout>

          <GridLayout class="locale-wrapper" v-for="key in shopHandler.keys" v-bind:key="key"
                      :visibility="getVisible(key, true)"
                      columns="36,36,*,36" rows="40"
                      :class="getBackgroundColor(shopHandler.shops[key])">
            <Image col="0"
                   :src="shopHandler.shops[key].checked ? '~/img/checked.png' : '~/img/unchecked.png'"
                   width="32" height="32" @tap="clickCheck(key, true)" marginRight="5"/>
            <Image col="1" height="28" :src="shopHandler.staticLocations[key].takeAny ? '~/img/takeAny.png' : '~/img/shopDW.png'" marginRight="5" />
            <Label col="2" :fontSize="shopHandler.staticLocations[key].title.length < 23 ? 20 : 18"
                   @longpress="onLongPress(key, 'shop')"
                   class="title" :text="shopHandler.staticLocations[key].title" verticalAlignment="center"/>
            <Image col="3" src="~/img/dungeons/compass1.png" width="32" height="32"
                   @tap="clickCompass(key, true)" horizontalAlignment="center"/>
          </GridLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script type="ts">
  import {Component, Vue, Ref} from 'vue-property-decorator';
  import DarkMap from '@/components/map/DarkMap.vue';
  import LocaleModal from '@/components/map/LocaleModal.vue';

  @Component
  export default class DarkList extends Vue {
    @Ref('listScrollView') listScrollView;

    menuHandler = {
      mode: this.$modelManager.map.darkworld.mode
    };
    mapHandler = {
      keys: Object.keys(this.$sol.getStaticMapDW(this.$modelManager.getGameMode())),
      staticLocations: this.$sol.getStaticMapDW(this.$modelManager.getGameMode()),
      locations: this.$modelManager.map.darkworld.locations
    };
    shopHandler = {
      keys: Object.keys(this.$sol.getStaticMapShopsDW(this.$modelManager.getGameMode())),
      staticLocations: this.$sol.getStaticMapShopsDW(this.$modelManager.getGameMode()),
      shops: this.$modelManager.map.darkworld.shops
    }
    gameMode = this.$modelManager.getGameMode();
    scrollTimout = undefined;
    scrollOffsetY = this.$modelManager.map.darkworld.scrollY;
    filterList = this.$modelManager.map.darkworld.filterList;

    mounted() {
      this.$modelManager.validateLocales();
      this.scrollOffsetY = this.$modelManager.map.lightworld.scrollY;
      const sv = this.listScrollView.nativeView;
      setTimeout(() => {
        try {
          sv.scrollToVerticalOffset(this.scrollOffsetY);
        } catch (err) {
          console.log(err);
        }
      }, 300);

    }

    getBackgroundColor(obj) {
      return obj.checked ? 'gray' : obj.klass === 'locale-green' ? 'darkgreen':'darkred';
    }

    toggleMode() {
      this.menuHandler.mode = this.$modelManager.map.darkworld.mode = 0;
      this.$modelManager.saveMap();
      this.$navigateTo(DarkMap);
    }

    clickCompass(key, isShop = false) {
      if(isShop) {
        this.$modelManager.map.darkworld.centerShopKey = key;
        this.$modelManager.map.darkworld.centerKey = undefined;
        this.$modelManager.map.darkworld.showMode = 'shops';
      } else {
        this.$modelManager.map.darkworld.centerShopKey = undefined;
        this.$modelManager.map.darkworld.centerKey = key;
        this.$modelManager.map.darkworld.showMode = 'locations';
      }
      this.menuHandler.mode = this.$modelManager.map.darkworld.mode = this.$modelManager.map.darkworld.mode = 0;
      this.$modelManager.saveMap();
      this.$navigateTo(DarkMap);
    }

    clickCheck(key, isShop = false) {
      if(isShop) {
        this.shopHandler.shops[key].checked = this.$modelManager.map.darkworld.shops[key].checked = !this.shopHandler.shops[key].checked;
      } else {
        this.mapHandler.locations[key].checked = this.$modelManager.map.darkworld.locations[key].checked = !this.mapHandler.locations[key].checked;
      }
      this.$modelManager.saveMap();
    }

    onScroll(args) {
      clearTimeout(this.scrollTimout);
      this.scrollTimout = setTimeout(() => {
        this.scrollOffsetY = this.$modelManager.map.darkworld.scrollY = args.scrollY;
        this.$modelManager.saveMap();
      }, 300);
    }

    getVisible(key, isShop = false) {
      if(isShop) {
        return ((this.filterList === 5)
          || (this.filterList === 3 && !this.shopHandler.shops[key].checked && this.shopHandler.shops[key].klass === 'locale-red')
          || (this.filterList === 2 && !this.shopHandler.shops[key].checked && this.shopHandler.shops[key].klass === 'locale-green')
          || (this.filterList === 1 && this.shopHandler.shops[key].checked)
          || this.filterList === 0) ? 'visible' : 'collapsed';
      }
      return ((this.filterList === 4)
        || (this.filterList === 3 && !this.mapHandler.locations[key].checked && this.mapHandler.locations[key].klass === 'locale-red')
        || (this.filterList === 2 && !this.mapHandler.locations[key].checked && this.mapHandler.locations[key].klass === 'locale-green')
        || (this.filterList === 1 && this.mapHandler.locations[key].checked)
        || this.filterList === 0) ? 'visible' : 'collapsed';
    }

    setFilterList() {
      let val = this.filterList;
      if (val === null || val === undefined) {
        val = 0;
      }
      val = val + 1;
      if (val > (this.gameMode === 'retro' ? 5 : 3)) {
        val = 0;
      }
      this.filterList = this.$modelManager.map.darkworld.filterList = val;
      this.$modelManager.saveMap();
    }
    async onLongPress(key, type) {
      await this.$showModal(LocaleModal, {props:{localeKey:key, world:'darkworld', type:type}});
    }
  }
</script>

<style scoped lang="scss">

</style>
