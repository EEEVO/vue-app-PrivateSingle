<template>
  <v-ons-page>
    <CustomToolbar  back-label="设置">修改用户名</CustomToolbar>
      <div class="inputWrap">
        <v-ons-input placeholder="请输入用户名" float v-model="name" style="height:34px;"></v-ons-input>
      </div>
      <div class="btn">
        <v-ons-button modifier="large">确认修改</v-ons-button>
      </div>
  </v-ons-page>
</template>

<script>
  import CustomToolbar from '../CustomToolbar.vue';
  export default {
    name:'ChangeUserName',
    components: { CustomToolbar },
    data(){
      return {
        name:'',
      }
    }
  }
</script>

<style>
  .inputWrap{
    background:#fff;
		border-radius: 3px;
		font-size:10px;
    padding: 0 4px;
    margin-top:10px;  
  }
  .btn{
    margin-top:40px;
    padding:0 10px;
  }
</style>