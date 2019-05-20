<template>
	<div id="roomRes" @click="gotoRoomRes">
		<h1>roomRes</h1>
	</div>
</template>

<script>
export default {
	name: "roomRes",
	data() {
		return {
			userInfo: {
				studentName: "Kaito",
				studentNum: "090113010272"
			}
		};
	},
	methods: {
		gotoRoomRes() {
			this.$router.push({
				path: "/roomRes"
			});
		}
	}
};
</script>

<style scoped>
#roomRes {
	width: 200px;
	height: 300px;
	border: solid 1px #ccc;
	border-radius: 5px;
	position: relative;
}
#roomRes:hover {
	cursor: pointer;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}
</style>
