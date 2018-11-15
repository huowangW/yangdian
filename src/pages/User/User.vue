<template>
	<div class="User">
		<cnNav>
			<template slot="left">
				<span class="iconfont">&#xe61c;</span>
			</template>
			<template slot="conent">
				<h1>个人中心</h1>
			</template>
			<template slot="right"><router-link class="log iconfont" to="/">&#xe642;</router-link></template>
		</cnNav>
		<div class="main">
			<div class="bg"></div>
			<div class="collection">
				<p><span class="iconfont">&#xe633;</span>我的收藏</p>
			</div>
		</div>
		<div class="portrait">
			<div class="img">
				<img src="../../images/classify/classify06.png"/>
			</div>
			<button>点击登录</button>
		</div>
		<div class="myOrder">
			<div class="title">
				<h3>
					<span class="my">我的订单</span>
					<span class="whole">查看全部订单</span>
				</h3>
			</div>
			<div class="list">
				<ul>
					<li><span class="iconfont">&#xe649;</span> <p class="text">待付款</p></li>
					<li><span class="iconfont">&#xe69e;</span> <p class="text">待发货</p></li>
					<li><span class="iconfont">&#xe626;</span> <p class="text">待收货</p></li>
					<li><span class="iconfont">&#xe66d;</span> <p class="text">待评价</p></li>
					<li><span class="iconfont">&#xe666;</span> <p class="text">退款/售后</p></li>
				</ul>
			</div>
		</div>
		<div class="address">
			<router-link to="/">收货地址管理</router-link>
		</div>
		<MenuBar></MenuBar>	
	</div>
</template>
<script>
	import cnNav from '../.././components/Header.vue'
	export default {
		name:"User",
		components: {
			cnNav
		}
	}
</script>
<style scoped>
	.bg{
		width: 100%;
		height: 246px;
		background: #ff9900;
	}
	.collection{
		height: 262px;
		border-bottom: 14px solid #efeeee;
		display: flex;
		align-items: flex-end;
	}
	.collection p{
		margin-left: 24px;
		line-height: 130px;
		font-size: 34px;
		color: #333333;
	}
	.collection p span{
		color: #ee6b68;
		font-size: 40px;
	}
	.portrait{
		height: 300px;
		width: 240px;
		position: absolute;
		top: 220px;
		left: 0;
		right: 0;
		margin: auto;
	}
	.portrait .img{
		margin: 0 auto;
		width: 208px;
		height: 208px;
		background: #e6dfdf;
		border: 12px solid #fff;
		border-radius: 50%;
	}
	.portrait .img img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.portrait button{
		width: 100%;
		height: 68px;
		background: #fff;
		font-size: 32px;
		color: #333333;
	}
	.myOrder{
		height: 312px;
		border-bottom: 14px solid #efeeee;
	}
	.title h3{
		width: 100%;
		
		height: 124px;
		border-bottom: 1px solid #b3b3b3;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title .my{
		padding-left: 45px;
		font-size: 34px;
		color: #333333;
	}
	.title .whole {
		font-size: 34px;
		color: #999999;
	}
	.list ul{
		height: 188px;
		display: flex;
		justify-content: space-around;
		align-items: center ;
	}
	.list ul li{
		text-align: center;
	}
	.list ul li .iconfont{
		font-size: 52px;
		color: #aaaaaa;
	}
	.list ul li p{
		line-height: 88px;
		font-size: 24px;
		color: #666666;
	}
	.address{
		padding-left: 45px;
		font-size: 34px;
		color: #999999;
		height: 129px;
		line-height: 129px;
		border-bottom: 128px solid #f3f3f3;
	}
</style>
