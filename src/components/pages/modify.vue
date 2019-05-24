<template>
	<div class="login-wrap">
		<div class="ms-login">
			<div class="ms-title">
				<span class="sjgc">图书馆座位预约系统</span>
			</div>
			<el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				label-width="70px"
				class="demo-ruleForm"
			>
				<el-form-item label="学号" prop="studentNum">
					<el-input v-model="ruleForm.studentNum" size="big"></el-input>
				</el-form-item>
				<el-form-item label="旧密码" prop="studentPassword">
					<el-input type="password" v-model="ruleForm.studentPassword" size="big"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="newStudentPassword">
					<el-input
						type="password"
						v-model="ruleForm.newStudentPassword"
						@keyup.enter.native="submitForm('ruleForm')"
						size="big"
					></el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button type="primary" @click="submitForm('ruleForm')">修 改</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
	import { modify } from "../../api/login";
	import { setToken } from "../../utils/token";
	export default {
		data() {
			return {
				ruleForm: {
					studentNum: "",
					studentPassword: ""
				},
				rules: {
					studentNum: [
						{ required: true, message: "请输入学号", trigger: "blur" }
					],
					studentPassword: [
						{ required: true, message: "请输入旧密码", trigger: "blur" }
					],
					newStudentPassword: [
						{ required: true, message: "请输入新密码", trigger: "blur" }
					]
				}
			};
		},
		methods: {
			submitForm() {
				// login().then(res => {
				// 	console.log("res123:", res);
				// });
				let that = this;
				this.$refs["ruleForm"].validate(valid => {
					if (valid) {
						modify(this.ruleForm).then(res => {
							if (res.success == true) {
								localStorage.setItem("user", JSON.stringify(res.result));
								setToken(res.result.userDo.token);
								that.$router.push("/");
							} else {
								that.$message.error("密码修改失败");
							}
						});
					} else {
						that.$message.error("信息输入有误");
						return false;
					}
				});
			}
		},
		created() {
			console.log("route:", this.$route.name);
		}
	};
</script>
<style scoped>
	.login-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url("../../assets/images/cover.jpg");
		background-repeat: repeat;
		background-size: cover;
		clear: both;
		overflow: hidden;
	}
	.ms-login {
		position: absolute;
		left: 10%;
		top: 17%;
		width: 450px;
		height: 350px;
		padding: 20px;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.4);
	}
	.ms-title {
		position: relative;
		margin: 0 auto;
		text-align: center;
		color: #000000;
	}
	.sjgc {
		color: #606266;
		font-size: 24px;
		line-height: 50px;
	}
	.login-btn {
		text-align: center;
		margin-top: 50px;
	}
	.login-btn button {
		width: 100%;
		height: 36px;
	}
	.demo-ruleForm {
		position: relative;
		margin-top: 20px;
	}
</style>
