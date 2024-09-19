<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                
                <el-form-item label="用户昵称" prop="nickname">
    <el-input class="w-[280px]" v-model="queryParams.nickname" clearable placeholder="请输入用户昵称" />
</el-form-item>
                <el-form-item label="用户账号" prop="account">
    <el-input class="w-[280px]" v-model="queryParams.account" clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item label="用户电话" prop="mobile">
    <el-input class="w-[280px]" v-model="queryParams.mobile" clearable placeholder="请输入用户电话" />
</el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['user/add']" type="primary" :disabled="!selectData.length"
                @click="handleZd(selectData)">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                批量转代理
            </el-button>
           
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="邀请码" prop="sn" show-overflow-tooltip />
                    <el-table-column label="头像" prop="avatar">
    <template #default="{ row }">
        <el-image style="width:50px;height:50px;" :src="row.avatar" />
    </template>
</el-table-column>
                    <el-table-column label="真实姓名" prop="real_name" show-overflow-tooltip />
                    <el-table-column label="用户昵称" prop="nickname" show-overflow-tooltip />
                    <el-table-column label="用户账号" prop="account" show-overflow-tooltip />
                    <el-table-column label="用户电话" prop="mobile" show-overflow-tooltip />
                    <el-table-column label="性别" prop="sex_str" show-overflow-tooltip />
                    <el-table-column label="是否禁用" prop="is_disable_str" show-overflow-tooltip />
                    <el-table-column label="最后登录IP" prop="login_ip" show-overflow-tooltip />
                <!--    <el-table-column label="最后登录时间" prop="login_time">
    <template #default="{ row }">
      <span>{{ row.login_time ? timeFormat(row.login_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
    </template>
</el-table-column> -->
                    <el-table-column label="用户余额" prop="user_money" show-overflow-tooltip />
                    <el-table-column label="累计充值" prop="total_recharge_amount" show-overflow-tooltip />
                    <el-table-column label="创建时间" prop="create_time">
    <template #default="{ row }">
      <span>{{ row.create_time ? timeFormat(row.create_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
    </template>
</el-table-column>
                    
                    <el-table-column label="锁定余额" prop="frozen_balance" show-overflow-tooltip />
                    <el-table-column label="VIP等级" prop="level_id" show-overflow-tooltip />
                    <el-table-column label="登录状态" prop="login_status_str" show-overflow-tooltip />
                    <el-table-column label="用户邮箱" prop="email" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['user/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                修改
                            </el-button>
							<el-button
							    v-perms="['user/edit']"
							    type="primary"
							    link
							    @click="handlesEdit(row)"
							>
							    加/扣款
							</el-button>
							<el-button
							    v-perms="['user/edit']"
							    type="primary"
							    link
							    @click="edEdit(row)"
							>
							    额度管理
							</el-button>
							<el-button
							    v-perms="['user/edit']"
							    type="primary"
							    link
							    @click="handleDeletes(row.id)"
							>
							    升级为代理
							</el-button>
                            <el-button
                                v-perms="['user/delete']"
                                type="danger"
                                link
                                @click="handleDelete(row.id)"
                            >
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="flex mt-4 justify-end">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
        <edit-popup v-if="showEdit" ref="editRef" :dict-data="dictData" @success="getLists" @close="showEdit = false" />
    </div>
</template>

<script lang="ts" setup name="userLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiUserLists, apiUserDelete,apiUserZD } from '@/api/users'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'
import JkkPopup from './jkk.vue'


const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    real_name: '',
    nickname: '',
    account: '',
    mobile: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 获取字典数据
const { dictData } = useDictData('')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiUserLists,
    params: queryParams
})

// 添加
const handleAdd = async () => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('add')
}

// 编辑
const handleEdit = async (data: any) => {
    showEdit.value = true
    await nextTick()
	data.is_show = 1;
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

// 编辑
const edEdit = async (data: any) => {
    showEdit.value = true
    await nextTick()
	data.is_show = 3;
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

// 编辑
const handlesEdit = async (data: any) => {
    showEdit.value = true
    await nextTick()
	data.is_show =2;
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

// 删除
const handleDelete = async (id: number | any[]) => {
    await feedback.confirm('确定要删除？')
    await apiUserDelete({ id })
    getLists()
}
// 删除
const handleDeletes = async (id: number | any[]) => {
    await feedback.confirm('确定要升级为代理吗？')
    await apiUserZD({ id:[id] })
    getLists()
}

// 删除
const handleZd = async (id: number | any[]) => {
    await feedback.confirm('确定要转代理吗？')
    await apiUserZD({ id })
    getLists()
}

getLists()
</script>

