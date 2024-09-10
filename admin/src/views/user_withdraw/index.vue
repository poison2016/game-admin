<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                <el-form-item label="用户账号" prop="user_id">
    <el-input class="w-[280px]" v-model="queryParams.user_id" clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="ID" prop="id" show-overflow-tooltip />
                    <el-table-column label="用户账号" prop="account" show-overflow-tooltip />
                    <el-table-column label="提现金额" prop="money" show-overflow-tooltip />
                    <el-table-column label="提现状态" prop="type">
    <template #default="{ row }">
		<span v-if="row.type == 0">审核中</span>
		<span v-if="row.type == 1">通过</span>
		<span v-if="row.type == 2">拒绝</span>
    </template>
</el-table-column>
                    
                    <el-table-column label="提现类型" prop="w_type"  show-overflow-tooltip/>
                    <el-table-column label="卡号/帐号" prop="number" show-overflow-tooltip />
					<el-table-column label="发起时间" prop="create_time">
					    <template #default="{ row }">
					      <span>{{ row.create_time ? timeFormat(row.create_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
					    </template>
					</el-table-column>
                    <el-table-column label="审核时间" prop="withdraw_time">
    <template #default="{ row }">
      <span>{{ row.withdraw_time ? timeFormat(row.withdraw_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
    </template>
	
</el-table-column>
<el-table-column label="备注" prop="remarks" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['user_withdraw/edit']"
								v-if="row.type == 0"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                操作
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

<script lang="ts" setup name="userWithdrawLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiUserWithdrawLists, apiUserWithdrawDelete } from '@/api/user_withdraw'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    user_id: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 获取字典数据
const { dictData } = useDictData('w_status,w_type')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiUserWithdrawLists,
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
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

// 删除
const handleDelete = async (id: number | any[]) => {
    await feedback.confirm('确定要删除？')
    await apiUserWithdrawDelete({ id })
    getLists()
}

getLists()
</script>

