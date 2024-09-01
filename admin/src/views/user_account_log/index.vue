<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                <el-form-item label="流水号" prop="sn">
    <el-input class="w-[280px]" v-model="queryParams.sn" clearable placeholder="请输入流水号" />
</el-form-item>
                <el-form-item label="变动类型" prop="action">
    <el-select class="w-[280px]" v-model="queryParams.action" clearable placeholder="请选择变动类型">
        <el-option label="全部" value=""></el-option>
        <el-option 
            v-for="(item, index) in dictData.action_type"
            :key="index" 
            :label="item.name"
            :value="item.value"
        />
    </el-select>
</el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
          
            <div class="mt-4">
                <el-table :data="pager.lists" >
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="ID" prop="id" show-overflow-tooltip />
                    <el-table-column width="260px" label="流水号" prop="sn" show-overflow-tooltip />
                    <el-table-column label="用户账号" prop="user_id" show-overflow-tooltip />
                    <el-table-column label="变动类型" prop="action">
    <template #default="{ row }">
        <dict-value :options="dictData.action_type" :value="row.action" />
    </template>
</el-table-column>
                    <el-table-column label="变动数量" prop="change_amount" show-overflow-tooltip />
                    <el-table-column label="变动后数量" prop="left_amount" show-overflow-tooltip />
                    <el-table-column width="300px" label="备注" prop="remark" show-overflow-tooltip />
                    <el-table-column label="创建时间" prop="create_time">
    <template #default="{ row }">
      <span>{{ row.create_time ? timeFormat(row.create_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
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

<script lang="ts" setup name="userAccountLogLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiUserAccountLogLists, apiUserAccountLogDelete } from '@/api/user_account_log'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    sn: '',
    action: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 获取字典数据
const { dictData } = useDictData('action_type')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiUserAccountLogLists,
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
    await apiUserAccountLogDelete({ id })
    getLists()
}

getLists()
</script>

