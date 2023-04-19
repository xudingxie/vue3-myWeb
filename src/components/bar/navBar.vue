<template>
    <el-header style="width: 100%;  font-size: 20px;border: 1px ;">
      <el-icon style=" margin-top: 10px" @click="changeCollapse()">
            <Expand />
          </el-icon>
      <div >
        <el-dropdown>
          <el-icon style="margin-right: 80px; margin-top: 10px"
          ><setting
          /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </div>
    </el-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Expand,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const emits = defineEmits(['changeCollapse'])
//用于控制左侧功能栏的缩放
const isCollapse = ref(false)
function changeCollapse() {
  console.log("change:"+isCollapse.value);
  
  isCollapse.value = !isCollapse.value
  emits("changeCollapse",isCollapse.value)
  console.log("change2:"+isCollapse.value);
}



const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
</style>