// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import App from './App';
import AMap from 'vue-amap';
import axios from 'axios';
import qs from 'qs';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(AMap);

AMap.initAMapApiLoader({
  // 申请的高德key
  key: '827a2d5700c143d4854f0b7985d8afb2',
  // 插件集合
  plugin: ['']
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
