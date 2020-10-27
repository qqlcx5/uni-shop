<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            console.log('App Launch')
			this.$store.dispatch('config/setShopConfig')
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style lang="scss">

    /*每个页面公共css */
	@import "~@/assets/css/common.scss";
    /* 字体文件包 */
	@import '~@/assets/font/d-din-font.css';
</style>
