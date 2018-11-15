<template>
	<div class="Banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="item in imgList" :key="item.id">
				<img :src="item.img"/>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		name: "Banner",
		data() {
			return {
				imgList: [{
					id: 0,
					img: require('@/images/proDatalis/banner.png')
				}, {
					id: 1,
					img: require('@/images/proDatalis/banner.png')
				}, {
					id: 2,
					img: require('@/images/proDatalis/banner.png')
				}],
				swiperOption:{
					pagination: {
						el: '.swiper-pagination'
					},
					autoplay:{
						stopOnlastSlide:true,
						delay:1000,
						disableOnInteraction: false
					},
					loop:true
				},
				swiperSlides: [1, 2, 3]
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style scoped>
	.Banner{
		width: 750px;
		height: 542px;
	}
	.Banner img {
		display: block;
		width: 750px;
		height: 542px;
	}
	.Banner >>> .swiper-pagination-bullet{
		width: 24px;
		height: 24px;
		display: inline-block;
		background: #fff;
		opacity: 1;
	}
	.Banner >>> .swiper-pagination-bullet-active{
		background: #ff9900;
	}
</style>