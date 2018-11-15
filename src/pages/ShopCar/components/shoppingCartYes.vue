<template>
	<div class="shoppCartYes">
		<div class="main">
			<ul>
				<li>
					<h2>
						<span class="iconfont">&#xe622;</span>
						<p>杭州保税区仓</p>
					</h2>
					<div class="main">

						<div class="info">
							<label>
									<u @click="isChecked=!isChecked" :class="isChecked=true?'on':unll"></u>
									<input type="checkbox" checked="isChecked" />
							</label>
							<img src="../../../images/proDatalis/evaluate.png" />
							<div class="mes">
								<h3>ChildLife/童年时光婴幼...</h3>
								<div class="add_sub">
									<span @click="sub()" class="iconfont add">&#xe610;</span>
									<input @input="nums()" type="text" v-model="val" />
									<span @click="val++" class="iconfont sub">&#xe60a;</span>
								</div>
							</div>
							<div class="num">
								{{price | rnb}}
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "shoppCartYes",
		data(){
			return{
				"val":1,
				"isChecked":false,
				"price":118
			}
		},
		methods: {
			sub(){
//				let a = /^[0-9]*[1-9][0-9]*$/
				if(this.val>1){
					this.val--
				}else{
					this.val = 1
				}
			},
			nums(){
				let num = /^[0-9]*[1-9][0-9]*$/
				if(!num.test(this.val)){
					this.val = 1
				}
			}
		},
		filters:{
			floatNums(val){
				return val.toFixed(2)
			},
			rnb(val){
				return  "￥" +val
			},
			ellipsis(val){
				const num = 20
				if(val.length>num){
					return val.substring(0 ,num) + "..."
				}
			}
		}
	}
</script>

<style scoped>
	.shoppCartYes ul li {
		/*margin-top: 36px;*/
		align-items: center;
	}
	
	.shoppCartYes ul li h2 {
		height: 120px;
		align-items: center;
		display: flex;
		padding-left: 38px;
	}
	
	.shoppCartYes ul li h2 span {
		font-size: 40px;
		color: #999999;
		margin-right: 24px;
	}
	
	.shoppCartYes ul li h2 p {
		font-size: 28px;
		color: #999999;
	}
	.shoppCartYes ul li .main .info{
		padding-left: 26px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.shoppCartYes ul li .main .info label u{
		display: block;
		width: 42px;
		height: 42px;
		background: url(../../../images/shoppingCart/check_none.png) repeat scroll top left;
		background-size: 42px 42px;
	}
	.shoppCartYes ul li .main .info label u.on{
		background: url(../../../images/shoppingCart/check.png) repeat scroll top left;
		background-size: 42px 42px;
	}
	.shoppCartYes ul li .main .info img{
		display: block;
		margin-left: 22px;
		width: 157px;
		height: 157px;
	}
	.shoppCartYes ul li .main .info .mes{
		height: 157px;
		padding-left: 22px;
	}
	.shoppCartYes ul li .main .info h3{
		font-size: 32px;
		color: #333333;
		line-height: 48px;
		width: 300px;
		margin-bottom: 12px;
	}
	.shoppCartYes ul li .main .info .mes .add_sub{
		width: 248px;
		height: 46px;
		line-height: 48px;
		border: 2px solid #cccccc; 
	}
	.shoppCartYes ul li .main .info .mes .add_sub input{
		width: 80px;
		text-align: center;
		margin-top: -22px;
		border-left: 2px solid #cccccc;
		border-right: 2px solid #cccccc;
		height: 48px;
	}
	.shoppCartYes ul li .main .info .mes .add_sub .add{
		width: 78px;
		padding: 0 20px;
		color: #666666;
		font-size: 42px;
	}
	.shoppCartYes ul li .main .info .mes .add_sub .sub{
		width: 78px;
		font-size: 42px;
		padding: 0 20px;
		font-size: 42px;
		color: #666666;
	}
	.shoppCartYes ul li .main .info .num{
		width: 150px;
		text-align: center;
		font-size: 32px;
		color: #000000;
	}
</style>