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
                <el-form-item label="名称" prop="name">
    <el-input v-model="formData.name" clearable placeholder="请输入名称" />
</el-form-item>
                <el-form-item label="币种类型" prop="bz_lx">
    <el-select class="flex-1" v-model="formData.bz_lx" clearable placeholder="请选择币种类型">
        <el-option 
            v-for="(item, index) in dictData.bz_types"
            :key="index" 
            :label="item.name"
            :value="parseInt(item.value)"
        />
    </el-select>
</el-form-item>
                <el-form-item label="协议类型" prop="xy_type">
    <el-select class="flex-1" v-model="formData.xy_type" clearable placeholder="请选择协议类型">
        <el-option 
            v-for="(item, index) in dictData.xy_types"
            :key="index" 
            :label="item.name"
            :value="parseInt(item.value)"
        />
    </el-select>
</el-form-item>
                <el-form-item label="地址" prop="address">
    <el-input v-model="formData.address" clearable placeholder="请输入地址" />
</el-form-item>
                <el-form-item label="二维码支付图片" prop="pay_img">
    <material-picker v-model="formData.pay_img" />
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
                <el-form-item label="前台备注" prop="bz">
    <el-input v-model="formData.bz" clearable placeholder="请输入前台备注" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="xnbSkSetEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiXnbSkSetAdd, apiXnbSkSetEdit, apiXnbSkSetDetail } from '@/api/xnb_sk_set'
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
    return mode.value == 'edit' ? '编辑虚拟币收款设置' : '新增虚拟币收款设置'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    bz_lx: '',
    xy_type: '',
    address: '',
    pay_img: '',
    status: '',
    bz: '',
})


// 表单验证
const formRules = reactive<any>({
    bz_lx: [{
        required: true,
        message: '请选择币种类型',
        trigger: ['blur']
    }],
    xy_type: [{
        required: true,
        message: '请选择协议类型',
        trigger: ['blur']
    }],
    address: [{
        required: true,
        message: '请输入地址',
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
    const data = await apiXnbSkSetDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiXnbSkSetEdit(data) 
        : await apiXnbSkSetAdd(data)
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
