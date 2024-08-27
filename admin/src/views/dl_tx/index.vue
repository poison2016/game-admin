<template>
    <div>
        
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
           
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="代理" prop="user_id" show-overflow-tooltip />
                    <el-table-column label="金额" prop="money" show-overflow-tooltip />
                    <el-table-column label="类型" prop="type" show-overflow-tooltip >
						<template #default="{ row }">
						    <el-tag v-if="row.type == 1">银行卡</el-tag>
							<el-tag v-if="row.type == 3">EBpay提币</el-tag>
							<el-tag v-if="row.type == 4">-KOIpay提币</el-tag>
							<el-tag v-if="row.type == 5">支付宝</el-tag>
							<el-tag v-if="row.type == 6">微信</el-tag>
							<el-tag v-if="row.type == 7">其他</el-tag>
							<el-tag v-if="row.type == 8">TRC20</el-tag>
							<el-tag v-if="row.type == 9">ERC20</el-tag>
							<el-tag v-if="row.type == 10">信用卡</el-tag>
						</template>
					</el-table-column>
                    <el-table-column label="提现状态" prop="status" show-overflow-tooltip >
						<template #default="{ row }">
						    <el-tag v-if="row.status == 1">申请中</el-tag>
							<el-tag v-if="row.status == 2">已提现</el-tag>
							<el-tag v-if="row.status == 3"  type="danger">被拒绝</el-tag>
							
						</template>
					</el-table-column>
                    <el-table-column label="地址" prop="address" show-overflow-tooltip />
                    <el-table-column label="发起时间" prop="create_time">
    <template #default="{ row }">
      <span>{{ row.create_time ? timeFormat(row.create_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
    </template>
</el-table-column>
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['dl_tx/ok']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                详情
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

<script lang="ts" setup name="dlTxLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiDlTxLists, apiDlTxDelete } from '@/api/dl_tx'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    
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
    fetchFun: apiDlTxLists,
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
    await feedback.confirm('确定要驳回吗？')
    await apiDlTxDelete({ id })
    getLists()
}

getLists()
</script>

