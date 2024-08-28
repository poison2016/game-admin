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
                <el-form-item label="开启日期" prop="open_time">
    <el-date-picker 
        class="flex-1 !flex"
        v-model="formData.open_time"
        clearable
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="选择开启日期">
    </el-date-picker>
</el-form-item>

                <el-form-item label="标题" prop="title">
    <el-input v-model="formData.title" clearable placeholder="请输入标题" />
</el-form-item>
                <el-form-item label="规则说明" prop="content">
    <editor class="flex-1" v-model="formData.content" :height="500" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userVipActivityEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserVipActivityAdd, apiUserVipActivityEdit, apiUserVipActivityDetail } from '@/api/user_vip_activity'
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
    return mode.value == 'edit' ? '编辑会员等级活动配置' : '新增会员等级活动配置'
})

// 表单数据
const formData = reactive({
    id: '',
    open_time: '',
    title: '',
    content: '',
})


// 表单验证
const formRules = reactive<any>({
    open_time: [{
        required: true,
        message: '请选择开启日期',
        trigger: ['blur']
    }],
    title: [{
        required: true,
        message: '请输入标题',
        trigger: ['blur']
    }],
    content: [{
        required: true,
        message: '请输入规则说明',
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
    formData.open_time = timeFormat(formData.open_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.create_time = timeFormat(formData.create_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiUserVipActivityDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserVipActivityEdit(data) 
        : await apiUserVipActivityAdd(data)
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
