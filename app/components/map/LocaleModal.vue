<template>
  <GridLayout :rows="((type==='location' || type==='shop' || (type === 'dungeon' && localeKey === 'gt')) ? '80'
    : '50')+',*,80'" columns="*" class="modal-dialog" style="padding:0">
    <!-- HEADER -->
    <StackLayout orientation="vertical" class="modal-header" :class="{'empty': !requiredArr.length && !requiredBossArr.length}">
      <Label class="list-title" :text="title" textAlignment="center" marginBottom="5" fontSize="24"/>
      <StackLayout :visibility="type==='dungeon' && localeKey === 'gt' ? 'visible':'collapsed'" orientation="horizontal"  horizontalAlignment="center">
        <Image v-for="c in gtReq" :src="'~/img/'+c+'.png'" width="16"/>
      </StackLayout>
      <StackLayout :visibility="type === 'location' ? 'visible' : 'collapsed'" orientation="horizontal" horizontalAlignment="center">
        <Image src="~/img/chest.png" width="20"/>
        <Label :text="' x'+itemCount"/>
      </StackLayout>
      <Label :visibility="type==='shop' ? 'visible' : 'collapsed'" :text="takeAny ? 'Take Any Cave':'Shop'" horizontalAlignment="center"/>
    </StackLayout>
    <!-- BODY -->
    <ScrollView row="1" class="scrollbox" :class="{'empty': !requiredArr.length && !requiredBossArr.length}">
      <StackLayout orientation="vertical" marginBottom="5">
        <Label :visibility="requiredArr.length  ? 'visible' : 'collapsed'" text="Required Items:" marginTop="4" marginLeft="10"/>
        <StackLayout v-for="(req, idx) of requiredArr" v-bind:key="idx" orientation="horizontal" marginLeft="10">
          <Image :visibility="idx > 0  ? 'visible' : 'collapsed'" src="~/img/or.png" width="18"/>
          <Image v-for="img of req" v-bind:key="img" :src="'~/img/'+(img.replace('~',''))+'.png'" width="18" height="18" margin="2"/>
        </StackLayout>
        <Label :visibility="type === 'dungeon'  ? 'visible' : 'collapsed'" class="list-title" :text="boss" textAlignment="center" marginBottom="5" fontSize="24"/>
        <Label :visibility="type === 'dungeon' && requiredBossArr.length ? 'visible':'collapsed'" text="Boss Required Items:" marginTop="4" marginLeft="10"/>
        <StackLayout v-for="(breq, idx) of requiredBossArr" v-bind:key="idx" orientation="horizontal" marginLeft="10">
          <Image :visibility="idx > 0  ? 'visible' : 'collapsed'" src="~/img/or.png" width="18"/>
          <Image v-for="bimg of breq" v-bind:key="bimg" :src="'~/img/'+(bimg.replace('~',''))+'.png'" width="18" height="18" margin="2"/>
        </StackLayout>
      </StackLayout>
    </ScrollView>
    <!-- FOOTER -->
    <StackLayout orientation="vertical" row="2" class="modal-footer" :class="{'empty': !requiredArr.length && !requiredBossArr.length}">
      <Button class="btn standard padded" @tap="closeModal">Close</Button>
    </StackLayout>
  </GridLayout>
</template>

<script type="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {StandardStaticMapLW} from '@/standard/StandardStaticMapLW';
  import {StandardStaticMapDW} from '@/standard/StandardStaticMapDW';
  import {InvertedStaticMapLW} from '@/inverted/InvertedStaticMapLW';
  import {InvertedStaticMapDW} from '@/inverted/InvertedStaticMapDW';
  import {RetroStaticMapLW} from '@/retro/RetroStaticMapLW';
  import {RetroStaticMapDW} from '@/retro/RetroStaticMapDW';
  import {RequiredItemsHelper} from '@/utils/RequiredItemsHelper';
  import {RetroStaticMapShopsLW} from '@/retro/RetroStaticMapShopsLW';
  import {RetroStaticMapShopsDW} from '@/retro/RetroStaticMapShopsDW';
  import {StandardStaticMapDungeonsLW} from '@/standard/StandardStaticMapDungeonsLW';
  import {StandardStaticMapDungeonsDW} from '@/standard/StandardStaticMapDungeonsDW';
  import {InvertedStaticMapDungeonsLW} from '@/inverted/InvertedStaticMapDungeonsLW';
  import {InvertedStaticMapDungeonsDW} from '@/inverted/InvertedStaticMapDungeonsDW';
  import {RetroStaticMapDungeonsLW} from '@/retro/RetroStaticMapDungeonsLW';
  import {RetroStaticMapDungeonsDW} from '@/retro/RetroStaticMapDungeonsDW';

  @Component
  export default class LocaleModal extends Vue {
    @Prop() localeKey;
    @Prop() world;
    @Prop() type;

    title = '';
    req = [];
    itemCount = 0;
    takeAny = false;
    requiredArr = [];
    boss = '';
    bossReq = [];
    requiredBossArr = [];
    gtReq = [];
    requiredHelper = new RequiredItemsHelper();

    mounted() {
      let loc = undefined;
      if(this.type === 'location') {
        loc = (this.world === 'darkworld') ? this.$sol.getStaticMapDW(this.$modelManager.getGameMode())[this.localeKey]
          : this.$sol.getStaticMapLW(this.$modelManager.getGameMode())[this.localeKey];
        if(loc) {
          this.title = loc.title;
          this.req = loc.req;
          this.itemCount = loc.itemCount;
        }
        const staticObj = this.$modelManager.getGameMode() === this.$sol.STANDARD && this.world === 'lightworld' ? new StandardStaticMapLW()
          : this.$modelManager.getGameMode() === this.$sol.STANDARD && this.world === 'darkworld' ? new StandardStaticMapDW()
            : this.$modelManager.getGameMode() === this.$sol.INVERTED && this.world === 'lightworld' ? new InvertedStaticMapLW()
              : this.$modelManager.getGameMode() === this.$sol.INVERTED && this.world === 'darkworld' ? new InvertedStaticMapDW()
                : this.$modelManager.getGameMode() === this.$sol.RETRO && this.world === 'lightworld' ? new RetroStaticMapLW()
                  : new RetroStaticMapDW();
        this.requiredArr = this.requiredHelper.getRequiredItems(staticObj[this.localeKey].req);
      }
      if(this.type === 'dungeon') {
        loc = (this.world === 'darkworld') ? this.$sol.getStaticMapDungeonsDW(this.$modelManager.getGameMode())[this.localeKey]
          : this.$sol.getStaticMapDungeonsLW(this.$modelManager.getGameMode())[this.localeKey];
        if(loc) {
          this.title = loc.title;
          this.boss = loc.boss;
          this.req = loc.req;
          this.boss = loc.boss;
          this.bossReq = loc.bossReq;
          const staticObj = this.$modelManager.getGameMode() === this.$sol.STANDARD && this.world === 'lightworld' ? new StandardStaticMapDungeonsLW()
            : this.$modelManager.getGameMode() === this.$sol.STANDARD && this.world === 'darkworld' ? new StandardStaticMapDungeonsDW()
              : this.$modelManager.getGameMode() === this.$sol.INVERTED && this.world === 'lightworld' ? new InvertedStaticMapDungeonsLW()
                : this.$modelManager.getGameMode() === this.$sol.INVERTED && this.world === 'darkworld' ? new InvertedStaticMapDungeonsDW()
                  : this.$modelManager.getGameMode() === this.$sol.RETRO && this.world === 'lightworld' ? new RetroStaticMapDungeonsLW()
                    : new RetroStaticMapDungeonsDW();
          this.requiredArr = this.requiredHelper.getRequiredItems(staticObj[this.localeKey].req);
          this.requiredBossArr = this.requiredHelper.getRequiredItems(staticObj[this.localeKey].reqBoss);
          if(this.localeKey === 'gt') {
            const cArr = [];
            for(let i = 0; i < this.$modelManager.settings.openGT; i++) {
              cArr.push('dungeons/crystal3');
            }
            this.gtReq = cArr;
          }
        }
      }
      if(this.type === 'shop') {
        loc = (this.world === 'darkworld') ? this.$sol.getStaticMapShopsDW(this.$modelManager.getGameMode())[this.localeKey]
          : this.$sol.getStaticMapShopsLW(this.$modelManager.getGameMode())[this.localeKey];
        if(loc) {
          this.title = loc.title;
          this.req = loc.req;
          this.itemCount = loc.itemCount;
          this.takeAny = loc.takeAny;
        }
        const staticObj = this.world === 'lightworld' ? new RetroStaticMapShopsLW() : new RetroStaticMapShopsDW();
        this.requiredArr = this.requiredHelper.getRequiredItems(staticObj[this.localeKey].req);
      }
    }

    closeModal() {
      this['$modal'].close('cancel');
    }
  }
</script>

<style scoped lang="scss">
  @import "../../global_vars";
  .scrollbox {
    background-color: #006c00;
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
