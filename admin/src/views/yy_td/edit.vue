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
                <el-form-item label="取款方式类型" prop="qkfs_id">
					<el-select v-model="formData.qkfs_id" placeholder="请选择取款方式类型">
					  <el-option
					      v-for="item in class_list"
					      :key="item.id"
					      :label="item.name"
					      :value="item.id"
					  />
					</el-select>
</el-form-item>
                <el-form-item label="通道名称" prop="td_name">
    <el-input v-model="formData.td_name" clearable placeholder="请输入通道名称" />
</el-form-item>
                <el-form-item label="通道编码" prop="td_code">
    <el-input v-model="formData.td_code" clearable placeholder="请输入通道编码" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="yyTdEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYyTdAdd, apiYyTdEdit, apiYyTdDetail } from '@/api/yy_td'
import { timeFormat } from '@/utils/util'
import { apiYyQkfsLists } from '@/api/yy_qkfs'
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
    return mode.value == 'edit' ? '编辑取款方式通道配置' : '新增取款方式通道配置'
})

// 表单数据
const formData = reactive({
    id: '',
    qkfs_id: '',
    td_name: '',
    td_code: '',
})

const class_list = ref([] as any[])// 获取仓库列表async function getClassList() {  const res = await apiYyQkfsLists({page_no: 1, page_size: 200})
    class_list.value = res.lists}
getClassList()


// 表单验证
const formRules = reactive<any>({
    qkfs_id: [{
        required: true,
        message: '请输入取款方式类型',
        trigger: ['blur']
    }],
    td_name: [{
        required: true,
        message: '请输入通道名称',
        trigger: ['blur']
    }],
    td_code: [{
        required: true,
        message: '请输入通道编码',
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
    const data = await apiYyTdDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiYyTdEdit(data) 
        : await apiYyTdAdd(data)
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
