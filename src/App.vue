<template>
  <div id="app">
    <HeaderUSWDSBanner />
    <HeaderUSGS />
    <router-view
      v-if="checkIfUSGSHeaderIsRendered"
      :is-internet-explorer="isInternetExplorer"
    />
    <FooterUSGS />
  </div>
</template>

<script>
    import HeaderUSWDSBanner from './components/HeaderUSWDSBanner'
    import HeaderUSGS from './components/HeaderUSGS'

    export default {
        name: 'App',
        components: {
            HeaderUSWDSBanner,
            HeaderUSGS,
            FooterUSGS: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "usgs-footer"*/ "./components/FooterUSGS") // Have Webpack put the footer in a separate chunk so we can load it conditionally (with a v-if) if we desire
        },
        data() {
            return {
                isInternetExplorer: false
            }
        },
        computed: {
            // Check if the header has rendered before loading other components
            // note - this is an example pattern that can be used to control when any component loads in relation to other components
            checkIfUSGSHeaderIsRendered() {
                return this.$store.state.usgsHeaderRendered;
            }
        },
        created() {
            // We are ending support for Internet Explorer, so let's test to see if the browser used is IE.
            this.$browserDetect.isIE ? this.isInternetExplorer = true : this.isInternetExplorer = false;
        }
    }
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
  }

  @media screen and (min-width: 601px){
    body{
      height: 100vh;
    }
    #app{
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
  /* aline the usa banner with usgs logo */
  .usa-banner__inner {
    margin-left: 10px;
    padding-left: 5px;
  }
</style>
