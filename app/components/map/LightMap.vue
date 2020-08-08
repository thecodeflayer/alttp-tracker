<template>
  <Page backgroundColor="black">
    <Navbar ref="navbar"></Navbar>
    <AbsoluteLayout @pan="onPan" @pinch="onPinch" @doubletap="onDoubleTap">
      <AbsoluteLayout ref="mapWrapper" top="0" left="0" :scaleX="pinchHandler.currentScale" :scaleY="pinchHandler.currentScale">
        <Image v-for="(tile, idx) in mapHandler.tiles" v-bind:key="idx" :top="tile.top" :left="tile.left" :width="tile.width" :height="tile.height" :src="tile.src" />
        <Label v-for="dkey in mapHandler.dungeonKeys" v-bind:key="dkey"
               :visibility="mapHandler.showMode === 'entrances' || pinchHandler.pinching ? 'collapsed' : 'visible'"
               @longpress="onLongPress(dkey, 'dungeon')"
               :class="(mapHandler.staticDungeonValues[dkey].maxChests === 0 ? (mapHandler.dungeonValues[dkey].boss) : mapHandler.dungeonValues[dkey].chests === 0) ? 'locale-gray' : mapHandler.dungeons[dkey].klass"
               :width="Math.floor(46 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(46 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(mapHandler.staticDungeons[dkey].x - (23 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(mapHandler.staticDungeons[dkey].y - (23 * (1 / pinchHandler.localeScale)))" />
        <Label v-for="bkey in mapHandler.dungeonKeys" v-bind:key="bkey+'_boss'"
               :visibility="mapHandler.showMode === 'entrances' || pinchHandler.pinching ? 'collapsed' : 'visible'"
               style="border-width: 0"
               @longpress="onLongPress(bkey, 'dungeon')"
               :class="mapHandler.dungeonValues[bkey].boss ? 'locale-gray' : mapHandler.bosses[bkey].klass"
               :width="Math.floor(30 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(30 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(mapHandler.staticDungeons[bkey].x - (15 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(mapHandler.staticDungeons[bkey].y - (15 * (1 / pinchHandler.localeScale)))" />
        <Image v-for="bkey in mapHandler.dungeonKeys" v-bind:key="bkey+'_img'"
               :visibility="mapHandler.showMode === 'entrances' || pinchHandler.pinching ? 'collapsed' : 'visible'"
               :src="'~/img/dungeons/'+bkey+'_boss0.png'"
               @longpress="onLongPress(bkey, 'dungeon')"
               :width="Math.floor(20 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(20 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(mapHandler.staticDungeons[bkey].x - (10 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(mapHandler.staticDungeons[bkey].y - (10 * (1 / pinchHandler.localeScale)))" />
        <Label v-if="mapHandler.centerKey"
               :visibility="mapHandler.showMode === 'locations' && !pinchHandler.pinching ? 'visible': 'collapsed'"
               class="center-key"
               :width="Math.floor(30 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(30 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(mapHandler.staticLocations[mapHandler.centerKey].x - (15 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(mapHandler.staticLocations[mapHandler.centerKey].y - (15 * (1 / pinchHandler.localeScale)))"
               @tap="onClickLocale(mapHandler.centerKey)" @longpress="onLongPress(mapHandler.centerShopKey, 'location')"/>
        <Label v-for="key in mapHandler.keys" v-bind:key="key"
               :visibility="mapHandler.showMode === 'locations' && !pinchHandler.pinching ? 'visible': 'collapsed'"
               :class="mapHandler.locations[key].checked ? 'locale-gray' : mapHandler.locations[key].klass"
               :width="Math.floor(20 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(20 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(mapHandler.staticLocations[key].x - (10 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(mapHandler.staticLocations[key].y - (10 * (1 / pinchHandler.localeScale)))"
               @tap="onClickLocale(key)" @longpress="onLongPress(key, 'location')"/>
        <Label v-if="mapHandler.centerShopKey"
               :visibility="mapHandler.showMode === 'shops' && !pinchHandler.pinching ? 'visible': 'collapsed'"
               class="center-key"
               :width="Math.floor(30 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(30 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(mapHandler.staticShops[mapHandler.centerShopKey].x - (15 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(mapHandler.staticShops[mapHandler.centerShopKey].y - (15 * (1 / pinchHandler.localeScale)))"
               @tap="onClickShop(mapHandler.centerShopKey)" @longpress="onLongPress(mapHandler.centerShopKey, 'shop')"/>
        <Label v-for="key in mapHandler.shopKeys" v-bind:key="key"
               :visibility="mapHandler.showMode === 'shops' && !pinchHandler.pinching ? 'visible': 'collapsed'"
               :class="mapHandler.shops[key].checked ? 'locale-gray' : mapHandler.shops[key].klass"
               :width="Math.floor(20 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(20 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(mapHandler.staticShops[key].x - (10 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(mapHandler.staticShops[key].y - (10 * (1 / pinchHandler.localeScale)))"
               @tap="onClickShop(key)" @longpress="onLongPress(key, 'shop')"/>
        <Label v-if="mapHandler.centerEntranceKey"
               :visibility="mapHandler.showMode === 'entrances' && !pinchHandler.pinching ? 'visible': 'collapsed'"
               class="center-key"
               :width="Math.floor(40 * (1 / pinchHandler.localeScale))"
               :height="Math.floor(40 * (1 / pinchHandler.localeScale))"
               :left="Math.floor(entranceHelper.getStaticEntrance(mapHandler.centerEntranceKey).x - (20 * (1 / pinchHandler.localeScale)))"
               :top="Math.floor(entranceHelper.getStaticEntrance(mapHandler.centerEntranceKey).y - (20 * (1 / pinchHandler.localeScale)))"
               @tap="onClickEntrance(mapHandler.centerEntranceKey)" @longpress="onLongPressEntrance(mapHandler.centerEntranceKey)"/>
        <GridLayout v-for="key in mapHandler.entranceKeys" v-bind:key="key+'ent'"
                    columns="*,1,*" rows="*,1,*" borderWidth="2" borderColor="black" backgroundColor="black"
                    :visibility="mapHandler.showMode === 'entrances' && !pinchHandler.pinching ? 'visible': 'collapsed'"
                    :width="Math.floor(30 * (1 / pinchHandler.localeScale))"
                    :height="Math.floor(30 * (1 / pinchHandler.localeScale))"
                    :left="Math.floor(mapHandler.staticEntrances[key].x - (15 * (1 / pinchHandler.localeScale)))"
                    :top="Math.floor(mapHandler.staticEntrances[key].y - (15 * (1 / pinchHandler.localeScale)))"
                    @tap="onClickEntrance(key)" @longpress="onLongPressEntrance(key)">
          <StackLayout :colSpan="mapHandler.entrances[key].isHoleFM ? '3':'1'"
                       :class="mapHandler.entrances[key].enterLinkedTo ? 'locale-green' : 'locale-red'"
                       row="0" col="0" borderWidth="0">
            <Image src="~/img/tiny-up.png" :height="Math.floor(8 * (1 / pinchHandler.localeScale))" marginTop="2"/>
          </StackLayout>
          <StackLayout :colSpan="mapHandler.entrances[key].isHoleFM ? '3':'1'"
                       :class="mapHandler.entrances[key].enterLink === 'junkCave' ? 'locale-junk'
                       : mapHandler.entrances[key].enterLink === 'darkCave' ? 'locale-dark'
                       : mapHandler.entrances[key].enterLink? 'locale-green'
                       : 'locale-red'"  row="2" col="0" borderWidth="0">
            <Image src="~/img/tiny-up.png" :height="Math.floor(8 * (1 / pinchHandler.localeScale))" marginTop="2"/>
          </StackLayout>
          <StackLayout :visibility="mapHandler.entrances[key].isHoleFM ? 'collapsed':'visible'"
                       :class="mapHandler.entrances[key].exitLink? 'locale-green' : 'locale-red'"  row="0" col="2" borderWidth="0">
            <Image src="~/img/tiny-dn.png" :height="Math.floor(8 * (1 / pinchHandler.localeScale))" marginTop="2"/>
          </StackLayout>
          <StackLayout :visibility="mapHandler.entrances[key].isHoleFM ? 'collapsed':'visible'"
                       :class="mapHandler.entrances[key].exitLinkedTo === 'junkCave' ? 'locale-junk'
                       : mapHandler.entrances[key].exitLinkedTo === 'darkCave' ? 'locale-dark'
                       : mapHandler.entrances[key].exitLinkedTo? 'locale-green' : 'locale-red'"  row="2" col="2" borderWidth="0">
            <Image src="~/img/tiny-dn.png" :height="Math.floor(8 * (1 / pinchHandler.localeScale))" marginTop="2"/>
          </StackLayout>
        </GridLayout>
      </AbsoluteLayout>
      <GridLayout top="10" left="0" columns="40,*" rows="*,*">
        <Image row="0" col="0" height="32" width="32" src="~/img/dungeons/compass1.png" style="padding-left:10" @tap="toggleMode" />
        <ShowModeToggle row="1" col="0" v-model="mapHandler.showMode" v-bind:shops-enabled="gameMode === 'retro'" v-bind:entrances-enabled="entrancesEnabled"/>
        <Label visibility="collapsed" row="0" col="1" width="300" :text="debugInfo" textWrap="true" color="white" backgroundColor="black"/>
      </GridLayout>
    </AbsoluteLayout>

  </Page>
</template>

<script type="ts">
  import {Component, Vue, Ref, Watch} from 'vue-property-decorator';
  import {screen} from 'tns-core-modules/platform';
  import * as app from 'tns-core-modules/application';
  import * as utils from 'tns-core-modules/utils/utils';
  import LightList from '@/components/map/LightList.vue';
  import DarkMap from '@/components/map/DarkMap.vue';
  import LocaleModal from '@/components/map/LocaleModal.vue';
  import ShowModeToggle from '@/components/map/ShowModeToggle.vue';
  import EntranceLanding from '@/components/entrance/EntranceLanding.vue';
  import {EntranceHelper} from '@/utils/EntranceHelper';

  @Component({
    components: {ShowModeToggle}
  })
  export default class LightMap extends Vue {
    @Ref('mapWrapper') mapWrapper;
    @Ref('navbar') navbar;

    debugInfo = 'Debug info here';
    menuHandler = {
      mode: this.$modelManager.map.lightworld.mode
    };
    panHandler = {
      lastX: 0,
      lastY: 0,
      ticks: 0
    };
    pinchHandler = {
      top: 0,
      left: 0,
      lastScale: -1,
      currentScale: 1,
      localeScale: 1,
      pinching: false
    };
    mapHandler = {
      tiles: this.populateTiles(),
      showMode: this.$modelManager.map.lightworld.showMode,
      keys: Object.keys(this.$sol.getStaticMapLW(this.$modelManager.getGameMode())),
      staticLocations: this.$sol.getStaticMapLW(this.$modelManager.getGameMode()),
      locations: this.$modelManager.map.lightworld.locations,
      dungeonKeys: Object.keys(this.$sol.getStaticMapDungeonsLW(this.$modelManager.getGameMode())),
      staticDungeons: this.$sol.getStaticMapDungeonsLW(this.$modelManager.getGameMode()),
      dungeons: this.$modelManager.map.lightworld.dungeons,
      bosses: this.$modelManager.map.lightworld.bosses,
      dungeonValues: this.$modelManager.dungeons,
      staticDungeonValues: this.$sol.getStaticDungeons(this.$modelManager.getGameMode(), this.$modelManager.getItemShuffle()),
      centerKey: undefined,
      staticShops: this.$sol.getStaticMapShopsLW(this.$modelManager.getGameMode()),
      shopKeys: Object.keys(this.$sol.getStaticMapShopsLW(this.$modelManager.getGameMode())),
      shops: this.$modelManager.map.lightworld.shops,
      centerShopKey: undefined,
      staticEntrances: this.$sol.getStaticEntrancesLW(this.$modelManager.getEntranceShuffleMode()),
      entranceKeys: Object.keys(this.$sol.getStaticEntrancesLW(this.$modelManager.getEntranceShuffleMode())),
      entrances: this.$modelManager.entrances,
      centerEntranceKey: undefined
    };
    mapWidth = 1500;
    mapHeight = 1500;
    screen = screen;
    screenWidth = 0;
    screenHeight = 0;
    statusBarHeight = 0;
    topNavHeight = 0;
    bottomNavHeight = 0;
    viewHeight = 0;
    momentumHandler = {
      x: undefined,
      y: undefined,
      ticks: 0,
      prevX: 0,
      prevY: 0,
      timer: undefined
    };
    gameMode = this.$modelManager.getGameMode();
    entrancesEnabled = this.$modelManager.isEntrancesEnabled();
    entranceHelper = new EntranceHelper(this.$sol, this.$modelManager);
    junkLinks = EntranceHelper.junkLinks;

    mounted() {
      this.$modelManager.validateLocales();
      this.screenWidth = this.getMainScreenWidth();
      this.screenHeight = this.getMainScreenHeight();
      this.statusBarHeight = this.getStatusBarHeight();
      this.bottomNavHeight = this.getBottomNavbarHeight();
      this.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x;
      this.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y;
      const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.lightworld.scale;
      this.pinchHandler.top = this.getPinchTop(newScale);
      this.pinchHandler.left = this.getPinchLeft(newScale);
      this.pinchHandler.currentScale = this.$modelManager.map.lightworld.scale;
      this.pinchHandler.localeScale = this.$modelManager.map.lightworld.scale;
      setTimeout(() => {
        this.topNavHeight = this.getViewHeight(this.navbar.nativeView);
        if (this.$modelManager.map.lightworld.centerKey) {
          this.centerOnKey();
        } else if(this.$modelManager.map.lightworld.centerShopKey && this.mapHandler.showMode === 'shops') {
          this.centerOnShopKey();
        } else if(this.$modelManager.map.lightworld.centerEntranceKey && this.mapHandler.showMode === 'entrances'){
          this.centerOnEntranceKey();
        }
        this.debugInfo = this.getDebugInfo();
      }, 300);

    }

    getDebugInfo() {
      return '' +
        //'pinch:' + this.pinchHandler.left + ', ' +this.pinchHandler.top +
        //' screen raw:' + (this.screen.mainScreen.heightPixels - this.$refs.navbar.nativeView.getMeasuredHeight()) +
        //' screen calc:' + (this.screenHeight - this.topNavHeight) +
        //' map raw:'+ this.$refs.mapWrapper.nativeView.getMeasuredHeight() +
        //' scale:'+ (this.pinchHandler.currentScale+'').substr(0,4) +
        //' minscale' + this.getMinScale() +
        //' newy:'+ (newY +'').substr(0,4) +
        ' screen scale: ' + this.screen.mainScreen.scale +
        ' screenWidth: ' + this.screenWidth +
        ' screenHeight: ' + this.screenHeight +
        ' statusBarHeight: ' + this.statusBarHeight +
        ' topNavHeight: ' + this.topNavHeight +
        ' bottomNavHeight: ' + this.bottomNavHeight +
        ' viewHeight: ' + this.viewHeight +
        '';
    }

    getStatusBarHeight() {
      let result = 0;
      if (app.android) {
        const resourceId = (app.android.foregroundActivity || app.android.startActivity).getResources().getIdentifier('status_bar_height', 'dimen', 'android');
        if (resourceId) {
          result = (app.android.foregroundActivity || app.android.startActivity).getResources().getDimensionPixelSize(resourceId);
          result = Math.ceil(utils.layout.toDeviceIndependentPixels(result));
        }
      }
      return result;
    }

    getBottomNavbarHeight() {
      let result = 0;
      if (app.android) {
        const navId = (app.android.foregroundActivity || app.android.startActivity).getResources().getIdentifier('config_showNavigationBar', 'bool', 'android');
        const navShown = navId > 0 && (app.android.foregroundActivity || app.android.startActivity).getResources().getBoolean(navId);
        const resourceId = (app.android.foregroundActivity || app.android.startActivity).getResources().getIdentifier('navigation_bar_height', 'dimen', 'android');
        if (resourceId && navShown) {
          result = (app.android.foregroundActivity || app.android.startActivity).getResources().getDimensionPixelSize(resourceId);
          result = Math.ceil(utils.layout.toDeviceIndependentPixels(result));
        }
      }
      return result;
    }

    populateTiles() {
      const retval = [];
      for (let i = 0; i < 25; i++) {
        const obj = {
          src: '~/img/lightworld/' + this.$modelManager.getGameModeMap() + '/map' + (i + 1) + '.png',
          width: 300,
          height: 300,
          top: Math.floor(i / 5) * 300,
          left: (i % 5) * 300
        };
        retval.push(obj);
      }
      return retval;
    }

    onPan(args, fromMomentum) {
      if (args.state === 1) {
        this.panHandler.ticks = 0;
      }
      if (args.state === 2) {
        if (!fromMomentum) {
          this.panHandler.ticks++;
        }
        let newX = this.mapWrapper.nativeView.left + ((args.deltaX - this.panHandler.lastX));
        let newY = this.mapWrapper.nativeView.top + ((args.deltaY - this.panHandler.lastY));
        this.keepInBounds(newX, newY);
        this.panHandler.lastX = args.deltaX;
        this.panHandler.lastY = args.deltaY;
        //this.debugInfo = this.getDebugInfo();
      } else if (args.state === 3) {
        if (!fromMomentum) {
          this.calcMomentum(args.deltaX, args.deltaY, this.panHandler.ticks);
        }
        this.panHandler.lastX = 0;
        this.panHandler.lastY = 0;
        this.panHandler.ticks = 0;
        this.$modelManager.saveMap();
      }
    }

    calcMomentum(x, y, ticks) {
      if (ticks < 10) {
        if (Math.abs(x) > this.screenWidth * 0.3) {
          this.momentumHandler.x = x < 0 ? 'left' : 'right';
        } else {
          this.momentumHandler.x = 'none';
        }
        if (Math.abs(y) > (this.screenHeight - this.topNavHeight - this.statusBarHeight - this.bottomNavHeight) * 0.2) {
          this.momentumHandler.y = y < 0 ? 'up' : 'down';
        } else {
          this.momentumHandler.y = 'none';
        }
        this.momentumHandler.ticks = 0;
        this.momentumHandler.prevX = 0;
        this.momentumHandler.prevY = 0;

        this.momentumHandler.timer = setTimeout(this.doMomentum, 10);
      }
    }

    doMomentum() {
      const degrade = (30 - this.momentumHandler.ticks) / 30;
      const x = this.momentumHandler.x === 'none' ? 0
        : this.momentumHandler.x === 'left' ? Math.floor((-30 * degrade) + this.momentumHandler.prevX)
          : Math.floor((30 * degrade) + this.momentumHandler.prevX);
      const y = this.momentumHandler.y === 'none' ? 0
        : this.momentumHandler.y === 'up' ? Math.floor((-30 * degrade) + this.momentumHandler.prevY)
          : Math.floor((30 * degrade) + this.momentumHandler.prevY);
      this.onPan({deltaX: x, deltaY: y, state: 2}, true);
      this.momentumHandler.prevX = x;
      this.momentumHandler.prevY = y;
      this.momentumHandler.ticks++;
      if (this.momentumHandler.ticks < 30) {
        this.momentumHandler.timer = setTimeout(this.doMomentum, 10);
      } else {
        this.momentumHandler.ticks = 0;
        this.momentumHandler.prevX = 0;
        this.momentumHandler.prevY = 0;
        this.onPan({deltaX: 0, deltaY: 0, state: 3}, true);
      }
    }

    onPinch(args) {
      if (args.state === 1) {
        this.pinchHandler.pinching = true;
      }
      let lastScale = this.pinchHandler.lastScale === -1 ? this.pinchHandler.currentScale : this.pinchHandler.lastScale;
      let newScale = lastScale * args.scale;
      if (newScale < this.getMinScale()) {
        newScale = this.getMinScale();
      } else if (newScale > 1) {
        newScale = 1;
      }
      this.pinchHandler.currentScale = this.$modelManager.map.lightworld.scale = newScale;
      this.pinchHandler.top = this.getPinchTop(newScale);
      this.pinchHandler.left = this.getPinchLeft(newScale);

      if (args.state === 3) {
        this.pinchHandler.lastScale = newScale;
        this.pinchHandler.localeScale = this.pinchHandler.currentScale;
        this.pinchHandler.pinching = false;
      }
    }

    centerOnKey() {
      const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.lightworld.scale = 1;
      this.pinchHandler.top = this.getPinchTop(newScale);
      this.pinchHandler.left = this.getPinchLeft(newScale);
      const locale = this.mapHandler.staticLocations[this.$modelManager.map.lightworld.centerKey];
      this.mapHandler.centerKey = this.$modelManager.map.lightworld.centerKey;
      this.$modelManager.map.lightworld.centerKey = undefined;
      const halfWidth = Math.floor(this.screenWidth / 2);
      const halfHeight = Math.floor((this.screenHeight - this.topNavHeight - this.statusBarHeight) / 2);
      let newX = Math.floor(-Math.abs(locale.x) + halfWidth);
      let newY = Math.floor(-Math.abs(locale.y) + halfHeight);
      this.keepInBounds(newX, newY);
      this.$modelManager.saveMap();
    }

    centerOnShopKey() {
      const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.lightworld.scale = 1;
      this.pinchHandler.top = this.getPinchTop(newScale);
      this.pinchHandler.left = this.getPinchLeft(newScale);
      const locale = this.mapHandler.staticShops[this.$modelManager.map.lightworld.centerShopKey];
      this.mapHandler.centerShopKey = this.$modelManager.map.lightworld.centerShopKey;
      this.$modelManager.map.lightworld.centerShopKey = undefined;
      const halfWidth = Math.floor(this.screenWidth / 2);
      const halfHeight = Math.floor((this.screenHeight - this.topNavHeight - this.statusBarHeight) / 2);
      let newX = Math.floor(-Math.abs(locale.x) + halfWidth);
      let newY = Math.floor(-Math.abs(locale.y) + halfHeight);
      this.keepInBounds(newX, newY);
      this.$modelManager.saveMap();
    }

    centerOnEntranceKey() {
      const newScale = this.pinchHandler.currentScale = this.pinchHandler.localeScale = this.$modelManager.map.lightworld.scale = 1;
      this.pinchHandler.top = this.getPinchTop(newScale);
      this.pinchHandler.left = this.getPinchLeft(newScale);
      const locale = this.entranceHelper.getStaticEntrance(this.$modelManager.map.lightworld.centerEntranceKey);
      this.mapHandler.centerEntranceKey = this.$modelManager.map.lightworld.centerEntranceKey;
      this.$modelManager.map.lightworld.centerEntranceKey = undefined;
      const halfWidth = Math.floor(this.screenWidth / 2);
      const halfHeight = Math.floor((this.screenHeight - this.topNavHeight - this.statusBarHeight) / 2);
      let newX = Math.floor(-Math.abs(locale.x) + halfWidth);
      let newY = Math.floor(-Math.abs(locale.y) + halfHeight);
      this.keepInBounds(newX, newY);
      this.$modelManager.saveMap();
    }

    keepInBounds(newX, newY) {
      const minX = -Math.abs((this.screenWidth + Math.abs(this.pinchHandler.left)) - this.mapWidth);
      if (newX > this.pinchHandler.left) {
        newX = this.pinchHandler.left;
      } else if (newX < minX) {
        newX = minX;
      }
      const minY = -Math.abs(((this.screenHeight - this.topNavHeight - this.statusBarHeight - this.bottomNavHeight) + Math.abs(this.pinchHandler.top)) - (this.mapHeight));
      if (newY > this.pinchHandler.top) {
        newY = this.pinchHandler.top;
      } else if (newY < minY) {
        newY = minY;
      }
      this.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x = newX;
      this.mapWrapper.nativeView.top = this.$modelManager.map.lightworld.y = newY;
    }

    toggleMode() {
      this.menuHandler.mode = this.$modelManager.map.lightworld.mode = 1;
      this.$modelManager.saveMap();
      this.$navigateTo(LightList);
    }

    getViewWidth(view) {
      return Math.floor(view.getMeasuredWidth() / this.screen.mainScreen.scale);
    }

    getViewHeight(view) {
      return Math.floor(view.getMeasuredHeight() / this.screen.mainScreen.scale);
    }

    getMainScreenWidth() {
      return Math.floor(this.screen.mainScreen.widthPixels / this.screen.mainScreen.scale);
    }

    getMainScreenHeight() {
      return Math.floor(this.screen.mainScreen.heightPixels / this.screen.mainScreen.scale);
    }

    getMinScale() {
      const height = this.screenHeight - this.topNavHeight - this.statusBarHeight - this.bottomNavHeight;
      const useHeight = height > this.screenWidth;
      if (useHeight) {
        return height / (this.mapHeight);
      } else {
        return this.screenWidth / this.mapWidth;
      }
    }

    getPinchLeft(newScale) {
      return -Math.abs(Math.floor((this.mapWidth * 0.5) - ((this.mapWidth * newScale) * 0.5)));
    }

    getPinchTop(newScale) {
      const val = (((this.mapHeight) * 0.5) * newScale);
      return -Math.abs(Math.floor(((this.mapHeight) * 0.5) - val));
    }

    onClickLocale(key) {
      this.mapHandler.locations[key].checked = this.$modelManager.map.lightworld.locations[key].checked = !this.mapHandler.locations[key].checked;
      this.mapHandler.centerKey = undefined;
      this.mapHandler.centerShopKey = undefined;
      this.$modelManager.saveMap();
    }

    onClickShop(key) {
      this.mapHandler.shops[key].checked = this.$modelManager.map.lightworld.shops[key].checked = !this.mapHandler.shops[key].checked;
      this.mapHandler.centerKey = undefined;
      this.mapHandler.centerShopKey = undefined;
      this.$modelManager.saveMap();
    }

    onDoubleTap() {
      this.$modelManager.map.darkworld.scale = this.$modelManager.map.lightworld.scale;
      this.$modelManager.map.darkworld.x = this.$modelManager.map.lightworld.x;
      this.$modelManager.map.darkworld.y = this.$modelManager.map.lightworld.y;
      this.$modelManager.map.darkworld.mode = 0;
      this.$modelManager.map.darkworld.showMode = this.$modelManager.map.lightworld.showMode;
      this.$modelManager.saveMap();
      this.$navigateTo(DarkMap);
    }
    @Watch('mapHandler.showMode')
    updateShowMode() {
      this.$modelManager.map.lightworld.showMode = this.mapHandler.showMode;
      this.$modelManager.saveMap();
    }
    async onLongPress(key, type) {
      await this.$showModal(LocaleModal, {props:{localeKey:key, world:'lightworld', type:type}});
    }
    onClickEntrance(key) {
      this.$navigateTo(EntranceLanding, {props:{entranceKey:key}});
    }
    onLongPressEntrance(key) {
      const toKey = this.$modelManager.entrances[key].enterLink;
      if(toKey && this.junkLinks.indexOf(toKey)<-1){
        const world = this.entranceHelper.isKeyDarkWorld(toKey) ? 'darkworld' : 'lightworld';
        this.$modelManager.map[world].centerEntranceKey = toKey;
        this.$modelManager.map[world].centerShopKey = undefined;
        this.$modelManager.map[world].centerKey = undefined;
        this.$modelManager.map[world].showMode = 'entrances';
        if(world === 'darkworld'){
          this.$navigateTo(DarkMap, {clearHistory:true});
        } else {
          this.centerOnEntranceKey();
        }
      } else {
        this.momentumHandler.ticks = 0;
        this.momentumHandler.timer = setTimeout(this.doShimmy, 10);
      }
    }
    doShimmy(){
      if(this.momentumHandler.ticks < 15) {
        if(this.mapWrapper.nativeView.left < this.$modelManager.map.lightworld.x) {
          this.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x + 3;
        } else {
          this.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x - 3;
        }
        this.momentumHandler.ticks = this.momentumHandler.ticks +1;
        this.momentumHandler.timer = setTimeout(this.doShimmy, 10);
      } else {
        this.momentumHandler.ticks = 0;
        this.mapWrapper.nativeView.left = this.$modelManager.map.lightworld.x;
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
