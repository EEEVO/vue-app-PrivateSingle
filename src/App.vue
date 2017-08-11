<template id="app">
  <v-ons-navigator swipeable :page-stack="pageStack">
    <component
      v-for="page in pageStack"
      :is="page"
      :key="page + ''"
      :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
import TabsPage from './components/TabsPage';
import LoginPage from './components/LoginPage';

export default {
  name: 'app',
  data() {
    return {
      pageStack: [TabsPage]
    }
  },
  components: {
    TabsPage,
    LoginPage
  },
  created: function () {
    console.log('this.pageStack')

    localStorage['userid'] = ''
    console.log(localStorage['userid'])
    if (localStorage['userid']) {
      this.pageStack = [TabsPage]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
