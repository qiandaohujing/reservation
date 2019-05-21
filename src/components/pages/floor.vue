<template>
	<div id="floor">
		<vheader></vheader>
		<div class="maincontain">
			<div class="item" @click="gotoSeatRes">
				<img src="../../assets/images/floor2.png">
			</div>
			<div class="item" @click="gotoSeatRes">
				<img src="../../assets/images/floor3.png">
			</div>
			<div class="item" @click="gotoSeatRes">
				<img src="../../assets/images/floor4.png">
			</div>
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
		},
		methods: {
			gotoSeatRes() {
				this.$router.push({
					path: "/seatRes",
					params: {}
				});
			}
		}
	};
</script>

<style scoped>
	#floor {
		width: 100%;
		height: 100%;
		background-color: #cccccc;
	}
	.maincontain {
		max-width: 1100px;
		height: calc(100% - 144px);
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	.item {
		width: 300px;
		height: 500px;
		border: 2px solid #000;
		border-radius: 15px;
		overflow: hidden;
	}
	.item:hover {
		cursor: pointer;
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
	}
</style>
