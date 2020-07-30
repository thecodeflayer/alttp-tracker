<template>
  <Page backgroundColor="black">
    <Navbar/>
    <StackLayout orientation="vertical">
      <Label text="Edit those entrances!" color="white"/>
      <Label :text="key" color="white"/>
    </StackLayout>
  </Page>
</template>

<script type="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component
  export default class EntranceEditor extends Vue {
    @Prop() key;
  }
</script>

<style scoped lang="scss">

</style>
