<template>
	<div id="manage">
		<vheader></vheader>
		<div class="maincontain">
			<el-card class="box-card" style="width:100%">
				<el-table :data="tableData" style="width:100%" border>
					<el-table-column type="index" label="序号" align="center"/>
					<el-table-column prop="studentName" label="姓名" align="center"/>
					<el-table-column prop="studentNum" label="学号" align="center"/>
					<el-table-column prop="studentPassword" label="密码" align="center"/>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button size="small" type="primary" @click="editRole(scope.row)">编辑</el-button>
							<el-button size="small" type="danger" @click="deleteRole(scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-card>
		</div>
		<vfooter></vfooter>
	</div>
</template>

 <script>
	import vheader from "../common/header";
	import vfooter from "../common/footer";
	import { editRole } from "../../api/user";
	import { deleteRole } from "../../api/user";
	export default {
		components: { vheader, vfooter },
		data() {
			return {
				tableData: [
					{
						studentName: "Kaito",
						studentNum: "123456",
						studentPassword: "888888"
					},
					{
						studentName: "Guldan",
						studentNum: "123456",
						studentPassword: "888888"
					}
				]
			};
		},
		methods: {
			editRole(row) {
				console.log(row);
			},
			deleteRole(row) {
				console.log(row);
			}
		}
	};
</script>
 
 <style scoped>
	#seatRes {
		width: 100%;
		/* background-color: #cccccc; */
	}
	.maincontain {
		max-width: 1100px;
		min-height: calc(100vh - 144px);
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
</style>
 