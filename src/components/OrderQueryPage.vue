<template>
	<v-ons-page>
		<v-ons-list class="seach">
			<v-ons-list-item>
				<div class="left">
					<v-ons-icon icon="ion-android-expand" style="font-size:30px"></v-ons-icon>
				</div>
				<div class="center input">
					<v-ons-input placeholder="请输入货单号进行搜索" float v-model="orderNumber" style="width:100%;background:#fff;">
					</v-ons-input>
				</div>
				<div class="right">
					<v-ons-button style="width:56px;line-height:20px;font-size:10px;text-align:center">搜索</v-ons-button>
				</div>
			</v-ons-list-item>
		</v-ons-list>
		<div class="wrap">
			<manifestCard :item="item" v-for="(item,index) in infos" :key="index"></manifestCard>
		</div>
		<el-amap vid="amapDemo">
		</el-amap>
	</v-ons-page>
</template>

<script>
import manifestCard from './me/manifestCard';

export default {
	name: 'orderQuery',
	data() {
		return {
			orderNumber: '',
			show: false,
			infos: [{
				company: "张浩然",
				order: "2014856466236366626",
				t: '30',
				h: '75',
				state: "异常",
				time: '2017-06-20 01:43:37',
			}, {
				company: "张浩然",
				order: "2014856466236366626",
				t: '30',
				h: '75',
				state: "异常",
				time: '2017-06-20 01:43:37',
			}, {
				company: "张浩然",
				order: "2014856466236366626",
				t: '30',
				h: '75',
				state: "异常",
				time: '2017-06-20 01:43:37',
			}, {
				company: "张浩然",
				order: "2014856466236366626",
				t: '30',
				h: '75',
				state: "异常",
				time: '2017-06-20 01:43:37',
			}, {
				company: "张浩然",
				order: "2014856466236366626",
				t: '30',
				h: '75',
				state: "异常",
				time: '2017-06-20 01:43:37',
			}, {
				company: "张浩然",
				order: "2014856466236366626",
				t: '30',
				h: '75',
				state: "异常",
				time: '2017-06-20 01:43:37',
			}],
		}
	},
	watch: {
		order(newval, oldVal) {
			if (newval) {
				this.show = true;
			} else {
				this.show = false;
			}
		}
	},
	methods: {
		openDetails() {
			this.showDetails = !this.showDetails;
		}
	},
	components: {
		manifestCard
	}
}
</script>

<style>
.seach {
	opacity: 0.72;
	background: #F5F5F5;
	position: fixed;
	left: 0;
	top: 40px;
	width: 100%;
	z-index: 1;
}

.alarm {
	height: 40px;
	width: 40px;
	border-radius: 50%;
	color: red;
	border: 1px solid red;
	text-align: center;
	line-height: 40px;
	margin-left: 10px;
}

ons-card {
	font-size: 10px;
}

p {
	margin: 0;
	padding: 0;
	line-height: 23px;
}

.wrap {
	position: fixed;
	left: 0;
	top: 80px;
	z-index: 1;
	width: 100%;
}

.alarmInfo {}
</style>