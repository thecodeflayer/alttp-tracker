<template>
  <Page backgroundColor="black">
    <Navbar/>
    <Label text="Edit those entrances!"/>
  </Page>
</template>

<script type="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class EntranceEditor extends Vue {
    name = 'EntranceEditor'
  }
</script>

<style scoped lang="scss">

</style>
