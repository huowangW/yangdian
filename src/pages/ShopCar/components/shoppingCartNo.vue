<template>
	<div class="shopCartNo">
		<div class="main">
			<span class="iconfont">&#xe600;</span>
			<p>购物车还是空的</p>
			<p>快去逛逛吧~</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"shopCartNo"
	}
</script>

<style scoped>
	.main {
		text-align: center;
		height: 216px;
		width: 232px;
		position:absolute ;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.main span{
		font-size: 132px;
		color: #333333;
	}
	.main p{
		font-size: 32px;
		color: #333333;
		line-height: 50px;
	}
</style>