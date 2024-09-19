<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
               
                <el-form-item label="状态" prop="status">
    <el-select class="w-[280px]" v-model="queryParams.status" clearable placeholder="请选择状态">
        <el-option label="全部" value=""></el-option>
        <el-option 
            v-for="(item, index) in dictData.uset_t_type"
            :key="index" 
            :label="item.name"
            :value="item.value"
        />
    </el-select>
</el-form-item>
                <el-form-item label="订单号" prop="game_order_id">
    <el-input class="w-[280px]" v-model="queryParams.game_order_id" clearable placeholder="请输入订单号" />
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
                    <el-table-column label="玩家" prop="user_name" show-overflow-tooltip />
                    <el-table-column label="游戏平台" prop="plat_type" show-overflow-tooltip />
                    <el-table-column label="游戏类型" prop="game_type" show-overflow-tooltip />
                    <el-table-column label="游戏名称" prop="game_name" show-overflow-tooltip />
                    <el-table-column label="局号" prop="round" show-overflow-tooltip />
                    <el-table-column label="桌号" prop="table" show-overflow-tooltip />
                    <el-table-column label="座号" prop="seat" show-overflow-tooltip />
                    <el-table-column label="投注金额" prop="bet_amount" show-overflow-tooltip />
                    <el-table-column width="120" label="有效投注金额" prop="vaild_amount" show-overflow-tooltip />
                    <el-table-column label="输赢金额" prop="settled_amount" show-overflow-tooltip />
                    <el-table-column label="投注内容" prop="bet_content" show-overflow-tooltip />
                    <el-table-column width="100" label="状态" prop="status">
    <template #default="{ row }">
        <dict-value :options="dictData.uset_t_type" :value="row.status" />
    </template>
</el-table-column>
                    <el-table-column width="150" label="订单号" prop="game_order_id" show-overflow-tooltip />
                    <el-table-column label="创建时间" prop="bet_time">
    <template #default="{ row }">
        <el-image style="width:50px;height:50px;" :src="row.bet_time" />
    </template>
</el-table-column>
                    <el-table-column width="150" label="订单更新时间" prop="last_update_time" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['tzjl/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                查看
                            </el-button>
                            <el-button
                                v-perms="['tzjl/delete']"
                                type="danger"
                                link
                                @click="handleDelete(row.id)"
                            >
                                取消
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

<script lang="ts" setup name="tzjlLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiTzjlLists, apiTzjlDelete } from '@/api/tzjl'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    user_id: '',
    status: '',
    game_order_id: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 获取字典数据
const { dictData } = useDictData('uset_t_type')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiTzjlLists,
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
    await feedback.confirm('确定要取消吗？')
    // await apiTzjlDelete({ id })
    // getLists()
}

getLists()
</script>

