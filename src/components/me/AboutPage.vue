<template>
  <v-ons-page>
    <CustomToolbar  back-label="设置">关于</CustomToolbar>
    <v-ons-list>
      <v-ons-list-item>
        <div class="left">
          版本信息
        </div>
        <div class="right">
          4.2.0
        </div>
      </v-ons-list-item>
      <v-ons-list-item modifier="chevron" tappable>
        <div class="left">
          检查更新
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
  import CustomToolbar from '../CustomToolbar.vue';
  export default {
    name:'about',
    components: { CustomToolbar },
  }
</script>
<style>
  .btn{
    background:#fff;
    color: #D0011B;
  }
</style>