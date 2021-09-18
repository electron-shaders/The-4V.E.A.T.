<template>
    <el-button type="primary">I'm a button</el-button>
    <router-view></router-view>
</template>

<style>
</style>

<script>
import { send } from "./api/app";
export default {
    name: "app",
    async mounted() {
        console.log("store>>>", this.$store.state.app);
        const res = await send();
        console.log("res (from https://yesno.wtf/api) >>>", res.answer);
    },
};
</script>
