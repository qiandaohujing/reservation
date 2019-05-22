<template>
	<div id="userInfo">
		<vheader></vheader>
		<div class="maincontain">
			<el-card class="box_card">
				<div class="imgBox">
					<img src="../../assets/images/custom.png">
				</div>
				<h2>个人信息</h2>
				<div class="form">
					<el-form label-width="80px" label-position="right">
						<el-form-item label="姓名：">
							<span>Kaito</span>
						</el-form-item>
						<el-form-item label="学号：">
							<span>01</span>
						</el-form-item>
						<el-form-item label="预约：">
							<el-form>
								<el-form-item label="座位预约："></el-form-item>
								<el-form-item label="预约时间："></el-form-item>
								<el-form-item label="会议室预约："></el-form-item>
								<el-form-item label="预约时间："></el-form-item>
							</el-form>
						</el-form-item>
					</el-form>
				</div>
			</el-card>
		</div>
		<vfooter></vfooter>
	</div>
</template>

<script>
	import vheader from "../common/header";
	import vfooter from "../common/footer";
	export default {
		components: { vheader, vfooter },
		data() {
			return {};
		}
	};
</script>

<style scoped>
	#userInfo {
		width: 100%;
		background-color: #cccccc;
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
	.box_card {
		width: 500px;
		height: 550px;
		background: linear-gradient(to left, #2f49ff, #acb2fd);
		display: flex;
		justify-content: center;
	}
	.box_card h2 {
		text-align: center;
	}
	.imgBox {
		display: flex;
		justify-content: center;
	}
	.form {
		width: 500px;
	}
</style>
<style>
	.el-card {
		border: none;
	}
</style>
