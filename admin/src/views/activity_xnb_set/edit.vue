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
               
                <el-form-item label="累计取款金额" prop="ljqk">
    <el-input v-model="formData.ljqk" clearable placeholder="请输入累计取款金额" />
</el-form-item>
                <el-form-item label="彩金开始金额" prop="cjks">
    <el-input v-model="formData.cjks" clearable placeholder="请输入彩金开始金额" />
</el-form-item>
                <el-form-item label="彩金结束金额" prop="cjjs">
    <el-input v-model="formData.cjjs" clearable placeholder="请输入彩金结束金额" />
</el-form-item>
                <el-form-item label="抽取数量" prop="cq_num">
    <el-input v-model="formData.cq_num" clearable placeholder="请输入抽取数量" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="activityXnbSetEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiActivityXnbSetAdd, apiActivityXnbSetEdit, apiActivityXnbSetDetail } from '@/api/activity_xnb_set'
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
    return mode.value == 'edit' ? '编辑虚拟比取款活动配置' : '新增虚拟比取款活动配置'
})

// 表单数据
const formData = reactive({
    id: '',
    activity_id: '',
    ljqk: '',
    cjks: '',
    cjjs: '',
    cq_num: '',
})

const class_list = ref([] as any[])// 获取仓库列表async function getClassList() {  const res = await apiActivityLists({page_no: 1, page_size: 500})
    class_list.value = res.lists}
getClassList()


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
    
    
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiActivityXnbSetDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiActivityXnbSetEdit(data) 
        : await apiActivityXnbSetAdd(data)
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
