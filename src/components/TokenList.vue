<template>
    <div
        class="g-token-list"
        :class="{
            'g-token-list-bg': route.name === `token`,
            'g-token-list-empty': list.length == 0,
        }"
    >
        <transition-fade v-if="isMobile" group>
            <div
                class="item"
                @click="goPlusDetail(item)"
                v-for="item in list"
                :key="item.contractAddress"
            >
                <div class="row">
                    <div class="base">
                        <img
                            class="icon"
                            src="~/assets/img/icon-default.png"
                            alt="icon"
                        />
                        <div class="info">
                            <h3>
                                {{ item.name }}
                                <img
                                    class="icon-safe"
                                    v-if="item.trusted == 1"
                                    src="~/assets/img/icon-safe.png"
                                    alt="icon"
                                />

                                <img
                                    class="icon-risk"
                                    v-else-if="
                                        item.honeypot == 1 || item.verified == 0
                                    "
                                    src="~/assets/img/icon-risky-mini.png"
                                    alt="icon"
                                />
                            </h3>
                            <div
                                class="address"
                                @click.stop="
                                    copyComposables(item.contractAddress)
                                "
                            >
                                <span>{{
                                    shortAddressComposables(
                                        item.contractAddress
                                    )
                                }}</span>
                                <img
                                    src="~/assets/img/icon-copy.png"
                                    alt="copy"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="btn-detail" @click.stop="goPlusDetail(item)">
                        <span>Details</span>
                        <img src="~/assets/img/icon-sj.png" alt="icon" />
                    </div>
                    <!-- <div class="tags">
                        <div class="tag tag-trusted" v-if="item.trusted == 1">
                            <img src="~/assets/img/icon-safe.png" alt="icon" />
                            <span>{{ $t("home.Trusted Token") }}</span>
                        </div>
                        <div
                            class="tag tag-honey"
                            v-else-if="item.honeypot == 1"
                        >
                            <img
                                src="~/assets/img/icon-risky-mini.png"
                                alt="icon"
                            />
                            <span>{{ $t("home.Honeypot") }}</span>
                        </div>
                        <div
                            class="tag tag-honey"
                            v-else-if="item.verified == 0"
                        >
                            <img
                                src="~/assets/img/icon-risky-mini.png"
                                alt="icon"
                            />
                            <span>{{ $t("home.Unverified") }}</span>
                        </div>
                    </div> -->
                </div>

                <div class="row">
                    <div class="risk">
                        <span class="label">
                            {{ $t("home.Risk") }}
                        </span>
                        <span
                            class="value"
                            :class="{ 'risk-text': item.risky > 0 }"
                            >{{ item.risky }}</span
                        >
                    </div>
                    <div class="attention">
                        <span class="label">
                            {{ $t("home.Attention") }}
                        </span>
                        <span
                            class="value"
                            :class="{ 'attention-text': item.attention > 0 }"
                            >{{ item.attention }}</span
                        >
                    </div>
                    <div class="total">
                        {{ formatBalance(item.balance, 2) }}
                    </div>
                </div>

                <div class="row">
                    <div
                        class="risk-action"
                        v-if="item.risky > 0 || item.attention > 0"
                    >
                        <div
                            class="risk-changed"
                            v-if="item.lastToIgnore == 1"
                            @click.stop="toggleRiskyKnownDialog('show', item)"
                        >
                            <img
                                class="icon"
                                src="~/assets/img/icon-danger.png"
                                alt="icon"
                            />
                            <span>Risk changed, Please reprocess</span>
                        </div>

                        <div
                            class="btn-known"
                            @click.stop="toggleRiskyKnownDialog('show', item)"
                            v-else-if="item.toIgnore == 0"
                        >
                            <i
                                v-if="item.ignoreLoading"
                                class="iconfont icon-refresh animate-rotate"
                            ></i>
                            <img
                                v-else
                                class="icon"
                                src="~/assets/img/icon-known.png"
                                alt="icon"
                            />
                            <span>风险已知</span>
                        </div>

                        <div class="risk-known" v-if="item.toIgnore == 1">
                            <img
                                class="icon"
                                src="~/assets/img/icon-safe.png"
                                alt="icon"
                            />
                            <span>已知该风险</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition-fade>
        <transition-slide v-else group>
            <div
                @click="goPlusDetail(item)"
                class="item"
                v-for="item in list"
                :key="item.contractAddress"
            >
                <div class="base">
                    <img
                        class="icon"
                        src="~/assets/img/icon-default.png"
                        alt="icon"
                    />
                    <span>{{ item.name }}</span>

                    <img
                        class="icon-safe"
                        v-if="item.trusted == 1"
                        src="~/assets/img/icon-safe.png"
                        alt="icon"
                    />

                    <img
                        class="icon-risk"
                        v-else-if="item.honeypot == 1 || item.verified == 0"
                        src="~/assets/img/icon-risky-mini.png"
                        alt="icon"
                    />
                </div>
                <div
                    class="address"
                    @click.stop="copyComposables(item.contractAddress)"
                >
                    <span>{{
                        shortAddressComposables(item.contractAddress)
                    }}</span>
                    <img src="~/assets/img/icon-copy.png" alt="copy" />
                </div>
                <div class="risk">
                    <span class="label">{{ $t("home.Risk") }}</span>
                    <span
                        class="value"
                        :class="{ 'risk-text': item.risky > 0 }"
                        >{{ item.risky }}</span
                    >
                </div>
                <div class="attention">
                    <span class="label">{{ $t("home.Attention") }}</span>
                    <span
                        class="value"
                        :class="{ 'attention-text': item.attention > 0 }"
                        >{{ item.attention }}</span
                    >
                </div>
                <div class="total">{{ formatBalance(item.balance, 2) }}</div>

                <div
                    class="risk-action"
                    :class="{
                        'risk-action-show':
                            item.risky > 0 || item.attention > 0,
                    }"
                >
                    <div
                        class="btn-known"
                        @click.stop="toggleRiskyKnownDialog('show', item)"
                        v-if="item.toIgnore == 0"
                    >
                        <i
                            v-if="item.ignoreLoading"
                            class="iconfont icon-refresh animate-rotate"
                        ></i>
                        <img
                            v-else
                            class="icon"
                            src="~/assets/img/icon-known.png"
                            alt="icon"
                        />
                        <span>风险已知</span>
                    </div>

                    <div class="risk-known" v-if="item.toIgnore == 1">
                        <img
                            class="icon"
                            src="~/assets/img/icon-safe.png"
                            alt="icon"
                        />
                        <span>已知该风险</span>
                    </div>

                    <div
                        class="risk-changed"
                        @click.stop="toggleRiskyKnownDialog('show', item)"
                        v-if="item.lastToIgnore == 1"
                    >
                        <img
                            class="icon"
                            src="~/assets/img/icon-danger.png"
                            alt="icon"
                        />
                        <span>Risk changed, Please reprocess</span>
                    </div>
                </div>
                <div class="btn-detail" @click.stop="goPlusDetail(item)">
                    <span>Details</span>
                    <img src="~/assets/img/icon-triangle.png" alt="icon" />
                </div>
                <div class="tags" v-if="false">
                    <div class="tag tag-trusted" v-if="item.trusted == 1">
                        <img src="~/assets/img/icon-safe.png" alt="icon" />
                        <span>{{ $t("home.Trusted Token") }}</span>
                    </div>
                    <div class="tag tag-honey" v-else-if="item.honeypot == 1">
                        <img
                            src="~/assets/img/icon-risky-mini.png"
                            alt="icon"
                        />
                        <span>{{ $t("home.Honeypot") }}</span>
                    </div>
                    <div class="tag tag-honey" v-else-if="item.verified == 0">
                        <img
                            src="~/assets/img/icon-risky-mini.png"
                            alt="icon"
                        />
                        <span>{{ $t("home.Unverified") }}</span>
                    </div>
                </div>
            </div>
        </transition-slide>

        <el-empty
            v-if="list.length == 0"
            image="https://www.gopluslabs.io/images/plus2/no-data.png"
            :description="$t('home.No data detected')"
        />

        <RiskyKnownDialog
            :type="props.type"
            :visible="riskyKnownDialogVisible"
            :data="riskyKnownCurrentItem"
            @toggle="toggleRiskyKnownDialog"
        ></RiskyKnownDialog>
    </div>
</template>

<script lang="ts" setup>
import { useGtag } from "vue-gtag-next";
import {
    tokenDataStore,
    nftDataStore,
    demoDataStore,
    walletAddressStore,
} from "@/stores";
const props = defineProps({
    type: String,
});

const { event } = useGtag();
const route = useRoute();
const { isMobile } = useDevice();
const { locale } = useI18n();
const tokenStore = tokenDataStore();
const nftStore = nftDataStore();
const demoStore = demoDataStore();
const walletStore = walletAddressStore();

const list = computed(() => {
    if (route.name === `token`) {
        return tokenStore.getTokenList;
    } else if (route.name === `nft`) {
        return nftStore.getTokenList;
    } else if (route.name === `home`) {
        if (props.type === "token") {
            return tokenStore.getHomeTokenList;
        } else if (props.type === "nft") {
            return nftStore.getHomeTokenList;
        } else {
            return [];
        }
    } else if (route.name === `demo`) {
        if (props.type === "token") {
            return demoStore.getTokenList;
        } else if (props.type === "nft") {
            return demoStore.getNftList;
        } else {
            return [];
        }
    } else {
        return [];
    }
});

const goPlusDetail = (item: any) => {
    event("click_detection_single_token");
    let url = "";
    if (props.type === "token") {
        url = `https://gopluslabs.io/token-security/${item.chainId}/${item.contractAddress}`;
    } else if (props.type === "nft") {
        url = `https://gopluslabs.io/nft-security-detection/${item.chainId}/${item.contractAddress}`;
    } else {
        return;
    }
    window.open(url);
};

const riskyKnownCurrentItem = ref();
const riskyKnownDialogVisible = ref(false);
const toggleRiskyKnownDialog = (action: string, item: any) => {
    if (action == "show") {
        riskyKnownDialogVisible.value = true;
        riskyKnownCurrentItem.value = item;
    }
    if (action == "cancel") {
        riskyKnownDialogVisible.value = false;
    }
    if (action == "confirm") {
        riskyKnownDialogVisible.value = false;
        putToIgnore();
    }
};
const putToIgnore = async () => {
    riskyKnownCurrentItem.value.ignoreLoading = true;
    const { code } = await tokenStore.putToIgnore(
        riskyKnownCurrentItem.value.id,
        walletStore.getWalletAddress
    );
    if (code == 1) {
        riskyKnownCurrentItem.value.toIgnore = 1;
        tokenStore.refreshCount();
    }
    riskyKnownCurrentItem.value.ignoreLoading = false;
};
</script>

<style lang="scss">
.g-token-list {
    position: relative;
    padding: 26px 36px;
    background: rgba(#ffffff, 0.08);
    border-radius: 10px;
    overflow: hidden;
    &.g-token-list-empty {
        padding: 0 36px !important;
    }
    .g-token-list-bg {
        &::after {
            position: absolute;
            display: block;
            content: "";
            bottom: 0;
            right: 0;
            width: 176px;
            height: 35px;
            background: linear-gradient(180deg, #3f7efc 0%, #7729ff 100%);
            opacity: 0.4;
            filter: blur(115px);
        }
    }

    .item {
        position: relative;
        display: flex;
        align-items: center;
        padding: 11px 0;
        // cursor: pointer;
        &::after {
            position: absolute;
            display: block;
            bottom: 0;
            content: "";
            left: 0;
            height: 1px;
            background-color: rgba(43, 50, 84, 0.5);
            width: 0%;
            transition: width 1s;
        }
        // &:hover::after {
        //     width: 100%;
        // }
        .risk-action {
            flex: 1;
            visibility: hidden;
            &.risk-action-show {
                visibility: visible;
            }
            .btn-known {
                display: flex;
                align-items: center;
                cursor: pointer;
                img {
                    width: 14px;
                    height: 14px;
                    margin-right: 5px;
                }
                span {
                    font-size: 12px;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 19px;
                }
                .iconfont {
                    display: inline-block;
                    color: #ffffff;
                    font-weight: 500;
                    font-size: 13px;
                    margin-right: 6px;
                    transition: all 1s;
                }
            }
            .risk-known {
                display: flex;
                align-items: center;
                img {
                    width: 11px;
                    height: 13px;
                    margin-right: 5px;
                }
                span {
                    font-size: 12px;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 19px;
                }
            }
            .risk-changed {
                position: relative;
                padding-right: 20px;
                line-height: 15px;
                img {
                    position: absolute;
                    top: 4px;
                    left: -20px;
                    width: 14px;
                    height: 14px;
                }
                span {
                    font-size: 12px;
                    font-weight: 600;
                    color: #ff6c6a;
                }
            }
        }
        .btn-detail {
            display: flex;
            align-items: center;
            cursor: pointer;
            span {
                font-size: 12px;
                font-weight: bold;
                color: #ffffff;
                line-height: 19px;
                margin-right: 4px;
            }
            img {
                height: 5px;
                transform: rotate(-90deg);
            }
        }
        .base {
            flex: 1.4;
            display: flex;
            align-items: center;
            .icon {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                margin-right: 10px;
            }
            span {
                display: inline-block;
                max-width: 100px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 14px;
                font-weight: bold;
                color: #ffffff;
                margin-right: 6px;
            }
            .icon-safe {
                width: 11px;
                height: 13px;
            }
            .icon-risk {
                width: 12px;
                height: 15px;
            }
        }
        .address {
            flex: 1.4;
            span {
                font-size: 13px;
                font-weight: 500;
                color: #7e879c;
                margin-right: 8px;
            }
            img {
                height: 13px;
                cursor: pointer;
            }
        }
        .risk,
        .attention,
        .total {
            flex: 0.8;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            .value {
                margin-left: 4px;
                font-weight: bold;
            }
        }
        .risk-text {
            color: #ff4846;
        }
        .attention-text {
            color: #f7971a;
        }
        // .tags {
        //     flex: 1;
        //     display: flex;
        //     .tag {
        //         display: flex;
        //         justify-content: center;
        //         align-items: center;
        //         width: 130px;
        //         height: 28px;
        //         background: #2a2929;
        //         border-radius: 14px;
        //         font-size: 12px;
        //         font-weight: bold;
        //         color: #ffffff;
        //         margin-right: 10px;
        //         white-space: nowrap;
        //         span {
        //             white-space: nowrap;
        //         }
        //         &:last-child {
        //             margin-right: 0;
        //         }
        //         img {
        //             height: 12.5px;
        //             margin-right: 5.5px;
        //         }
        //     }
        //     .tag-honey {
        //         img {
        //             height: 15px;
        //         }
        //     }
        //     .tag-trusted {
        //         img {
        //             height: 13px;
        //         }
        //     }
        // }
    }
}

@media screen and (max-width: 750px) {
    .g-token-list {
        padding: 22px 48px;
        border-radius: 20px;

        .item {
            align-items: flex-start;
            flex-direction: column;
            padding: 38px 0;
            border-bottom: 1px solid #202020;
            &:last-child {
                border-bottom: none;
            }
            .row {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            .row:nth-child(2) {
                padding-left: 84px;
                margin-top: 30px;
            }
            .row:nth-child(3) {
                padding-left: 84px;
            }

            .base {
                flex: 1.5;
                display: flex;
                align-items: center;
                .icon {
                    width: 60px;
                    height: 60px;
                    margin-right: 24px;
                }
                .info {
                    display: flex;
                    flex-direction: column;
                }
                span {
                    max-width: max-content;
                }
                h3 {
                    display: flex;
                    align-items: center;
                    font-size: 30px;
                    font-weight: bold;
                    color: #ffffff;
                    line-height: 27px;
                    white-space: nowrap;
                    max-width: 240px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 12px;
                    img {
                        margin-left: 12px;
                    }
                    .icon-safe {
                        width: 21px;
                        height: 25px;
                    }
                    .icon-risk {
                        width: 23px;
                        height: 30px;
                    }
                }
                .address {
                    line-height: 26px;
                    span {
                        font-size: 22px;
                        font-weight: 500;
                        color: #7e879c;
                        line-height: 20px;
                        margin-right: 12px;
                    }
                    img {
                        width: 26px;
                        height: 26px;
                        cursor: pointer;
                    }
                }
            }

            .btn-detail {
                align-self: start;
                height: 27px;
                span {
                    font-size: 24px;
                    color: #dcdcdc;
                    line-height: 20px;
                    margin-right: 10px;
                }
                img {
                    transform: none;
                    height: 22px;
                }
            }

            .risk,
            .attention,
            .total {
                width: 33.33%;
                flex: none;
                font-size: 28px;
                font-weight: 400;
                color: #dcdcdc;
                line-height: 20px;
                .value {
                    margin-left: 10px;
                    font-weight: bold;
                    color: #ffffff;
                }
                .risk-text {
                    color: #ff4846;
                }
                .attention-text {
                    color: #f7971a;
                }
            }
            .total {
                text-align: right;
                font-weight: bold;
                color: #ffffff;
            }

            .risk-action {
                margin-top: 36px;
                visibility: visible;
                height: 28px;
                display: flex;
                align-items: center;
                .btn-known {
                    img {
                        width: 28px;
                        height: 28px;
                        margin-right: 10px;
                    }
                    span {
                        font-size: 24px;
                        line-height: 38px;
                    }
                    .iconfont {
                        font-size: 20px;
                        margin-right: 12px;
                    }
                }
                .risk-known {
                    img {
                        width: 21px;
                        height: 25px;
                        margin-right: 10px;
                    }
                    span {
                        font-size: 24px;
                        line-height: 38px;
                    }
                }
                .risk-changed {
                    display: flex;
                    align-items: center;
                    img {
                        position: static;
                        width: 28px;
                        height: 28px;
                        margin-right: 10px;
                    }
                    span {
                        font-size: 24px;
                        color: #ff6c6a;
                    }
                }
            }
            // .tags {
            //     flex: none;
            //     .tag {
            //         align-items: center;
            //         width: auto;
            //         height: 30px;
            //         background: none;
            //         font-size: 24px;
            //         &:last-child {
            //             margin-right: 0;
            //         }
            //         img {
            //             min-height: 25px;
            //             margin-right: 10px;
            //         }
            //     }
            //     .tag-honey {
            //         img {
            //             height: 30px;
            //         }
            //     }
            //     .tag-trusted {
            //         img {
            //             height: 25px;
            //         }
            //     }
            // }
        }
    }
}
</style>