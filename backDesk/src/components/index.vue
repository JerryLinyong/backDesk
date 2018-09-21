<template>
  <a-layout id="components-layout-demo-responsive" style="height:100vh;width:100vw;overflow:hidden">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    > 
      <img src="../static/icon_eco.png" alt="" style="margin:10px 60px">
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']" style="margin-top:40px">
        <a-menu-item key="1" @click='session="wxManage"'>
          <a-icon type="file" />
          <span class="nav-text">微信管理</span>
        </a-menu-item>
        <a-menu-item key="2" @click='session="shortcut"'>
          <a-icon type="edit" />
          <span class="nav-text">快捷回复</span>
        </a-menu-item>
        <a-menu-item key="3"  @click='session="customerService"'>
          <a-icon type="user" />
          <span class="nav-text">客服管理</span>
        </a-menu-item>
        <a-menu-item key="5"  @click='session="infoTable"'>
          <a-icon type="bar-chart" />
          <span class="nav-text">信息展示</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <div style="height:64px;overflow:hidden">  
        <v-header></v-header>
      </div>
      <a-layout-content>
        <div :style="{ background: '#fff',overflow: 'hidden',height: '100%' }">
          <component :is='session'></component>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import header from './header/header'
  import wxManage from './wxManage/wxManage'
  import shortcut from './shortcut/shortcut'
  import customerService from './customerService/customerService'
  import infobar from './infobar/infobar'
  export default {
    components: {
      'v-header': header,
      'wxManage': wxManage,
      'shortcut': shortcut,
      'customerService': customerService,
      'infoTable': infobar
    },
    data () {
      return {
        session: ''
      }
    },
    watch: {
      session (curVal) {
        this.$store.commit('changeSession',curVal)
      }
    },
    methods: {
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      }
    }
  }
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
