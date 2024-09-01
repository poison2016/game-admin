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
                <el-form-item label="流水号" prop="sn">
    <el-input v-model="formData.sn" clearable placeholder="请输入流水号" />
</el-form-item>
                <el-form-item label="用户账号" prop="user_id">
    <el-input v-model="formData.user_id" clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item label="动作" prop="action">
    <el-select class="flex-1" v-model="formData.action" clearable placeholder="请选择动作">
        <el-option 
            v-for="(item, index) in dictData.action_type"
            :key="index" 
            :label="item.name"
            :value="parseInt(item.value)"
        />
    </el-select>
</el-form-item>
                <el-form-item label="变动数量" prop="change_amount">
    <el-input v-model="formData.change_amount" clearable placeholder="请输入变动数量" />
</el-form-item>
                <el-form-item label="变动后数量" prop="left_amount">
    <el-input v-model="formData.left_amount" clearable placeholder="请输入变动后数量" />
</el-form-item>
                <el-form-item label="备注" prop="remark">
    <el-input v-model="formData.remark" clearable placeholder="请输入备注" />
</el-form-item>
                <el-form-item label="预留扩展字段" prop="extra">
    <el-input v-model="formData.extra" clearable placeholder="请输入预留扩展字段" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userAccountLogEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserAccountLogAdd, apiUserAccountLogEdit, apiUserAccountLogDetail } from '@/api/user_account_log'
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
    return mode.value == 'edit' ? '编辑会员交易流水' : '新增会员交易流水'
})

// 表单数据
const formData = reactive({
    id: '',
    sn: '',
    user_id: '',
    action: '',
    change_amount: '',
    left_amount: '',
    remark: '',
    extra: '',
})


// 表单验证
const formRules = reactive<any>({
    sn: [{
        required: true,
        message: '请输入流水号',
        trigger: ['blur']
    }],
    user_id: [{
        required: true,
        message: '请输入用户账号',
        trigger: ['blur']
    }],
    action: [{
        required: true,
        message: '请选择动作',
        trigger: ['blur']
    }],
    change_amount: [{
        required: true,
        message: '请输入变动数量',
        trigger: ['blur']
    }],
    left_amount: [{
        required: true,
        message: '请输入变动后数量',
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
    const data = await apiUserAccountLogDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserAccountLogEdit(data) 
        : await apiUserAccountLogAdd(data)
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
