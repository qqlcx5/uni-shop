<template>
    <view class="ss-content product-search-content">
        <view class="search-top-fixed-clear">
            <view class="search-top-fixed">
                <view class="search-box flex-ajcenter">
                    <global-ss-input class="search-box__input flex-1" placeholder="输入搜索关键词">
                        <view class="search-box__before" slot="before">
                            <image class="search-box__before_image" src="~@/static/image/product/search.png" mode="widthFix"></image>
                        </view>
                    </global-ss-input>
                    <view class="search-box__after" @click="changeMode">
                        <image class="search-box__after_image" v-if="listMode === 'column'" src="../../static/image/product/column-icon.png" mode="widthFix"></image>
                        <image class="search-box__after_image" v-else src="../../static/image/product/row-icon.png" mode="widthFix"></image>
                    </view>
                </view>
                <view class="filter-box flex-ajcenter tc" :class="{'ss-underline': brandFlag}">
                    <view class="flex-1" @click="filterClick(1, 2)">
                        <global-colors :theme="isSelect_(1, 2) ? 't' : '#333333'">
                            <view class="filter-item">
                                综合推荐
                                <uni-icons size="32" class="filter-item__icon" :class="{'filter-item__icon_rotate180': filterIndex === 2}" type="icon-xuanzhongsanjiaoxing"></uni-icons>
                            </view>
                        </global-colors>
                    </view>
                    <view class="flex-1" @click="changeModalFlag(!brandFlag)">
                        <global-colors :theme="brandFlag ? 't' : '#333333'">
                            <view class="filter-item">品牌</view>
                        </global-colors>
                    </view>
                    <view class="flex-1" @click="filterClick(3, 3)">
                        <global-colors :theme="isSelect_(3, 3) ? 't' : '#333333'">
                            <view class="filter-item">销量</view>
                        </global-colors>
                    </view>
                    <view class="flex-1" @click="filterClick(4, 5)">
                        <global-colors :theme="isSelect_(4, 5) ? 't' : '#333333'">
                            <view class="filter-item">
                                价格
                                <uni-icons size="32" class="filter-item__icon" :class="{'filter-item__icon_rotate180': filterIndex === 5}" type="icon-xuanzhongsanjiaoxing"></uni-icons>
                            </view>
                        </global-colors>
                    </view>
                    <view class="flex-1" @click="changeModalFlag(true, 'filterFlag')">
                        <global-colors :theme="filterFlag ? 't' : '#333333'">
                            <view class="filter-item">
                                筛选
                                <uni-icons type="icon-shaixuan1" size="36" color="#333333" class="filter-item__icon filter-item__icon_big"></uni-icons>
                            </view>
                        </global-colors>
                    </view>
                </view>
            </view>
            <view class="filter-content" :class="{'filter-content__active': brandFlag}">
                <view class="brand-box">
                    <view class="brand-item" v-for="(item, index) in brandList" :key="index" @click="changeChecked(index, 'brandList')" :class="{'brand-item__active': item.checked}">
                        <global-colors :theme="item.checked ? 't' : '#333333'">
                            <uni-icons size="20" class="brand-item__icon" type="icon-dagou"></uni-icons>
                            <text>美的{{index + 1}}</text>
                        </global-colors>
                    </view>
                    <view class="flex filter-btn-gruop">
                        <view class="flex-1">
                            <button class="btn-white" @click="brand = []">重置</button>
                        </view>
                        <view class="flex-1">
                            <button class="btn-error">确定(600+件商品)</button>
                        </view>
                    </view>
                </view>
                <view class="uni-mask" @click="changeModalFlag(false)"></view>
            </view>
        </view>
        <view class="product-list-box">
            <goods-list :mode="listMode" />
        </view>
       <global-ss-modal mode="cover" position="right" v-model="filterFlag">
            <view class="filter-modal-content">
                <view class="filter-modal-box">
                    <view class="filter-modal-title">服务</view>
                    <view class="filter-modal-list">
                        <view class="filter-modal-item" :class="{'filter-modal-item__active': item.checked}" @click="changeChecked(index)" v-for="(item, index) in serveList" :key="item.value">
                            <view class="btn-disabled">{{item.label}}</view>
                        </view>
                    </view>
                </view>
                <view class="hr12"></view>
                <view class="filter-modal-box">
                    <view class="filter-modal-title">价格区间</view>
                    <view class="filter-modal-list flex">
                        <view class="filter-modal-item flex-1">
                            <ss-input class="filter-modal__input" type="price" decimal="0" v-model="lowPrice" placeholder="最低价"></ss-input>
                        </view>
                        <view class="filter-modal-item flex-1">
                            <ss-input class="filter-modal__input" type="price" decimal="0" v-model="hightPrice" placeholder="最高价"></ss-input>
                        </view>
                    </view>
                </view>
                <view class="filter-modal-btns-clear">
                    <view class="filter-modal-btns flex">
                        <view class="flex-1">
                            <button class="btn-disabled">重置</button>
                        </view>
                        <view class="flex-1">
                            <button class="btn-error">确定</button>
                        </view>
                    </view>
                </view>
            </view>
        </global-ss-modal>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                lowPrice: '',
                hightPrice: '',
                listMode: 'row',
                sortStatus: 0,
                brandList: [{
                    value: 1,
                    label: '美的1'
                }, {
                    value: 2,
                    label: '美的2'
                }, {
                    value: 3,
                    label: '美的2'
                }, {
                    value: 4,
                    label: '美的2'
                }],
                brandFlag: false, //品牌弹窗标识
                filterFlag: false,//筛选弹窗标识
                filterIndex: 0,//筛选的参数
                serveList: [{
                    value: 1,
                    label: '仅看有货'
                }, {
                    value: 2,
                    label: '促销'
                }],
            }
        },
        computed: {
            isSelect_() {
                return (min, max) => {
                    return this.filterIndex >= min && this.filterIndex <= max;
                }
            }
        },
        methods: {
            filterClick(min, max) {
                this.changeModalFlag(false, 'brandFlag');
                this.changeModalFlag(false, 'filterFlag');
                if(this.filterIndex + 1 > max){
                    this.filterIndex = 0;
                }else{
                    if(this.filterIndex < min || this.filterIndex > max){
                        this.filterIndex = min;
                    }else{
                        this.filterIndex++;
                    }
                }
            },
            /**
             * 选中函数
             * index 要修改的下标值
             * pro 要修改的对象值
             * isRadio 是否开启单选但不必选（可以取消的单选）
            */
            changeChecked(index, pro = 'serveList', isRadio = false) {
                if(!this[pro][index].checked && isRadio){
                    let oldIndex = this[pro].findIndex(o => o.checked);
                    oldIndex !== -1 && (this[pro][oldIndex].checked =  false);
                }
                this.$set(this[pro][index], 'checked', !this[pro][index].checked);
            },
            /**
             * 修改模态框显示因此状态
             * flag 模态框显示隐藏状态
             * pro 要修改的对象值
            */
            changeModalFlag(flag = true, pro = 'brandFlag') {
                this[pro] = flag;
            },
            /**
             * 展示行列切换
             */
            changeMode() {
                this.listMode = this.listMode === 'column' ? 'row' : 'column';
            }
        }
    }
</script>

<style lang="scss">
    .product-search-content{
        .filter-modal-content{
            height: 100%;
            width: 100%;
            background-color: #fff;
            .filter-modal-btns-clear{
                height: 88rpx;
                .filter-modal-btns{
                    @include fixed(null, 0, 0, 0);
                    button{
                        height: 88rpx;
                        border-radius: 0;
                        &::after {
                            display: none;
                        }
                    }
                }
            }
            .filter-modal-title, .filter-modal-item, .filter-modal-box{
                padding: 16rpx;
            }
            .filter-modal-title{
                font-weight: bold;
                color: #333333;
                line-height: 40rpx;
            }
            .filter-modal-item{
                font-weight: bold;
                text-align: center;
                display: inline-block;
                .filter-modal__input{
                    background-color: $bg-color;
                    height: 58rpx;
                    border-radius: 8rpx;
                }
                &.filter-modal-item__active{
                    .btn-disabled{
                        color: #FA3F1E;
                        background: #FFF1EF;
                        &::after{
                            border-color: #FA3F1E;
                        }
                    }
                }
                .btn-disabled{
                    font-size: 24rpx;
                    height: 58rpx;
                    width: 158rpx;
                    border-radius: 8rpx;
                    &::after{
                        border-radius: 16rpx;
                        border: 4rpx solid $bg-color;
                    }
                }
            }
        }
        .search-top-fixed-clear{
            height: 176rpx;
            background-color: #fff;
            .filter-content{
                @include fixed(var(--window-top), 0, 0, 0);
                z-index: -1;
                padding-top: 176rpx;
                opacity: 0;
                @include tst();
                .uni-mask{
                    z-index: 1;
                }
                &.filter-content__active{
                    opacity: 1;
                    z-index: 9;
                    .brand-box{
                        transform: translateY(0);
                    }
                }
                .brand-box{
                    background-color: #fff;
                    font-size: 0;
                    padding: 12rpx;
                    position: relative;
                    z-index: 2;
                    @include tst();
                    transform: translateY(-100%);
                    .filter-btn-gruop{
                        .flex-1{
                            padding: 16rpx;
                        }
                    }
                    .brand-item{
                        padding: 12rpx;
                        display: inline-block;
                        font-size: 28rpx;
                        color: #333333;
                        min-width: 33.33333333%;
                        line-height: 40rpx;
                        position: relative;
                        @include tst();
                        .brand-item__icon{
                            @include abs(50%, null, null, 0);
                            transform: translateY(-50%);
                            opacity: 0;
                            @include tst();
                        }
                        &.brand-item__active{
                            font-size: bold;
                            color: #FA3F1E;
                            padding-left: 36rpx;
                            .brand-item__icon{
                                opacity: 1;
                            }
                        }
                    }
                }
            }
            .search-top-fixed{
                background-color: inherit;
                @include fixed(var(--window-top), 0);
                width: 100%;
                z-index: 10;
                .filter-box{
                    height: 80rpx;
                    .flex-1{
                        font-size: 26rpx;
                        font-weight: 400;
                        color: #333333;
                        white-space: nowrap;
                    }
                    .filter-item__icon{
                        display: inline-block;
                        position: absolute;
                        @include tst(transform);
                        margin-left: -20rpx;
                        transform: scale(.25);
                        &.filter-item__icon_big{
                            transform: scale(.5);
                            margin-left: -10rpx;
                        }
                        &.filter-item__icon_rotate180{
                            transform: scale(.25) rotate(-180deg);
                        }
                    }
                }
            }
        }
        .product-list-box{
            background-color: #fff;
        }
        .search-box{
            background-color: #fff;
            padding: 8rpx 18rpx 24rpx 28rpx;
            .search-box__input{
                background-color: #F4F5F6;
                border-radius: 32px;
            }
            .search-box__before{
                padding-right: 16rpx;
            }
            .search-box__after{
                padding-left: 38rpx;
            }
            .search-box__after_image{
                width: 48rpx;
                height: 48rpx;
                display: block;
            }
            .search-box__before_image{
                width: 32rpx;
                height: 32rpx;
                display: block;
            }
        }
    }
</style>
