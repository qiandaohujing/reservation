<template>
	<div id="seatRes" @click="gotoSeatRes">
		<h1>seatRes</h1>
	</div>
</template>

<script>
export default {
	name: "seatRes",
	data() {
		return {
			userInfo: {
				studentName: "Kaito",
				studentNum: "090113010272"
			}
		};
	},
	methods: {
		gotoSeatRes() {
			this.$router.push({
				path: "/seatRes"
			});
		}
	}
};
</script>

<style scoped>
#seatRes {
	width: 200px;
	height: 300px;
	border: solid 1px #ccc;
	border-radius: 5px;
	position: relative;
}
#seatRes:hover {
	cursor: pointer;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}
</style>
