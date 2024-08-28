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
                <el-form-item label="会员等级" prop="vip_name">
    <el-input v-model="formData.vip_name" clearable placeholder="请输入会员等级" />
</el-form-item>
                <el-form-item label="有效流水" prop="yx_ls">
    <el-input v-model="formData.yx_ls" clearable placeholder="请输入有效流水" />
</el-form-item>
                <el-form-item label="红包金额" prop="hb_money">
    <el-input v-model="formData.hb_money" clearable placeholder="请输入红包金额" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userVipHbEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserVipHbAdd, apiUserVipHbEdit, apiUserVipHbDetail } from '@/api/user_vip_hb'
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
    return mode.value == 'edit' ? '编辑会员等级-每周红包配置' : '新增会员等级-每周红包配置'
})

// 表单数据
const formData = reactive({
    id: '',
    vip_name: '',
    yx_ls: '',
    hb_money: '',
})


// 表单验证
const formRules = reactive<any>({
    vip_name: [{
        required: true,
        message: '请输入会员等级',
        trigger: ['blur']
    }],
    yx_ls: [{
        required: true,
        message: '请输入有效流水',
        trigger: ['blur']
    }],
    hb_money: [{
        required: true,
        message: '请输入红包金额',
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
    const data = await apiUserVipHbDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserVipHbEdit(data) 
        : await apiUserVipHbAdd(data)
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
