<template>
	<v-ons-page>
		<v-ons-card v-for="(item,$index) in alarmInfo" :key="item.key">
			<v-ons-list>
				<v-ons-list-item modifier="chevron">
					<label class="left">
						<v-ons-checkbox :input-id="'checkbox-' + $index" @change="change" v-model="checked" :value="item.order">
						</v-ons-checkbox>
					</label>
					<label class="center" :for="'checkbox-' + $index">
						<span>{{item.name}}</span>
					</label>
					<label :for="'checkbox-' + $index" class="right" style="margin-right:13px;">
						货单号：{{item.order}}
					</label>
				</v-ons-list-item>
			</v-ons-list>
			<div class="alarmInfo">
				<v-ons-row>
					<v-ons-col width="30%" class="circleWrap">
						<div class="circle"></div>
						<span style="margin-top:4px;">当前温度</span>
					</v-ons-col>
					<v-ons-col width="60%" class="alarmContent">
						<p>{{item.content}}</p>
	
						<p>{{item.time}}</p>
					</v-ons-col>
				</v-ons-row>
			</div>
		</v-ons-card>
		<v-ons-list class="all">
			<v-ons-list-item v-if="show">
				<label class="left">
					<v-ons-checkbox :input-id="'all'" v-model="checkedall"></v-ons-checkbox>
				</label>
				<label class="center" :for="'all'">
					<span>全选</span>
				</label>
				<div class="right">
					<v-ons-button style="width:80px;line-height:20px;font-size:10px;text-align:center">标记为已读</v-ons-button>&nbsp;
					<v-ons-button style="width:56px;line-height:20px;font-size:10px;text-align:center;color:red;" modifier="outline">删除</v-ons-button>
				</div>
			</v-ons-list-item>
		</v-ons-list>
	</v-ons-page>
</template>

<script>
export default {
	name: 'boundAlarm',
	data() {
		return {
			show: false,
			checked: [],
			checkedall: false,
			alarmInfo: [{
				key: '1',
				name: '马飘',
				order: '20170254635895444',
				content: '尊敬的用户, 您的货物温度高于上限5℃请及时处理!',
				time: '2017/05/06 17:00:00',
			},
			{
				key: '2',
				name: '小明',
				order: '20170254635895445',
				content: '尊敬的用户, 您的货物温度高于上限5℃请及时处理!',
				time: '2017/05/06 17:00:00',
			},
			{
				key: '2',
				name: '小陈',
				order: '20170254635895446',
				content: '尊敬的用户, 您的货物温度高于上限5℃请及时处理!',
				time: '2017/05/06 17:00:00',
			}, {
				key: '2',
				name: '小陈',
				order: '20170254635895446',
				content: '尊敬的用户, 您的货物温度高于上限5℃请及时处理!',
				time: '2017/05/06 17:00:00',
			}, {
				key: '2',
				name: '小陈',
				order: '20170254635895446',
				content: '尊敬的用户, 您的货物温度高于上限5℃请及时处理!',
				time: '2017/05/06 17:00:00',
			}
			]
		}
	},
	watch: {
		checked: {
			handler(oldValue, newValue) {
				if (this.checked.length >= 1) {
					this.show = true;
				}
				if (this.checked.length === this.alarmInfo.length) {
					this.checkedall = true;
				}
				if (!this.checked.length) {
					this.checkedall = false;
					this.show = false;
				}
			}
		},
		checkedall(newVal, oldValue) {
			if (newVal) {
				this.alarmInfo.map((item) => {
					this.checked.push(item.order)
				})
			} else {
				this.checked = [];
			}
		}
	},
	methods: {
		change(e) {
			console.log('checked', this.checked)
			console.log(e.target.value)
		}
	}
}
</script>

<style scoped>
* {
	font-size: 10px;
}

p {
	padding: 0;
	margin: 0;
}

.ons-card {
	position: relative;
}

.alarmInfo {
	height: 100px;
	background: #FAFAFA;
	border-radius: 10px;
}

.temperature {
	float: left;
}

.circleWrap {
	margin: 24px 0 0 17px;
}

.circle {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #DF1700;
}

.alarmContent {
	line-height: 20px;
	margin-top: 23px;
}

.all {
	position: fixed;
	left: 0;
	bottom: 48px;
	width: 100%;
	z-index: 7;
}
</style>