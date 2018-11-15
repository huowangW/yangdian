<template>
	<div class="nav">
		<slot name="left"></slot>
		<slot name="conent"></slot>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default {
		name: "login"
	}
</script>

<style scoped>
	.nav {
		height: 108px;
		background: #ff9900;
		display: flex;
		justify-content: space-between;
		padding: 0 35px;
		width: 100%;
		box-sizing: border-box;
		align-items: center;
		font-size: 38px;
		letter-spacing: 2px;
	}
	
	.nav .log,
	h1 {
		color: #fff;
	}
	
	.nav .iconfont {
		font-size: 42px;
		color: #fff;
	}
</style>