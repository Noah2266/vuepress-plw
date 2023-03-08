<template>
  <p>
    ©2022-present 版权所有<a href="#">Noah</a> 
    <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
      <img
        src="/images/icons/icp.png"
        width="20"
        height="20"
        alt="公网备案"
        title="公网备案"
      />蜀ICP备2023003391号
    </a>
  </p>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="stylus" scoped>
p {
  text-align: center;
  font-size: 16px;

  a {
    margin: 0 5px;
    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 2px;
      margin-left: 2px;
    }
  }
}
</style>