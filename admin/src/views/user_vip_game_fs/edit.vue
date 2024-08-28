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
                <el-form-item label="每天最高反水" prop="day_top_ls">
    <el-input v-model="formData.day_top_ls" clearable placeholder="请输入每天最高反水" />
</el-form-item>
                <el-form-item label="最低流水要求" prop="low_ls">
    <el-input v-model="formData.low_ls" clearable placeholder="请输入最低流水要求" />
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

<script lang="ts" setup name="userVipGameFsEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserVipGameFsAdd, apiUserVipGameFsEdit, apiUserVipGameFsDetail } from '@/api/user_vip_game_fs'
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
    return mode.value == 'edit' ? '编辑Vip游戏返水比例' : '新增Vip游戏返水比例'
})

// 表单数据
const formData = reactive({
    id: '',
    vip_id: '',
    day_top_ls: '',
    low_ls: '',
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

const class_list = ref([] as any[])// 获取仓库列表async function getClassList() {  const res = await apiUserVipSetLists({page_no: 1, page_size: 200})
    class_list.value = res.lists}
getClassList()


// 表单验证
const formRules = reactive<any>({
    status: [{
        required: true,
        message: '请选择状态 1-正常 0-关闭',
        trigger: ['blur']
    }],
    zd_fs: [{
        required: true,
        message: '请选择自动反水 1-是 0-否',
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
    const data = await apiUserVipGameFsDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserVipGameFsEdit(data) 
        : await apiUserVipGameFsAdd(data)
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
