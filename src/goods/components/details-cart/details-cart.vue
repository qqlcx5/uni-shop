<template>
    <view class='details-cart'>
    <view class="details-cart__fixed">
        <view class="details-cart-content">
            <view class="icon flex-ajcenter">
                <text>1</text>
                <text>客服</text>
            </view>
            <view class="icon flex-ajcenter">
                <text>1</text>
                <text>客服</text>
            </view>
            <view class="icon flex-ajcenter">
                <text>1</text>
                <text>客服</text>
            </view>
            <view class="flex details-cart__box">
                <view class="btn-error">
                    <text class="uname">分享</text>
                    <text>赚2%</text>
                </view>
                <view class="btn-error">
                    <text class="uname">加入购物车</text>
                    <text>赚2%</text>
                </view>
            </view>
        </view>
    </view>
    <view style="height:100rpx"></view>

    </view>

</template>
<style lang="scss">
.details-cart__fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    .details-cart-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .icon {
            width: 90rpx;
            height: 100rpx;
            flex-direction: column;
            background: #ffffff;
        }
        .details-cart__box{
            flex: 1;
            padding: 0 18rpx;
        }
        .btn-error {
            width: 50%;
            margin: 0 6rpx;
            background: #2c2e33;
            flex-direction: column;
            font-size: 20rpx;
            color: #FFFFFF;
            border-radius: 8rpx;
            &:last-child{
                background: #FA3F1E;
            }
            
            .uname{
                font-size: 28rpx;
                font-weight: bold;
            }
        }
    }
}
</style>
