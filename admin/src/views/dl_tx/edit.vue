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
                <el-form-item label="代理" prop="user_id">
    <el-input v-model="formData.user_id" disabled clearable placeholder="请输入代理" />
</el-form-item>
                <el-form-item label="金额" prop="money">
    <el-input v-model="formData.money" disabled clearable placeholder="请输入金额" />
</el-form-item>
                <el-form-item label="类型" prop="type">
    <el-select
          v-model="formData.type"
          placeholder="请选择提现类型"
          size="large"
          style="width: 240px"
		  disabled
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
</el-form-item>
                <el-form-item label="提现状态" prop="status">
					<el-select
					      v-model="formData.status"
					      placeholder="请选择提现状态"
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
                <el-form-item label="备注" prop="message">
    <el-input v-model="formData.message" type="textarea" clearable placeholder="请输入备注" />
</el-form-item>
 <el-form-item label="真实姓名" v-if="formData.type == 1 || formData.type == 10 || formData.type == 5 || formData.type == 6" prop="ju_card">
    <el-input v-model="formData.username" disabled  clearable placeholder="" />
</el-form-item>
 <el-form-item label="开户银行" v-if="formData.type == 1 || formData.type == 10" prop="ju_card">
    <el-input v-model="formData.ju_card" disabled  clearable placeholder="" />
</el-form-item>
 <el-form-item label="开户银行" v-if="formData.type == 1 || formData.type == 10" prop="addresss">
    <el-input v-model="formData.addresss" disabled  clearable placeholder="" />
</el-form-item>
                <el-form-item label="账号" prop="address">
    <el-input v-model="formData.address" disabled type="textarea" clearable placeholder="请输入地址" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="dlTxEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiDlTxAdd, apiDlTxEdit, apiDlTxDetail } from '@/api/dl_tx'
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

const options = [
  {
    value: 1,
    label: '银行卡',
  },
  {
    value: 10,
    label: '信用卡',
  },
  {
    value: 8,
    label: 'TRC20',
  },
  {
    value: 9,
    label: 'ERC20',
  },
  {
    value: 3,
    label: 'EBpay提币',
  },
  {
    value: 4,
    label: 'KOIpay提币',
  },
  {
    value: 5,
    label: '支付宝',
  },
  {
    value: 6,
    label: '微信',
  },
  {
    value: 7,
    label: '其他',
  },
  
  
]

const optionss = [
  {
    value: 1,
    label: '申请中',
  },
  {
    value: 2,
    label: '通过',
  },
  {
    value: 3,
    label: '驳回',
  },
  
  
  
]


// 弹窗标题
const popupTitle = computed(() => {
    return mode.value == 'edit' ? '代理申请提现' : '代理申请提现'
})

// 表单数据
const formData = reactive({
    id: '',
    user_id: '',
    money: '',
    type: '',
    status: '',
    message: '',
    address: '',
	username:'',
	ju_card:'',
	addresss:'',
})


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
    
    //@ts-ignore
    formData.create_time = timeFormat(formData.create_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiDlTxDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiDlTxEdit(data) 
        : await apiDlTxAdd(data)
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
