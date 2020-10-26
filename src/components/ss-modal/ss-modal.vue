<template>
	<view class="ss-modal-body" :class="{'ss-modal-active' : modalFlag, 'ss-modal-full': mode === 'insert' || position === 'middle', 'ss-modal-hastabbar': hasTabbar}">
		<view class="ss-modal" :class="'ss-modal-' + position +' ' + 'ss-modal-' + mode" @touchmove.stop.prevent>
			<slot></slot>
		</view>
		<view v-if="mask_" class="uni-mask" catchtouchmove="true" @click.stop="maskClose()" @touchmove.stop.prevent></view>
	</view>
</template>

<script>
	export default {
        data() {
            return {
                modalFlag: false
            }
        },
		props: {
			/*
			* 参数说明（定位）
            * top  left  right bottom middle
			*/
			position: {
				type: String,
				default: 'middle'
			},
			/*
			* 参数说明
			* full 宽度100%   适用于配合position上下弹出
			* insert 80%宽度内联小框
			* cover 宽度高度100%  适用于配合position左右菜单
			*/
			mode: {
				type: String,
				default: 'insert'
			},
			mask: {
				type: [Boolean, String],
				default: true
			},
			hasTabbar: {
				type: Boolean,
				default: false
			},
			showClose:{
				type: [Boolean, String],
				default: true
			},
			maskabled: {
				type: [Boolean, String],
				default: true
			},
            value: {
				type: Boolean,
				default: false
            }
		},
		computed: {
			mask_() {
				return String(this.mask) === 'false' ? false : true;
			},
			showClose_() {
				return String(this.showClose) === 'false' ? false : true;
			},
			maskabled_() {
				return String(this.maskabled) === 'false' ? false : true;
			}
		},
		watch: {
            value: {
                handler(val) {
                    this.modalFun(val ? 'show' : 'hide');
                },
                immediate: true
            },
			modalFlag(val) {
				this.$emit('input', val);
				this.$emit('change', val);
			}
		},
		methods: {
			moveHandle() {
				return ;
			},
			show () {
				this.modalFlag = true;
				return true;
			},
			maskClose() {
				if(!this.maskabled_) return ;
				this.hide();
			},
			hide () {
				this.modalFlag = false;
				return false;
			},
			toggle () {
				return !this.modalFlag ? this.show() : this.hide()
			},
			modalFun(pro = 'show') {
				this.$nextTick(() => {
				    return this[pro]();
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 弹窗公用样式
	.ss-modal-body{
		opacity: 0;
		@include fixed(0, 0, 0, 0);
		pointer-events: none;
		transition: all .3s cubic-bezier(0.65, 0.05, 0.36, 1);
		// transition: all .2s ease-in;
		z-index: 999;
		&.ss-modal-full{
			transform: scale(1.2);
		}
		&.ss-modal-active{
			transform: scale(1);
			pointer-events: auto;
		}
		/* #ifndef H5 */
		&.ss-modal-hastabbar{
			@include iosSafeArea(bottom, 50px, bottom);
		}
		/* #endif */
	}
	.ss-modal{
		position: fixed;
		z-index: 999;
		max-height: 100%;
		transition: inherit;
		/deep/ .gmy-float-touch{
			display: none;
		}
	}
	.ss-modal-middle{
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: none;
		box-shadow: none;
	}
	.ss-modal-cover{
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		transform: translate(0, 0);
		opacity: 0;
	}
	.ss-modal-top{
		left: 50%;
		z-index: 98;
		width: 100%;
		height: auto;
		transform: translate(-50%, -100%);
		& + .uni-mask{
			z-index: 97;
		}
	}
	.ss-modal-cover.ss-modal-top{
		transition: all .3s linear;
		left: 0;
		transform: translate(0, -100%);
		height: 100%;
		top: 0;
		z-index: 999;
	}
	.ss-modal-full{
		width: 100%;
		// width: 100vw;
		width: calc(100% + 3px);
		// width: calc(100vw + 2px);//清除translate带来了计算误差
		left: 0;
	}
	.ss-modal-full.ss-modal-top{
		transform: translate(0, -200%);
	}
	.ss-modal-full.ss-modal-bottom{
		transform: translate(0, 120%);
		transition: inherit;
	}
	.ss-modal-full.ss-modal-middle{
		transform: translate(0, 120%);
		transition: inherit;
	}
	.ss-modal-right{
		right: 0;
		max-width: 80%;
        left: auto;
		transform: translate(100%, 0);
	}
	.ss-modal-left{
		left: 0;
		transform: translate(-100%, 0);
		max-width: 80%;
	}
	.ss-modal-insert{
		min-width: 500rpx;
		min-height: 380rpx;
		max-width: 102%;
		max-height: 95%;
		transform: translate(-50%, 0);
	}
	.ss-modal-middle,.ss-modal-insert{
		transform: translate(-50%, -50%);
	}
	.ss-modal-bottom{
		bottom: 0;
		min-height: 0;
	}
	.ss-modal-bottom.ss-modal-insert{
		left: 50%;
		transform: translate(-50%, 100%);
	}
	.ss-modal-body{
		opacity: 0;
		pointer-events: none;
	}
	.ss-modal-active{
		opacity: 1;
		pointer-events: auto;
		.ss-modal-top{
			top: 0;
			transform: translate(-50%, 0);
		}
		.ss-modal-full.ss-modal-middle{
			transform: translate(0, -50%);
		}
        .ss-modal-right, .ss-modal-left, .ss-modal-bottom, .ss-modal-top{
			transform: translate(0, 0);
        }
		.ss-modal-bottom.ss-modal-insert{
			transform: translate(-50%, 0);
		}
		.ss-modal-cover{
			opacity: 1;
		}
		.ss-modal-cover.ss-modal-top{
			top: 0;
		}
	}
</style>
