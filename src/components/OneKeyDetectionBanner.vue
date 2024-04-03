<template>
    <div
        class="banner"
        :class="{
            'banner-underway': oneKeyDetectionStatus == 'underway',
            'banner-complete': oneKeyDetectionStatus == 'complete',
        }"
    >
        <div class="bg" v-if="!isMobile">
            <transition-fade>
                <img
                    v-if="oneKeyDetectionStatus != 'complete'"
                    class="img"
                    src="~/assets/img/banner-not-started.jpg"
                    alt="img"
                />
                <img
                    v-if="oneKeyDetectionStatus == 'complete'"
                    class="img"
                    src="~/assets/img/banner-complete.jpg"
                    alt="img"
                />
            </transition-fade>
        </div>
        <div class="bg" v-if="isMobile">
            <transition-fade>
                <img
                    v-if="oneKeyDetectionStatus != 'complete'"
                    class="img"
                    src="~/assets/img/m/banner-home.jpg"
                    alt="img"
                />
                <img
                    v-if="oneKeyDetectionStatus == 'complete'"
                    class="img"
                    src="~/assets/img/m/banner-home1.jpg"
                    alt="img"
                />
            </transition-fade>
        </div>

        <div class="imgs" v-if="!isMobile">
            <div class="bird1">
                <img
                    style="visibility: hidden"
                    src="~/assets/img/bird2.png"
                    alt="img"
                />
            </div>
            <div class="bird2">
                <img
                    style="visibility: hidden"
                    src="~/assets/img/bird4.png"
                    alt="img"
                />
            </div>

            <img
                class="shadow shadow1"
                src="~/assets/img/shadow1.png"
                alt="img"
            />
            <img
                class="shadow shadow2"
                src="~/assets/img/shadow2.png"
                alt="img"
            />
            <img
                class="shadow shadow3"
                src="~/assets/img/shadow3.png"
                alt="img"
            />
            <img
                class="shadow shadow4"
                src="~/assets/img/shadow4.png"
                alt="img"
            />
        </div>

        <div class="imgs" v-if="isMobile">
            <div class="bird1">
                <img
                    style="visibility: hidden"
                    src="~/assets/img/bird2.png"
                    alt="img"
                />
            </div>
            <div class="bird2">
                <img
                    style="visibility: hidden"
                    src="~/assets/img/bird4.png"
                    alt="img"
                />
            </div>

            <img
                class="shadow shadow1"
                src="~/assets/img/m/shadow1.png"
                alt="img"
            />
            <img
                class="shadow shadow2"
                src="~/assets/img/m/shadow2.png"
                alt="img"
            />
            <img
                class="shadow shadow3"
                src="~/assets/img/m/shadow3.png"
                alt="img"
            />
        </div>

        <div class="content" v-if="oneKeyDetectionStatus == 'not_started'">
            <div>
                <h2>{{ $t("home.Welcome to") }}</h2>
                <h3>{{ $t("home.GOPLUS Health Check") }}</h3>
                <p v-if="walletHintSubTitle">{{ walletHintSubTitle }}</p>
                <p v-else>{{ $t("home.Know your risk with one click") }}</p>
            </div>
            <div class="btn btn-start" @click="startAnalysis()">
                <img src="~/assets/img/icon-bird.png" alt="icon" />
                <span>{{ $t("home.Start Analysis") }}</span>
            </div>
        </div>
        <div class="content" v-if="oneKeyDetectionStatus == 'underway'">
            <div>
                <h2>{{ $t("home.Analysis in Progress") }}</h2>
                <p>{{ $t("home.It may take about a minute") }}</p>
                <NuxtLink
                    @click="event('click_ad', { page: 'home' })"
                    :to="ad.linkUrl"
                    target="_blank"
                    class="tips"
                >
                    {{ ad.title }} {{ ad.title && ">>" }}
                </NuxtLink>
            </div>
            <div class="btn" @click="stopAnalysis">
                <span class="g-icon-loader"></span>
                <span>{{ $t("home.Stop Analysis") }}</span>
            </div>
        </div>
        <div class="content" v-if="oneKeyDetectionStatus == 'complete'">
            <div>
                <h2>{{ $t("home.Detection Complete") }}</h2>
                <p v-if="walletHintSubTitle">{{ walletHintSubTitle }}</p>
                <p v-else>{{ $t("home.Know your risk with one click") }}</p>
                <div class="data">
                    <div class="item">
                        <img src="~/assets/img/icon-risky.png" alt="icon" />
                        <span class="number">{{ riskyCount }}</span>
                        <span class="txt">{{ $t("home.Risky items") }}</span>
                    </div>
                    <div class="item">
                        <img src="~/assets/img/icon-warning.png" alt="icon" />
                        <span class="number">{{ attentionCount }}</span>
                        <span class="txt">{{
                            $t("home.Attention items")
                        }}</span>
                    </div>
                </div>
            </div>

            <div class="btn" @click="startAnalysis()">
                <img src="~/assets/img/icon-recheck1.png" alt="icon" />
                <span>{{ $t("home.Recheck") }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useGtag } from "vue-gtag-next";
import {
    walletAddressStore,
    chainIdStore,
    homeDataStore,
    tokenDataStore,
    nftDataStore,
    approvalDataStore,
    newsDataStore,
} from "@/stores";

const { event } = useGtag();
const { isMobile } = useDevice();
const route = useRoute();

const tokenStore = tokenDataStore();
const nftStore = nftDataStore();
const approvalStore = approvalDataStore();
const homeStore = homeDataStore();
const newsStore = newsDataStore();

const walletHintSubTitle = computed(() => {
    return newsStore.getWalletHintSubTitle;
});

// 检测中提示
const ad: any = computed(() => {
    return newsStore.getHomeWaitingAd;
});

// 检测数量
const riskyCount = computed(() => {
    return (
        tokenStore.riskyCount +
        nftStore.riskyCount +
        approvalStore.getRiskyCount
    );
});
const attentionCount = computed(() => {
    return tokenStore.attentionCount + nftStore.attentionCount;
});

// 检测状态
const oneKeyDetectionStatus = computed(() => {
    return homeStore.oneKeyDetectionStatus;
});

// 一键检测
const startAnalysis = async (nftFlag?: boolean, approvalFlag?: boolean) => {
    const address = walletAddressStore().getWalletAddress;
    const chainId = chainIdStore().getChainId;
    if (!nftFlag && !approvalFlag) {
        gaEvent({ event: "clickDetectionButton", page: true });
        if (route.query.cid) {
            gaEvent({
                event: "clickDetectionButton",
                page: true,
                channel: route.query.cid,
            });
        }

        setRequestStatus(false);
        homeStore.setDetectionStatus("underway");
        if (!address || !chainId) {
            ElMessage({
                message: "Please connect the wallet first",
            });
        }
    }

    if (!nftFlag && !approvalFlag) {
        await tokenStore.getData(chainId, address, "home");
    }
    if (nftFlag) {
        await nftStore.getData(chainId, address, "home");
    }
    if (approvalFlag) {
        await approvalStore.getData(chainId, address, "home");

        if (homeStore.oneKeyDetectionStatus === "not_started") {
            return;
        }
        setTimeout(() => {
            homeStore.setDetectionStatus("complete");
            gaEvent({ event: "detectionSuccess", page: true });
            if (route.query.cid) {
                gaEvent({
                    event: "detectionSuccess",
                    page: true,
                    channel: route.query.cid,
                });
            }
            if (
                route.query.cid &&
                route.query.cid.toString().toLocaleLowerCase() ==
                    APP_CONFIG.cid.bitget
            ) {
                homeStore.galxe(address);
            }
        }, 2000);
    }
};
// 取消检测
const stopAnalysis = () => {
    homeStore.setDetectionStatus("not_started");
    setRequestStatus(true);
};
const setRequestStatus = (value: boolean) => {
    tokenStore.setRequestStatus(value);
    nftStore.setRequestStatus(value);
    approvalStore.setRequestStatus(value);
};
defineExpose({ startAnalysis });
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 290px;
    // background: linear-gradient(90deg, #6e67ff 0%, #00b6ab 100%);
    // border-radius: 15px;
    margin-bottom: 15px;
    // transition: background-color 0.5s;
    // background-image: url(../assets/img/banner-not-started.jpg);
    // background-size: cover;

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        img {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: 15px;
            width: 100%;
        }
    }
    .imgs {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        .bird1 {
            position: absolute;
            left: 282px;
            top: 50px;
            width: 104px;
            height: 189px;
            background-image: url(../assets/img/bird1.png);
            background-size: contain;
            transition: all 0.3s;
        }
        .bird2 {
            position: absolute;
            z-index: -1;
            right: 145px;
            top: 50px;
            width: 49px;
            height: 86.5px;
            background-image: url(../assets/img/bird3.png);
            background-size: contain;
            transition: all 0.3s;
        }
        .shadow {
            position: absolute;
            opacity: 0;
        }
        .shadow1 {
            top: 32.5px;
            left: 102.5px;
            width: 20.5px;
            height: 42px;
        }
        .shadow2 {
            top: 73px;
            left: 389.5px;
            width: 13px;
            height: 27px;
        }
        .shadow3 {
            top: 94px;
            right: 323px;
            width: 14.5px;
            height: 29.5px;
        }
        .shadow4 {
            top: 128px;
            right: 89.5px;
            width: 22px;
            height: 42.5px;
        }
    }
    // .img {
    //     width: 488px;
    //     object-fit: cover;
    // }
    // .not_started {
    //     position: absolute;
    //     top: 50px;
    //     transition: all 1s;
    // }
    @keyframes bird1 {
        0% {
            background-image: url(../assets/img/bird1.png);
        }
        100% {
            background-image: url(../assets/img/bird2.png);
        }
    }
    @keyframes bird2 {
        0% {
            background-image: url(../assets/img/bird3.png);
        }
        100% {
            background-image: url(../assets/img/bird4.png);
        }
    }
    @keyframes shadow {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    // .underway {
    //     position: absolute;
    //     bottom: 0;
    //     width: 488px;
    //     height: 100%;
    //     background-image: url(../assets/img/banner-underway1.png);
    //     background-size: contain;
    //     background-position: 0 50px;
    //     background-repeat: no-repeat;
    // }
    // .complete {
    //     position: absolute;
    //     top: 290px;
    //     left: 0;
    //     transition: top 1s;
    // }
    .content {
        // flex: 1;
        width: 466px;
        // padding-left: 70px;
        height: 100%;
        padding-bottom: 49px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        h2 {
            font-size: 28px;
            font-family: GillSans-SemiBold, GillSans;
            font-weight: 600;
            color: #ffffff;
            line-height: 35px;
            letter-spacing: 2px;
            margin-bottom: 14px;
        }
        h3 {
            font-size: 25px;
            font-family: GillSans-SemiBold, GillSans;
            font-weight: 600;
            color: #ffffff;
            line-height: 26px;
            letter-spacing: 1px;
            margin-bottom: 14px;
        }
        p {
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            line-height: 21px;
            opacity: 0.8;
        }
        .btn {
            margin-top: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 330px;
            height: 54px;
            background: #00efc4;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            color: #040b24;
            img {
                width: 31px;
                height: 15px;
                margin-right: 10px;
            }
            &:hover {
                opacity: 0.9;
            }
        }
        .tips {
            margin-top: 12px;
            font-size: 14px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #bfd5ff;
            line-height: 20px;
            height: 20px;
            text-decoration: underline;
        }
    }
    &.banner-underway {
        .imgs {
            .bird1 {
                animation: bird1 0.6s infinite;
            }
            .bird2 {
                animation: bird2 0.6s infinite;
                animation-delay: 0.3s;
            }
            .shadow {
                animation: shadow 2s infinite;
            }
            .shadow2,
            .shadow4 {
                animation-delay: 1s;
            }
        }

        .content {
            h2 {
                margin-bottom: 10px;
            }
            p {
                margin-top: 7px;
                margin-bottom: 16px;
            }
            .btn {
                margin-top: 29.5px;
                background: #d6ca14;
            }
        }
    }

    &.banner-complete {
        .imgs {
            .bird1 {
                opacity: 0;
            }
            .bird2 {
                opacity: 0;
            }
        }
        // .not_started {
        //     top: -400px;
        // }
        // .complete {
        //     transform: translateY(-100%);
        // }
        // background: linear-gradient(90deg, #ff5e5e 0%, #ff6b6b 100%);
        .content {
            .data {
                display: flex;
                align-items: center;
                margin-top: 20px;
                .item {
                    display: flex;
                    align-items: baseline;
                    margin-right: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    color: #ffffff;
                    img {
                        height: 25px;
                        margin-right: 9px;
                    }
                    .number {
                        font-size: 26px;
                        font-weight: bold;
                        color: #ffffff;
                        line-height: 31px;
                        margin-right: 10px;
                    }
                }
            }
            .btn {
                margin-top: 20px;
                background: #00efc4;
                font-size: 17px;
                color: #000000;
                img {
                    height: 20px;
                    width: 20px;
                }
            }
        }
    }

    // @keyframes transform {
    //     100% {
    //         transform: translateY(-400px);
    //     }
    // }
    // @keyframes top {
    //     100% {
    //         top: 50px;
    //     }
    // }
    // @keyframes show {
    //     100% {
    //         opacity: 1;
    //     }
    // }
    // @keyframes hide {
    //     100% {
    //         opacity: 0;
    //     }
    // }
    // &::before,
    // &::after {
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     content: "";
    //     z-index: -1;
    //     border-radius: 15px;
    // }
    // &::before {
    //     opacity: 1;
    //     background: linear-gradient(90deg, #6e67ff 0%, #00b6ab 100%);
    // }
    // 背景色隐藏
    // &.banner-complete-animate::before {
    //     animation-name: hide;
    //     animation-duration: 1s;
    //     animation-delay: 0.6s;
    //     animation-fill-mode: forwards;
    //     animation-iteration-count: 1;
    // }
    // &::after {
    //     opacity: 0;
    //     background: linear-gradient(90deg, #ff5e5e 0%, #ff6b6b 100%);
    // }
    // 背景色显示
    // &.banner-complete-animate::after {
    //     animation-name: show;
    //     animation-duration: 1s;
    //     animation-delay: 0.6s;
    //     animation-fill-mode: forwards;
    //     animation-iteration-count: 1;
    // }
    // 检测完成时 图片移动动画
    // &.banner-complete-animate {
    //     .not_started {
    //         // top: 0;
    //         animation-name: transform;
    //         animation-duration: 1s;
    //         animation-fill-mode: forwards;
    //         animation-iteration-count: 1;
    //     }
    //     .complete {
    //         // transform: translateY(0px);
    //         animation-name: top;
    //         animation-duration: 1s;
    //         animation-delay: 0.6s;
    //         animation-fill-mode: forwards;
    //         animation-iteration-count: 1;
    //     }
    // }
    // 动画结束后再次进入页面（防止页面重新渲染再次执行完成时的动画）
    // &.banner-complete-animated {
    //     background: linear-gradient(90deg, #ff5e5e 0%, #ff6b6b 100%);

    //     .not_started {
    //         top: -400px;
    //     }
    //     .complete {
    //         transform: translateY(-100%);
    //     }
    // }
}

@media screen and (max-width: 750px) {
    .banner {
        justify-content: flex-start;
        height: 766px;
        margin-bottom: 40px;

        .bg {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            img {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                border-radius: 20px;
                width: 100%;
            }
        }
        .imgs {
            .bird1 {
                left: 90px;
                top: 287px;
                width: 141px;
                height: 263px;
                background-repeat: no-repeat;
            }
            .bird2 {
                right: 90px;
                top: 258px;
                width: 69px;
                height: 121px;
            }
            .shadow {
                position: absolute;
                opacity: 0;
            }
            .shadow1 {
                top: 166px;
                left: 14.5%;
                width: 34px;
                height: 70px;
            }
            .shadow2 {
                top: 241px;
                left: 64%;
                width: 27px;
                height: 54px;
            }
            .shadow3 {
                top: 49px;
                right: 13%;
                width: 36px;
                height: 74px;
            }
            .shadow4 {
                top: 128px;
                right: 89.5px;
                width: 22px;
                height: 42.5px;
            }
        }

        .content {
            padding: 72px 40px 60px 40px;
            height: 100%;
            width: 100%;
            justify-content: space-between;
            h2 {
                font-size: 52px;
                line-height: 40px;
                letter-spacing: 1px;
                margin-bottom: 30px;
            }
            h3 {
                font-size: 42px;
                line-height: 40px;
                letter-spacing: 1px;
                margin-bottom: 20px;
            }
            p {
                font-size: 28px;
                line-height: 32px;
            }
            .btn {
                margin-top: 28px;
                width: 100%;
                height: 108px;
                font-size: 32px;
                img {
                    width: 62px;
                    height: 30px;
                    margin-right: 12px;
                }
            }
            .tips {
                margin-top: 26px;
                font-size: 24px;
                line-height: 33px;
            }
        }
        &.banner-underway {
            .content {
                h2 {
                    margin-bottom: 32px;
                }
            }
        }
        &.banner-complete {
            // animation: none;
            // background-image: url(../assets/img/m/banner-home1.png);
            // background-size: cover;
            // background-position: center;
            .content {
                h2 {
                    margin-bottom: 20px;
                }
                .data {
                    margin-top: 43px;
                    flex-direction: column;
                    align-items: flex-start;
                    .item {
                        margin-right: 0;
                        margin-bottom: 20px;
                        font-size: 24px;
                        &:last-child {
                            margin-right: 0;
                        }
                        img {
                            height: 38px;
                            width: 36px;
                            object-fit: contain;
                            object-position: bottom;
                            margin-right: 10px;
                        }
                        .number {
                            font-size: 36px;
                            line-height: 30px;
                            margin-right: 16px;
                        }
                    }
                }
                .btn {
                    font-size: 32px;
                    img {
                        height: 40px;
                        width: 40px;
                        margin-right: 13px;
                    }
                }
            }
        }
    }
}
</style>