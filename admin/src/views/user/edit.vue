<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="80%"
            @confirm="handleSubmit"
            @close="handleClose"
        >
		
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
				<el-row v-if="formData.is_show == 3" :gutter="20">
					<el-col :span="8">
						<el-form-item label="用户余额" prop="user_money">
						    <el-input v-model="formData.user_money" disabled clearable placeholder="当前用户余额" />
						</el-form-item>
					</el-col>
					<el-col :span="15">
						<el-button type="danger"@click="getCustomerList">刷新余额</el-button>
						<el-button type="danger" @click="getClassList()" >一键刷新</el-button>
						<el-button type="danger">一键转出</el-button>
					</el-col>
					<el-col :span="6">
						<el-form-item label="转账类型" prop="user_money">
							<el-select
							     v-model="formData.zzlx"
							     placeholder="选择转账类型"
							     size="large"
							     style="width: 240px"
							   >
							     <el-option
							       v-for="item in zclx"
							       :key="item.value"
							       :label="item.label"
							       :value="item.value"
							     />
							   </el-select>
						</el-form-item>
						 
					</el-col>
					<el-col :span="6">
						<el-form-item label="转账平台" prop="zl_pt">
							<el-select
							     v-model="formData.zl_pt"
							     placeholder="选择转账类型"
							     size="large"
							     style="width: 240px"
							   >
							     <el-option
							       v-for="item in class_list"
							       :key="item.id"
							       :label="item.game_title"
							       :value="item.id"
							     />
							   </el-select>
						</el-form-item>
						 
					</el-col>
					<el-col :span="8">
								<el-form-item label="转账金额" prop="zl_money">
								    <el-input v-model="formData.zl_money" disabled clearable placeholder="转账金额" />
								</el-form-item>
					</el-col>
					<el-col :span="2">
						<el-button type="success">额度转换</el-button>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="22" :offset="1">
						<el-row :gutter="5">
							<el-col :span="3" style="border: 1px solid #999;border-radius: 5px;margin-top: 30px; margin-right: 10px;"  v-for="item in class_list" :key="item.id">
								<el-row>
									<el-col :span="17" style="text-align: center;border-right:  1px solid #999;">
										<span>{{item.user_money}}</span>
									</el-col>
									<el-col :span="7" @click="getClassList()" style="text-align: center;">
										<el-icon><Refresh /></el-icon>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24" style="text-align: center;border-top: 1px solid #999;color: red;">
										<span>{{item.game_title}}</span>
									</el-col>
								</el-row>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
                <el-form-item v-if="formData.is_show == 1" label="邀请码" prop="sn">
    <el-input v-model="formData.sn" disabled clearable placeholder="请输入邀请码" />
</el-form-item>
                <el-form-item v-if="formData.is_show == 1" label="头像" prop="avatar">
    <material-picker disabled v-model="formData.avatar" />
</el-form-item>
                <el-form-item v-if="formData.is_show == 1" label="真实姓名" prop="real_name">
    <el-input v-model="formData.real_name" disabled clearable placeholder="请输入真实姓名" />
</el-form-item>
                <el-form-item v-if="formData.is_show == 1" label="用户昵称" prop="nickname">
    <el-input v-model="formData.nickname" disabled clearable placeholder="请输入用户昵称" />
</el-form-item>
                <el-form-item v-if="formData.is_show == 1" label="用户账号" prop="account">
    <el-input v-model="formData.account" disabled clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item v-if="formData.is_show == 1" label="用户密码" prop="password">
    <el-input v-model="formData.password" clearable placeholder="请输入用户密码 留空为不修改" />
</el-form-item>
                <el-form-item v-if="formData.is_show == 1" label="用户电话" prop="mobile">
    <el-input v-model="formData.mobile" clearable placeholder="请输入用户电话" />
</el-form-item>
  <el-form-item v-if="formData.is_show == 2" label="增加/降低" prop="is_type">
	   <el-select
	        v-model="formData.is_type"
	        placeholder="Select"
	        size="large"
	        style="width: 240px"
	      >
	        <el-option
	          v-for="item in lists"
	          :key="item.value"
	          :label="item.label"
	          :value="item.value"
	        />
	      </el-select>
    
</el-form-item>
 <el-form-item v-if="formData.is_show == 2" label="金额" prop="money">
    <el-input v-model="formData.money" clearable placeholder="请输入调整金额" />
</el-form-item>
              
               
                <el-form-item v-if="formData.is_show == 1" label="是否禁用" prop="is_disable">
					<el-select
					     v-model="formData.is_disable"
					     placeholder="选择是否禁用"
					     size="large"
					     style="width: 240px"
					   >
					     <el-option
					       v-for="item in optionsss"
					       :key="item.value"
					       :label="item.label"
					       :value="item.value"
					     />
					   </el-select>
</el-form-item>
                          
                <el-form-item v-if="formData.is_show == 1" label="VIP等级" prop="level_id">
    <el-input v-model="formData.level_id" clearable placeholder="请输入VIP等级" />
</el-form-item>
                             
                <el-form-item v-if="formData.is_show == 1" label="用户邮箱" prop="email">
    <el-input v-model="formData.email" clearable placeholder="请输入用户邮箱" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserAdd, apiUserEdit, apiUserDetail, getUserGame } from '@/api/users'
import { timeFormat } from '@/utils/util'
import type { PropType } from 'vue'
import { apiUserDetailAll } from '@/api/users'
import { apiYbPlatTypeLists } from '@/api/yb_plat_type'
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
const value = ref('')

const lists = [
  {
    value: 1,
    label: '转出',
  },
  {
    value: 2,
    label: '转入',
  },
 
]

const zclx = [
  {
    value: 1,
    label: '增加',
  },
  {
    value: 2,
    label: '降低',
  },
 
]
const options = [
  {
    value: 1,
    label: '男',
  },
  {
    value: 2,
    label: '女',
  },
 
]


const optionsss = [
  {
    value: 1,
    label: '是',
  },
  {
    value: 0,
    label: '否',
  },
 
]

const optionss = [
  {
    value: 1,
    label: '微信小程序',
  },
  {
    value: 2,
    label: '微信公众号',
  },
  {
    value: 3,
    label: '手机H5',
  },
  {
    value: 4,
    label: '电脑PC',
  },
  {
    value: 5,
    label: '苹果APP',
  },
  {
    value: 6,
    label: '安卓APP',
  },
 
]

// 弹窗标题
const popupTitle = computed(() => {
	if(formData.is_show == 2){
		return '加/扣款';
	}
	if(formData.is_show == 3){
		return '额度管理';
	}
    return mode.value == 'edit' ? '编辑用户表' : '新增用户表'
})

// 表单数据
const formData = reactive({
    id: '',
    sn: '',
    avatar: '',
    real_name: '',
    nickname: '',
    account: '',
    password: '',
    mobile: '',
    is_disable: '',
    level_id: '',
    email: '',
	is_show:1,
	is_type:1,
	money:'',
	user_money:'',
	zzlx:'',
	zl_pt:'',
	zl_money:'',
})

// 客户列表
const customerList = ref([])
const getCustomerList = async () => {
    const res = await apiUserDetailAll({
       
    })
	console.log(res)
    customerList.value = res
	getClassList()
}
getCustomerList()


async function getUserGameData(id: any) {
	 console.log('获取到得参数',id)
    const res = await getUserGame({
       user_name:formData.account,
	   id:id
	   
    })
	console.log(res)
   // customerList.value = res
}



const class_list = ref([] as any[])// 获取仓库列表async function getClassList() {  const res = await apiYbPlatTypeLists({page_no: 1, page_size: 500,user_name: formData.account})
    class_list.value = res.lists}



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
    formData.login_time = timeFormat(formData.login_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.create_time = timeFormat(formData.create_time,'yyyy-mm-dd hh:MM:ss') 
    //@ts-ignore
    formData.delete_time = timeFormat(formData.delete_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiUserDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserEdit(data) 
        : await apiUserAdd(data)
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
