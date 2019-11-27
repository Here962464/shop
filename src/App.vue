<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabBar">
      <ul class="list-ul">
        <li class="list-ul-li list-ul-li-active">
          <i class="iconfont icon-weibiaoti-"></i>
          <router-link class="list-ul-li-txt" to="/">首页</router-link>
        </li>
        <li class="list-ul-li">
          <i class="iconfont icon-shangpinfenlei"></i>
          <router-link class="list-ul-li-txt" to="/category">分类</router-link>
        </li>
        <li class="list-ul-li">
          <i class="iconfont icon-gouwuche"></i>
          <router-link class="list-ul-li-txt" to="/cart">购物车</router-link>
        </li>
        <li class="list-ul-li">
          <i class="iconfont icon-wode"></i>
          <router-link class="list-ul-li-txt" to="/mine">我的</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .tabBar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #efefef;
  }
  .list-ul{
    display: flex;
    &-li{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;
      padding-top: 10px;
      .iconfont{
        font-size: 1.2rem;
      }
      &-txt{
        font-size: 14px;
        padding: 5px 0;
      }
    }
    &-li-active{
      background: #ccc;
    }
  }
</style>