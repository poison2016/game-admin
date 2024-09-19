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
                <el-form-item label="玩家" prop="user_id">
    <el-input v-model="formData.user_id" clearable placeholder="请输入玩家" />
</el-form-item>
                <el-form-item label="游戏平台" prop="plat_type">
    <el-input v-model="formData.plat_type" clearable placeholder="请输入游戏平台" />
</el-form-item>
                <el-form-item label="游戏类型" prop="game_type">
    <el-input v-model="formData.game_type" clearable placeholder="请输入游戏类型" />
</el-form-item>
                <el-form-item label="游戏名称" prop="game_name">
    <el-input v-model="formData.game_name" clearable placeholder="请输入游戏名称" />
</el-form-item>
                <el-form-item label="局号" prop="round">
    <el-input v-model="formData.round" clearable placeholder="请输入局号" />
</el-form-item>
                <el-form-item label="桌号" prop="table">
    <el-input v-model="formData.table" clearable placeholder="请输入桌号" />
</el-form-item>
                <el-form-item label="座号" prop="seat">
    <el-input v-model="formData.seat" clearable placeholder="请输入座号" />
</el-form-item>
                <el-form-item label="投注金额" prop="bet_amount">
    <el-input v-model="formData.bet_amount" clearable placeholder="请输入投注金额" />
</el-form-item>
                <el-form-item label="有效投注金额" prop="vaild_amount">
    <el-input v-model="formData.vaild_amount" clearable placeholder="请输入有效投注金额" />
</el-form-item>
                <el-form-item label="输赢金额" prop="settled_amount">
    <el-input v-model="formData.settled_amount" clearable placeholder="请输入输赢金额" />
</el-form-item>
                <el-form-item label="投注内容" prop="bet_content">
    <el-input v-model="formData.bet_content" clearable placeholder="请输入投注内容" />
</el-form-item>
                <el-form-item label="状态" prop="status">
    <el-select class="flex-1" v-model="formData.status" clearable placeholder="请选择状态">
        <el-option 
            v-for="(item, index) in dictData.uset_t_type"
            :key="index" 
            :label="item.name"
            :value="parseInt(item.value)"
        />
    </el-select>
</el-form-item>
                <el-form-item label="订单号" prop="game_order_id">
    <el-input v-model="formData.game_order_id" clearable placeholder="请输入订单号" />
</el-form-item>
                <el-form-item label="创建时间" prop="bet_time">
    <material-picker v-model="formData.bet_time" />
</el-form-item>
                <el-form-item label="订单更新时间" prop="last_update_time">
    <el-date-picker 
        class="flex-1 !flex"
        v-model="formData.last_update_time"
        clearable
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="选择订单更新时间">
    </el-date-picker>
</el-form-item>

            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="tzjlEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiTzjlAdd, apiTzjlEdit, apiTzjlDetail } from '@/api/tzjl'
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
    return mode.value == 'edit' ? '编辑用户投注记录' : '新增用户投注记录'
})

// 表单数据
const formData = reactive({
    id: '',
    user_id: '',
    plat_type: '',
    game_type: '',
    game_name: '',
    round: '',
    table: '',
    seat: '',
    bet_amount: '',
    vaild_amount: '',
    settled_amount: '',
    bet_content: '',
    status: '',
    game_order_id: '',
    bet_time: '',
    last_update_time: '',
})


// 表单验证
const formRules = reactive<any>({
    user_id: [{
        required: true,
        message: '请输入玩家',
        trigger: ['blur']
    }],
    plat_type: [{
        required: true,
        message: '请输入游戏平台',
        trigger: ['blur']
    }],
    game_type: [{
        required: true,
        message: '请输入游戏类型',
        trigger: ['blur']
    }],
    game_name: [{
        required: true,
        message: '请输入游戏名称',
        trigger: ['blur']
    }],
    round: [{
        required: true,
        message: '请输入局号',
        trigger: ['blur']
    }],
    table: [{
        required: true,
        message: '请输入桌号',
        trigger: ['blur']
    }],
    seat: [{
        required: true,
        message: '请输入座号',
        trigger: ['blur']
    }],
    bet_amount: [{
        required: true,
        message: '请输入投注金额',
        trigger: ['blur']
    }],
    vaild_amount: [{
        required: true,
        message: '请输入有效投注金额',
        trigger: ['blur']
    }],
    settled_amount: [{
        required: true,
        message: '请输入输赢金额',
        trigger: ['blur']
    }],
    bet_content: [{
        required: true,
        message: '请输入投注内容',
        trigger: ['blur']
    }],
    status: [{
        required: true,
        message: '请选择状态',
        trigger: ['blur']
    }],
    game_order_id: [{
        required: true,
        message: '请输入订单号',
        trigger: ['blur']
    }],
    bet_time: [{
        required: true,
        message: '请选择创建时间',
        trigger: ['blur']
    }],
    last_update_time: [{
        required: true,
        message: '请选择订单更新时间',
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
    const data = await apiTzjlDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiTzjlEdit(data) 
        : await apiTzjlAdd(data)
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
