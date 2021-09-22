<template>
  <div class="demo">
    <el-button type="primary" v-if="currentPage==='home'" @click="currentPage='demo'">
        <router-link to="/demo">Go to demo page</router-link>
    </el-button>
    <el-button type="primary" v-else @click="currentPage='home'">
        <router-link to="/">Go to home page</router-link>
    </el-button>
    <p class="log">{{ storeLog }}</p>
    <p class="log">{{ axiosLog }}</p>
    <router-view></router-view>
  </div>
</template>

<style>
.demo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid grey;
  border-width: auto;
  border-radius: 10px;
  padding: 15px;
  vertical-align: middle;
  text-align: center;
}
.log {
  text-align: left;
  color: white;
  padding: 3px;
  padding-left: 4px;
  border-left: 4px solid darkgrey;
  background-color: grey;
}
</style>

<script>
import { send } from "./api/app";
export default {
  name: "app",
  data() {
    return {
      answer: "",
      currentPage: "home",
      storeLog: "store>>> " + this.$store.state.app
    };
  },
  computed:{
      axiosLog(){
          return "res from https://yesno.wtf/api>>> " + this.answer
      }
  },
  async mounted() {
    const res = await send();
    this.answer = res.answer;
  },
};
</script>
