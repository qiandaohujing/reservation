<template>
	<div id="vheader">
		<div class="maincontain">
			<div class="left">
				<img src="../../assets/images/book.png">
				<span>Library</span>
			</div>
			<el-button type="primary" size="large" @click="login" v-if="!user.studentName">登 录</el-button>
			<el-dropdown v-else>
				<span class="el-dropdown-link">
					下拉菜单
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>黄金糕</el-dropdown-item>
					<el-dropdown-item>狮子头</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
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
				}
			};
		},
		methods: {
			login() {
				console.log("login");
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
		font-size: 25px;
		font-weight: 700;
		margin: 0 40px;
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
		cursor: pointer;
		color: #409eff;
	}
	.el-icon-arrow-down {
		font-size: 12px;
	}
</style>
