<template>
  <ScrollView>
    <StackLayout orientation="vertical" class="modal-dialog">
      <Label class="list-title" :text="title" textAlignment="center" marginBottom="5"/>
      <Button class="btn standard padded" @tap="closeModal">Close</Button>
    </StackLayout>
  </ScrollView>

</template>

<script type="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class LocaleModal extends Vue {
    @Prop() localeKey;
    @Prop() world;
    @Prop() type;

    title = '';
    req = [];
    itemCount = 0;
    takeAny = false;

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
      }
      if(this.type === 'shop') {
        loc = (this.world === 'darkworld') ? this.$sol.getStaticMapShopsDW(this.$modelManager.getGameMode())[this.localeKey]
          : this.$sol.getStaticMapShopsLW(this.$modelManager.getGameMode())[this.localeKey];
        if(loc) {
          this.title = loc.title;
          this.req = loc.req;
          this.takeAny = loc.takeAny;
        }
      }
    }

    closeModal() {
      this['$modal'].close('cancel');
    }
  }
</script>

<style scoped lang="scss">

</style>
