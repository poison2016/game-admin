<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="60%"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="游戏类型" prop="game_type">
    <el-input v-model="formData.game_type" clearable placeholder="请输入游戏类型" />
</el-form-item>
                <el-form-item label="游戏大类名称" prop="game_type_name">
    <el-input v-model="formData.game_type_name" clearable placeholder="请输入游戏大类名称" />
</el-form-item>
                <el-form-item label="排序" prop="sortNum">
    <el-input v-model="formData.sortNum" clearable placeholder="请输入排序" />
</el-form-item>
                <el-form-item label="状态" prop="status">
					<el-select
					      v-model="formData.status"
					      placeholder="请选择状态"
					      size="large"
					      style="width: 240px"
					    >
					      <el-option
					        v-for="item in options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					      />
					    </el-select>
</el-form-item>
                <el-form-item label="大类图标" prop="image_url">
    <material-picker v-model="formData.image_url" />
</el-form-item>
                <el-form-item label="描述" prop="game_description">
    <editor class="flex-1" v-model="formData.game_description" :height="500" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="ybGameEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYbGameAdd, apiYbGameEdit, apiYbGameDetail } from '@/api/yb_game'
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
    return mode.value == 'edit' ? '编辑所有游戏大类' : '新增所有游戏大类'
})

// 表单数据
const formData = reactive({
    id: '',
    game_type: '',
    game_type_name: '',
    sortNum: '',
    status: '',
    image_url: '',
    game_description: '',
})

const options = [
  {
    value: 1,
    label: '正常',
  },
  {
    value: 2,
    label: '停用',
  },
]


// 表单验证
const formRules = reactive<any>({
    game_type: [{
        required: true,
        message: '请输入游戏类型',
        trigger: ['blur']
    }],
    game_type_name: [{
        required: true,
        message: '请输入游戏大类名称',
        trigger: ['blur']
    }],
    sortNum: [{
        required: true,
        message: '请输入排序',
        trigger: ['blur']
    }],
    status: [{
        required: true,
        message: '请输入状态',
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
    const data = await apiYbGameDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiYbGameEdit(data) 
        : await apiYbGameAdd(data)
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
