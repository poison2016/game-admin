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
                <el-form-item label="游戏平台id" prop="plat_type_id">
    <el-input v-model="formData.plat_type_id" clearable placeholder="请输入游戏平台id" />
</el-form-item>
                <el-form-item label="游戏编号" prop="gram_coe">
    <el-input v-model="formData.gram_coe" clearable placeholder="请输入游戏编号" />
</el-form-item>
                <el-form-item label="支持平台" prop="ingress">
    <el-input v-model="formData.ingress" clearable placeholder="请输入支持平台" />
</el-form-item>
                <el-form-item label="游戏名称" prop="gram_name">
    <el-input v-model="formData.gram_name" clearable placeholder="请输入游戏名称" />
</el-form-item>
                <el-form-item label="" prop="img_url">
    <material-picker v-model="formData.img_url" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="ybGramListEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYbGramListAdd, apiYbGramListEdit, apiYbGramListDetail } from '@/api/yb_gram_list'
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
    return mode.value == 'edit' ? '编辑游戏列表' : '新增游戏列表'
})

// 表单数据
const formData = reactive({
    id: '',
    plat_type_id: '',
    gram_coe: '',
    ingress: '',
    gram_name: '',
    img_url: '',
})


// 表单验证
const formRules = reactive<any>({
    plat_type_id: [{
        required: true,
        message: '请输入游戏平台id',
        trigger: ['blur']
    }],
    gram_coe: [{
        required: true,
        message: '请输入游戏编号',
        trigger: ['blur']
    }],
    ingress: [{
        required: true,
        message: '请输入支持平台',
        trigger: ['blur']
    }],
    gram_name: [{
        required: true,
        message: '请输入游戏名称',
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
    const data = await apiYbGramListDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiYbGramListEdit(data) 
        : await apiYbGramListAdd(data)
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
