<template>
	<div class="login">

		<!--<div class="left iconfont">&#xe679;</div>
			<div class="conent">登陆</div>
			<div class="right">注册</div>-->
		<cnNav>
			<template slot="left">
				<span class="iconfont">&#xe679;</span>
			</template>
			<template slot="conent">
				<h1>登陆</h1></template>
			<template slot="right"><router-link class="log" to="/register">注册</router-link></template>
		</cnNav>
		<div class="main">
			<form method="post">
				<div class="box">
					<label>手机号：</label>
					<input type="text" />
				</div>
				<div class="box">
					<label>密码：</label>
					<input type="password" />
				</div>
				<p>忘记密码</p>
				<input type="submit" value="登录" />
			</form>
		</div>
	</div>
</template>

<script>
	import cnNav from '@/components/Header.vue'
	export default {
		name: "login",
		components: {
			cnNav
		}
	}
</script>

<style scoped>
	.main {
		height: 462px;
		width: 600px;
		margin: 0 auto;
	}
	
	.main form {
		margin-top: 195px;
	}
	
	.main form .box {
		height: 130px;
		display: flex;
		align-items: center;
		border-bottom: 2px solid #a3a3a3;
	}
	
	.main form .box label {
		width: 140px;
		text-align: justify;
		font-size: 32px;
		color: #333333;
		height: 34px;
	}
	
	.main form .box label::after {
		content: "";
		display: inline-block;
		width: 100%;
	}
	
	.main form .box input {
		font-size: 32px;
		color: #333333;
		height: 120px;
		line-height: 120px;
		padding-left: 8px;
	}
	.main form p{
		line-height: 100px;
		font-size: 28px;
		color: #666666;
		text-align: right;
	}
	.main form > input{
		height: 100px;
		font-size: 38px;
		background: #ff9900;
		color: #fff;
		width: 100%;
		border-radius: 10px;
	}
</style>