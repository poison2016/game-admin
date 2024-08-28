<template>
    <div>
        
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['pay_types/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['pay_types/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="ID" prop="id" show-overflow-tooltip />
                    <el-table-column label="名称" prop="name" show-overflow-tooltip />
                    <el-table-column label="是否推荐" prop="is_tj">
    <template #default="{ row }">
        <dict-value :options="dictData.is_tj" :value="row.is_tj" />
    </template>
</el-table-column>
                    <el-table-column label="加送比例" prop="js_bl" show-overflow-tooltip />
                    <el-table-column label="支付通道" prop="pay_td" show-overflow-tooltip />
                    <el-table-column label="支付类型" prop="pay_type">
    <template #default="{ row }">
        <dict-value :options="dictData.pay_status" :value="row.pay_type" />
    </template>
</el-table-column>
                    <el-table-column label="第三方收款接口" prop="sfskjk" show-overflow-tooltip />
                    <el-table-column label="币种类型" prop="bzlx">
    <template #default="{ row }">
        <dict-value :options="dictData.bz_types" :value="row.bzlx" />
    </template>
</el-table-column>
                    <el-table-column label="协议类型" prop="xylx">
    <template #default="{ row }">
        <dict-value :options="dictData.xy_types" :value="row.xylx" />
    </template>
</el-table-column>
                    <el-table-column label="最低充值金额" prop="low_cz_money" show-overflow-tooltip />
                    <el-table-column label="最高充值金额" prop="top_cz_money" show-overflow-tooltip />
                    <el-table-column label="充值金额类型" prop="cz_money_type">
    <template #default="{ row }">
        <dict-value :options="dictData.cz_money_type" :value="row.cz_money_type" />
    </template>
</el-table-column>
                    <el-table-column label="快捷支付金额" prop="kj_pay_money" show-overflow-tooltip />
                    <el-table-column label="支付图标" prop="pay_icon">
    <template #default="{ row }">
        <el-image style="width:50px;height:50px;" :src="row.pay_icon" />
    </template>
</el-table-column>
                    <el-table-column label="状态" prop="status">
    <template #default="{ row }">
        <dict-value :options="dictData.status" :value="row.status" />
    </template>
</el-table-column>
                    <el-table-column label="排序" prop="order_num" show-overflow-tooltip />
                    <el-table-column label="前台备注" prop="bz" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['pay_types/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['pay_types/delete']"
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

<script lang="ts" setup name="payTypesLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiPayTypesLists, apiPayTypesDelete } from '@/api/pay_types'
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
const { dictData } = useDictData('is_tj,pay_status,bz_types,xy_types,cz_money_type,status')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiPayTypesLists,
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
    await apiPayTypesDelete({ id })
    getLists()
}

getLists()
</script>

