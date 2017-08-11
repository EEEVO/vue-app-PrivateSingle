<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>
    <v-ons-tabbar position="auto"
                  :tabs="tabs"
                  :visible="true"
                  :index.sync="activeIndex"
    >
    <template slot="pages">
        <component v-for="tab in tabs" :is="tab.page" :key="tab.page + ''" :page-stack="pageStack"></component>
    </template>
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import AlarmInfoPage from './AlarmInfoPage.vue';
  import OrderQueryPage from './OrderQueryPage.vue';
  import MePage from './me/MePage.vue';
  export default {
    name: 'home',
    props: ['pageStack'],
    data() {
      return {
        activeIndex: 0,
        tabs: [
          {
            icon: this.md() ? null : 'ion-ios-information',
            label: '报警信息',
            page: AlarmInfoPage,
          },
          {
            icon: this.md() ? null : 'fa-car',
            label: '货单查询',
            page: OrderQueryPage,
            badge: 7
          },
          {
            icon: this.md() ? null : 'ion-android-person',
            label: '我的',
            page: MePage
          }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
  .center{
    background:#90C6FF;
  }
</style>
