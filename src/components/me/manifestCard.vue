<template>
  <div>
    <v-ons-card class="alarmInfo" style="padding:8px;">
      <v-ons-row style="border-bottom:1px solid #E2E2E2;">
        <v-ons-col width="78%">
          <p>收货人：
            <span>{{item.company}}</span>
          </p>
          <p>货单号：
            <span>{{item.order}}</span>
          </p>
          <p>当前温度：
            <span>{{item.t}}℃</span>&nbsp;湿度：
            <span>{{item.h}}%</span>
          </p>
        </v-ons-col>
        <v-ons-col width="22%">
          <div class="alarm">异常</div>
          <div>
            <span style="line-height:30px;" @click="showDetails =!showDetails">查看详情>></span>
          </div>
        </v-ons-col>
      </v-ons-row>
      <div v-if="showDetails">
        <v-ons-row style="border-bottom:1px solid #E2E2E2;">
          <v-ons-col width="100%">
            <p style="margin-left:3px;">最新采集数据</p>
            <table>
              <thead>
                <tr>
                  <th>温度</th>
                  <th>湿度</th>
                  <th>最新采集时间</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{item.t}}℃</td>
                  <td>{{item.h}}%</td>
                  <td>{{item.time}}</td>
                </tr>
              </tbody>
            </table>
          </v-ons-col>
        </v-ons-row>
        <v-ons-row>
          <v-ons-col width="70%">
            <p>查看更多数据，打印或导出报告，请点击【历史数据】</p>
          </v-ons-col>
          <v-ons-col width="30%">
            <v-ons-button style="width:70px;line-height:20px;font-size:10px;text-align:center;margin:10px 0 0 15px;">任务数据</v-ons-button>
          </v-ons-col>
        </v-ons-row>
      </div>
    </v-ons-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false
    }
  },
  props: ['item']
}

</script>
