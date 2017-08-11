<template>
  <v-ons-page>
    <v-ons-tabbar position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>

import BoundAlarmPage from './BoundAlarmPage.vue';
import UnpackAlarmPage from './UnpackAlarmPage.vue';
export default {
  name: 'AlarmInfo',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          label: '上下限报警',
          page: BoundAlarmPage,
          badge: 3
        },
        {
          label: '开关箱报警',
          page: UnpackAlarmPage,
          badge: 7
        },
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
}
</script>

<style scoped>

</style>
