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
                <el-form-item label="活动名称" prop="activity_name">
    <el-input v-model="formData.activity_name" clearable placeholder="请输入活动名称" />
</el-form-item>
                <el-form-item label="最低申请金额" prop="low_money">
    <el-input v-model="formData.low_money" clearable placeholder="请输入最低申请金额" />
</el-form-item>
                <el-form-item label="红利比例" prop="hl_lb">
    <el-input v-model="formData.hl_lb" clearable placeholder="请输入红利比例" />
</el-form-item>
                <el-form-item label="红利上限" prop="hl_sx">
    <el-input v-model="formData.hl_sx" clearable placeholder="请输入红利上限" />
</el-form-item>
                <el-form-item label="配置类型" prop="size_type">
    <el-select class="flex-1" v-model="formData.size_type" clearable placeholder="请选择配置类型">
        <el-option 
            v-for="(item, index) in dictData.activity_set"
            :key="index" 
            :label="item.name"
            :value="parseInt(item.value)"
        />
    </el-select>
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="activitySetEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiActivitySetAdd, apiActivitySetEdit, apiActivitySetDetail } from '@/api/activity_set'
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
    return mode.value == 'edit' ? '编辑首存活动配置表' : '新增首存活动配置表'
})

// 表单数据
const formData = reactive({
    id: '',
    activity_name: '',
    low_money: '',
    hl_lb: '',
    hl_sx: '',
    size_type: '',
})


// 表单验证
const formRules = reactive<any>({

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
    const data = await apiActivitySetDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiActivitySetEdit(data) 
        : await apiActivitySetAdd(data)
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
