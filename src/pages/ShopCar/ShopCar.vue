<template>
	<div class="ShopCar">
		<div class="header">
			<router-link tag="span" to="/proDatalis" class="iconfont">&#xe679;</router-link>
			<h1>购物车</h1>
		</div>
		
		<div class="mani">
			
			<shopCartYes v-if="Show"></shopCartYes>
			<shopCartNo v-else></shopCartNo>
		</div>
		
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import shopCartYes from './components/shoppingCartYes.vue'
	import shopCartNo from './components/shoppingCartNo.vue'
	export default {
		name:"ShopCar",
		components: {
			shopCartYes,
			shopCartNo
		},
		data(){
			return{
				"Show":true
			}
		},
		methods:{
			
		},
		mounted(){
			if(localStorage.getItem("proItems")){
				this.Show = true
			}else{
				this.Show = false
			}
		}
	}
</script>
<style scoped>
	.header{
		height: 90px;
		background: #ff9900;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 38px;
		box-sizing: border-box;
	}
	.header span{
		font-size: 42px;
		color: #fff;
	}
	.header h1{
		width: 100%;
		text-align: center;
		font-size: 42px;
		color: #fff;
	}
</style>
