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
                <el-form-item label="会员等级" prop="vip_id">
					<el-select v-model="formData.vip_id" placeholder="请选择会员等级">
					  <el-option
					      v-for="item in class_list"
					      :key="item.id"
					      :label="item.vip_name"
					      :value="item.id"
					  />
					</el-select>
</el-form-item>
                <el-form-item label="返利比例" prop="fl_bl">
    <el-input v-model="formData.fl_bl" clearable placeholder="请输入返利比例" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="yyVipFdEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYyVipFdAdd, apiYyVipFdEdit, apiYyVipFdDetail } from '@/api/yy_vip_fd'
import { timeFormat } from '@/utils/util'
import { apiUserVipSetLists } from '@/api/user_vip_set'
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
    return mode.value == 'edit' ? '编辑会员亏损返点配置' : '新增会员亏损返点配置'
})

// 表单数据
const formData = reactive({
    id: '',
    vip_id: '',
    fl_bl: '',
})

const class_list = ref([] as any[])// 获取仓库列表async function getClassList() {  const res = await apiUserVipSetLists({page_no: 1, page_size: 200})
    class_list.value = res.lists}
getClassList()


// 表单验证
const formRules = reactive<any>({
    vip_id: [{
        required: true,
        message: '请输入会员等级',
        trigger: ['blur']
    }],
    fl_bl: [{
        required: true,
        message: '请输入返利比例',
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
    const data = await apiYyVipFdDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiYyVipFdEdit(data) 
        : await apiYyVipFdAdd(data)
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
