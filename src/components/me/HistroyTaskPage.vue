<template>
  <v-ons-page>
   <v-ons-toolbar class="bar" v-if="show">
    <div class="left">
      <v-ons-back-button>我的</v-ons-back-button>
    </div>
    <div class="center">历史任务</div>
    <div class="right">
      <v-ons-icon  class="search" icon="ion-search" @click="showSearch"></v-ons-icon>
    </div>
  </v-ons-toolbar>
		<v-ons-list>
			<v-ons-list-item v-if="!show" class="searchWrap" >
				<div class="left">
					<v-ons-icon icon="ion-android-expand" style="font-size:30px"></v-ons-icon>
				</div>
				<div class="center">
					<v-ons-input placeholder="请输入货单号进行搜索" float v-model="order" style="background:#fff;width:100%"></v-ons-input>
				</div>
				<div class="right" @click="closeSearch">
					取消
				</div>
			</v-ons-list-item>
		</v-ons-list>
		<v-ons-card v-for="(item,$index) in alarmInfo" :key="item.key">
				<v-ons-list>
				<v-ons-list-item modifier="chevron">
					<div class="left">
						<v-ons-icon style="font-size:26px" icon="ion-ios-home-outline"></v-ons-icon>
					</div>
					<div class="conter">
						{{item.name}}
					</div>
					<div class="right" style="margin-right:13px;">
						货单号：{{item.order}}
					</div>
				</v-ons-list-item>
			</v-ons-list>
			<div class="alarmInfo">
				<v-ons-row>
					<v-ons-col width="55%">
						<div class="chart"></div>
					</v-ons-col>
					<v-ons-col width="45%">
						<div style="margin-top:20px;">
							<v-ons-button style="width:56px;line-height:20px;font-size:10px;text-align:center">发送</v-ons-button>&nbsp;
					  	<v-ons-button style="width:56px;line-height:20px;font-size:10px;text-align:center;" modifier="outline">打印</v-ons-button>
						</div>
					</v-ons-col>
				</v-ons-row>
			</div>
		</v-ons-card>	
  </v-ons-page>
</template>

<script>
  import CustomToolbar from '../CustomToolbar.vue';
  export default {
    name:'historTaskPage',
    key:'SettingPage',
    components: { CustomToolbar },
    data(){
      return {
				show:true,
				order:'',
        alarmInfo:[{
					key:'1',
					name:'马飘',
					state:'开箱',
					order:'20170254635895445',
					content:'尊敬的用户, 您的货物已开箱!',
					time:'2017/05/06 17:00:00',
				},
				{
					key:'2',
					name:'小明',
					state:'关箱',
					order:'20170254635895445',
					content:'尊敬的用户, 您的货物已关箱!',
					time:'2017/05/06 17:00:00',
				},
				{
					key:'2',
					name:'小明',
					state:'开箱',
					order:'20170254635895445',
					content:'尊敬的用户, 您的货物已开箱!',
					time:'2017/05/06 17:00:00',
				}
				],
      }
    },
		methods:{
			showSearch(){
				console.log('触发')
				this.show = !this.show;
			},
			closeSearch(){
				this.show = !this.show;
			}
		}
  }
</script>
<style>
  .bar{
    background:#90C6FF;
  }
  .search{
    font-size:20px;
    margin-right:20px;
  }
	.searchWrap{
		background:#90C6FF;
	}
	ons-card{
		font-size:10px;
	}
	.chart{
		height:70px;
		background:#FB1E15;
		margin-right:20px;
	}
</style>