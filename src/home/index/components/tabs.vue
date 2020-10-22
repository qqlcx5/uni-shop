<template>
    <view class="tabs">
        <view class="right">
            <scroll-view :scroll-x="true" :scroll-left="scrollLeft > containerWidth / 4 ? scrollLeft : 0" class="scrollView" :scroll-with-animation="true">
                <view class="item" v-for="(item, index) in tabs" :key="index" :class="{active: index === active}" :style="{color: color}" @tap="jump(item.path,index)">
                    <text>{{item.name}}</text>
                </view>
            </scroll-view>
        </view>
        <view class="left">
            <view class="icon">
                <view class="bar" />
                <view class="bar" />
                <view class="bar" />
            </view>
            <view class="text" :style="{color: color}">
                <text>分类</text>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        tabs: {
            type: Array,
            default(){
                return []
            }
        },
        value: {
            type: Number, // 选中值
            default: 0
        },
        color: {
            type: String,
            default: '#fff'
        }
    },
    computed: {
        active: {
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
            }
        },
        scrollLeft: {
            get(){
                return this.value*this.itemLength
            }
        }
    },
    data() {
        return {
            containerWidth: '',
            itemLength: 0
        }
    },
    methods: {
        jump(url,index){
            this.active = index
            if (!url) {
                return
            }
            uni.navigateTo({
                url
            })
        },
        // 获取左移动位置
        getTabItemWidth() {
            let query = uni.createSelectorQuery()
                // #ifndef MP-ALIPAY
                .in(this)
                // #endif
            // 获取容器的宽度
            query.select('.tabs .right').boundingClientRect((data) => {
                if (!this.containerWidth && data) {
                    this.containerWidth = data.width
                }
                }).exec()
            // 获取所有的 tab-item 的宽度
            
            query.selectAll('.tabs .right .item').boundingClientRect((data) => {
                for (let i = 0; i < data.length; i++) {
                    const item = data[i]
                    if (!this.itemLength || this.itemLength > item.width ) {
                        this.itemLength = item.width
                    }
                }
            }).exec()
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.getTabItemWidth()
        })
    }
}
</script>
<style lang="scss" scoped>
.tabs{
    display: flex;align-items: center;justify-content: space-between;height: 88rpx;
    .right{
        height: 32rpx;font-size: 0;line-height: 32rpx;position: relative;white-space: nowrap;width: calc(100% - 133rpx);
        .scrollView{
            height: 60rpx;
        }
        .item{
            font-size: 28rpx;display: inline-block;margin: 0 20rpx;position: relative;
        }
        .item.active{
            font-weight: bold;font-size: 32rpx;
        }
        .item.active::after{
            content: '';display: block;width: 30rpx;height: 13rpx;position: absolute;bottom: -18rpx;left: 50%;margin-left: -15rpx;background: url('@/static/home/active.png') no-repeat center center;background-size: 100% auto;
        }
    }
    .left{
        width: 93rpx;background: #FA3F1E;font-size: 28rpx;padding: 0 20rpx;display: flex;justify-content: space-between;align-items: center;height: 32rpx;line-height: 32rpx;
        .icon{
            width: 22rpx;height: 24rpx;
            .bar{
                width: 100%;height: 4rpx;border-radius: 2rpx;background: #fff;margin-top: 6rpx;
            }
            .bar:nth-child(1){
                margin-top: 0;
            }
        }
    }
}
</style>
