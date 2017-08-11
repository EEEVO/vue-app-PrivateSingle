<template>
	<v-ons-page>    
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
						<v-ons-col width="30%" class="status">
							<div class="image">
								<img :src="item.state === '开箱' ? image1:image2"/>
							</div>
							<p>{{item.state}}</p>
						</v-ons-col>
						<v-ons-col width="60%" class="alarmContent">
							<p>{{item.content}}</p>
            	<p>{{item.time}}</p>
						</v-ons-col>
					</v-ons-row>
				</div>
    </v-ons-card>	
	</v-ons-page>
</template>

<script>
	import image1 from '../assets/open.png';
	import image2 from '../assets/close.png';
	export default {
		name:'unpackAlarm',
		data(){
			return {
				image1:image1,
				image2:image2,
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
		}
	}
</script>

<style scoped>
	*{
		font-size:10px;
	}
	p{
		padding:0;
		margin:0;
	}
	.ons-card{
		position:relative;
	}
	.alarmInfo{	
		height:100px;
		background: #FAFAFA;
		border-radius:10px;
	}
	.temperature{
		float:left;
	}
	.status{
		margin:24px 0 0 0;
		text-align:center;
	}
	.alarmContent{
		line-height:30px;
		margin-top:27px;
	}
	img{
		
	}
</style>