<template>
	<div id="userInfo" @click="gotoUserInfo">
		<h1>userInfo</h1>
	</div>
</template>

<script>
export default {
	name: "userInfo",
	data() {
		return {
			userInfo: {
				studentName: "Kaito",
				studentNum: "090113010272"
			}
		};
	},
	methods: {
		gotoUserInfo() {
			this.$router.push({
				path: "./userInfo"
			});
		}
	}
};
</script>

<style scoped>
#userInfo {
	width: 200px;
	height: 300px;
	border: solid 1px #ccc;
	border-radius: 5px;
	position: relative;
}
#userInfo:hover {
	cursor: pointer;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}
</style>
