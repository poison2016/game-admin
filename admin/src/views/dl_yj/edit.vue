<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="700px"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="名称" prop="name">
    <el-input v-model="formData.name" clearable placeholder="请输入名称" />
</el-form-item>
                <el-form-item label="最大亏盈" prop="top_ky">
    <el-input v-model="formData.top_ky" clearable placeholder="请输入最大亏盈" />
</el-form-item>
                <el-form-item label="最小亏盈" prop="low_ky">
    <el-input v-model="formData.low_ky" clearable placeholder="请输入最小亏盈" />
</el-form-item>
                <el-form-item label="最低有效会员" prop="low_user">
    <el-input v-model="formData.low_user" clearable placeholder="请输入最低有效会员" />
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
                <el-form-item label="自动反水" prop="zd_fs">
    <el-radio-group v-model="formData.zd_fs" placeholder="请选择自动反水">
        <el-radio 
            v-for="(item, index) in dictData.types"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
                <el-form-item label="真人返水比例" prop="type_zr">
    <el-input v-model="formData.type_zr" clearable placeholder="请输入真人返水比例 0.01 - 1" />
</el-form-item>
                <el-form-item label="电子返水比例" prop="type_dz">
    <el-input v-model="formData.type_dz" clearable placeholder="请输入电子返水比例 0.01 - 1" />
</el-form-item>
                <el-form-item label="彩票返水比例" prop="type_cp">
    <el-input v-model="formData.type_cp" clearable placeholder="请输入彩票返水比例 0.01 - 1" />
</el-form-item>
                <el-form-item label="体育返水比例" prop="type_ty">
    <el-input v-model="formData.type_ty" clearable placeholder="请输入体育返水比例 0.01 - 1" />
</el-form-item>
                <el-form-item label="电竞返水比例" prop="type_dj">
    <el-input v-model="formData.type_dj" clearable placeholder="请输入电竞返水比例 0.01 - 1" />
</el-form-item>
                <el-form-item label="捕鱼返水比例" prop="type_by">
    <el-input v-model="formData.type_by" clearable placeholder="请输入捕鱼返水比例 0.01 - 1" />
</el-form-item>
                <el-form-item label="棋牌返水比例" prop="type_qp">
    <el-input v-model="formData.type_qp" clearable placeholder="请输入棋牌返水比例 0.01 - 1" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="dlYjEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiDlYjAdd, apiDlYjEdit, apiDlYjDetail } from '@/api/dl_yj'
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
    return mode.value == 'edit' ? '编辑代理盈亏佣金策略' : '新增代理盈亏佣金策略'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    top_ky: '',
    low_ky: '',
    low_user: '',
    status: '',
    zd_fs: '',
    type_zr: '',
    type_dz: '',
    type_cp: '',
    type_ty: '',
    type_dj: '',
    type_by: '',
    type_qp: '',
})


// 表单验证
const formRules = reactive<any>({
    low_ky: [{
        required: true,
        message: '请输入最小亏盈',
        trigger: ['blur']
    }],
    status: [{
        required: true,
        message: '请选择状态',
        trigger: ['blur']
    }],
    zd_fs: [{
        required: true,
        message: '请选择自动反水',
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
    const data = await apiDlYjDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiDlYjEdit(data) 
        : await apiDlYjAdd(data)
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
