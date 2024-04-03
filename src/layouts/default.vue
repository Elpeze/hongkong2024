<template>
    <div class="g-container">
        <Header></Header>
        <div class="g-main">
            <slot />
        </div>
        <Footer></Footer>
    </div>
</template>


<script lang="ts" setup>
import { useGtag } from "vue-gtag-next";
import {
    walletAddressStore,
    chainIdStore,
    approvalDataStore,
    tokenDataStore,
    nftDataStore,
    homeDataStore,
    newsDataStore,
} from "../stores";
const { isMobile } = useDevice();
const { event } = useGtag();
const { locale } = useI18n();
const localePath = useLocalePath();

const route = useRoute();
const tokenStore = tokenDataStore();
const nftStore = nftDataStore();
const approvalStore = approvalDataStore();
const homeStore = homeDataStore();
const newsStore = newsDataStore();

const walletHintSubTitle = computed(() => {
    return newsStore.getWalletHintSubTitle;
});

// 积分
const score = computed(() => {
    return homeStore.score;
});

// 是否有数据
const isRequestCompletion = computed(() => {
    if (isMobile) {
        return true;
    }
    if (route.name === `token`) {
        return tokenStore.isRequestCompletion;
    } else if (route.name === `nft`) {
        return nftStore.isRequestCompletion;
    } else if (route.name === `approval`) {
        return approvalStore.isRequestCompletion;
    } else {
        return true;
    }
});

// 是否显示返回按钮
const backVisible = computed(() => {
    if (
        route.name === `token` ||
        route.name === `nft` ||
        route.name === `approval`
    ) {
        return true;
    } else {
        return false;
    }
});

// 开始检测
const detectionStatus = ref("not_started"); // not_started  underway  complete
const startAnalysis = async () => {
    gaEvent({ event: "clickDetectionButton", page: true });
    if (route.query.cid) {
        gaEvent({
            event: "clickDetectionButton",
            page: true,
            channel: route.query.cid,
        });
    }

    setRequestStatus(false);
    detectionStatus.value = "underway";
    const address = walletAddressStore().getWalletAddress;
    const chainId = chainIdStore().getChainId;
    if (!address || !chainId) {
        ElMessage({
            message: "Please connect the wallet first",
        });
    }

    if (route.name === `token`) {
        await tokenStore.getData(chainId, address);
    } else if (route.name === `nft`) {
        await nftStore.getData(chainId, address);
    } else if (route.name === `approval`) {
        await approvalStore.getData(chainId, address);
    }

    gaEvent({ event: "detectionSuccess", page: true });
    if (route.query.cid) {
        gaEvent({
            event: "detectionSuccess",
            page: true,
            channel: route.query.cid,
        });
    }

    // 切换页面后的处理
    if (detectionStatus.value === "not_started") {
        return;
    }
};
const stopAnalysis = () => {
    detectionStatus.value = "not_started";
    setRequestStatus(true);
};

// 检测中时切换页面
watch(route, () => {
    detectionStatus.value = "not_started";
    if (homeStore.oneKeyDetectionStatus != "complete") {
        homeStore.setDetectionStatus("not_started");
    }
    tokenStore.setRequestStatus(true);
    nftStore.setRequestStatus(true);
    approvalStore.setRequestStatus(true);
    newsStore.resetAdData();
});

const setRequestStatus = (value: boolean) => {
    if (route.name === `token`) {
        tokenStore.setRequestStatus(value);
    } else if (route.name === `nft`) {
        nftStore.setRequestStatus(value);
    } else if (route.name === `approval`) {
        approvalStore.setRequestStatus(value);
    }
};

// 分享弹窗
const shareDialogVisible = ref(false);
const toggleDialog = () => {
    shareDialogVisible.value = !shareDialogVisible.value;
};
</script>

<style lang="scss">
.g-container {
    .g-main {
        min-height: 80vh;
        .g-sidebar {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 300px;
            padding: 42px 30px;
            overflow: hidden;
            background-color: #000;
            .logo {
                padding: 0 6px;
                img {
                    height: 30px;
                }
            }
            ul {
                margin-top: 58px;
                li {
                    a {
                        display: flex;
                        align-items: center;
                        height: 50px;
                        padding: 0 15px 0 25px;
                        border-radius: 10px;
                        margin-bottom: 10px;
                        font-size: 15px;
                        color: #7e879c;
                        text-decoration: none;
                        .iconfont {
                            font-size: 24px;
                            margin-right: 15px;
                            font-weight: 100;
                        }
                        &.router-link-active {
                            background: #00efc4;
                            color: #040b24;
                            font-weight: bold;
                        }
                    }
                }
            }

            &::after {
                position: absolute;
                display: block;
                top: 207px;
                z-index: 1;
                right: 0;
                content: "";
                width: 70px;
                height: 235px;
                background: linear-gradient(180deg, #5cd1e8 0%, #15b969 100%);
                opacity: 0.5;
                filter: blur(75px);
            }
        }

        .g-back {
            display: none;
        }

        .g-content {
            position: relative;
            flex: 1;
            overflow: hidden;
            &.g-content-bg {
                overflow: visible;
                background-size: contain;
                background-position: top center;
                background-repeat: no-repeat;
                // border-bottom: 80px solid #000;
                &.token {
                    background-image: url(../assets/img/token-bg.jpg);
                }
                &.nft {
                    background-image: url(../assets/img/nft-bg.jpg);
                }
                &.approval {
                    background-image: url(../assets/img/approval-bg.jpg);
                }
                &::after {
                    display: none;
                }
                .g-start-analysis {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: -40px;
                    h3 {
                        font-size: 30px;
                        font-family: GillSans-SemiBold, GillSans;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 35px;
                        letter-spacing: 2px;
                    }
                    p {
                        margin-top: 11px;
                        margin-bottom: 30px;
                        font-size: 19px;
                        font-weight: 400;
                        color: #dcdcdc;
                        line-height: 21px;
                    }
                    .btn {
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
                }
                .g-product-intro {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -40px;
                    z-index: 1;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 400;
                    color: #a0b2db;
                    line-height: 20px;
                }
            }

            // &::after {
            //     position: absolute;
            //     display: block;
            //     content: "";
            //     bottom: -200px;
            //     right: 0;
            //     width: 157px;
            //     height: 465px;
            //     background: linear-gradient(180deg, #334ef5 0%, #7e067e 100%);
            //     opacity: 0.34;
            //     filter: blur(115px);
            // }
            .g-wrapper {
                // max-width: 1440px;
                max-width: 1140px;
                margin: 0 auto;
                padding: 0 70px 70px 70px;
            }
            .g-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 26px 0;
                .left {
                    display: flex;
                    align-items: center;
                    .score {
                        display: flex;
                        align-items: center;
                        margin-left: 15px;
                        font-size: 16px;
                        font-weight: bold;
                        color: #ffffff;
                        img {
                            height: 24px;
                            margin-right: 8px;
                        }
                    }
                }

                .right {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
}
.g-m-header {
    display: none;
}

@media screen and (max-width: 750px) {
    .g-container {
        .g-main {
            min-height: auto;
            flex-direction: column;
            .g-sidebar {
                display: none;
            }

            .g-back {
                display: flex;
                padding: 10px 40px;
            }

            .g-m-header {
                padding: 40px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .logo {
                    img {
                        height: 46px;
                    }
                }
                .right {
                    display: flex;
                    align-items: center;
                }
            }

            .g-content {
                &::after {
                    display: none;
                }
                .g-wrapper {
                    margin: 0 auto;
                    padding: 0 40px 80px 40px;
                }
                .g-header {
                    padding: 40px 0;

                    .left {
                        display: flex;
                        align-items: center;
                        .score {
                            margin-left: 16px;
                            font-size: 32px;
                            img {
                                height: 48px;
                                margin-right: 8px;
                            }
                        }
                    }

                    .right {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>