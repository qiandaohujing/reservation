<template>
	<div id="vheader">
		<div class="maincontain">
			<img src="../../assets/images/book.png">
			<span>Library</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vheader",
		data() {
			return {};
		}
	};
</script>

<style scoped>
	#vheader {
		width: 100%;
		height: 80px;
		background-color: #9b8b68;
	}
	.maincontain {
		max-width: 1100px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		padding: 0 50px;
		justify-content: left;
	}
	.maincontain img {
		width: 55px;
	}
	.maincontain span {
		font-size: 25px;
		font-weight: 700;
		margin: 0 40px;
	}
</style>
