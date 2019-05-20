<template>
	<div id="homePage">
		<user-info></user-info>
		<seat-res></seat-res>
		<room-res></room-res>
	</div>
</template>

<script>
import userInfo from "./common/userInfo";
import seatRes from "./common/seatReservation";
import roomRes from "./common/roomReservation";
export default {
	components: { userInfo, seatRes, roomRes },
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped>
#homePage {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
}
</style>
