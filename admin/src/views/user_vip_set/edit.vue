<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="70%"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="会员等级名称" prop="vip_name">
    <el-input v-model="formData.vip_name" clearable placeholder="请输入会员等级名称" />
</el-form-item>
                <el-form-item label="升级存款" prop="up_money">
    <el-input v-model="formData.up_money" clearable placeholder="请输入升级存款" />
</el-form-item>
                <el-form-item label="升级流水" prop="up_ls">
    <el-input v-model="formData.up_ls" clearable placeholder="请输入升级流水" />
</el-form-item>
                <el-form-item label="保级流水" prop="bj_ls">
    <el-input v-model="formData.bj_ls" clearable placeholder="请输入保级流水" />
</el-form-item>
                <el-form-item label="单日提款限次" prop="day_tk_num">
    <el-input v-model="formData.day_tk_num" clearable placeholder="请输入单日提款限次" />
</el-form-item>
                <el-form-item label="最低提款" prop="low_tk">
    <el-input v-model="formData.low_tk" clearable placeholder="请输入最低提款" />
</el-form-item>
                <el-form-item label="最低充值金额" prop="low_cz">
    <el-input v-model="formData.low_cz" clearable placeholder="请输入最低充值金额" />
</el-form-item>
                <el-form-item label="单日提款限额" prop="day_tk_money">
    <el-input v-model="formData.day_tk_money" clearable placeholder="请输入单日提款限额" />
</el-form-item>
                <el-form-item label="最高充值金额" prop="top_cz">
    <el-input v-model="formData.top_cz" clearable placeholder="请输入最高充值金额" />
</el-form-item>
                <el-form-item label="升级礼金" prop="up_lj">
    <el-input v-model="formData.up_lj" clearable placeholder="请输入升级礼金" />
</el-form-item>
                <el-form-item label="生日礼金" prop="sr_lj">
    <el-input v-model="formData.sr_lj" clearable placeholder="请输入生日礼金" />
</el-form-item>
                <el-form-item label="每周红包" prop="z_hb">
    <el-input v-model="formData.z_hb" clearable placeholder="请输入每周红包" />
</el-form-item>
                <el-form-item label="最低转账" prop="low_zz">
    <el-input v-model="formData.low_zz" clearable placeholder="请输入最低转账" />
</el-form-item>
                <el-form-item label="红包比例" prop="hb_bl">
    <el-input v-model="formData.hb_bl" clearable placeholder="请输入红包比例" />
</el-form-item>
                <el-form-item label="最高奖金" prop="zg_jj">
    <el-input v-model="formData.zg_jj" clearable placeholder="请输入最高奖金" />
</el-form-item>
                <el-form-item label="流水倍数" prop="ls_bs">
    <el-input v-model="formData.ls_bs" clearable placeholder="请输入流水倍数" />
</el-form-item>
                <el-form-item label="次数限制 1-每月一次 2-仅一次" prop="num_xz">
    <el-radio-group v-model="formData.num_xz" placeholder="请选择次数限制 1-每月一次 2-仅一次">
        <el-radio 
            v-for="(item, index) in dictData.vip_number"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userVipSetEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserVipSetAdd, apiUserVipSetEdit, apiUserVipSetDetail } from '@/api/user_vip_set'
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
    return mode.value == 'edit' ? '编辑会员等级配置' : '新增会员等级配置'
})

// 表单数据
const formData = reactive({
    id: '',
    vip_name: '',
    up_money: '',
    up_ls: '',
    bj_ls: '',
    day_tk_num: '',
    low_tk: '',
    low_cz: '',
    day_tk_money: '',
    top_cz: '',
    up_lj: '',
    sr_lj: '',
    z_hb: '',
    low_zz: '',
    hb_bl: '',
    zg_jj: '',
    ls_bs: '',
    num_xz: '',
})


// 表单验证
const formRules = reactive<any>({
    vip_name: [{
        required: true,
        message: '请输入会员等级名称',
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
    const data = await apiUserVipSetDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserVipSetEdit(data) 
        : await apiUserVipSetAdd(data)
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
