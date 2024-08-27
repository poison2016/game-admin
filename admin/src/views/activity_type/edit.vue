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
                <el-form-item label="活动分类名称" prop="name">
    <el-input v-model="formData.name" clearable placeholder="请输入活动分类名称" />
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
                <el-form-item label="排序" prop="order_num">
    <el-input v-model="formData.order_num" clearable placeholder="请输入排序" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="activityTypeEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiActivityTypeAdd, apiActivityTypeEdit, apiActivityTypeDetail } from '@/api/activity_type'
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
    return mode.value == 'edit' ? '编辑活动类型' : '新增活动类型'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    status: '',
    order_num: '',
})


// 表单验证
const formRules = reactive<any>({
    name: [{
        required: true,
        message: '请输入活动分类名称',
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
    
    
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiActivityTypeDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiActivityTypeEdit(data) 
        : await apiActivityTypeAdd(data)
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
