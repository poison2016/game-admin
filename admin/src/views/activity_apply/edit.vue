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
    <el-input v-model="formData.activity_name" disabled clearable placeholder="请输入活动名称" />
</el-form-item>
                <el-form-item label="申请账号" prop="account">
    <el-input v-model="formData.account" disabled clearable placeholder="请输入申请人账号" />
</el-form-item>
                <el-form-item label="申请彩金" prop="money">
    <el-input v-model="formData.money" disabled clearable placeholder="请输入申请彩金" />
</el-form-item>
                <el-form-item label="审核状态" prop="status">
    <el-select class="flex-1" v-model="formData.status" clearable placeholder="请选择审核状态">
        <el-option 
            v-for="(item, index) in dictData.sh_status"
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

<script lang="ts" setup name="activityApplyEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiActivityApplyAdd, apiActivityApplyEdit, apiActivityApplyDetail } from '@/api/activity_apply'
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
    return mode.value == 'edit' ? '编辑活动申请表' : '新增活动申请表'
})

// 表单数据
const formData = reactive({
    id: '',
    activity_name: '',
    activity_id: '',
    user_id: '',
    account: '',
    money: '',
    status: '',
})


// 表单验证
const formRules = reactive<any>({
    activity_name: [{
        required: true,
        message: '请输入活动名称',
        trigger: ['blur']
    }],
    activity_id: [{
        required: true,
        message: '请输入活动id',
        trigger: ['blur']
    }],
    user_id: [{
        required: true,
        message: '请输入申请人id',
        trigger: ['blur']
    }],
    account: [{
        required: true,
        message: '请输入申请人账号',
        trigger: ['blur']
    }],
    money: [{
        required: true,
        message: '请输入申请彩金',
        trigger: ['blur']
    }],
    status: [{
        required: true,
        message: '请选择审核状态',
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
    const data = await apiActivityApplyDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiActivityApplyEdit(data) 
        : await apiActivityApplyAdd(data)
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
