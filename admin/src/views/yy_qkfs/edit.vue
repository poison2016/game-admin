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
                <el-form-item label="取款类型" prop="qk_lx">
    <el-checkbox-group v-model="formData.qk_lx" placeholder="请选择取款类型">
        <el-checkbox 
            v-for="(item, index) in dictData.qk_types"
            :key="index" 
            :label="item.value"
        >
            {{ item.name }}
        </el-checkbox>
    </el-checkbox-group>
</el-form-item>
                <el-form-item label="快捷支付金额 ,号隔开" prop="kj_pay_money">
    <el-input v-model="formData.kj_pay_money" clearable placeholder="请输入快捷支付金额 ,号隔开" />
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
                <el-form-item label="前台备注" prop="qt_bz">
    <el-input class="flex-1" v-model="formData.qt_bz" type="textarea" rows="4" clearable placeholder="请输入前台备注" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="yyQkfsEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYyQkfsAdd, apiYyQkfsEdit, apiYyQkfsDetail } from '@/api/yy_qkfs'
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
    return mode.value == 'edit' ? '编辑取款方式' : '新增取款方式'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    qk_lx: [],
    kj_pay_money: '',
    status: '',
    order_num: '',
    qt_bz: '',
})


// 表单验证
const formRules = reactive<any>({
    name: [{
        required: true,
        message: '请输入名称',
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
    //@ts-ignore
    data.qk_lx && (formData.qk_lx = String(data.qk_lx).split(","))
    
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiYyQkfsDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData, qk_lx: formData.qk_lx.join(",") }
    mode.value == 'edit' 
        ? await apiYyQkfsEdit(data) 
        : await apiYyQkfsAdd(data)
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
