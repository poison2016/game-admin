<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                <el-form-item label="名称" prop="name">
    <el-input class="w-[280px]" v-model="queryParams.name" clearable placeholder="请输入名称" />
</el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['xnb_sk_set/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['xnb_sk_set/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="" prop="id" show-overflow-tooltip />
                    <el-table-column label="名称" prop="name" show-overflow-tooltip />
                    <el-table-column label="币种类型" prop="bz_lx">
    <template #default="{ row }">
        <dict-value :options="dictData.bz_types" :value="row.bz_lx" />
    </template>
</el-table-column>
                    <el-table-column label="协议类型" prop="xy_type">
    <template #default="{ row }">
        <dict-value :options="dictData.xy_types" :value="row.xy_type" />
    </template>
</el-table-column>
                    <el-table-column label="地址" prop="address" show-overflow-tooltip />
                    <el-table-column label="二维码支付图片" prop="pay_img">
    <template #default="{ row }">
        <el-image style="width:50px;height:50px;" :src="row.pay_img" />
    </template>
</el-table-column>
                    <el-table-column label="状态" prop="status">
    <template #default="{ row }">
        <dict-value :options="dictData.status" :value="row.status" />
    </template>
</el-table-column>
                    <el-table-column label="前台备注" prop="bz" show-overflow-tooltip />
                    <el-table-column label="创建时间" prop="create_time" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['xnb_sk_set/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['xnb_sk_set/delete']"
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

<script lang="ts" setup name="xnbSkSetLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiXnbSkSetLists, apiXnbSkSetDelete } from '@/api/xnb_sk_set'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    name: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 获取字典数据
const { dictData } = useDictData('bz_types,xy_types,status')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiXnbSkSetLists,
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
    await apiXnbSkSetDelete({ id })
    getLists()
}

getLists()
</script>

