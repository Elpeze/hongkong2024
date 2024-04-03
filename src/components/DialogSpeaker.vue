<template>
    <transition-fade>
        <div v-if="visible" class="g-mask"></div>
    </transition-fade>
    <transition-fade>
        <div class="g-dialog-speakers" v-show="visible">
            <div class="dialog-main">
                <img
                    @click="close"
                    class="close"
                    src="~/assets/img/icon-close.png"
                    alt="close"
                />
                <div class="left">
                    <img :src="getAssetURL(props.speaker?.img)" alt="avatar" />
                </div>
                <div class="right">
                    <div class="base">
                        <h3>{{ props.speaker?.name }}</h3>
                        <span>{{ props.speaker?.position }}</span>
                    </div>
                    <p>
                        Uri is a co-founder at Goplus, and a member of its Board
                        of Directors. He has a B.Sc. (Magna cum Laude) in
                        Computer Science from the Hebrew University, and an MBA
                        from MIT Sloan. Uri is a serial entrepreneur, who has
                        co-founded several technology companies, among them
                        OmniGuide (an MIT spinoff developing optical fibers for
                        endoscopic surgery), and Mondria (developer of tools for
                        visualization of big data). Previously, Uri also served
                        as an EIR with two Israeli VC firms, and as an analyst
                        at McKinsey.
                    </p>
                    <div class="line"></div>
                    <div class="btn">
                        <img src="~/assets/img/icon-x.png" alt="icon" />
                        <span>Twitter LinkedIn</span>
                    </div>
                </div>
            </div>
        </div>
    </transition-fade>
</template>

<script lang="ts" setup>
const props = defineProps({
    visible: Boolean,
    speaker: Object,
});
const emits = defineEmits(["close"]);
const close = () => {
    emits("close");
};
</script>

<style lang="scss" scoped>
.g-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
}
.g-dialog-speakers {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    .dialog-main {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%);
        display: flex;
        width: 1000px;
        padding: 40px;
        background: #f6f6f6;
        border-radius: 20px;
        border: 1px solid #c0c0c0;
        flex-direction: row;
        .close {
            position: absolute;
            top: 30px;
            right: 30px;
            height: 25px;
            cursor: pointer;
        }
        .left {
            width: 295px;
            margin-right: 30px;
            img {
                width: 100%;
            }
        }
        .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            .base {
                display: flex;
                align-items: baseline;
                margin-top: 9px;
                margin-bottom: 20px;
                h3 {
                    font-size: 23px;
                    font-family: Aeonik-Bold, Aeonik;
                    font-weight: bold;
                    color: #000000;
                    line-height: 28px;
                    margin-right: 22px;
                }
                span {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #000000;
                    line-height: 20px;
                }
            }
            p {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #000000;
                line-height: 23px;
            }
            .line {
                height: 1px;
                background: #cdcdcd;
                margin-top: 24px;
                margin-bottom: 30px;
            }
            .btn {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 210px;
                height: 60px;
                background: #000000;
                border-radius: 37px;
                cursor: pointer;
                font-size: 15px;
                font-family: Aeonik-Medium, Aeonik;
                font-weight: 500;
                color: #ffffff;
                img {
                    height: 24px;
                    margin-right: 7px;
                }
            }
        }
    }
}

@media screen and (max-width: 750px) {
    .g-dialog-speakers {
        .dialog-main {
            top: 50%;
            left: 40px;
            right: 40px;
            transform: translate(0, -50%);
            width: auto;
            padding: 40px;
            border-radius: 20px;
            flex-direction: column;
            align-items: center;
            .close {
                top: 30px;
                right: 30px;
                height: 30px;
            }
            .left {
                width: 295px;
                margin-right: 0;
                img {
                    width: 100%;
                }
            }
            .right {
                .base {
                    flex-direction: column;
                    align-items: center;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    h3 {
                        font-size: 38px;
                        line-height: 1.5;
                        margin-right: 0;
                        margin-bottom: 0;
                    }
                    span {
                        font-size: 24px;
                        line-height: 1.5;
                    }
                }
                p {
                    font-size: 24px;
                    line-height: 1.5;
                }
                .line {
                    height: 1px;
                    background: #cdcdcd;
                    margin-top: 40px;
                    margin-bottom: 40px;
                }
                .btn {
                    width: auto;
                    height: 80px;
                    border-radius: 40px;
                    font-size: 28px;
                    img {
                        height: 34px;
                        margin-right: 12px;
                    }
                }
            }
        }
    }
}
</style>