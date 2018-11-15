<template>
	<div class="register">
		<!--<div class="header">
			<div class="left iconfont">&#xe679;</div>
			<div class="conent">注册</div>
			<div class="right">登陆</div>
		</div>-->
		
		<cnNav>
			<template slot="left">
				<span class="iconfont">&#xe679;</span>
			</template>
			<template slot="conent"><h1>注册</h1></template>
			<template slot="right"><router-link class="log" to="/login">登陆</router-link></template>
		</cnNav>
		
		<div class="main">
			<form>
				<div class="box">
					<label for="tel">手机号:</label>
					<input type="tel" id="tel" >
				</div>

				<div class="box">
					<label for="psw">密码:</label>
					<input type="password" id="psw" >
				</div>
				<div class="box">
					<label for="psw">验证码:</label>
					<input type="text" >
					<img ref="codeImage" src="http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40">
				</div>

				<button class="submit" >注册</button>
				
				<div class="tips">
					<input type="checkbox">
					<p>我已阅读并同意使用条款和隐私政策</p>
				</div>
				
			</form>
		</div>
		
	</div>
</template>

<script>
	import cnNav from '@/components/Header'
	export default {
		name: "register",
		components:{
			cnNav
		}
	}
</script>

<style scoped>
	.main form {
		width: 600px;
		margin: 0 auto;
		margin-top: 130px;
	}

	.main form .box {
		height: 122px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #8f8f8f;
	}

	.main form .box label {
		font-size: 32px;
		width: 110px;
		text-align: justify;
		height: 32px;
	}

	.main form .box label::after {
		content: "";
		display: inline-block;
		width: 100%;
	}

	.main form .box .get {
		font-size: 28px;
		background: none;
		color: #fe0041;
	}

	.main form .box input {
		flex: 1;
		height: 100px;
		padding-left: 10px;
	}

	.main form .submit {
		height: 100px;
		background: #ff9900;
		width: 100%;
		font-size: 32px;
		border-radius: 10px;
		color: #fff;
		margin: 50px 0;
	}

	.main form .tips {
		display: flex;
	}

	.main form .tips input {
		margin-right: 20px;
	}

	.main form .tips p {
		font-size: 28px;
		color: #666666;
	}
	.forget{
		display: block;
		text-align: right;
		margin-top: 30px;
		font-size: 28px;
	}
</style>