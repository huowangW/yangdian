<template>
	<div class="MenuBar">
		<ul>
			<li>
				<router-link to="/">
					<span class="iconfont">&#xe624;</span>
					<span class="text">首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="/Classify">
					<span class="iconfont">&#xe617;</span>
					<span class="text">分类</span>
				</router-link>
			</li>
			<li>
				<router-link to="/ShopCar">
					<span class="iconfont">&#xe600;</span>
					<span class="text">购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to="/User">
					<span class="iconfont">&#xe60d;</span>
					<span class="text">我</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:"MenuBar"
	}
</script>
<style scoped>
.MenuBar{
	z-index: 888;
	position: fixed;
	width: 100%;
	height: 100px;
	bottom: 0;
	background: #fff;
}
.MenuBar ul{
	width: inherit;
	height: inherit;
	display: flex;
}
.MenuBar ul li{
	width: 25%;
	height: inherit;
}
.MenuBar ul li a{
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.MenuBar ul li a .iconfont{
	font-size: 38px;
}
.MenuBar ul li a .text{
	font-size: 24px;
}
.MenuBar ul li a span{
	display: block;
	margin: 7px 0;
}
.MenuBar ul li .router-link-exact-active span{
	color: #fb9b00;
}
</style>
