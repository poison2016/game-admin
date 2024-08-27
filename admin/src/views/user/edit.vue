<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="60%"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="编号" prop="sn">
    <el-input v-model="formData.sn" clearable placeholder="请输入编号" />
</el-form-item>
                <el-form-item label="头像" prop="avatar">
    <material-picker v-model="formData.avatar" />
</el-form-item>
                <el-form-item label="真实姓名" prop="real_name">
    <el-input v-model="formData.real_name" clearable placeholder="请输入真实姓名" />
</el-form-item>
                <el-form-item label="用户昵称" prop="nickname">
    <el-input v-model="formData.nickname" clearable placeholder="请输入用户昵称" />
</el-form-item>
                <el-form-item label="用户账号" prop="account">
    <el-input v-model="formData.account" disabled clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item label="用户密码" prop="password">
    <el-input v-model="formData.password" clearable placeholder="请输入用户密码" />
</el-form-item>
                <el-form-item label="用户电话" prop="mobile">
    <el-input v-model="formData.mobile" clearable placeholder="请输入用户电话" />
</el-form-item>
                <el-form-item label="性别" prop="sex">
					 <el-select
					      v-model="formData.sex"
					      placeholder="选择性别"
					      size="large"
					      style="width: 240px"
					    >
					      <el-option
					        v-for="item in options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					      />
					    </el-select>
</el-form-item>
                <el-form-item label="注册渠道" prop="channel">
					<el-select
					     v-model="formData.channel"
					     placeholder="选择注册渠道"
					     size="large"
					     style="width: 240px"
					   >
					     <el-option
					       v-for="item in optionss"
					       :key="item.value"
					       :label="item.label"
					       :value="item.value"
					     />
					   </el-select>
</el-form-item>
                <el-form-item label="是否禁用" prop="is_disable">
					<el-select
					     v-model="formData.is_disable"
					     placeholder="选择是否禁用"
					     size="large"
					     style="width: 240px"
					   >
					     <el-option
					       v-for="item in optionsss"
					       :key="item.value"
					       :label="item.label"
					       :value="item.value"
					     />
					   </el-select>
</el-form-item>
                <el-form-item label="登录IP" prop="login_ip">
    <el-input v-model="formData.login_ip" disabled clearable placeholder="" />
</el-form-item>
                <el-form-item label="登录时间" prop="login_time">
    <el-date-picker 
		disabled
        class="flex-1 !flex"
        v-model="formData.login_time"
        clearable
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="">
    </el-date-picker>
</el-form-item>

                <el-form-item label="是否新用户" prop="is_new_user">
					<el-select
					     v-model="formData.is_new_user"
					     placeholder="选择是否新用户"
					     size="large"
					     style="width: 240px"
					   >
					     <el-option
					       v-for="item in optionsss"
					       :key="item.value"
					       :label="item.label"
					       :value="item.value"
					     />
					   </el-select>
</el-form-item>
                <el-form-item label="用户余额" prop="user_money">
    <el-input v-model="formData.user_money" clearable placeholder="请输入用户余额" />
</el-form-item>
                <el-form-item label="累计充值" prop="total_recharge_amount">
    <el-input v-model="formData.total_recharge_amount" clearable placeholder="请输入累计充值" />
</el-form-item>
                <el-form-item label="锁定余额" prop="frozen_balance">
    <el-input v-model="formData.frozen_balance" clearable placeholder="请输入锁定余额" />
</el-form-item>
                <el-form-item label="VIP等级" prop="level_id">
    <el-input v-model="formData.level_id" clearable placeholder="请输入VIP等级" />
</el-form-item>
                <el-form-item label="登录状态" prop="login_status">
    <el-input v-model="formData.login_status" clearable placeholder="请输入登录状态" />
</el-form-item>
                <el-form-item label="代理" prop="agent_id">
					<el-select v-model="formData.agent_id"  placeholder="请选择代理" style="width: 300px">
					    <el-option v-for="item in customerList" :key="item.id" :label="item.nickname"
					        :value="item.id" />
					</el-select>
</el-form-item>
                <el-form-item label="用户邮箱" prop="email">
    <el-input v-model="formData.email" clearable placeholder="请输入用户邮箱" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserAdd, apiUserEdit, apiUserDetail } from '@/api/users'
import { timeFormat } from '@/utils/util'
import type { PropType } from 'vue'
import { apiUserDetailAll } from '@/api/users'
defineProps({
    dictData: {
        type: Object as PropType<Record<string, any[]>>,
        default: () => ({})
    }
})
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')
const options = [
  {
    value: 1,
    label: '男',
  },
  {
    value: 2,
    label: '女',
  },
 
]


const optionsss = [
  {
    value: 1,
    label: '是',
  },
  {
    value: 0,
    label: '否',
  },
 
]

const optionss = [
  {
    value: 1,
    label: '微信小程序',
  },
  {
    value: 2,
    label: '微信公众号',
  },
  {
    value: 3,
    label: '手机H5',
  },
  {
    value: 4,
    label: '电脑PC',
  },
  {
    value: 5,
    label: '苹果APP',
  },
  {
    value: 6,
    label: '安卓APP',
  },
 
]

// 弹窗标题
const popupTitle = computed(() => {
    return mode.value == 'edit' ? '编辑用户表' : '新增用户表'
})

// 表单数据
const formData = reactive({
    id: '',
    sn: '',
    avatar: '',
    real_name: '',
    nickname: '',
    account: '',
    password: '',
    mobile: '',
    sex: '',
    channel: '',
    is_disable: '',
    login_ip: '',
    login_time: '',
    is_new_user: '',
    user_money: '',
    total_recharge_amount: '',
    frozen_balance: '',
    level_id: '',
    login_status: '',
    agent_id: '',
    email: '',
})

// 客户列表
const customerList = ref([])
const getCustomerList = async () => {
    const res = await apiUserDetailAll({
       
    })
	console.log(res)
    customerList.value = res
}
getCustomerList()


// 表单验证
const formRules = reactive<any>({
    nickname: [{
        required: true,
        message: '请输入用户昵称',
        trigger: ['blur']
    }],
    account: [{
        required: true,
        message: '请输入用户账号',
        trigger: ['blur']
    }],
    channel: [{
        required: true,
        message: '请输入注册渠道',
        trigger: ['blur']
    }],
    is_disable: [{
        required: true,
        message: '请输入是否禁用',
        trigger: ['blur']
    }],
    
   
})


// 获取详情
const setFormData = async (data: Record<any, any>) => {
    for (const key in formData) {
        if (data[key] != null && data[key] != undefined) {
            //@ts-ignore
            formData[key] = data[key]
        }
    }
    
    //@ts-ignore
    formData.login_time = timeFormat(formData.login_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.create_time = timeFormat(formData.create_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.delete_time = timeFormat(formData.delete_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiUserDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserEdit(data) 
        : await apiUserAdd(data)
    popupRef.value?.close()
    emit('success')
}

//打开弹窗
const open = (type = 'add') => {
    mode.value = type
    popupRef.value?.open()
}

// 关闭回调
const handleClose = () => {
    emit('close')
}



defineExpose({
    open,
    setFormData,
    getDetail
})
</script>
