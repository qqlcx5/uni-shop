<template>
    <view class="guest-detail">
        <view class="guest-detail__title">
            <text class="ss-ellipsis-2"
                >平平无奇的89㎡，居然靠“变态细节”打动了我！平平无奇的89㎡，居然靠“变态细节”打动了我！</text
            >
        </view>
        <view class="guest-detail__desc">
            <image class="avater" src="/static/logo.png"></image>
            <view class="info">
                <text class="uname">业主代言人</text>
                <text class="desc">1872人分享</text>
            </view>

            <view class="share">
                <uni-icons size="22" color="#333" type="iconfenxiang" />
                <text class="share-text">分享</text>
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
.guest-detail {
    background-color: #fff;
    width: 100%;
    padding: 32rpx 24rpx;
    box-sizing: border-box;
    &__title {
        font-size: 38rpx;
        font-weight: bold;
        color: #333333;
        line-height: 54rpx;
        margin-bottom: 32rpx;
    }
    .guest-detail__desc {
        display: flex;
        align-items: center;
        .avater {
            width: 56rpx;
            height: 56rpx;
            margin-right: 17rpx;
            border-radius: 50%;
        }
        .info {
            flex: 1;
            font-size: 24rpx;
            color: #999999;
            .uname {
                color: #333333;
                font-size: 28rpx;
                margin-right: 8rpx;
            }
        }
        .share {
            padding: 12rpx 21rpx;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            font-size: 20rpx;
            color: #333333;
            background: #f5f5f5;
            border-radius: 22rpx;
            .share-text{
                margin-left: 12rpx;
            }
        }
    }
}
</style>
