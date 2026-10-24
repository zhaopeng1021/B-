<script setup lang="ts">
import {ref,reactive} from 'vue'
const  labelPosition=ref('top')
interface forgetData{
  account:string;
  email:string;
  password:string;
  repassword:string;
}
const forgetData :forgetData =reactive({
  account:'',
  email:'',
  password:'',
  repassword:'',
})
const state = reactive({
  forgetPasswordDialog:false,
  changePasswordDialog:false,
})
const open =()=>{
  state.forgetPasswordDialog=true
}
defineExpose({
  open})
const openChangePassword= ()=>{
  state.forgetPasswordDialog=false
  state.changePasswordDialog=true
}
const rules = reactive({
  account: [
    {required: true, message: '请输入你的注册账号', trigger: 'blur'},
  ],
  email: [
    {required: true, message: '请输入你的注册邮箱', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入你的密码', trigger: 'blur'},
  ],
  repassword: [
    {required: true, message: '请再次输入确认密码', trigger: 'blur'},
  ]
})
</script>

<template>
<!--  忘记密码-->
<el-dialog
  v-model="state.forgetPasswordDialog"
  title="忘记密码"
  width="400px"
>
  <el-form  class="login-form"  :label-position="labelPosition" :rules="rules">
    <el-form-item label="请输入注册账号" prop="account">
      <el-input v-model="forgetData.account" placeholder="请输入注册账号"></el-input>
    </el-form-item>
    <el-form-item label="请输入个人邮箱" prop="email">
      <el-input v-model="forgetData.email" placeholder="请输入个人邮箱"></el-input>
    </el-form-item>



  </el-form>
  <template #footer>
    <div class="dialog-footer">
      <el-button @click="state.forgetPasswordDialog = false">取消</el-button>
      <el-button type="primary" @click="openChangePassword">确定
      </el-button>
    </div>
  </template>
</el-dialog>
<!--修改密码-->
  <el-dialog
      v-model="state.changePasswordDialog"
      title="修改密码"
      width="400px"
  >
    <el-form class="login-form"  :label-position="labelPosition" :rules="rules">
      <el-form-item label="请输入新密码" prop="password">
        <el-input v-model="forgetData.password" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="请请再次确认密码" prop="repassword">
        <el-input v-model="forgetData.repassword" placeholder="请再次确认密码"></el-input>
      </el-form-item>



    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="state.changePasswordDialog = false">取消</el-button>
        <el-button type="primary" @click="state.changePasswordDialog">
          下一步
        </el-button>
      </div>
    </template>
    </el-dialog>
</template>

<style lang="scss" scoped>

</style>