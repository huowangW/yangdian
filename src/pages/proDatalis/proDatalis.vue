<template>
	<div class="proDatalis" ref="proDatalis">
		<div class="header">
			<div class="top">
				<router-link to="/Classify">
					<div class="iconfont return">
						&#xe679;
					</div>
				</router-link>
				<div class="right">
						<router-link to="/shopCar" tag="span" class="iconfont ShopCart">&#xe600;</router-link>
					<span class="iconfont more">&#xe67a;</span>
				</div>
			</div>
			<banner class="banner"></banner>
		</div>
		<div class="info">
			<div class="title">
				<p>Aptamil 德国爱他美 婴儿奶粉 2段800/克 3罐装 6-10月</p>
				<div class="logo">
					<span class="iconfont">&#xe614;</span>
					<p>收藏</p>
				</div>
			</div>
			<div class="datalis">
				<div class="num">
					<p>{{price | floatNums | rnb}}</p>
					<p class="ola_price">{{olaPrice | floatNums | rnb}}</p>
				</div>
				<div class="Text">
					<ul>
						<li>6.5折</li>
						<li>包邮</li>
					</ul>
					<ol>
						<li>正品货源</li>
						<li>一件代发</li>
						<li>全球直邮</li>
						<li>售后无忧</li>
					</ol>
				</div>
			</div>
		</div>

		<div class="tab">
			<div class="title">
				<h3>
					<router-link to="/proDatalis/datalisPages">商品详情</router-link>
				</h3>
				<h3>
					<router-link to="/proDatalis/publicPraise">买家口碑</router-link>
				</h3>
			</div>
			<div class="tab_con">
				<router-view></router-view>
			</div>
			<!--<datalispages></datalispages>
			<publicpraise></publicpraise>-->
		</div>

		<div class="mask" v-show="bool">
			<div class="bg" @click="closeMask()"></div>
				<div class="bol">
					<div class="info">
						<div class="img">
							<img :src=imgUrl />
						</div>
						<div class="price">
							<span>{{price | floatNums | rnb }}</span>
							<p>库存123456件</p>
							<p>请选择商品属性</p>
						</div>
						<div @click="closeMask()" class="iconfont cancel">
							&#xe808;
						</div>
					</div>
					<div class="num">
						<p>购买数量</p>
						<div class="add_sub">
							<span @click="subClick()" class="iconfont sub">&#xe64c;</span>
							<input type="text" v-model="val" @input="onVal()" />
							<span @click="val++" class="add iconfont">&#xe615;</span>
						</div>
					</div>
					<div class="size">
						<span>大小</span>
						<ul>
							<li 
								@click="onClick(index)" 
								:class="index===on?'on':''" 
								v-for="(item,index) in size"
								:key="index"
							>{{item}}</li>
						</ul>
					</div>
					<div class="age">
						<span>年龄</span>
						<ul>
							<li 
								@click="lluninarClick(index)" 
								:class="index===lluninar?'on':''" 
								v-for="(item,index) in age" 
								:key="index"
							>{{item}}</li>
						</ul>
					</div>
					<div class="sure">
						<p>总价：<span>{{price*val | floatNums | rnb}}</span></p>
						<div class="btn">
							<button class="burch">立即购买</button>
							<button class="make" @click="sub()">确定</button>
						</div>
					</div>
				</div>
		</div>

		<div class="purchase">
			<p><b>价钱：</b><span>{{price | floatNums | rnb}}</span></p>
			<div class="btn">
				<button class="addCart" @click="showClick()">加入购物车</button>
				<button class="orderNow" @click="showClick()">立即购买</button>
			</div>
		</div>
		<div class="alert" v-show="Show">
			<p>加入购物车成功！</p>
		</div>
	</div>
</template>

<script>
	import Banner from './components/banner.vue'
	import datalisPages from './components/datalisPages.vue'
	import publicPraise from './components/publicPraise.vue'
	export default {
		name: "proDatalis",
		components: {
			Banner,
			datalisPages,
			publicPraise
		},
		data(){
			
			return{
				"Show":false,
				"olaPrice":889,
				"proTitle":"Aptamil 德国爱他美 婴儿奶粉 2段800/克 3罐装 6-10月",
				"imgUrl":require("../../images/proDatalis/evaluate.png"),
				"price":445,
				"bool":false,
				val:1,
				on:0,
				lluninar:0,
				size:["1L","2L","3L","4L"],
				age:["5岁以下","3岁以下"],
				arr:[]
			}
		},
		methods:{
			showClick(){
				this.bool=true
				this.$refs.proDatalis.className = 'proDatalis show'
//				this.click:true
			},
			closeMask(){
				this.bool=false
				this.$refs.proDatalis.className = 'proDatalis'
			},
			onClick(i){
				this.on=i
			},
			lluninarClick(i){
				this.lluninar=i
			},
			onVal(){
				let num = /^[0-9]*[1-9][0-9]*$/
				if(!num.test(this.val)){
					this.val = 1
				}
			},
			subClick(){
				if(this.val>1){
					this.val--
				}else{
					this.val=1
				}
			},
			sub(){
				this.Show=true
				let that = this
				setTimeout(function(){
					that.Show=false
				},1500)
				let proDatalis = {
					"imgUrl":this.imgUrl,
					"proTitle":this.proTitle,
					"proNums": this.val,
					"proPrice": this.price*this.val
				}
				this.arr.push(proDatalis)
				localStorage.setItem("proItems",JSON.stringify(this.arr))
				this.bool=false
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
	.proDatalis {
		padding-bottom: 98px;
	}
	.show{
		height: 1230px;
		overflow: hidden;
		position: relative;
	}
	.proDatalis .header .top {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 2;
		margin-top: 10px;
		height: 60px;
		line-height: 60px;
		display: flex;
		justify-content: space-between;
	}
	
	.proDatalis .header .top .right {
		margin-right: 28px;
		display: flex;
	}
	
	.proDatalis .header .top span {
		width: 70px;
		height: 70px;
		line-height: 70px;
		text-align: center;
		display: block;
		margin-left: 38px;
		text-align: center;
		border-radius: 50%;
		font-size: 52px;
		color: #FFFFFF;
		background: #b2b2b2;
	}
	
	.proDatalis .header .top .more {
		transform: rotate(90deg)
	}
	
	.proDatalis .header .top .return {
		width: 70px;
		height: 70px;
		line-height: 70px;
		text-align: center;
		font-size: 60px;
		background: #b2b2b2;
		color: #fff;
		border-radius: 50%;
		margin-left: 22px;
	}
	
	.banner {
		margin: 0 auto;
	}
	
	.purchase {
		background: #fff;
		width: 100%;
		border-top: 1px solid #dddddd;
		height: 98px;
		line-height: 98px;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
	}
	
	.purchase p {
		text-indent: 30px;
		font-size: 30px;
		color: #666666;
	}
	
	.purchase p span {
		color: #eb2222;
	}
	
	.purchase button {
		font-size: 30px;
		color: #fff;
	}
	
	.purchase .addCart {
		height: 98px;
		width: 200px;
		text-align: center;
		background: #ff9900;
	}
	
	.purchase .orderNow {
		height: 98px;
		width: 200px;
		text-align: center;
		background: #eb2222;
	}
	
	.title {
		padding-top: 10px;
		margin-top: 26px;
		border-top: 1px solid #eeeeee;
		height: 80px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.title>p {
		padding-left: 30px;
		/*width: 550px;*/
		padding-right: 50px;
		
		font-size: 30px;
		color: #333333;
		line-height: 40px;
	}
	
	.title .logo {
		width: 100px;
		text-align: center;
	}
	
	.title .logo p {
		font-size: 16px;
		color: #e71f19;
	}
	
	.title .logo span {
		display: block;
		font-size: 40px;
		margin-bottom: 8px;
	}
	
	.datalis {
		display: flex;
		border-bottom: 32px solid #eeeeee;
	}
	
	.datalis .num {
		width: 176px;
	}
	
	.datalis .num p {
		margin-left: 30px;
		font-size: 34px;
		color: #eb2222;
	}
	
	.datalis .num p.ola_price {
		color: #999999;
		text-decoration: line-through;
	}
	
	.datalis .Text {}
	
	.datalis .Text ul {
		display: flex;
		flex-wrap: wrap;
	}
	
	.datalis .Text ul li {
		font-size: 20px;
		color: #fff;
		background: #ff9900;
		margin-right: 20px;
		height: 30px;
		line-height: 30px;
		padding: 0 16px;
		text-align: center;
		margin-bottom: 10px;
	}
	
	.datalis .Text ol {
		display: flex;
		flex-wrap: wrap;
	}
	
	.datalis .Text ol li {
		height: 30px;
		font-size: 20px;
		color: #ff9900;
		margin-right: 15px;
		line-height: 30px;
		padding: 0 12px;
		margin-bottom: 20px;
		border: 2px solid #ff9900;
	}
	
	.tab .title {
		display: flex;
		justify-content: space-around;
		height: 86px;
		line-height: 86px;
	}
	
	.tab .title h3 {
		font-size: 26px;
		color: #999999;
	}
	
	.mask {
		/*display: none;*/
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 1334px;
		z-index: 2;
	}
	
	.mask .bg {
		height: 652px;
		background: #000000;
		opacity: 0.5;
		/*padding-top: 630px;
		/*opacity: 0.5;*/
		/*background: #fff;*/
		/*height: inherit;
		height: inherit;
		background: #000000;
		opacity: 0.5;*/
	}
	.mask .bol{
		width: inherit;
		background: #fff;
		opacity: 1;
		position: absolute;
		
	}
	.mask .info {
		display: flex;
		justify-content: center;
		padding: 0 44px;
	}
	
	.mask .info .img {
		margin-top: -30px;
		width: 216px;
		height: 216px;
		overflow: hidden;
		border: 7px solid #dddddd;
		border-radius: 6px;
	}
	
	.mask .info .img img {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.mask .info .price {
		padding-top: 60px;
		width: 310px;
		padding-left: 26px;
	}
	
	.mask .info .price span {
		font-size: 30px;
		color: #eb2222;
	}
	
	.mask .info .price p {
		line-height: 34px;
	}
	
	.mask .info .iconfont {
		width: 88px;
		padding-top: 28px;
		font-size: 60px;
		height: 60px;
	}
	.mask .num{
		padding: 0 42px;
		height: 50px;
		line-height: 50px;
		margin: 22px 0;
		display: flex;
		justify-content: space-between;
	}
	.mask .num p{
		font-size: 30px;
		color: #333333;
	}
	.mask .num span{
		font-size: 50px;
		background: #999999;
		color: #fff;
	}
	.mask .num input{
		margin-top: -23px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		width: 100px;
		border-top: 2px solid #dddddd;
		border-bottom: 2px solid #dddddd;
	}
	.mask .size{
		height: 104px;
		padding: 0 42px;
		margin-bottom: 40px;
	}
	.mask .size span{
		line-height: 70px;
	}
	.mask .size ul{
		display: flex;
	}
	.mask .size ul li{
		height: 45px;
		line-height: 45px;
		text-align: center;
		width: 120px;
		font-size: 20px;
		background: #dddddd;
		border-radius:10px ;
		margin-right: 20px;
		
	}
	.mask .size ul li.on{
		background: #ff9900;
	}
	.mask .age{
		height: 104px;
		padding: 0 42px;
		margin-bottom: 40px;
	}
	.mask .age span{
		line-height: 70px;
	}
	.mask .age ul{
		display: flex;
	}
	.mask .age ul li{
		height: 45px;
		line-height: 45px;
		text-align: center;
		width: 120px;
		font-size: 20px;
		background: #dddddd;
		border-radius:10px ;
		margin-right: 20px;
		
	}
	.mask .age ul li.on{
		background: #ff9900;
	}
	.mask .sure{
		height: 100px;
		line-height: 100px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.mask .sure p{
		margin-left: 42px;
		font-size: 30px;
		color: #666666;
		
	}
	.mask .sure p span{
		color: #eb2222;
	}
	.mask .sure .btn button{
		width: 198px;
		height: 100px;
		font-size: 30px;
		color: #fff;
	}
	.mask .sure .btn button.burch{
		background: #ff9900;
	}
	.mask .sure .btn button.make{
		background: #eb2222;
	}
	.alert{
		width: 380px;
		height: 90px;
		background: #000000;
		opacity: 0.9;
		line-height: 90px;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		z-index: 8;
		font-size: 28px;
		color: #fff;
		text-align: center;
		border-radius: 30px;
		letter-spacing: 6px;
	}
</style>