<template>
	<div class="proList">
		<h3>
			<span class="iconfont logo" v-html="titleIcon"></span>
			<span class="title">{{titleText}}</span>
		</h3>
		<swiper :options="swiperOption" tag="ul" class="proList-ul">
			<!-- slides -->
			<swiper-slide 
				tag="li" 
				class="proList-li"
				v-for="(items,index) in proList"
				:key="index"
			>
				<ul>
					<li v-for="item in items.proItem" :key="item.id">
						<div class="img">
							<img :src="item.imgUrl" />
						</div>
						<div class="price">
							<span class="new_price">{{item.new_price | floatNums | rnb }}</span>
							<span class="ola_price">{{item.ola_price | floatNums |rnb }}</span>
						</div>
						<p>
							{{item.Text | ellipsis }}
						</p>
					</li>
					
				</ul>
			</swiper-slide>

		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: "proList",
		props:["info"],
		data() {
			return {
				swiperOption: {},
				proList:this.info.proList,
				titleIcon:this.info.titleIcon,
				titleText:this.info.titleText
			}
		},
		components: {
			swiper,
			swiperSlide
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
	/*.proList {
		height: 470px;
		width: 750px;
	}*/
	
	.proList h3 {
		height: 94px;
		line-height: 94px;
		padding-left: 22px;
	}
	
	.proList h3 .logo {
		font-size: 42px;
		margin-right: 20px;
		color: #ff9900;
	}
	
	.proList h3 .title {
		font-size: 28px;
		color: #333333;
	}
	.proList ul{
		display: flex;
		justify-content: space-around;
	}
	.proList ul li{
		border: 1px solid;
		width: 326px;
		height: 484px;
		margin: 0 12px;
	}
	.proList .img{
		width: 326px;
		position: relative;
		padding-bottom: 100%;
	}
	.proList .img img{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		/*width: 100%;*/
		height: 100%;
	}
	.proList .price{
		height: 60px;
		line-height: 60px;
		display: flex;
		justify-content: space-around;
	}
	.proList .new_price{
		font-size: 28px;
		color: #e60012;
	}
	.proList .ola_price{
		font-size: 28px;
		color: #333333;
		text-decoration: line-through;
	}
	.proList ul li p{
		font-size: 28px;
		color: #666666;
		line-height: 45px;
		margin-left: 16px;
		margin-right: 40px;
	}
</style>