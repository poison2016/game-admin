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
                <el-form-item label="支付接口名称" label-width="200px" prop="name">
    <el-input v-model="formData.name" clearable placeholder="请输入支付接口名称" />
</el-form-item>
                <el-form-item label="支付简称" label-width="200px" prop="low_name">
    <el-input v-model="formData.low_name" clearable placeholder="请输入支付简称" />
</el-form-item>
                <el-form-item label="商户ID" label-width="200px" prop="shop_id">
    <el-input v-model="formData.shop_id" clearable placeholder="请输入商户ID" />
</el-form-item>
                <el-form-item label="商户秘钥" label-width="200px" prop="shop_password">
    <el-input v-model="formData.shop_password" clearable placeholder="请输入商户秘钥" />
</el-form-item>
                <el-form-item label="状态" label-width="200px" prop="status">
    <el-radio-group v-model="formData.status" placeholder="请选择状态">
        <el-radio 
            v-for="(item, index) in dictData.status"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
                <el-form-item label="第三方链接" label-width="200px" prop="dsf_url">
    <el-input v-model="formData.dsf_url" clearable placeholder="请输入第三方链接" />
</el-form-item>
                <el-form-item label="存款订单变动通知地址" label-width="200px" prop="ck_order_message_address">
    <el-input v-model="formData.ck_order_message_address" clearable placeholder="请输入存款订单变动通知地址" />
</el-form-item>
                <el-form-item label="取款订单变动通知地址" label-width="200px" prop="qk_order_message_address">
    <el-input v-model="formData.qk_order_message_address" clearable placeholder="请输入取款订单变动通知地址" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="paySetDsfEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiPaySetDsfAdd, apiPaySetDsfEdit, apiPaySetDsfDetail } from '@/api/pay_set_dsf'
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
    return mode.value == 'edit' ? '编辑第三方收款接口' : '新增第三方收款接口'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    low_name: '',
    shop_id: '',
    shop_password: '',
    status: '',
    dsf_url: '',
    ck_order_message_address: '',
    qk_order_message_address: '',
})


// 表单验证
const formRules = reactive<any>({
    name: [{
        required: true,
        message: '请输入支付接口名称',
        trigger: ['blur']
    }],
    low_name: [{
        required: true,
        message: '请输入支付简称',
        trigger: ['blur']
    }],
    shop_id: [{
        required: true,
        message: '请输入商户ID',
        trigger: ['blur']
    }],
    shop_password: [{
        required: true,
        message: '请输入商户秘钥',
        trigger: ['blur']
    }],
    status: [{
        required: true,
        message: '请选择状态',
        trigger: ['blur']
    }],
    dsf_url: [{
        required: true,
        message: '请输入第三方链接',
        trigger: ['blur']
    }],
    ck_order_message_address: [{
        required: true,
        message: '请输入存款订单变动通知地址',
        trigger: ['blur']
    }],
    qk_order_message_address: [{
        required: true,
        message: '请输入取款订单变动通知地址',
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
    const data = await apiPaySetDsfDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiPaySetDsfEdit(data) 
        : await apiPaySetDsfAdd(data)
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
