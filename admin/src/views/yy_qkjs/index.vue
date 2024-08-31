<template>
    <div>
        
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['yy_qkjs/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['yy_qkjs/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="实际到账时间" prop="sjdz_time" show-overflow-tooltip />
                    <el-table-column label="加送比例" prop="js_bl" show-overflow-tooltip />
                    <el-table-column label="状态" prop="status">
    <template #default="{ row }">
        <dict-value :options="dictData.status" :value="row.status" />
    </template>
</el-table-column>
                    <el-table-column label="创建时间" prop="create_time">
    <template #default="{ row }">
      <span>{{ row.create_time ? timeFormat(row.create_time, 'yyyy-mm-dd hh:MM:ss') : '' }}</span>
    </template>
</el-table-column>
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['yy_qkjs/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['yy_qkjs/delete']"
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

<script lang="ts" setup name="yyQkjsLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiYyQkjsLists, apiYyQkjsDelete } from '@/api/yy_qkjs'
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
const { dictData } = useDictData('status')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiYyQkjsLists,
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
    await apiYyQkjsDelete({ id })
    getLists()
}

getLists()
</script>

