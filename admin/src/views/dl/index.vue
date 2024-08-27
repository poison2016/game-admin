<template>
    <div>
        <el-card class="!border-none" shadow="never">
            <el-form ref="formRef" class="mb-[-16px]" :model="queryParams" :inline="true">
                <el-form-item label="用户信息">
                    <el-input
                        class="w-[280px]"
                        v-model="queryParams.keyword"
                        placeholder="账号/昵称/手机号码"
                        clearable
                        @keyup.enter="resetPage"
                    />
                </el-form-item>
                <el-form-item label="注册时间">
                    <daterange-picker
                        v-model:startTime="queryParams.create_time_start"
                        v-model:endTime="queryParams.create_time_end"
                    />
                </el-form-item>
               
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                    
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none mt-4" shadow="never">
            <el-table size="large" v-loading="pager.loading" :data="pager.lists">
                
                <el-table-column label="真实姓名" prop="real_name" min-width="100" />
                <el-table-column label="代理账号" prop="account" min-width="120" />
                <el-table-column label="总佣金" prop="user_money" min-width="100" />
                <el-table-column label="账号状态" prop="is_disable" min-width="100" >
					<template #default="{ row }">
					    <el-tag v-if="row.is_disable == 0">正常</el-tag>
						<el-tag v-if="row.is_disable == 1"  type="danger">禁用</el-tag>
					</template>
				</el-table-column>
                <el-table-column label="登陆状态" prop="login_status" min-width="120" >
					<template #default="{ row }">
					    <el-tag v-if="row.login_status == 1">在线</el-tag>
						<el-tag v-if="row.login_status == 0"  type="danger">下线</el-tag>
						
					</template>
				</el-table-column>
				<el-table-column label="登陆时间" prop="login_time" min-width="120" />
				<el-table-column label="注册时间" prop="create_time" min-width="120" />
				<el-table-column label="操作" width="120" fixed="right">
				    <template #default="{ row }">
				        <el-button
				            v-perms="['dl_card_config/delete']"
				            type="danger"
				            link
				            @click="handleDelete(row.id)"
				        >
				            关闭代理
				        </el-button>
				    </template>
				</el-table-column>
            </el-table>
            <div class="flex justify-end mt-4">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
    </div>
</template>
<script lang="ts" setup name="consumerLists">
import { usePaging } from '@/hooks/usePaging'
import { getRoutePath } from '@/router'
import { getUserList,closeUser } from '@/api/consumer'
import { ClientMap } from '@/enums/appEnums'
import feedback from '@/utils/feedback'
const queryParams = reactive({
    keyword: '',
    channel: '',
    create_time_start: '',
    create_time_end: '',
	is_agent:1,
})

const { pager, getLists, resetPage, resetParams } = usePaging({
    fetchFun: getUserList,
    params: queryParams
})
onActivated(() => {
    getLists()
})

// 删除
const handleDelete = async (id: number | any[]) => {
    await feedback.confirm('确定要关闭吗？')
    await closeUser({ id:id })
    getLists()
}


getLists()
</script>
