<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['user_vip_game_fs/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['user_vip_game_fs/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="" prop="id" show-overflow-tooltip />
                    <el-table-column label="会员等级" prop="vip_name" show-overflow-tooltip />
                    <el-table-column label="每天最高反水" prop="day_top_ls" show-overflow-tooltip />
                    <el-table-column label="最低流水要求" prop="low_ls" show-overflow-tooltip />
                    <el-table-column label="状态" prop="status">
    <template #default="{ row }">
        <dict-value :options="dictData.status" :value="row.status" />
    </template>
</el-table-column>
                    <el-table-column label="自动反水" prop="zd_fs">
    <template #default="{ row }">
        <dict-value :options="dictData.types" :value="row.zd_fs" />
    </template>
</el-table-column>
                    <el-table-column label="真人返水比例" prop="type_zr" show-overflow-tooltip />
                    <el-table-column label="电子返水比例" prop="type_dz" show-overflow-tooltip />
                    <el-table-column label="彩票返水比例" prop="type_cp" show-overflow-tooltip />
                    <el-table-column label="体育返水比例" prop="type_ty" show-overflow-tooltip />
                    <el-table-column label="电竞返水比例" prop="type_dj" show-overflow-tooltip />
                    <el-table-column label="捕鱼返水比例" prop="type_by" show-overflow-tooltip />
                    <el-table-column label="棋牌返水比例" prop="type_qp" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['user_vip_game_fs/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['user_vip_game_fs/delete']"
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

<script lang="ts" setup name="userVipGameFsLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiUserVipGameFsLists, apiUserVipGameFsDelete } from '@/api/user_vip_game_fs'
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
const { dictData } = useDictData('status,types')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiUserVipGameFsLists,
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
    await apiUserVipGameFsDelete({ id })
    getLists()
}

getLists()
</script>

