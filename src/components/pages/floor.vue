<template>
	<div id="floor">
		<vheader></vheader>
		<div class="maincontain">
			<div class="item" v-for="(item, index) in imgList" :key="index">
				<div class="mask">{{ item.value }}</div>
				<img src="../../assets/images/floor.png" @click="gotoSeatRes(item)" />
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
		return {
			imgList: [
				{ value: "二楼自习区", libLevel: 1 },
				{ value: "三楼自习区", libLevel: 2 },
				{ value: "四楼自习区", libLevel: 3 }
			]
		};
	},
	methods: {
		gotoSeatRes(item) {
			this.$router.push({
				path: "/seatRes",
				name: "seatRes",
				params: { title: item.value, libLevel: item.libLevel }
			});
		}
	}
};
</script>

<style scoped>
#floor {
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
.item {
	width: 300px;
	height: 500px;
	border: 2px solid #000;
	border-radius: 15px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}
.item:hover {
	cursor: pointer;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);
}
.mask {
	width: 42px;
	height: 260px;
	font-size: 40px;
	font-weight: 700;
	position: absolute;
}
</style>
