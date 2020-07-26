<template>
  <ScrollView>
    <StackLayout orientation="vertical" class="modal-dialog">
      <Label class="list-title" :text="title" textAlignment="center" marginBottom="5" fontSize="24"/>
      <StackLayout v-if="type === 'location'" orientation="horizontal" horizontalAlignment="center">
        <Image src="~/img/chest.png" width="20"/>
        <Label :text="' x'+itemCount"/>
      </StackLayout>
      <Label v-if="requiredArr.length && requiredArr[0].length" text="Required Items:" marginTop="4" marginLeft="10"/>
      <StackLayout v-for="(req, idx) of requiredArr" v-bind:key="idx" orientation="horizontal" marginLeft="10">
        <Image v-if="idx > 0" src="~/img/or.png" width="18"/>
        <Image v-for="img of req" v-bind:key="img" :src="'~/img/'+(img.replace('~',''))+'.png'" width="18" height="18" margin="2"/>
      </StackLayout>
      <Button class="btn standard padded" @tap="closeModal" marginTop="14">Close</Button>
    </StackLayout>
  </ScrollView>

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

</style>
