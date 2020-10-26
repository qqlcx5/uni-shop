<template>
	<text :style="{ color: color, 'font-size': size_ + 'px' }" class="iconfont" :class="[type]" @click="onClick_"></text>
</template>

<script>
	export default {
		name: 'UniIcons',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 28
			}
		},
		computed: {
			size_() {
				return uni.upx2px(this.size);
			}
		},
		methods: {
			onClick_() {
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
    @import "./iconfont/iconfont.css";
</style>
