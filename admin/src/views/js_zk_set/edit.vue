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
                <el-form-item label="名称" prop="name">
    <el-input v-model="formData.name" clearable placeholder="请输入名称" />
</el-form-item>
                <el-form-item label="支付方式" prop="pay_type">
    <el-select class="flex-1" v-model="formData.pay_type" clearable placeholder="请选择支付方式">
        <el-option 
            v-for="(item, index) in dictData.pay_type_one"
            :key="index" 
            :label="item.name"
            :value="parseInt(item.value)"
        />
    </el-select>
</el-form-item>
                <el-form-item label="开户行名称" prop="khh_name">
    <el-input v-model="formData.khh_name" clearable placeholder="请输入开户行名称" />
</el-form-item>
                <el-form-item label="银行卡号" prop="card">
    <el-input v-model="formData.card" clearable placeholder="请输入银行卡号" />
</el-form-item>
                <el-form-item label="开户姓名" prop="kh_name">
    <el-input v-model="formData.kh_name" clearable placeholder="请输入开户姓名" />
</el-form-item>
                <el-form-item label="状态" prop="status">
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
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="jsZkSetEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiJsZkSetAdd, apiJsZkSetEdit, apiJsZkSetDetail } from '@/api/js_zk_set'
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
    return mode.value == 'edit' ? '编辑急速转卡账号设置' : '新增急速转卡账号设置'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    pay_type: '',
    khh_name: '',
    card: '',
    kh_name: '',
    status: '',
})


// 表单验证
const formRules = reactive<any>({
    name: [{
        required: true,
        message: '请输入名称',
        trigger: ['blur']
    }],
    pay_type: [{
        required: true,
        message: '请选择支付方式',
        trigger: ['blur']
    }],
    khh_name: [{
        required: true,
        message: '请输入开户行名称',
        trigger: ['blur']
    }],
    card: [{
        required: true,
        message: '请输入银行卡号',
        trigger: ['blur']
    }],
    kh_name: [{
        required: true,
        message: '请输入开户姓名',
        trigger: ['blur']
    }],
    status: [{
        required: true,
        message: '请选择状态',
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
    formData.create_time = timeFormat(formData.create_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiJsZkSetDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiJsZkSetEdit(data) 
        : await apiJsZkSetAdd(data)
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
