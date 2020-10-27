<template>
    <view class=''>
        <view class="goods-header-tabs fixed flex-ajcenter">
            <text class="uname" :class="{'active': active === 'goods'}" @click="handleSelect('goods')">商品</text>
            <text class="uname" :class="{'active': active === 'details'}" @click="handleSelect('details')">详情</text>
            <text class="uname" :class="{'active': active === 'recommend'}" @click="handleSelect('recommend')">推荐</text>
            <uni-icons size="40" class="uname" type="icon-fenxiang"/>
        </view>
        <view style="height: 80rpx;"></view>
    </view>

    
</template>
<script>
export default {
    data() {
        return {
            active: 'goods'
        }
    },
    methods: {
        handleSelect(val){
            this.active = val
        }
    },
}
</script>
<style lang="scss" scoped>
.goods-header-tabs {
    width: 100%;
    height: 80rpx;
    background: #ffffff;
    font-size: 28rpx;
    &.fixed{
        position: fixed;
        top: var(--window-top);
        left: 0;
        z-index: 10;
    }
    .uname {
        padding: 0 28rpx;
        color: #000000;
        &.active {
            color: #fa3f1e;
            position: relative;
            &::before {
                content: "";
                position: absolute;
                bottom: -6rpx;
                left: 50%;
                transform: translateX(-50%);
                width: 40rpx;
                height: 4rpx;
                background: #fa3f1e;
            }
        }
    }
}
</style>
