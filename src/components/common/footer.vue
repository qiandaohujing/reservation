<template>
	<div id="vfooter">
		<div class="maincontain">
			<div>
				<span class="info">Copyright 2019 ALL Rights Reserved.</span>
			</div>
			<div class="imgs">
				<img src="../../assets/images/weichat.png">
				<img src="../../assets/images/sina.png">
				<img src="../../assets/images/qq.png">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vfooter",
		data() {
			return {};
		}
	};
</script>

<style scoped>
	#vfooter {
		width: 100%;
		height: 64px;
		background-color: #594929;
		position: relative;
	}
	.maincontain {
		max-width: 1100px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		padding: 0 50px;
		justify-content: space-between;
	}
	.info {
		line-height: 64px;
		text-align: center;
		color: #ffffff;
		font-size: 15px;
	}
	.imgs img {
		margin: 0 5px;
	}
</style>
