<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-list-header>
        登录
      </v-ons-list-header>
      <v-ons-list-item>
        <div class="center">
          <v-ons-input placeholder="username" float
                       v-model="username"
          >
          </v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <v-ons-input placeholder="password" float
                       v-model="password"
          >
          </v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <v-ons-button modifier="large" style="margin: 6px 0" @click="handleLogin">登录</v-ons-button>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>

  import TabsPage from './TabsPage.vue';
  import request from '../utils/request'

  export default {
    name: 'home',
    data () {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      handleLogin() {
        console.log('login')
//      localStorage['userid'] = 'qp';
//      this.$emit('push-page', TabsPage);
        request({
          url: '/system/time',
          data:'11111'
        }).then((data) => {
            console.log(data)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
