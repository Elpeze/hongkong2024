<template>
    <transition-fade>
        <div v-if="visible" class="g-mask"></div>
    </transition-fade>
    <transition-fade>
        <div class="g-share-dialog" v-if="visible">
            <div class="dialog-header">
                <img
                    @click="close"
                    class="btn-close"
                    src="~/assets/img/icon-close1.png"
                    alt="icon"
                />
            </div>
            <div class="dialog-main">
                <h3>
                    {{ $t("home.Share GoPlus") }}<br />
                    {{ $t("home.Health Check") }}
                </h3>
                <div class="link">
                    <span class="url">{{ shareUrl }}</span>
                    <div class="btn-copy" @click="copy">
                        <img src="~/assets/img/icon-copy1.png" alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    </transition-fade>
</template>

<script lang="ts" setup>
import { sha256 } from "js-sha256";
import { walletAddressStore } from "../stores";

const props = defineProps({
    visible: Boolean,
});
const emits = defineEmits(["close"]);
const close = () => {
    emits("close");
};

const shareUrl = ref(
    location.origin +
        "/?channelCode=" +
        sha256(String(walletAddressStore().walletAddress))
);
const copy = () => {
    copyComposables(shareUrl.value);
};
</script>

<style lang="scss">
.g-share-dialog {
    position: fixed;
    top: 24%;
    left: 50%;
    transform: translate(-50%);
    height: 321px;
    width: 414px;
    background-image: url(../assets/img/bg-share-dialog.png);
    background-size: cover;
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
        padding: 200px 40px 40px 40px;
        h3 {
            font-size: 21px;
            font-weight: bold;
            color: #ffffff;
            line-height: 29px;
            margin-bottom: 13px;
            br {
                display: none;
            }
        }
        .link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 38px;
            padding-left: 18px;
            border-radius: 10px;
            background-color: rgba($color: #424158, $alpha: 0.2);
            .url {
                flex: 1;
                font-size: 12px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #d4e2ff;
                text-decoration: underline;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .btn-copy {
                cursor: pointer;
                padding: 0 18px;
                img {
                    height: 13px;
                }
            }
        }
    }
}

.g-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 1000;
}

@media screen and (max-width: 750px) {
    .g-share-dialog {
        top: 18%;
        left: 40px;
        right: 40px;
        transform: translate(0);
        padding-bottom: 81.7%;
        width: auto;
        border-radius: 20px;
        background-image: url(../assets/img/m/bg-share-dialog.png);
        background-size: contain;
        background-repeat: no-repeat;
        .btn-close {
            height: 48px;
            right: 20px;
            top: 20px;
            z-index: 1;
        }
        .dialog-main {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 0 60px 60px 60px;
            h3 {
                font-size: 42px;
                line-height: 58px;
                margin-bottom: 30px;
            }
            .link {
                width: 100%;
                height: 76px;
                padding-left: 36px;
                border-radius: 20px;
                .url {
                    font-size: 24px;
                }
                .btn-copy {
                    padding: 0 22px;
                    img {
                        height: 26px;
                    }
                }
            }
        }
    }
}
</style>