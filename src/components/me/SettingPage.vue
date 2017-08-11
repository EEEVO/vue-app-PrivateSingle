<template>
  <v-ons-page>
    <CustomToolbar  back-label="我的">设置</CustomToolbar>
    <v-ons-list>
      <v-ons-list-item modifier="chevron" tappable @click="openNewPage(page.UserName)" > 
        <div class="left">
          <div class="imgs"></div>
        </div>
        <div class="center" style="font-size:10px;">
          用户名：{{name}}
        </div>
      </v-ons-list-item>                 
      <v-ons-list-item modifier="chevron" tappable @click="openNewPage(page.password)">修改密码</v-ons-list-item>
      <v-ons-list-item modifier="chevron" tappable @click="openNewPage(page.common)">通用</v-ons-list-item>
      <v-ons-list-item modifier="chevron" tappable @click="openNewPage(page.about)">关于</v-ons-list-item>
    </v-ons-list>
    <v-ons-row class="logOutWrap">
      <v-ons-col width="100%">
        <v-ons-button class="logOut" modifier="large" >退出登录</v-ons-button>
      </v-ons-col>
    </v-ons-row>  
  </v-ons-page>
</template>

<script>
import CustomToolbar from '../CustomToolbar.vue';
import ChangePasswordPage from './ChangePasswordPage.vue';
import CommonPage from './CommonPage.vue';
import AboutPage from './AboutPage.vue';
import ChangeUserNamePage from './ChangeUserNamePage.vue';

  export default {
    name:'SettingPage',
    props: ['pageStack'],
    components: { CustomToolbar },
    data(){
      return {
        name:'tobyzxj',
        page:{
          password:ChangePasswordPage,
          common:CommonPage,
          about:AboutPage,
          UserName:ChangeUserNamePage,
        }
      }
    },
    methods:{
      openNewPage(page){
         var pageToPush = {
           extends:page,
         }
         this.pageStack.push(pageToPush)
      },
    }
  }
</script>

<style> 
  .imgs{
    height:60px;
    width:60px;
    background:red;
    border-radius:50%;
  }
  .logOutWrap{
    margin-top:150px;
  }
  .logOut{
    background:#fff;
    color: #D0011B;
  }
</style>