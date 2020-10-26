<template>
    <view class="contain">
        <view class="order">
            <view class="my-order">
                <text class="uname">我的订单</text>
                <text class="flexc">查看全部<uni-icons color="#333" type="eye"/></text>
            </view>
            <view class="order-state">
                <view class="order-item">
                    <uni-icons color="#FA3F1E" size="42" type="iconkefu"/>
                    <text class="desc">待付款</text>
                </view>
                <view class="order-item">
                     <uni-icons color="#FA3F1E" size="42" type="iconkefu"/>
                    <text class="desc">待付款</text>
                </view>
                <view class="order-item">
                     <uni-icons color="#FA3F1E" size="42" type="iconkefu"/>
                    <text class="desc">余额</text>
                </view>
                <view class="order-item">
                     <uni-icons color="#FA3F1E" size="42" type="iconkefu"/>
                    <text class="desc">余额</text>
                </view>
                <view class="order-item">
                    <uni-icons color="#FA3F1E" size="42" type="iconkefu"/>
                    <text class="desc">余额</text>
                </view>
            </view>
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
.contain {
    padding: 0 20rpx;
    box-sizing: border-box;
    margin-bottom: 24rpx;
    .order {
        width: 100%;
        background: #ffffff;
        border-radius: 16px;
        padding: 0 28rpx;
        box-sizing: border-box;
        .my-order {
            height: 90rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2rpx solid #ededed;
            .uname {
                font-size: 32rpx;
                font-weight: bold;
                color: #000000;
            }
        }
    }
    .order-state {
        display: flex;
        flex-wrap: wrap;
        .order-item {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 24rpx 20rpx;
            color: #333333;
            position: relative;
            box-sizing: border-box;
            .desc{
                margin-top: 18rpx;
            }
        }
    }
}
</style>
