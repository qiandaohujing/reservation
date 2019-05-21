<template>
	<div id="homePage">
		<vheader></vheader>
		<banner></banner>
		<vfooter></vfooter>
	</div>
</template>

<script>
	import vheader from "./common/header";
	import banner from "./common/banner";
	import vfooter from "./common/footer";
	export default {
		components: { vheader, vfooter, banner },
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
	}
</style>
