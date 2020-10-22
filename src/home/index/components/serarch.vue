<template>
    <view class="search">
        <view class="headPortrait">
            <image :src="headerImg" mode="aspectFill" />
            <view class="name">
                <text>{{title}}</text>
            </view>
        </view>
        <view class="input" @tap="jump">
            <image src="@/static/home/search.png" mode="heightFix"/>
            <text>请输入搜索关键词</text>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        path: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        headerImg: {
            type: String,
            default: null
        }
    },
    methods: {
        jump(){
            if (!this.path) {
                console.log('未传递搜索路径')
                return
            }
            uni.navigateTo({
                url: this.path
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.search{
    padding: 0 24rpx;
    .headPortrait{
        height: 64rpx;display: flex;
        image{
            height: 64rpx;border-radius: 8rpx;width: 64rpx;background: #ccc;
        }
        .name{
            color: #fff;font-size: 36rpx;padding: 0 16rpx;line-height: 64rpx;height: 64rpx;font-weight: 500;
        }
    }
    .input{
        height: 64rpx;border-radius: 32rpx;background: #fff;display: flex;align-items: center;color: #B8B8B8;font-size: 26rpx;margin-top: 24rpx;
        image{
            height: 26rpx;margin: 0 16rpx 0 22rpx;
        }
    }
}
</style>
