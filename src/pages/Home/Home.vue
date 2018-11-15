<template>
	<div class="Home">

		<div class="header">
			<Search class="search"></Search>
			<banner class="banner"></banner>
		</div>

		<proList :info="proList.nat"></proList>
		<proList :info="proList.baby"></proList>
		<proList :info="proList.Beauty"></proList>
		<proList :info="proList.life"></proList>
		<proList :info="proList.food"></proList>
		<proList :info="proList.global"></proList>

		<MenuBar></MenuBar>

	</div>
</template>
<script>
	import Search from '../.././components/search.vue'
	import Banner from './components/banner.vue'
	import proList from '.././/proList.vue'
	export default {
		name: "Home",
		components: {
			Search,
			Banner,
			proList
		},
		data() {
			return {
				proList: {
					nat: {
						titleIcon: "&#xe689;",
						titleText: "今日疯抢",
						proList: [{
							proItem: [{
								id: 1,
								imgUrl: require('../.././images/home/proList01.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "美国/SUPER MILD沐 浴露500ml"
							}, {
								id: 2,
								imgUrl: require('../.././images/home/proList02.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "美国/SUPER MILD沐 浴露500ml"
							}]
						}, {

							proItem: [{
								id: 3,
								imgUrl: require('../.././images/home/proList01.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "美国/SUPER MILD沐 浴露500ml"
							}, {
								id: 4,
								imgUrl: require('../.././images/home/proList02.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "美国/SUPER MILD沐 浴露500ml"
							}]

						}]
					},
					baby: {

						titleIcon: "&#xe608;",
						titleText: "母婴专区",
						proList: [{
							proItem: [{
								id: 1,
								imgUrl: require('../.././images/home/proList03.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
							}, {
								id: 2,
								imgUrl: require('../.././images/home/proList04.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
							}]
						}, {

							proItem: [{
								id: 3,
								imgUrl: require('../.././images/home/proList03.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
							}, {
								id: 4,
								imgUrl: require('../.././images/home/proList04.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
							}]

						}]

					},
					Beauty: {

						titleIcon: "&#xe605;",
						titleText: "美妆专区",
						proList: [{
							proItem: [{
								id: 1,
								imgUrl: require('../.././images/home/proList05.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "LA ROCHE-POSAY理肤泉 疤痕..."
							}, {
								id: 2,
								imgUrl: require('../.././images/home/proList06.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "LA ROCHE-POSAY理肤泉 疤痕..."
							}]
						}, {

							proItem: [{
								id: 3,
								imgUrl: require('../.././images/home/proList05.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "LA ROCHE-POSAY理肤泉 疤痕..."
							}, {
								id: 4,
								imgUrl: require('../.././images/home/proList06.jpg'),
								new_price: 88,
								ola_price: 96,
								Text: "LA ROCHE-POSAY理肤泉 疤痕..."
							}]

						}]

					},
					life: {

						titleIcon: "&#xe604;",
						titleText: "家具生活",
						proList: [{
							proItem: [{
								id: 1,
								imgUrl: require('../.././images/home/proList07.jpg'),
								new_price: 158,
								ola_price: 199,
								Text: "法国Neolid正品 可爱动物图案扭扭杯..."
							}, {
								id: 2,
								imgUrl: require('../.././images/home/proList08.jpg'),
								new_price: 158,
								ola_price: 199,
								Text: "法国Neolid正品 可爱动物图案扭扭杯..."
							}]
						}, {

							proItem: [{
								id: 3,
								imgUrl: require('../.././images/home/proList07.jpg'),
								new_price: 1588,
								ola_price: 199,
								Text: "法国Neolid正品 可爱动物图案扭扭杯..."
							}, {
								id: 4,
								imgUrl: require('../.././images/home/proList08.jpg'),
								new_price: 158,
								ola_price: 199,
								Text: "法国Neolid正品 可爱动物图案扭扭杯..."
							}]

						}]

					},
					food: {
						titleIcon: "&#xe603;",
						titleText: "食品营养",
						proList: [{
							proItem: [{
								id: 1,
								imgUrl: require('../.././images/home/proList09.jpg'),
								new_price: 139,
								ola_price: 288,
								Text: "【纯天然淡斑法】Caudalie欧缇丽葡..."
							}, {
								id: 2,
								imgUrl: require('../.././images/home/proList10.jpg'),
								new_price: 139,
								ola_price: 288,
								Text: "【纯天然淡斑法】Caudalie欧缇丽葡..."
							}]
						}, {

							proItem: [{
								id: 3,
								imgUrl: require('../.././images/home/proList09.jpg'),
								new_price: 139,
								ola_price: 288,
								Text: "【纯天然淡斑法】Caudalie欧缇丽葡..."
							}, {
								id: 4,
								imgUrl: require('../.././images/home/proList10.jpg'),
								new_price: 139,
								ola_price: 288,
								Text: "【纯天然淡斑法】Caudalie欧缇丽葡..."
							}]

						}]

					},
					global: {
						titleIcon: "&#xe848;",
						titleText: "全球直邮",
						proList: [{
							proItem: [{
								id: 1,
								imgUrl: require('../.././images/home/proList11.jpg'),
								new_price: 108,
								ola_price: 118,
								Text: "Jacob Hooy雅歌布七叶树籽眼霜1..."
							}, {
								id: 2,
								imgUrl: require('../.././images/home/proList12.jpg'),
								new_price: 108,
								ola_price: 118,
								Text: "Jacob Hooy雅歌布七叶树籽眼霜1..."
							}]
						}, {

							proItem: [{
								id: 3,
								imgUrl: require('../.././images/home/proList11.jpg'),
								new_price: 108,
								ola_price: 118,
								Text: "Jacob Hooy雅歌布七叶树籽眼霜1..."
							}, {
								id: 4,
								imgUrl: require('../.././images/home/proList12.jpg'),
								new_price: 108,
								ola_price: 118,
								Text: "Jacob Hooy雅歌布七叶树籽眼霜1..."
							}]

						}]

					}
				}
			}
		}
	}
</script>

<style scoped>
	.Home {
		padding-bottom: 104px;
	}
	
	.header {
		width: 100%;
		height: 484px;
	}
	
	.header .search {
		position: absolute;
		z-index: 2;
		left: 0;
		right: 0;
		margin: 0 auto;
		margin-top: 30px;
	}
	
	.header .banner {
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 1;
	}
</style>