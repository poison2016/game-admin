<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="700px"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="用户账号" prop="account">
    <el-input v-model="formData.account" disabled clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item label="提现金额" prop="money">
    <el-input v-model="formData.money" disabled clearable placeholder="请输入提现金额" />
</el-form-item>
                <el-form-item label="提现状态" prop="type">
					<el-select
					      v-model="formData.type"
					      placeholder="请选择提现状态"
					    >
					      <el-option
					        v-for="item in options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					      />
					    </el-select>
   
</el-form-item>
                <el-form-item label="备注" prop="remarks">
    <el-input class="flex-1" v-model="formData.remarks" type="textarea" rows="4" clearable placeholder="请输入备注" />
</el-form-item>
                <el-form-item label="提现类型" prop="withdraw_type">
    <el-input v-model="formData.w_type" disabled clearable placeholder="请输入卡号/卡号" />
</el-form-item>
                <el-form-item label="卡号/账号" prop="number">
    <el-input v-model="formData.number" disabled clearable placeholder="请输入卡号/卡号" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userWithdrawEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserWithdrawAdd, apiUserWithdrawEdit, apiUserWithdrawDetail } from '@/api/user_withdraw'
import { timeFormat } from '@/utils/util'
import type { PropType } from 'vue'
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


// 弹窗标题
const popupTitle = computed(() => {
    return mode.value == 'edit' ? '编辑用户提现表' : '新增用户提现表'
})

// 表单数据
const formData = reactive({
    id: '',
    user_id: '',
	account:'',
    money: '',
    type: '',
    remarks: '',
    withdraw_type: '',
    number: '',
	w_type:''
})
const options = [
  {
    value: 0,
    label: '审核中',
  },
  {
    value: 1,
    label: '通过',
  },
  {
    value: 2,
    label: '拒绝',
  },
 
]

// 表单验证
const formRules = reactive<any>({
   
    type: [{
        required: true,
        message: '请选择提现状态',
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
    formData.withdraw_time = timeFormat(formData.withdraw_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiUserWithdrawDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserWithdrawEdit(data) 
        : await apiUserWithdrawAdd(data)
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
