<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="70%"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="标题" prop="title">
    <el-input v-model="formData.title" clearable placeholder="请输入标题" />
</el-form-item>
                <el-form-item label="公告内容" prop="content">
    <editor class="flex-1" v-model="formData.content" :height="500" />
</el-form-item>
                <el-form-item label="发布人" prop="send_name">
    <el-input v-model="formData.send_name" clearable placeholder="请输入发布人" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="sysContentEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiSysContentAdd, apiSysContentEdit, apiSysContentDetail } from '@/api/sys_content'
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
    return mode.value == 'edit' ? '编辑系统公告' : '新增系统公告'
})

// 表单数据
const formData = reactive({
    id: '',
    title: '',
    content: '',
    send_name: '',
})


// 表单验证
const formRules = reactive<any>({
    title: [{
        required: true,
        message: '请输入标题',
        trigger: ['blur']
    }],
    content: [{
        required: true,
        message: '请输入公告内容',
        trigger: ['blur']
    }],
    send_name: [{
        required: true,
        message: '请输入发布人',
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
    const data = await apiSysContentDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiSysContentEdit(data) 
        : await apiSysContentAdd(data)
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
