<template>
	<view class="page">
		<view class="navTop">
			<view class="content">
				<homeSerarch :path="searchPath" :title="shopName"/>
				<tabs :tabs="classify" v-model="active" iconColor="#FA3F1E"/>
			</view>
		</view>
		<view class="banner">
			<banner :list="bannerList" />
		</view>
		<view class="matrixMenu">
			<matrixMenu :list="modelMenu" />
		</view>
		<view class="middleAd">
			<image src="@/static/home/ad.png" mode="aspectFill" />
		</view>
		<!-- 秒杀 -->
		<view class="secondsKill">
			<card title="限时秒杀" session="8点场" :timeOut="3680">
				<template slot="content">
					<timeTabs :list="session" v-model="sessionIndex"/>
					<scrollGoods :list="secondsKillGoods"/>
				</template>
			</card>
		</view>
		<!-- 爆款 -->
		<view class="secondsKill">
			<card title="热销爆款">
				<template slot="content">
					<scrollGoods :list="hotGoods" :hot="true"/>
				</template>
			</card>
		</view>
		<!-- 分类 -->
		<view class="goodsClassify">
			<tabs :tabs="classify" v-model="active" color="#333"/>
		</view>
	</view>
</template>

<script>
	import { homeSerarch } from './components/serarch'
	import { tabs } from './components/tabs'
	import { banner } from './components/banner'
	import { matrixMenu } from './components/matrixMenu'
	import { timeTabs } from './components/timeTabs'
	// import { scrollGoods } from '@/components/scroll-goods/scroll-goods'
	export default {
		components:{
			homeSerarch, tabs, banner, matrixMenu, timeTabs//, scrollGoods
		},
		data() {
			return {
				searchPath: '', // 搜素页面路径
				shopName: '我是店铺名称',
				classify: [
					{ name: '首页', path: '' },
					{ name: '家用电器', path: '' },
					{ name: '套餐包', path: '' },
					{ name: '卫浴工具', path: '' },
					{ name: '瓷砖地板', path: '' },
					{ name: '瓷砖地板', path: '' },
					{ name: '瓷砖地板', path: '' }
				],
				active: 0,
				bannerList: [
					{ path: '', src: '' },
					{ path: '', src: '' },
					{ path: '', src: '' },
					{ path: '', src: '' },
					{ path: '', src: '' },
				],
				modelMenu: [
					{ name: '家具建材', path: '', icon: '' },
					{ name: '装修攻略', path: '', icon: '' },
					{ name: '家装贷', path: '', icon: '' },
					{ name: '精选案例', path: '', icon: '' },
				],
				session: [
					{ label: '08:00' },
					{ label: '12:00' },
					{ label: '16:00' },
					{ label: '20:00' },
					{ label: '00:00' }
				],
				sessionIndex: 0,
				secondsKillGoods: [
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
				],
				hotGoods: [
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
					{ name: '潜水艇304不锈钢', price: '399.00', oldPrice: '599.00',src: '' },
				]
			}
		},
		onLoad() {},
		onShow() {
			this.init()
		},
		methods: {
			init() {
			}
		}
	}
</script>
<style>
page{
	background: #F5F5F5;
}
image{
	background: #ccc;border-radius: 4rpx;
}
</style>
<style lang="scss" scoped>
.navTop{
	height: 0;padding-bottom: calc(64.6667% - 44rpx);background: #FA3F1E;position: relative;
	&::after{
		content: '';position: absolute;bottom: -44rpx;height: 66rpx;background: #FA3F1E;border-radius: 0 0 50% 50%;display: block;left: 0;width: 100%;
	}
	.content{
		position: absolute;top: 52rpx;left: 0;width: 100%;height: calc(100% - 52rpx);
	}
}
.banner{
	width: calc(100% - 48rpx);margin: -118rpx  24rpx 0;position: relative;z-index: 20;border-radius: 16rpx;overflow: hidden;
}
.matrixMenu{
	margin: 24rpx 24rpx 0;background: #fff;border-radius: 16rpx;height: 169rpx;
}
.middleAd{
	margin: 24rpx;height: 140rpx;
	image{
		height: 100%;width: 100%;border-radius: 16rpx;
	}
}
.secondsKill{
	margin-bottom: 20rpx;
}
.goodsClassify{
	margin: 0 24rpx;
}
</style>
