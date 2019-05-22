<template>
	<div id="vheader">
		<div class="maincontain">
			<div class="left">
				<img src="../../assets/images/book.png" />
				<span style="font-size: 25px;font-weight: 700;margin: 0 40px;color:#fff"
					>Library</span
				>
			</div>
			<el-button
				type="primary"
				size="large"
				@click="login"
				v-if="!user.studentName"
				>登 录</el-button
			>
			<el-dropdown v-else trigger="click">
				<span class="el-dropdown-link">
					<div class="userLogo">
						<img
							src="../../assets/images/custom.png"
							style="width:35px;height:35px;margin-right:10px"
						/>
						你好 {{ user.studentName }}
						<i class="el-icon-arrow-down el-icon--right"></i>
					</div>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item
						><div @click="logout">退出登录</div></el-dropdown-item
					>
					<el-dropdown-item
						><div @click="modifyPassword">修改密码</div></el-dropdown-item
					>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<!-- 修改密码弹出框 -->
		<el-dialog title="修改密码" :visible.sync="showModify" width="35%" center>
			<el-form :model="modifyForm" label-width="70px" label-position="left">
				<el-form-item label="学号：" prop="studentNum">
					<el-input v-model="modifyForm.studentNum"></el-input>
				</el-form-item>
				<el-form-item label="旧密码：" prop="oldPassword">
					<el-input type="password" v-model="modifyForm.oldPassword"></el-input>
				</el-form-item>
				<el-form-item label="新密码：" prop="newPassword">
					<el-input type="password" v-model="modifyForm.newPassword"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="modifySubmit">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: "vheader",
	data() {
		return {
			user: {
				studentID: 123456,
				studentName: "Kaito",
				studentPassword: "979423879"
			},
			modifyForm: {},
			showModify: false
		};
	},
	methods: {
		login() {
			console.log("login");
		},
		logout() {
			console.log("logout");
		},
		modifyPassword() {
			this.showModify = true;
		},
		modifySubmit() {
			this.$message.success("submit");
			this.showModify = false;
		}
	}
};
</script>

<style scoped>
#vheader {
	width: 100%;
	height: 80px;
	background-color: #9b8b68;
}
.maincontain {
	max-width: 1100px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 0 50px;
	justify-content: space-between;
}
.left {
	display: flex;
	align-items: center;
}
.maincontain img {
	width: 55px;
}
.maincontain span {
	font-size: 16px;
	font-weight: 500;
}
.maincontain button {
	background-color: #594929;
	border: none;
}
.login {
	width: 90px;
	height: 35px;
	background-color: #000;
}
.el-dropdown-link {
	font-size: 14px;
	cursor: pointer;
	color: #ffffff;
}
.el-icon-arrow-down {
	font-size: 16px;
}
.userLogo {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
