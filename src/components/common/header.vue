<template>
	<div id="vheader">
		<div class="maincontain">
			<div class="left">
				<img src="../../assets/images/book.png">
				<span style="font-size: 25px;font-weight: 700;margin: 0 40px;color:#fff">Library</span>
			</div>
			<el-button type="primary" size="large" @click="login" v-if="!user.studentName">登 录</el-button>
			<el-dropdown v-else trigger="click" @command="handleCommand">
				<span class="el-dropdown-link">
					<div class="userLogo">
						<img src="../../assets/images/custom.png" style="width:35px;height:35px;margin-right:10px">
						你好 {{ studentName }}
						<i class="el-icon-arrow-down el-icon--right"></i>
					</div>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item divided command="modify">修改密码</el-dropdown-item>
					<el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
					<el-dropdown-item divided command="Admin">学生管理</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<!-- 学生管理入口密码弹出框 -->
		<el-dialog title="管理员身份确认" :visible.sync="showAdmin" width="30%" center>
			<el-form :model="AdminForm" label-width="130px" :rules="AdminFormRule">
				<el-form-item label="请输入管理员密码">
					<el-input type="password" v-model="AdminForm.password"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="checkTwice = false">取 消</el-button>
				<el-button type="primary" @click="gotoStudentManage">确 认</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import { manage } from "../../api/login";
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
				AdminForm: {},
				showAdmin: false,
				AdminFormRule: {
					password: [
						{ required: true, message: "请输入管理员密码", trigger: "blur" }
					]
				}
			};
		},
		methods: {
			handleCommand(command) {
				if (command == "logout") {
					localStorage.removeItem("user");
					this.$router.push("/login");
				} else if (command == "modify") {
					this.$router.push("/modify");
				} else if (command == "Admin") {
					this.showAdmin = true;
				}
			},
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
			},
			gotoStudentManage() {
				const data = {
					AdminPassword: this.AdminForm.password
				};
				manage(data).then(res => {
					if (res.success) {
						this.$router.push("/manage");
					}
				});
				this.$router.push("/manage");
			}
		},
		computed: {
			studentName() {
				let studentName = JSON.parse(localStorage.getItem("user")).userDo.name;
				return studentName;
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
