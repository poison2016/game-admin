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
                <el-form-item label="名称" prop="name">
    <el-input v-model="formData.name" clearable placeholder="请输入名称" />
</el-form-item>
                <el-form-item label="是否推荐" prop="is_tj">
    <el-radio-group v-model="formData.is_tj" placeholder="请选择是否推荐">
        <el-radio 
            v-for="(item, index) in dictData.is_tj"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
                <el-form-item label="加送比例" prop="js_bl">
    <el-input v-model="formData.js_bl" clearable placeholder="请输入加送比例 0.01 - 1" />
</el-form-item>
                <el-form-item label="支付通道" prop="pay_td">
    <el-input v-model="formData.pay_td" clearable placeholder="请输入支付通道" />
</el-form-item>
                <el-form-item label="支付类型" prop="pay_type">
    <el-select class="flex-1" v-model="formData.pay_type" clearable placeholder="请选择支付类型">
        <el-option 
            v-for="(item, index) in dictData.pay_status"
            :key="index" 
            :label="item.name"
            :value="parseInt(item.value)"
        />
    </el-select>
</el-form-item>
                <el-form-item label="第三方收款接口" prop="sfskjk">
    <el-input v-model="formData.sfskjk" clearable placeholder="请输入第三方收款接口" />
</el-form-item>
                <el-form-item label="币种类型" prop="bzlx">
    <el-radio-group v-model="formData.bzlx" placeholder="请选择币种类型 1-USDT">
        <el-radio 
            v-for="(item, index) in dictData.bz_types"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
                <el-form-item label="协议类型" prop="xylx">
    <el-checkbox-group v-model="formData.xylx" placeholder="请选择协议类型">
        <el-checkbox 
            v-for="(item, index) in dictData.xy_types"
            :key="index" 
            :label="item.value"
        >
            {{ item.name }}
        </el-checkbox>
    </el-checkbox-group>
</el-form-item>
                <el-form-item label="最低充值金额" prop="low_cz_money">
    <el-input v-model="formData.low_cz_money" clearable placeholder="请输入最低充值金额" />
</el-form-item>
                <el-form-item label="最高充值金额" prop="top_cz_money">
    <el-input v-model="formData.top_cz_money" clearable placeholder="请输入最高充值金额" />
</el-form-item>
                <el-form-item label="充值金额类型" prop="cz_money_type">
    <el-radio-group v-model="formData.cz_money_type" placeholder="请选择充值金额类型">
        <el-radio 
            v-for="(item, index) in dictData.cz_money_type"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
                <el-form-item label="快捷支付金额" prop="kj_pay_money">
    <el-input v-model="formData.kj_pay_money" clearable placeholder="请输入快捷支付金额 100,500,300" />
</el-form-item>
                <el-form-item label="支付图标" prop="pay_icon">
    <material-picker v-model="formData.pay_icon" />
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
                <el-form-item label="前台备注" prop="bz">
    <el-input v-model="formData.bz" clearable placeholder="请输入前台备注" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="payTypesEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiPayTypesAdd, apiPayTypesEdit, apiPayTypesDetail } from '@/api/pay_types'
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
    return mode.value == 'edit' ? '编辑支付方式' : '新增支付方式'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    is_tj: '',
    js_bl: '',
    pay_td: '',
    pay_type: '',
    sfskjk: '',
    bzlx: '',
    xylx: [],
    low_cz_money: '',
    top_cz_money: '',
    cz_money_type: '',
    kj_pay_money: '',
    pay_icon: '',
    status: '',
    order_num: '',
    bz: '',
})


// 表单验证
const formRules = reactive<any>({
    name: [{
        required: true,
        message: '请输入名称',
        trigger: ['blur']
    }],
    is_tj: [{
        required: true,
        message: '请选择是否推荐',
        trigger: ['blur']
    }],
    js_bl: [{
        required: true,
        message: '请输入加送比例',
        trigger: ['blur']
    }],
    low_cz_money: [{
        required: true,
        message: '请输入最低充值金额',
        trigger: ['blur']
    }],
    top_cz_money: [{
        required: true,
        message: '请输入最高充值金额',
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
    data.xylx && (formData.xylx = String(data.xylx).split(","))
    
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiPayTypesDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData, xylx: formData.xylx.join(",") }
    mode.value == 'edit' 
        ? await apiPayTypesEdit(data) 
        : await apiPayTypesAdd(data)
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
