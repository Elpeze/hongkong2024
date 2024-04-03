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
                    src="~/assets/img/icon-close1.png"
                    alt="icon"
                />
            </div>
            <div class="dialog-main">
                <h3>{{ $t("index.Hello Web3 natives!") }}</h3>
                <div class="content">
                    <p>
                        {{ $t("index.hello-dialog-p1") }}
                    </p>
                    <p>
                        {{ $t("index.hello-dialog-p2") }}
                    </p>
                    <p>
                        {{ $t("index.hello-dialog-p3") }}
                    </p>
                    <div class="btn" @click="close">
                        {{ $t("index.Start Now") }}
                    </div>
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
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    width: 605px;
    // height: 486px;
    border-radius: 15px;
    background-image: url(../assets/img/bg-welcome-dialog.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #12131b;
    border: 1px solid #56663c;
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
        flex-direction: column;
        padding: 204px 40px 40px 40px;
        .icon {
            width: 31px;
            height: 31px;
            margin-right: 15px;
            margin-top: 4.5px;
        }
        h3 {
            font-size: 17px;
            font-weight: bold;
            color: #ffffff;
            line-height: 21px;
            margin-bottom: 11px;
        }
        .content {
            p {
                font-size: 12px;
                font-weight: 400;
                color: #dcdcdc;
                line-height: 22px;
            }
            .btn {
                margin-top: 17.5px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 184px;
                height: 38px;
                background: #00efc4;
                border-radius: 5px;
                font-size: 13px;
                font-weight: bold;
                color: #181a1b;
                cursor: pointer;
                &:hover {
                    opacity: 0.9;
                }
            }
        }
    }
}

@media screen and (max-width: 750px) {
    .g-dialog {
        transform: translate(0, -50%);
        left: 40px;
        right: 40px;
        top: 50%;
        border-radius: 30px;
        width: auto;
        background-image: url(../assets/img/m/bg-welcome-dialog.png);

        .btn-close {
            height: 48px;
            right: 20px;
            top: 20px;
        }
        .dialog-main {
            height: 100%;
            justify-content: flex-end;
            padding: 340px 60px 60px 60px;
            h3 {
                font-size: 34px;
                line-height: 42px;
                margin-bottom: 22px;
            }
            .content {
                p {
                    font-size: 24px;
                    line-height: 44px;
                }
                .btn {
                    margin-top: 45px;
                    width: auto;
                    height: 90px;
                    border-radius: 10px;
                    font-size: 28px;
                }
            }
        }
    }
}
</style>