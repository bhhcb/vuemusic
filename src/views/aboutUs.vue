<template>
  <div><h1 style="font-size: 500%;text-align: center;">创作者团队</h1></div>
  <div style="display: flex;margin-left: 28%;"><h2>21开发王雨竺</h2><h2 style="margin-left:10%">21开发王明月</h2><h2 style="margin-left:10%">21开发汉天雨</h2></div>
  <el-button style="margin-left:42%;font-size: 200%;" type="primary" text @click="dialogVisible = true">
    查看详细信息
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="成员贡献度"
    width="30%"
    :before-close="handleClose"
  >
    <span>21开发王雨竺：40%</span><br>
    <span>21开发王明月：30%</span><br>
    <span>21开发汉天雨：30%</span><br>
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