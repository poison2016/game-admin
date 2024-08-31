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
                <el-form-item label="实际到账时间" label-width="120px" prop="sjdz_time">
    <el-input v-model="formData.sjdz_time" clearable placeholder="请输入实际到账时间" />
</el-form-item>
                <el-form-item label="加送比例(%)" label-width="120px" prop="js_bl">
    <el-input v-model="formData.js_bl" clearable placeholder="请输入加送比例" />
</el-form-item>
                <el-form-item label="状态" label-width="120px" prop="status">
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

<script lang="ts" setup name="yyQkjsEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYyQkjsAdd, apiYyQkjsEdit, apiYyQkjsDetail } from '@/api/yy_qkjs'
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
    return mode.value == 'edit' ? '编辑取款加送规则设置' : '新增取款加送规则设置'
})

// 表单数据
const formData = reactive({
    id: '',
    sjdz_time: '',
    js_bl: '',
    status: '',
})


// 表单验证
const formRules = reactive<any>({
    sjdz_time: [{
        required: true,
        message: '请输入实际到账时间',
        trigger: ['blur']
    }],
    js_bl: [{
        required: true,
        message: '请输入加送比例',
        trigger: ['blur']
    }],
    status: [{
        required: true,
        message: '请选择状态 1-正常 2-禁用',
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
    const data = await apiYyQkjsDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiYyQkjsEdit(data) 
        : await apiYyQkjsAdd(data)
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
