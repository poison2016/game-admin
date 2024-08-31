<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="550px"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="用户账号" prop="account">
    <el-input v-model="formData.account" disabled clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item label="订单号" prop="order_sn">
    <el-input v-model="formData.order_sn" disabled clearable placeholder="请输入订单号" />
</el-form-item>
                <el-form-item label="问题描述" prop="message">
    <el-input v-model="formData.message" type="textarea" disabled clearable placeholder="请输入问题描述" />
</el-form-item>
                <el-form-item label="问题解答" prop="wt_jd">
    <el-input v-model="formData.wt_jd" type="textarea" clearable placeholder="请输入问题解答" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="yyYjfkEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYyYjfkAdd, apiYyYjfkEdit, apiYyYjfkDetail } from '@/api/yy_yjfk'
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
    return mode.value == 'edit' ? '编辑意见反馈管理' : '新增意见反馈管理'
})

// 表单数据
const formData = reactive({
    id: '',
    user_id: '',
    order_sn: '',
    message: '',
    wt_jd: '',
	account:'',
})


// 表单验证
const formRules = reactive<any>({
    
    wt_jd: [{
        required: true,
        message: '请输入问题描述',
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
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiYyYjfkDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiYyYjfkEdit(data) 
        : await apiYyYjfkAdd(data)
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
