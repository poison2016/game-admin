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
               <el-form-item label="活动" prop="activity_id">
               	  <el-select v-model="formData.activity_id" placeholder="请选择活动">
               	    <el-option
               	        v-for="item in class_list"
               	        :key="item.id"
               	        :label="item.name"
               	        :value="item.id"
               	    />
               	  </el-select>
               </el-form-item>
                <el-form-item label="有效投注" prop="yxtz">
    <el-input v-model="formData.yxtz" clearable placeholder="请输入有效投注" />
</el-form-item>
                <el-form-item label="彩金金额" prop="cjje">
    <el-input v-model="formData.cjje" clearable placeholder="请输入彩金金额" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="activityDzSetEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiActivityDzSetAdd, apiActivityDzSetEdit, apiActivityDzSetDetail } from '@/api/activity_dz_set'
import { timeFormat } from '@/utils/util'
import { apiActivityLists } from '@/api/activity'
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
    return mode.value == 'edit' ? '编辑电子闯关活动配置' : '新增电子闯关活动配置'
})

const class_list = ref([] as any[])// 获取仓库列表async function getClassList() {  const res = await apiActivityLists({page_no: 1, page_size: 500})
    class_list.value = res.lists}
getClassList()

// 表单数据
const formData = reactive({
    id: '',
    activity_id: '',
    yxtz: '',
    cjje: '',
})


// 表单验证
const formRules = reactive<any>({
    activity_id: [{
        required: true,
        message: '请输入活动',
        trigger: ['blur']
    }],
    yxtz: [{
        required: true,
        message: '请输入有效投注',
        trigger: ['blur']
    }],
    cjje: [{
        required: true,
        message: '请输入彩金金额',
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
    const data = await apiActivityDzSetDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiActivityDzSetEdit(data) 
        : await apiActivityDzSetAdd(data)
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
