<template>
  <el-container style="width: 100% ;height:100%">
    <sidebar :isCollapse="isCollapse"></sidebar>
    <el-container style="height: 100%;width: auto">
      <navbar  @changeCollapse="handleValue">
        

        
      </navbar>
      <el-main class="main">
        <router-view #default="{ Component }">
          <transition name="fade" enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import sidebar from "@/components/bar/sideBar.vue"
import navbar from "@/components/bar/navBar.vue"
import { ref } from "vue";
const isCollapse = ref(false)

function handleValue(value:any) {
  console.log("emit:"+value);
  isCollapse.value = value
}
</script>

<style scoped>
.main {
  height: calc(100% - 60px);
  width: auto;
  bottom: 0px;
  padding: 0;
  background-color: #ffd1ff;
}
</style>