<template>
    <v-ons-toolbar class="bar">
    <div class="left">
      <v-ons-back-button>{{ backLabel }}</v-ons-back-button>
    </div>
    <div class="center"><slot></slot></div>
  </v-ons-toolbar>
</template>
<script>
export default {
  name:'CustomToolbar',
  props: ['backLabel'],
  data(){
    return {

    }
  }
}
</script>

<style>
  .bar{
    background:#90C6FF;
  }
</style>