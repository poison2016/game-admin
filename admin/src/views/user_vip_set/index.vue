<template>
    <div>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['user_vip_set/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['user_vip_set/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="" prop="id" show-overflow-tooltip />
                    <el-table-column label="会员等级名称" prop="vip_name" show-overflow-tooltip />
                    <el-table-column label="升级存款" prop="up_money" show-overflow-tooltip />
                    <el-table-column label="升级流水" prop="up_ls" show-overflow-tooltip />
                    <el-table-column label="保级流水" prop="bj_ls" show-overflow-tooltip />
                    <el-table-column label="单日提款限次" prop="day_tk_num" show-overflow-tooltip />
                    <el-table-column label="最低提款" prop="low_tk" show-overflow-tooltip />
                    <el-table-column label="最低充值金额" prop="low_cz" show-overflow-tooltip />
                    <el-table-column label="单日提款限额" prop="day_tk_money" show-overflow-tooltip />
                    <el-table-column label="最高充值金额" prop="top_cz" show-overflow-tooltip />
                    <el-table-column label="升级礼金" prop="up_lj" show-overflow-tooltip />
                    <el-table-column label="生日礼金" prop="sr_lj" show-overflow-tooltip />
                    <el-table-column label="每周红包" prop="z_hb" show-overflow-tooltip />
                    <el-table-column label="最低转账" prop="low_zz" show-overflow-tooltip />
                    <el-table-column label="红包比例" prop="hb_bl" show-overflow-tooltip />
                    <el-table-column label="最高奖金" prop="zg_jj" show-overflow-tooltip />
                    <el-table-column label="流水倍数" prop="ls_bs" show-overflow-tooltip />
                    <el-table-column label="次数限制" prop="num_xz">
    <template #default="{ row }">
        <dict-value :options="dictData.vip_number" :value="row.num_xz" />
    </template>
</el-table-column>
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['user_vip_set/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['user_vip_set/delete']"
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

<script lang="ts" setup name="userVipSetLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiUserVipSetLists, apiUserVipSetDelete } from '@/api/user_vip_set'
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
const { dictData } = useDictData('vip_number')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiUserVipSetLists,
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
    await apiUserVipSetDelete({ id })
    getLists()
}

getLists()
</script>

