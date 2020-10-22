<template>
	<view class="ss-menu-scroll-box">
		<slot name="before"></slot>
		<scroll-view class="ss-menu-scroll line-1" :class="{'ss-menu-scroll-horizontal': scrollX_}" :scroll-x="scrollX_" :scroll-y="!scrollX_" scroll-with-animation :scroll-into-view="currentView_">
			<view class="ss-menu-scroll-list" :class="['ss-menu-scroll-list-' + config.length]">
				<view class="ss-menu-scroll-item" @click="changeType(index)" :id="'type' + index" v-for="(item, index) in config" :key="item.value" :class="['ss-menu-scroll-item-' + config.length, {'ss-menu-scroll-item__active' : value === index}, {'flex-1': config.length <= 4}]">
					<text class="ss-menu-scroll-text">{{item[label]}}</text>
				</view>
			</view>
		</scroll-view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			config: {
				type: Array,
				default: () => []
			},
			value: {
				type: Number,
				default: 0
			},
			scrollX: {
				type: [ String, Boolean ],
				default: true
			},
			label: {
				type: String,
				default: 'label'
			}
		},
		computed: {
			scrollX_() {
				return String(this.scrollX) === 'false' ? false : true;
			},
			currentView_() {
				let typeIndex = this.value - 2;
				typeIndex = typeIndex < 0 ? 0 : typeIndex;
				return 'type' + typeIndex;
			}
		},
		methods: {
			changeType(index){
				console.log(index);
				if(this.value === index) return ;
				this.$emit('input', index);
			}
		}
	}
</script>

<style lang="scss" scoped>
.ss-menu-scroll-box{
	width: 100%;
	height: 100%;
	position: relative;
	.ss-menu-scroll{
		@include abs(0, 0);
		width: 100%;
		height: 100%;
	}
	
	.ss-menu-scroll-list{
		width: 100%;
	}

	.ss-menu-scroll-item{
		text-align: center;
		position: relative;
		@include ellipsis();
		display: block;
		padding: 22rpx 15rpx;
		&.ss-menu-scroll-item__active{
			.ss-menu-scroll-text{
				color: #fff;
				background: #FA3F1E;
				border-radius: 25px;
			}
		}
	}
	.ss-menu-scroll-text{
		display: block;
		font-weight:400;
		color: #666666;
		line-height:50rpx;
		height:50rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
	}
	.ss-menu-scroll-item-3{
		width: 240rpx;
	}

	.ss-menu-scroll-item-4{
		width: 180rpx;
	}
	
	.ss-menu-scroll-horizontal{
		.ss-menu-scroll-list{
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			flex-wrap: nowrap;
			padding: 0 15rpx;
			font-size: 0;
			width: 100%;
		}
		.ss-menu-scroll-list-3{
			padding: 0 40rpx;
		}
		
		.ss-menu-scroll-list-4{
			padding: 0 10rpx;
		}
		.ss-menu-scroll-item{
			display: inline-block;
		}
	}
}
</style>
