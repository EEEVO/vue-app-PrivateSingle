<template>
  <v-ons-page>
    <CustomToolbar  back-label="设置">修改密码</CustomToolbar>
    <v-ons-list>
      <v-ons-list-item>
        <div class="left">
          原密码
        </div>
        <div class="center">
           <v-ons-input placeholder="请输入原密码" float v-model="oldPassword"></v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">
          新密码
        </div>
        <div class="center">
           <v-ons-input placeholder="请输入新密码" float v-model="newPassword"></v-ons-input>
        </div>
      </v-ons-list-item>
      <div class="btn">
        <v-ons-button modifier="large">确认修改</v-ons-button>
      </div>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
  import CustomToolbar from '../CustomToolbar.vue';
  export default {
    name:'changePassword',
    components: { CustomToolbar },
    data(){
      return {
        oldPassword:'',
        newPassword:'',
      }
    }
  }
</script>

<style>
  .btn{
    margin-top:40px;
    padding:0 10px;
  }
</style>