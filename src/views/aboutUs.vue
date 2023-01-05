<template>
  <div><h1 style="font-size: 500%;text-align: center;">创作者团队</h1></div>
  <div style="display: flex;margin-left: 28%;"></div>
  <el-button style="margin-left:42%;font-size: 200%;" type="primary" text @click="dialogVisible = true">
    查看详细信息
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="暂无内容"
    width="30%"
    :before-close="handleClose"
  >

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
export default {
setup(){
  const dialogVisible = ref(false)
  return{dialogVisible}
}
}
</script>

<style>

</style>
