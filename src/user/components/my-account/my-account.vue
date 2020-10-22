<template>
    <view class="contain">
        <view class="my-account">
            <image class="avater" src="/static/logo.png"></image>
            <view class="user-info">
                <view class="uname">
                    <text>王大大的大大</text>
                    <view>
                        <uni-icons color="#333" size="50" type="eye" />
                        <uni-icons color="#333" size="50" type="eye" />
                    </view>
                </view>
                <view class="level">业主代言人</view>

                
            </view>
        </view>
        <view class="order">
            <view class="view-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
            <view class="view-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
            <view class="view-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
            <view class="view-item">
                <text class="num">0.00</text>
                <text>余额</text>
            </view>
        </view>
        <view class="level-logo">
            <image class="avater" src="/static/logo.png"></image>
            <view class="info">
                <text class="uname">业主代言人</text>
                <text class="desc">一站式整装供应链平台</text>
            </view>
         
            <view class="update">
                立即升级 <uni-icons color="#333" type="eye" />
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
    padding: 0 24rpx;
    margin-bottom: 24rpx;
    box-sizing: border-box;
    background: linear-gradient(180deg, #fef9f8 0%, #ffe8ea 100%);
}
.my-account {
    display: flex;
    .avater {
        width: 106rpx;
        height: 106rpx;
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
            font-size: 36rpx;
            font-weight: 500;
            color: #000;
            margin-bottom: 8rpx;
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
    .view-item {
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
.level-logo {
    width: 100%;
    height: 100rpx;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #F6C774 0%, #E2AA3F 100%);
    border-radius: 16px 16px 0px 0px;
    padding: 0 24rpx;
    box-sizing: border-box;
   
    .avater{
        width: 54rpx;
        height: 54rpx;
        margin-right: 17rpx;
        border-radius: 50%;
    }
    .info{
        flex: 1;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.7);
        .uname{
            font-size: 28rpx;
            font-weight: 500;
            color: #FFFFFF;
            margin-right: 8rpx;
        }
    }
    .update{
        padding: 10rpx 21rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 24rpx;
        color: #E2AA3F;
        background: #FFFFFF;
        border-radius: 28rpx;
    }
    
}
</style>
