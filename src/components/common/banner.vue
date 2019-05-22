<template>
	<div id="banner">
		<div class="maincontain">
			<div class="choose">
				<div class="left" @click="gotoFloor"></div>
				<div class="right">
					<div class="top" @click="gotoRoomRes"></div>
					<div class="bottom" @click="gotoUserInfo"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "banner",
	data() {
		return {};
	},
	methods: {
		gotoFloor() {
			this.$router.push({
				path: "/floor"
			});
		},
		gotoRoomRes() {
			this.$router.push({
				path: "/roomRes"
			});
		},
		gotoUserInfo() {
			this.$router.push({
				path: "/userInfo"
			});
		}
	}
};
</script>

<style scoped>
#banner {
	width: 100%;
	height: calc(100% - 144px);
	position: relative;
	background-color: #ccc;
}
.maincontain {
	max-width: 1100px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.choose {
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.left {
	width: 600px;
	height: 450px;
	border: 2px solid rgb(33, 4, 100);
	border-radius: 30px;
	overflow: hidden;
	background-image: url("../../assets/images/seats.png");
	margin-right: 25px;
}
.left:hover {
	cursor: pointer;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
}
.right {
	margin: 0;
	padding: 0;
}
.top {
	height: 250px;
	width: 500px;
	border: 2px solid #000;
	border-radius: 30px;
	overflow: hidden;
	margin-bottom: 20px;
	background-image: url("../../assets/images/rooms.png");
}
.top:hover {
	cursor: pointer;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
}
.bottom {
	height: 180px;
	border: 2px solid #000;
	border-radius: 30px;
	overflow: hidden;
	background-image: url("../../assets/images/self.png");
}
.bottom:hover {
	cursor: pointer;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
}
</style>
