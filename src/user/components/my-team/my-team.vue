<template>
    <view class="contain">
        <view class="order">
            <view class="my-order">
                <text class="uname">我的团队</text>
                <!-- <text class="flexc">查看全部<uni-icons color="#333" type="eye"/></text> -->
            </view>
            <view class="">
                <view class="my-account">
                    <image class="avater" src="/static/logo.png"></image>
                    <view class="user-info">
                        <view class="uname">
                            <text>王大大的大大</text>
                            <view class="copy">复制微信</view>
                        </view>
                        <view class="desc"
                            >为你的专属导师，赶紧和导师“约”起来吧！</view
                        >
                    </view>
                </view>
            </view>
        </view>
        <!-- 我的XX -->
        <view class="order">
            <view class="my-order">
                <text class="uname">我的XX</text>
                <!-- <text class="flexc">查看全部<uni-icons color="#333" type="eye"/></text> -->
            </view>
            <view class="order-state">
                <view class="order-item">
                    <uni-icons color="#333" size="60" type="eye" />
                    <text>待付款</text>
                </view>
                <view class="order-item">
                    <uni-icons color="#333" size="60" type="eye" />
                    <text>待付款</text>
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
        &:first-child {
            margin-bottom: 24rpx;
        }
        .my-order {
            height: 90rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1rpx solid #ededed;
            .uname {
                font-size: 32rpx;
                font-weight: 500;
                color: #000000;
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
                padding: 32rpx 0;
                color: #333333;
                position: relative;
                .num {
                    font-size: 36rpx;
                    font-weight: bold;
                    color: #000;
                    margin-bottom: 16rpx;
                }
            }
        }
    }
    .my-account {
        display: flex;
        padding: 24rpx 0;
        .avater {
            width: 80rpx;
            height: 80rpx;
            margin-right: 24rpx;
            border-radius: 50%;
        }
        .user-info {
            display: flex;
            flex-direction: column;
            // justify-content: center;
            flex: 1;
            .uname {
                display: flex;
                justify-content: space-between;
                font-weight: 500;
                color: #000;
                margin-bottom: 8rpx;
                font-size: 28rpx;
                .copy {
                    background: #09cf67;
                    border-radius: 4rpx;
                    border: 1rpx solid #04a954;
                    font-size: 20rpx;
                    padding: 6rpx 16rpx;
                    box-sizing: border-box;
                    color: #fff;
                }
            }
            .desc {
                font-size: 24rpx;
                color: #666666;
            }
        }
    }
}
</style>
