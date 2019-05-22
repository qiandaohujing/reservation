<template>
	<div id="banner">
		<div class="maincontain">
			<div class="choose">
				<div class="left" @click="gotoFloor">
					<img src="../../assets/images/seats.png">
				</div>
				<div class="right">
					<div class="top" @click="gotoRoomRes">
						<img src="../../assets/images/rooms.png">
					</div>
					<div class="bottom" @click="gotoUserInfo">
						<img src="../../assets/images/self.png">
					</div>
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
		align-items: center;
	}
	.choose {
		width: 100%;
		height: 500px;
		display: flex;
	}
	.left {
		min-width: 600px;
		border: 2px solid rgb(33, 4, 100);
		border-radius: 30px;
		overflow: hidden;
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
		height: 267px;
		border: 2px solid #000;
		border-radius: 30px;
		overflow: hidden;
		margin-bottom: 25px;
	}
	.top:hover {
		cursor: pointer;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
	}
	.bottom {
		height: 200px;
		border: 2px solid #000;
		border-radius: 30px;
		overflow: hidden;
		/* margin: 10px; */
	}
	.bottom:hover {
		cursor: pointer;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
	}
</style>
