<template>
  <div id="app">
    <HeaderUSWDSBanner></HeaderUSWDSBanner>
    <HeaderUSGS></HeaderUSGS>
    <HeaderUSWDSSelections title="Project Name Here"></HeaderUSWDSSelections>
    <Visualization title="Add Title Here"/>
    <FooterUSGS></FooterUSGS>
  </div>
</template>


<script>
  import HeaderUSWDSBanner from './components/HeaderUSWDSBanner'
  import HeaderUSWDSSelections from './components/HeaderUSWDSSelections'
  import HeaderUSGS from './components/HeaderUSGS'
  import Visualization from './components/Visualization'
  import FooterUSGS from './components/FooterUSGS'

  export default {
    name: 'app',
    components: {
      HeaderUSWDSBanner,
      HeaderUSGS,
      HeaderUSWDSSelections,
      Visualization,
      FooterUSGS
    }
  }
</script>


<style lang="scss">
  #app {
    /*put global styles here*/
  }
</style>
