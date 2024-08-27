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
                <el-form-item label="活动名称" prop="name">
    <el-input v-model="formData.name" clearable placeholder="请输入活动名称" />
</el-form-item>
                <el-form-item label="流水倍数" prop="liushuibeishu">
    <el-input v-model="formData.liushuibeishu" clearable placeholder="请输入流水倍数" />
</el-form-item>
  <el-form-item label="活动类型" prop="activity_type">
	  <el-select v-model="formData.activity_type" placeholder="请选择活动类型">
	    <el-option
	        v-for="item in class_list"
	        :key="item.id"
	        :label="item.name"
	        :value="item.id"
	    />
	  </el-select>
</el-form-item>
                <el-form-item label="申请入口" prop="sqrk">
    <el-radio-group v-model="formData.sqrk" placeholder="请选择申请入口">
        <el-radio 
            v-for="(item, index) in dictData.status"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
                <el-form-item label="长期有效" prop="hd_status">
    <el-radio-group v-model="formData.hd_status" placeholder="请选择长期有效">
        <el-radio 
            v-for="(item, index) in dictData.types"
            :key="index"
            :label="parseInt(item.value)"
        >
            {{ item.name }}
        </el-radio>
    </el-radio-group>
</el-form-item>
                <el-form-item label="展示开始时间" prop="zs_start_time">
    <el-date-picker 
        class="flex-1 !flex"
        v-model="formData.zs_start_time"
        clearable
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="选择展示开始时间">
    </el-date-picker>
</el-form-item>

                <el-form-item label="展示结束时间" prop="zs_end_time">
    <el-date-picker 
        class="flex-1 !flex"
        v-model="formData.zs_end_time"
        clearable
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="选择展示结束时间">
    </el-date-picker>
</el-form-item>

                <el-form-item label="活动开始时间" prop="activity_start_time">
    <el-date-picker 
        class="flex-1 !flex"
        v-model="formData.activity_start_time"
        clearable
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="选择活动开始时间">
    </el-date-picker>
</el-form-item>

                <el-form-item label="活动结束时间" prop="activity_end_time">
    <el-date-picker 
        class="flex-1 !flex"
        v-model="formData.activity_end_time"
        clearable
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="选择活动结束时间">
    </el-date-picker>
</el-form-item>

                <el-form-item label="PC 活动列表图片" prop="pc_activity_img">
    <material-picker v-model="formData.pc_activity_img" />
</el-form-item>
                <el-form-item label="APP 活动列表图片" prop="app_activity_img">
    <material-picker v-model="formData.app_activity_img" />
</el-form-item>
                <el-form-item label="PC banner图片" prop="pc_banner_img">
    <material-picker limit=5 v-model="formData.pc_banner_img" />
</el-form-item>
                <el-form-item label="APP banner图片" prop="app_banner_img">
    <material-picker limit=5 v-model="formData.app_banner_img" />
</el-form-item>
                <el-form-item label="PC背景图片" prop="pc_bg_img">
    <material-picker v-model="formData.pc_bg_img" />
</el-form-item>
                <el-form-item label="app背景图片" prop="app_bg_img">
    <material-picker v-model="formData.app_bg_img" />
</el-form-item>
                <el-form-item label="申请金额" prop="is_sq_money">
    <el-radio-group v-model="formData.is_sq_money" placeholder="请选择申请金额">
        <el-radio 
            v-for="(item, index) in dictData.types"
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
                <el-form-item label="PC端详情" prop="pc_content">
    <editor class="flex-1" v-model="formData.pc_content" :height="500" />
</el-form-item>
                <el-form-item label="APP端详情" prop="app_content">
    <editor class="flex-1" v-model="formData.app_content" :height="500" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="activityEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiActivityAdd, apiActivityEdit, apiActivityDetail } from '@/api/activity'
import { timeFormat } from '@/utils/util'
import { apiActivityTypeLists } from '@/api/activity_type'
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
    return mode.value == 'edit' ? '编辑活动' : '新增活动'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    liushuibeishu: '',
    sqrk: '',
    hd_status: '',
    zs_start_time: '',
    zs_end_time: '',
    activity_start_time: '',
    activity_end_time: '',
    pc_activity_img: '',
    app_activity_img: '',
    pc_banner_img: '',
    app_banner_img: '',
    pc_bg_img: '',
    app_bg_img: '',
    is_sq_money: '',
    order_num: '',
    pc_content: '',
    app_content: '',
	activity_type:'',
})

const class_list = ref([] as any[])// 获取仓库列表async function getClassList() {  const res = await apiActivityTypeLists({page_no: 1, page_size: 500})
    class_list.value = res.lists}
getClassList()


// 表单验证
const formRules = reactive<any>({
    name: [{
        required: true,
        message: '请输入活动名称',
        trigger: ['blur']
    }],
    liushuibeishu: [{
        required: true,
        message: '请输入流水倍数',
        trigger: ['blur']
    }],
    sqrk: [{
        required: true,
        message: '请选择申请入口',
        trigger: ['blur']
    }],
    hd_status: [{
        required: true,
        message: '请选择长期有效',
        trigger: ['blur']
    }],
    zs_start_time: [{
        required: true,
        message: '请选择展示开始时间',
        trigger: ['blur']
    }],
    zs_end_time: [{
        required: true,
        message: '请选择展示结束时间',
        trigger: ['blur']
    }],
    activity_start_time: [{
        required: true,
        message: '请选择活动开始时间',
        trigger: ['blur']
    }],
    activity_end_time: [{
        required: true,
        message: '请选择活动结束时间',
        trigger: ['blur']
    }],
    is_sq_money: [{
        required: true,
        message: '请选择申请金额',
        trigger: ['blur']
    }],
    order_num: [{
        required: true,
        message: '请输入排序',
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
    formData.zs_start_time = timeFormat(formData.zs_start_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.zs_end_time = timeFormat(formData.zs_end_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.activity_start_time = timeFormat(formData.activity_start_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.activity_end_time = timeFormat(formData.activity_end_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiActivityDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiActivityEdit(data) 
        : await apiActivityAdd(data)
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
