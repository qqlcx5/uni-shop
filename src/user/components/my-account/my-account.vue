<template>
    <view class="contain">
        <view class="userInfo">
            <image class="avater" src="/static/logo.png"></image>
            <view class="userInfo__content">
                <view class="userInfo__content__title">
                    <text class="text">王大大的大大</text>
                    <view class="icon">
                        <uni-icons size="40" type="iconfenxiang" />
                        <view class='dot'>23</view>
                    </view>
                    <view class="icon">
                        <uni-icons size="40" type="iconfenxiang" />
                    </view>
                </view>
                <view class="level">业主代言人</view>
            </view>
        </view>
        
        <view class="order">
            <view class="order-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
            <view class="order-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
            <view class="order-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
            <view class="order-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
        </view>
        <view class="level-box">
            <view class="level-logo">
                <image class="avater" src="/static/logo.png"></image>
                <view class="info">
                    <text class="uname">业主代言人</text>
                    <text class="desc">一站式整装供应链平台</text>
                </view>

                <view class="update">
                    立即升级 <uni-icons size="16" color='#e2aa3f' type="icontiaozhuan-liebiao" />
                </view>
            </view>
            <view class="profit">
                <view class="profit-item">
                    <text>可提现佣金</text>
                    <text class="num">9808.34</text>
                </view>
                <view class="profit-item">
                    <text>累计佣金</text>
                    <text class="num">9808.34</text>
                </view>
                <view class="profit-item">
                    <text>今天收入</text>
                    <text class="num">98.34</text>
                </view>
                <view class="profit-item">
                    <text>可提现佣金</text>
                    <text class="num">45471.00</text>
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
    padding: 24rpx;
    box-sizing: border-box;
    margin-bottom: 24rpx;
    background: linear-gradient(180deg, #fef9f8 0%, #ffe8ea 100%);
}
.userInfo {
    display: flex;
    .avater {
        width: 106rpx;
        height: 106rpx;
        margin-right: 24rpx;
        border-radius: 50%;
        flex-shrink: 0;
    }
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        &__title {
            display: flex;
            justify-content: space-between;
            font-size: 36rpx;
            font-weight: bold;
            color: #000;
            margin-bottom: 8rpx;
            .text{
                flex: 1;
                max-width: 380rpx;
                @include ellipsis();
            }
            .icon{
                margin: 0 24rpx;
                position: relative;
            }
            .dot{
                position: absolute;
                right: -50%;
                top: -50%;
                font-size: 22rpx;
                color: #FFFFFF;
                padding: 2rpx 6rpx;
                border-radius: 13rpx;
                background: #FA3F1E;
            }
        }
        .level {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40rpx;
            width: fit-content;
            background: #e2aa3f;
            border-radius: 23rpx;
            font-size: 22rpx;
            color: #ffffff;
            padding: 5rpx 10px;
            box-sizing: border-box;
        }
    }
}
.order {
    display: flex;
    .order-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 32rpx 0;
        color: #333333;
        .num {
            font-size: 36rpx;
            font-weight: bold;
            color: #000;
            margin-bottom: 16rpx;
        }
    }
}
.level-box {
    width: 100%;
    background: linear-gradient(135deg, #f6c774 0%, #e2aa3f 100%);
    border-radius: 16px 16px 0px 0px;
    padding: 0 24rpx;
    box-sizing: border-box;
    .level-logo {
        height: 100rpx;
        display: flex;
        align-items: center;
        .avater {
            width: 54rpx;
            height: 54rpx;
            margin-right: 17rpx;
            border-radius: 50%;
        }
        .info {
            flex: 1;
            font-size: 24rpx;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            .uname {
                font-size: 28rpx;
                font-weight: bold;
                color: #ffffff;
                margin-right: 8rpx;
            }
        }
        .update {
            padding: 10rpx 21rpx;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            font-size: 24rpx;
            color: #e2aa3f;
            background: #ffffff;
            border-radius: 28rpx;
        }
    }
    .profit {
        display: flex;
        font-size: 22rpx;
        color: rgba(255, 255, 255, 0.8);
        border-top: 2rpx solid rgba(255, 255, 255, 0.1);
        .profit-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 32rpx 0;

            .num {
                font-size: 36rpx;
                font-weight: bold;
                color: #fff;
                margin-top: 12rpx;
            }
        }
    }
}
</style>
