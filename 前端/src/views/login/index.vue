<template>
<div class="comomon-layout">
    <el-container>
        <el-header  class="header-wrapped">
            <div class="header-content">
                <h3>后台系统</h3>
                <sapn class="welcomes">欢迎您的登陆</sapn>

            </div>
        </el-header>
            <el-main>
                <div class="login-wrapped">
                    <el-card class="box-card">
                    <el-tabs v-model="activeName" class="demo-tabs" :stretched="true">
                    <el-tab-pane label="登录" name="first">
                        <el-form :model="loginData" class="login-form" >
                            <el-form-item label="账号">
                                <el-input v-model="loginData.account" placeholder="请输入账号"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="loginData.password" type="password" placeholder="请输入密码"></el-input>
                            </el-form-item>

                           <div class="footer-wrapped">
                            <div class="forget-password">
                               <span class="forget-password-button"@click="OpenForget">忘记密码？</span>
                           </div>
                           <div class="footer-button">
                            <el-button type="primary" @click="Login">登录</el-button>
                           </div>
                           <div class="footer-go-register">
                            没有账号？<span class="go-register">去注册</span>
                           </div>
                           </div>
                           
                        </el-form>
                    </el-tab-pane> 
                    <el-tab-pane label="注册" name="second">
                        <el-form :model="registerData" label-width="120px">
                            <el-form-item label="用户名">
                                <el-input v-model="registerData.account" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="registerData.password" type="password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码">
                                <el-input v-model="registerData.repassword" type="password" placeholder="请再次输入密码"></el-input>
                            </el-form-item>
                            <el-form-item class="footer-button">
                                <el-button type="primary" @click="Register">注册</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                    </el-tabs>                                              

                        </el-card>
                            
                    </div>

            </el-main>
            <el-footer class="footer-wrapped">
                <div class="footer-content">
                    <div class="title">
                    <span>Copyright © 2024</span>  |
                     <span>Copyright © 2024</span>  |
                      <span>Copyright © 2024</span>  |
                       <span>Copyright © 2024</span>  |
                       </div>
                </div>

            </el-footer>
    </el-container>
</div>
            <forget ref="forgetP"></forget>
    </template>


<script setup lang="ts">
import { NullUndefined } from 'echarts/types/src/util/types.js';
import { el } from 'element-plus/es/locales.mjs';
import {ref ,reactive} from 'vue'
import {useRouter} from 'vue-router'
import forget from'./components/forget_password.vue'
import  {
  login,register
}  from '@/api/login'
import  {ElMessage} from 'element-plus'
const router = useRouter()
const activeName = ref('first')
interface formData{
    account: number;
    password: string;
    repassword ?: string;
}
//这边导致账号初始账号是1。！！！
const loginData :formData= reactive({
    account: 1,
    password: ''
})
const registerData = reactive({
    account: '',
    password: '',
    repassword: ''
})
const forgetP = ref()
const OpenForget =()=>{
forgetP.value.open()
}
const Login =async ()=>{
  const  res = await login(loginData)
  const{token} = res.data
  if(res.data.message=='登陆成功'){
    ElMessage({
      message:'登陆成功',
      type:"success",
    })
    localStorage.setItem('token',token)
router.push('/home')
  }else{
    ElMessage.error('登陆失败')
  }
}
const Register = async ()=> {
  if(registerData.password==registerData.repassword) {
    const res = await register(registerData)
    if (res.data.message == "注册账号成功") {
      ElMessage({
        message: '注册成功',
        type: "success",
      })
      activeName.value = 'first'
    } else {
      ElMessage.error('注册失败 请检查数据是否正确')
    }
  }else{
    ElMessage.error('注册失败')
  }

}
</script>

    <style lang="scss" scoped>
    .header-wrapped{
        .header-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1200px;
            margin: 0 auto;
            .welcomes{
                font-size: 14px;
                color: #666;
            }
        }
    }
    .el-main{
        background-image: url('/src/assets/images/login-bg.jpg');
        height: 600px;
        --el-main-padding: 0;
        .login-wrapped{
            width: 1200px;
            margin: 0 auto;
            height: 600px;
            .box-card{
                width: 350px;
                height: 375px;
                float: right;
                position: relative;
                top: 14%;
                .login-form{
                    .footer-wrapped{
                        display: flex;
                        flex-direction: column;

                        .forget-password{
                            display: flex;
                            justify-content: flex-end;
                            margin: 10px 0 ;
                            .forget-password-button{
                                color: #409EFF;
                                font-size: 12px;
                                //鼠标移入效果
                                cursor: pointer;
                            }

                        }
                        .footer-button{
                            display: flex;
                            justify-content: center;
                            width: 100%;
                        }
                        .footer-go-register{
                            font-size: 12px;
                            color: #666;
                            display: flex;
                            justify-content: center;
                            margin:12px 0;
                            .go-register{
                                color: #409EFF;
                                cursor: pointer;
                            }
                        }

                            
                    }
                }
            }
        }
    }
            
        


    .footer-wrapped{
        margin-top: 10px;

        .footer-content{
        margin-top: 8px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .title{
            color: #666;
        }
    }
}

.el-form{
    margin-top: 30px;
}
//tag标签
:deep(.el-tabs__item){
color: #666;
font-size: 18px;
}
//输入框高度
:deep(.el-form-item__label){
    height: 40px;
}
//输入框标签字体高度
:deep(.el-form-item__label){
    line-height: 40px;
    height: 40px;
}
:deep(.el-button){
    width: 300px;
    height: 40px;
    font-size: 16px;
}
    </style>


