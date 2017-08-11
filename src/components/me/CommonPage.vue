<template>
  <v-ons-page>
    <CustomToolbar  back-label="设置">通用</CustomToolbar>
    <v-ons-list>
      <v-ons-list-item modifier="chevron" tappable > 
        清除缓存
      </v-ons-list-item>
      <ons-list-item>
        <label class="center" for="switch1">
          摇一摇切换主页显示模式
        </label>
        <div class="right">
          <v-ons-switch input-id="switch1" v-model="switchOn">
          </v-ons-switch>
        </div>
      </ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
  import CustomToolbar from '../CustomToolbar.vue';
  export default {
    name:'commonPage',
    components: { CustomToolbar },
    data(){
      return {
        switchOn:true,
      }
    }
  }
</script>