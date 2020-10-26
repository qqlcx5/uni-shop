<template>
    <view style="border-color: red;">
        <slot></slot>
    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        props: {
            pro: {
                type: String,
                 default: 'color'
            },
            theme: {
                type: String,
                 default: 'error'
            },
            active: {
                type: [String, Boolean],
                default: true
            },
            defaultConfig: {
                type: Object,
                default: () => {
                    return {
                        selColors: {
                            primary: '#007aff',
                            success: '#4cd964',
                            warning: '#f0ad4e',
                            error: '#FA3F1E'
                        },
                        colors: {
                            primary: '#007aff',
                            success: '#4cd964',
                            warning: '#f0ad4e',
                            error: '#FA3F1E'
                        }
                    }
                }
            }
        },
        computed: {
            ...mapState({
                shopConfig_: state => state.config && state.config.shopConfig || this.defaultConfig
            }),
            style_() {
                return {
                    [pro]: this.shopConfig_. [this.active ? 'selColors' : 'colors'][this.theme]
                }
            }
        }
    }
</script>

<style>
</style>
