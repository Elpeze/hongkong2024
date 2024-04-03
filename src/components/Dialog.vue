<template>
    <transition-fade>
        <div v-if="visible" class="g-mask"></div>
    </transition-fade>
    <transition-fade>
        <div class="g-dialog" v-if="visible">
            <div class="dialog-header">
                <img
                    @click="close"
                    class="btn-close"
                    src="~/assets/img/icon-close.png"
                    alt="icon"
                />
            </div>
            <div class="dialog-main">
                <img
                    class="icon"
                    src="~/assets/img/icon-danger1.png"
                    alt="icon"
                />
                <div class="content">
                    <p>
                        {{ data.content }}
                    </p>
                    <NuxtLink :to="data.linkUrl" target="_blank" class="btn">{{
                        $t("index.Go and check")
                    }}</NuxtLink>
                </div>
            </div>
        </div>
    </transition-fade>
</template>

<script lang="ts" setup>
const props = defineProps({
    visible: Boolean,
    data: {
        type: Object,
        default: {},
    },
});
const emits = defineEmits(["close"]);
const close = () => {
    emits("close");
};
</script>

<style lang="scss" scoped>
.g-dialog {
    position: fixed;
    top: 24%;
    left: 50%;
    transform: translate(-50%);
    width: 457px;
    border-radius: 15px;
    background: #14151a;
    z-index: 1001;

    .btn-close {
        position: absolute;
        height: 24px;
        right: 15px;
        top: 15px;
        cursor: pointer;
    }
    .dialog-main {
        display: flex;
        padding: 36px 40px;
        .icon {
            width: 31px;
            height: 31px;
            margin-right: 15px;
            margin-top: 4.5px;
        }
        p {
            font-size: 12px;
            font-weight: 500;
            color: #ffffff;
            line-height: 22px;
            margin-bottom: 15px;
        }
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 184px;
            height: 38px;
            background: #00f2e9;
            border-radius: 5px;
            font-size: 13px;
            font-weight: bold;
            color: #2c3266;
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 750px) {
    .g-dialog {
        top: 24%;
        left: 40px;
        right: 40px;
        transform: translate(0);
        height: auto;
        width: auto;
        border-radius: 20px;

        .btn-close {
            height: 48px;
            right: 20px;
            top: 20px;
        }
        .dialog-main {
            padding: 48px 90px 54px 58px;
            .icon {
                width: 62px;
                height: 62px;
                margin-right: 30px;
            }
            p {
                font-size: 24px;
                line-height: 44px;
                margin-bottom: 30px;
            }
            .btn {
                width: 368px;
                height: 76px;
                border-radius: 10px;
                font-size: 26px;
            }
        }
    }
}
</style>