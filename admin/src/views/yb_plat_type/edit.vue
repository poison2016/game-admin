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
                <el-form-item label="游戏类型" prop="game_type_id">
    <el-input v-model="formData.game_type_id" clearable placeholder="请输入游戏类型 对应大类游戏类型" />
</el-form-item>
                <el-form-item label="平台类型" prop="plat_type">
    <el-input v-model="formData.plat_type" clearable placeholder="请输入平台类型" />
</el-form-item>
                <el-form-item label="显示名称" prop="game_title">
    <el-input v-model="formData.game_title" clearable placeholder="请输入显示名称" />
</el-form-item>
                <el-form-item label="平台状态" prop="is_open">
					<el-select
					      v-model="formData.is_open"
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
                <el-form-item label="是否热门" prop="is_hot">
					<el-select
					      v-model="formData.is_hot"
					      placeholder="请选择状态"
					      size="large"
					      style="width: 240px"
					    >
					      <el-option
					        v-for="item in optionss"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					      />
					    </el-select>
</el-form-item>
                <el-form-item label="是否最新" prop="is_new">
					<el-select
					      v-model="formData.is_new"
					      placeholder="请选择状态"
					      size="large"
					      style="width: 240px"
					    >
					      <el-option
					        v-for="item in optionss"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					      />
					    </el-select>
</el-form-item>
                <el-form-item label="排序" prop="sort_num">
    <el-input v-model="formData.sort_num" clearable placeholder="请输入排序" />
</el-form-item>
                <el-form-item label="游戏图片" prop="img_url">
    <material-picker v-model="formData.img_url" />
</el-form-item>
                <el-form-item label="游戏代码" prop="game_code">
    <editor class="flex-1" v-model="formData.game_code" :height="500" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="ybPlatTypeEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiYbPlatTypeAdd, apiYbPlatTypeEdit, apiYbPlatTypeDetail } from '@/api/yb_plat_type'
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
    return mode.value == 'edit' ? '编辑游戏平台列表' : '新增游戏平台列表'
})

// 表单数据
const formData = reactive({
    id: '',
    game_type_id: '',
    plat_type: '',
    game_title: '',
    is_open: '',
    is_hot: '',
    is_new: '',
    sort_num: '',
    img_url: '',
    game_code: '',
})
const options = [
  {
    value: 1,
    label: '正常',
  },
  {
    value: 0,
    label: '停用',
  },
]

const optionss = [
  {
    value: 1,
    label: '是',
  },
  {
    value: 0,
    label: '否',
  },
]


// 表单验证
const formRules = reactive<any>({
    plat_type: [{
        required: true,
        message: '请输入平台类型',
        trigger: ['blur']
    }],
    game_title: [{
        required: true,
        message: '请输入显示名称',
        trigger: ['blur']
    }],
    is_open: [{
        required: true,
        message: '请输入平台状态 0-关闭 1-开启',
        trigger: ['blur']
    }],
    is_hot: [{
        required: true,
        message: '请输入是否热门',
        trigger: ['blur']
    }],
    is_new: [{
        required: true,
        message: '请输入是否最新',
        trigger: ['blur']
    }],
    img_url: [{
        required: true,
        message: '请选择游戏图片',
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
    const data = await apiYbPlatTypeDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiYbPlatTypeEdit(data) 
        : await apiYbPlatTypeAdd(data)
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
