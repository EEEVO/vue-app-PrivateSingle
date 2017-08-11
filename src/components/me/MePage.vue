<template>
 <v-ons-page> 
 		<template slot="pages">
        <component :page-stack="pageStack"></component>
    </template>
    <div class="header">
        <div class="portraitWrap">
            <div class="portrait">
            </div>
            <div class="nameWrap">
               <span class="name"> tobyzxj</span>
            </div>
        </div>  
        <div class="setting" @click="openSettingPage">
             <v-ons-icon style="font-size:25px; color:#fff" icon="md-settings"></v-ons-icon>
        </div>
        <div class="compile" @click="openCompilePage">  
            <span>编辑信息</span>
            <v-ons-icon style="font-size:20px;" icon="fa-angle-double-right"></v-ons-icon>
        </div>
    </div>
     <v-ons-list>
				<v-ons-list-item tappable @click="openHistroyTaskPage">
					  <div class="left">
							<v-ons-icon style="color:#FFCE1B; font-size:30px" icon="ion-clipboard"></v-ons-icon>
						</div>
						<div class="center" >
							<span style="margin-left:10px">历史任务</span>
						</div>
						<div class="right">
							 <v-ons-icon style="font-size:20px;" icon="fa-angle-double-right"></v-ons-icon>
						</div>
				</v-ons-list-item>
    </v-ons-list>
    <v-ons-list>
      <v-ons-list-header></v-ons-list-header>
      <v-ons-list-item>
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
      <v-ons-list-item>
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
			<v-ons-list-item>
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
import SettingPage from './SettingPage.vue';
import CompileInfoPage from './CompileInfoPage.vue';
import HistroyTaskPage from './HistroyTaskPage.vue';
export default {
    name:'me',
		props: ['pageStack'],
    data(){
        return {
            telephone: '1300000000',
						email:'1844602278@qq.com',
						address:'杭州市余杭区文一西路1380金之源大厦',
        }
    },
		methods:{
			openSettingPage(){
				var pageToPush = {
					extends:SettingPage,
				}
				this.pageStack.push(pageToPush)
			},
			openCompilePage(){
				var pageToPush = {
					extends:CompileInfoPage,
				}
				this.pageStack.push(pageToPush)
			},
			openHistroyTaskPage(){
				var pageToPush = {
					extends:HistroyTaskPage,
				}
				this.pageStack.push(pageToPush)
			},

		},
}
</script>

<style scoped>
		*{
			font-size:10px;
		}
    .header{
        height:150px;
        background:#55A5FC;
        position:relative;
        
    }
    .portraitWrap{
        height:60px;
        width:150px;
        position:absolute;
        left:27px;
        top:60px;
    }
    .portrait{
       height:60px;
       width:60px;
       border-radius:50%; 
       background:yellow;
       float:left;
    }
    .nameWrap{
        display:table;
        margin-left:15px;
        height:60px;
        width:75px;
        float:left;
        background:#fff;
    }
    .name{
        vertical-align: middle;
		display: table-cell;
		text-align: center;
    }
    .setting{
        position:absolute;
        top:15px;
        right:15px;
    }
    .compile{
        width:100px;
        height:24px;
        background: #82D2E4;
        border-radius: 46px 0 0 46px;
        font-size:14px;
        text-align:center;
        line-height:24px;
        color:#fff;
        position:absolute;
        right:0;
        bottom:30px;
    }
    .historyTask{
        height:56px;
        line-height:56px;
        background:#fff;
        padding-left:18px;
    }
    .telephone{
        line-height:20px;
    }
</style>