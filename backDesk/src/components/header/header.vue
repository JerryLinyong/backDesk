<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px',float:'right' }"
      >
        <a-button type="primary">管理员：ninja</a-button>
        <a-button type="primary" icon="poweroff" style="margin-left:20px">退出</a-button>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: left;
  overflow: hidden;
}
</style>

