<template>
    <footer class="g-footer">
        <div class="wrapper">
            <div class="base">
                <h1>
                    <NuxtLink
                        class="logo"
                        to="https://gopluslabs.io/"
                        target="_blank"
                    >
                        <img src="~/assets/img/logo-footer.png" alt="logo" />
                    </NuxtLink>
                </h1>
                <p>
                    Open，Permissionless，<br />User-driven security service
                    platform
                </p>
            </div>

            <div class="link">
                <div class="classify">
                    <h3>Security Service</h3>
                    <div class="list">
                        <ul>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/token-security-api"
                                    target="_blank"
                                    >Token Security API</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/aml-api"
                                    target="_blank"
                                    >Malicious Address API</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/nft-security-api"
                                    target="_blank"
                                    >NFT Security API</a
                                >
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/approval-security-api"
                                    target="_blank"
                                    >Approval Security API</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/dapp-security-info"
                                    target="_blank"
                                    >DApp Security Info</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/signature-api"
                                    target="_blank"
                                    >Signature data parsing API
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="classify">
                    <h3>Company</h3>
                    <div class="list">
                        <ul>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/#go_plus"
                                    target="_blank"
                                    >About GoPlus Security</a
                                >
                            </li>
                            <li>
                                <NuxtLink :to="localePath('/terms-of-use')"
                                    >Terms of Use</NuxtLink
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.gopluslabs.io/api-license-agreement"
                                    target="_blank"
                                    >API License Agreement</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="community">
                <h3>Join the community</h3>
                <div class="list">
                    <a
                        href="https://twitter.com/GoplusSecurity"
                        target="_blank"
                    >
                        <img src="~/assets/img/icon-twitter.png" alt="icon" />
                    </a>
                    <a
                        href="https://discord.com/invite/5cvSsaT8N5"
                        target="_blank"
                    >
                        <img src="~/assets/img/icon-discord.png" alt="icon" />
                    </a>
                    <a href="https://t.me/GoPlusSecurity" target="_blank">
                        <img src="~/assets/img/icon-telegram.png" alt="icon" />
                    </a>
                    <a
                        href="https://goplussecurity.medium.com/"
                        target="_blank"
                    >
                        <img src="~/assets/img/icon-medium.png" alt="icon" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>


<script lang="ts" setup>
import { useGtag } from "vue-gtag-next";

const localePath = useLocalePath();
const { event } = useGtag();
</script>

<style lang="scss">
.g-footer {
    background: rgba($color: #000000, $alpha: 0.2);
    .wrapper {
        display: flex;
        justify-content: space-between;
        padding: 70px 0;
    }
    .base {
        display: flex;
        flex-direction: column;
        .logo {
            img {
                height: 157px;
            }
        }
        p {
            margin-top: 24px;
            font-size: 13px;
            font-family: Aeonik-Regular, Aeonik;
            font-weight: 400;
            color: #a5aac4;
            line-height: 23px;
            letter-spacing: 1px;
        }
    }
    .link {
        display: flex;
        .classify {
            &:first-child {
                margin-right: 130px;
                ul {
                    margin-right: 40px;
                }
            }
            h3 {
                height: 19px;
                font-size: 16px;
                font-family: Aeonik-Bold, Aeonik;
                font-weight: bold;
                color: #ffffff;
                line-height: 19px;
                margin-bottom: 29px;
            }
            .list {
                display: flex;
                flex-direction: column;

                ul {
                    &:first-child {
                        margin-bottom: 20px;
                    }
                    li {
                        line-height: 16px;
                        margin-bottom: 20px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        a {
                            font-size: 13px;
                            font-weight: 300;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
    }
    .community {
        h3 {
            font-size: 16px;
            font-family: Aeonik-Bold, Aeonik;
            font-weight: bold;
            color: #ffffff;
            line-height: 19px;
            white-space: nowrap;
            margin-bottom: 26px;
        }
        .list {
            display: flex;
            align-items: center;
            a {
                display: inline-flex;
                margin-right: 15px;
                img {
                    height: 24px;
                }
            }
        }
    }
}

@media screen and (max-width: 750px) {
    .g-footer {
        .wrapper {
            flex-direction: column;
            padding: 90px 80px;
        }
        .base {
            margin-right: 0;
            margin-bottom: 60px;
            .logo {
                img {
                    height: 220px;
                }
            }
            p {
                margin-top: 40px;
                font-size: 22px;
                line-height: 36px;

                color: #b4b4b4;
                letter-spacing: 0;
                br {
                    display: none;
                }
            }
        }
        .link {
            flex-direction: column;
            .classify {
                &:first-child {
                    margin-right: 0;
                    ul {
                        &:first-child {
                            margin-right: 80px;
                        }
                        margin-right: 0;
                    }
                }
                &:last-child {
                    display: none;
                }
                h3 {
                    display: none;
                }
                .list {
                    flex-direction: row;
                    ul li {
                        line-height: 26px;
                        margin-bottom: 30px;
                        a {
                            color: #b4b4b4;
                            font-size: 22px;
                        }
                    }
                }
            }
        }
        .community {
            display: flex;
            align-items: center;
            margin-top: 50px;
            h3 {
                font-size: 26px;
                margin-bottom: 0;
                margin-right: 60px;
            }
            .list {
                a {
                    margin-right: 32px;
                    img {
                        height: 40px;
                    }
                }
            }
        }
    }
}
</style>