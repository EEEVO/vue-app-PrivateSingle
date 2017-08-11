<template>
  <v-ons-page>
    <CustomToolbar  back-label="我的">账户信息</CustomToolbar>
    <v-ons-list>
      <v-ons-list-item modifier="chevron" tappable>
        <div class="left">
          头像
        </div>
        <div class="right">
        </div>
      </v-ons-list-item>
      <v-ons-list-item modifier="chevron" tappable>
        <div class="left">
          用户名
        </div>
        <div class="right">
          {{name}}
        </div>
      </v-ons-list-item> 
      <v-ons-list-item modifier="chevron" tappable>
          <div class="left">
            <v-ons-icon style="font-size:26px" icon="md-smartphone-iphone"></v-ons-icon>
          </div>
          <div class="center">
            <span>联系方式</span>
          </div>
          <div class="right">
            <span>{{telephone}}</span>
          </div>			
      </v-ons-list-item>
      <v-ons-list-item modifier="chevron" tappable>
        <div class="left">
            <v-ons-icon style="font-size:26px" icon="ion-ios-email-outline"></v-ons-icon>
          </div>
          <div class="center">
            <span>邮箱</span>
          </div>
          <div class="right">
            <span>{{email}}</span>
          </div>			
      </v-ons-list-item>
      <v-ons-list-item modifier="chevron" tappable>
        <div class="left">
            <v-ons-icon style="font-size:26px" icon="fa-building-o"></v-ons-icon>
          </div>
          <div class="center">
            <span>公司地址</span>
          </div>
          <div class="right">
            <span>{{address}}</span>
          </div>			
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>


<script>
import CustomToolbar from '../CustomToolbar.vue';
export default {
  name:'CompileInfo',
  components: { CustomToolbar },
  data(){
    return {
        name:'tobyzxj',
        telephone: '1300000000',
        email:'1844602278@qq.com',
        address:'杭州市余杭区文一西路1380金之源大厦',
    }
  }
}
</script>

<style>
  ons-list-item{
    font-size:10px;
  }
  .right{
    margin-right:14px;
  }
</style>