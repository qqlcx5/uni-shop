<template>
    <view class="global-colors" :style="[style_]">
        <slot></slot>
    </view>
</template>

<script>
    const colorEnum = {
        t: 'theme',
        e: 'error',
        s: 'success',
        w: 'warning',
        p: 'primary'
    }
    const proEnum = {
        c: 'color',
        bgc: 'background-color',
        bdc: 'border-color'
    }
    import {
        mapState
    } from 'vuex'
    export default {
        props: {
            //多个颜色选择  c, bgc
            pro: {
                type: String,
                 default: 'c'
            },
            //跟pro个数对应，如果只有一个则取相同,可以是颜色
            theme: {
                type: String,
                 default: 't'
            },
            active: {
                type: [String, Boolean],
                default: true
            },
            defaultConfig: {
                type: Object,
                default: () => {
                    return {
                        primary: '#007aff',
                        success: '#4cd964',
                        warning: '#f0ad4e',
                        error: '#FA3F1E',
                        theme: '#FA3F1E'
                    }
                }
            }
        },
        computed: {
            ...mapState({
                shopConfigColor_: state => state.config && state.config.shopConfig && state.config.shopConfig.colors
            }),
            colors_() {
                return this.shopConfigColor_ || this.defaultConfig
            },
            style_() {
                let pros = this.pro.split(',');
                let themes = this.theme.split(',');
                if(pros.length !== themes.length){
                    themes.length = pros.length;
                    themes.fill(themes[0]);
                }
                let style_ = {};
                pros.forEach((key, index) => {
                    let cKey = themes[index];
                    let isExit = colorEnum.hasOwnProperty(cKey);
                    style_[proEnum[key]] = isExit ? this.colors_[colorEnum[cKey]] : cKey
                })
                return style_;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .global-colors{
        /deep/ view, text{
            color: inherit;
            background-color: inherit;
            border-color: inherit;
        }
    }
</style>
