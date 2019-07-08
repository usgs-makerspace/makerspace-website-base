<template>
    <div id="visualization">
        <h1>{{ title }}</h1>
        <img alt="USGS Logo" src="../assets/USGS_logo_green.svg">
    </div>
</template>

<script>
    export default {
        name: 'Visualization',
        props: {
            title: {
                type: String,
                default: 'Add your title in App.vue or hide this with CSS'
            }
        }
    }
</script>

<style scoped lang="scss">

</style>