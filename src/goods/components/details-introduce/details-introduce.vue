<template>
    <view class="details-introduce">
        <view class="flex details-introduce__title">
            <view class="details-introduce-item" :class="{'active': active==='introduce'}" @click="active = 'introduce'">商品介绍</view>
            <view class="details-introduce-item" :class="{'active': active==='specs'}" @click="active = 'specs'">规格参数</view>
        </view>
        <view class="details-introduce__content" v-if="active==='introduce'">
            <image
                class="details-introduce__content_image"
                src="~@/static/logo.png"
                mode="widthFix"
            ></image>
        </view>
        <view class="details-introduce__content" v-if="active==='specs'">
            <view class="goods-specs">
                <view class="goods-specs-item">
                    <text class="goods-specs__title">已选</text>
                    <view class="goods-specs__content ss-underline">
                        <text class="goods-specs__text">12322</text>
                         <uni-icons size="24" type="icon-tiaozhuan-liebiao"/>
                    </view>
                </view>
                <view class="goods-specs-item">
                    <text class="goods-specs__title">已选</text>
                    <view class="goods-specs__content ss-underline">
                        <text class="goods-specs__text">12322</text>
                         <uni-icons size="24" type="icon-tiaozhuan-liebiao"/>
                    </view>
                </view>
                <view class="goods-specs-item">
                    <text class="goods-specs__title">已选</text>
                    <view class="goods-specs__content ss-underline">
                        <text class="goods-specs__text">12322</text>
                         <uni-icons size="24" type="icon-tiaozhuan-liebiao"/>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            active: 'introduce'
        }
    },
}
</script>
<style lang="scss">
.details-introduce {
    margin-top: 24rpx;
    .details-introduce__title {
        background-color: #fff;
        .details-introduce-item {
            width: 50%;
            padding: 20rpx 0;
            text-align: center;
            font-size: 24rpx;
            color: #333333;
            &.active {
                color: #fa3f1e;
            }
        }
    }
    .details-introduce__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        .details-introduce__content_image {
            width: 100%;
        }
    }
    .goods-specs {
        display: flex;
        flex-direction: column;
        .goods-specs-item {
            background-color: #fff;
            width: 100%;
            height: 88rpx;
            display: flex;
            align-items: center;
            .goods-specs__title {
                padding-left: 32rpx;
                width: 132rpx;
                font-size: 26rpx;
                font-weight: bold;
                color: #333333;
            }
            .goods-specs__content{
                width: 100%;
                height: 100%;
                padding-right: 24rpx;
                display: flex;
                align-items: center;
                .goods-specs__text{
                    flex: 1;
                }
            }
        }
    }
}
</style>
