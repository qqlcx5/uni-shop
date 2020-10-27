<template>
    <view class="caseDetails">
        <goods-details-swiper></goods-details-swiper>
        <view class="caseDetails__title">
            <view class="flex justify-between">
                <text class="uname">经济-美式-84㎡-简约</text>
                <uni-icons size="40" color="#333" type="icon-fenxiang" />
            </view>
            <view class="flex mt24">
                <text class="tag">4居室</text>
                <text class="tag">84㎡</text>
                <text class="tag">美式田园</text>
                <text class="tag">170000元</text>
            </view>
            <view class="caseDetails__local mt24">
                <image class="avater" src="/static/logo.png"></image>
                <tex class="content">龙庭华府</tex>
                <uni-icons size="18" color="#333" type="icon-tiaozhuan-liebiao" />
            </view>
        </view>
        <view class='caseDetails__user flex mt24'>
            <image class="avater" src="/static/logo.png"></image>
            <view class='content'>
                <text class="uname">王大大</text>
                <text>福建省</text>
            </view>

        </view>
        <view class='caseDetails__image mt24'>
            <view class="title">3D全景</view>
            <image class="image mt24" src="/static/logo.png"></image>
            <view class="title mt40">客厅</view>
            <image class="image mt24" src="/static/logo.png"></image>
        </view>
        <view class="details-cart__fixed">
            <view class="btn-error">
                加入购物车
            </view>
            <view style="height:100rpx"></view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    onLoad() {},
    onShow() {},
    methods: {}
};
</script>
<style lang="scss">

.caseDetails {
    .caseDetails__title {
        width: 100%;
        padding: 24rpx;
        box-sizing: border-box;
        background-color: #fff;
       
        .uname {
            font-size: 32rpx;
            font-weight: bold;
            color: #333333;
        }
        .tag {
            font-size: 24rpx;
            color: #43548f;
            margin: 0 10rpx;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                right: -10rpx;
                top: 50%;
                height: 28rpx;
                transform: translateY(-50%);
                width: 1rpx;
                display: block;
                background-color: #43548f;
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    &__local {
        width: 100%;
        background: #ffffff;
        box-shadow: 0px 0px 9rpx 0px rgba(0, 0, 0, 0.04);
        border-radius: 16rpx;
        display: flex;
        align-items: center;
        padding: 24rpx;
        box-sizing: border-box;
        .avater {
            width: 64rpx;
            height: 64rpx;
            margin-right: 24rpx;
            flex-shrink: 0;
            border-radius: 50%;
        }
        .content{
            flex: 1;
        }
    }
    &__user{
        padding: 24rpx;
        box-sizing: border-box;
        background-color: #fff;
        
        .avater {
            width: 70rpx;
            height: 70rpx;
            margin-right: 24rpx;
            flex-shrink: 0;
            border-radius: 50%;
        }
        .content{
            font-size: 22rpx;
            color: #999999;
            flex: 1;
            display: flex;
            flex-direction: column;
            
            .uname{
                font-size: 28rpx;
                color: #333333;
            }
        }
        
    }
    &__image{
        padding: 24rpx;
        box-sizing: border-box;
        background-color: #fff;
        width: 100%;
        .title{
            font-size: 32rpx;
            font-weight: bold;
            color: #333333;
            margin-top: 40rpx;
            &:first-child{
                margin-top: 0;
            }
        }
        .image{
            width: 100%;
            background: #D8D8D8;
        }
    }
}
</style>
