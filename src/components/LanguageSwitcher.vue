<template>
    <a
        href="#"
        @click.prevent.stop="
            setLocale(locale == 'en' ? 'cn' : 'en');
            toggle();
        "
        class="g-language"
    >
        <img
            v-show="locale == 'en'"
            class="icon"
            src="~/assets/img/icon-cn.png"
            alt="icon"
        />
        <img
            v-show="locale == 'cn'"
            class="icon"
            src="~/assets/img/icon-en.png"
            alt="icon"
        />
        <span>{{ locale == "en" ? "CN" : "EN" }}</span>
    </a>
    <!-- <NuxtLink
        :replace="true"
        :to="switchLocalePath(locale == 'en' ? 'cn' : 'en')"
        class="g-language"
    >
        <img
            v-show="locale == 'en'"
            class="icon"
            src="~/assets/img/icon-cn.png"
            alt="icon"
        />
        <img
            v-show="locale == 'cn'"
            class="icon"
            src="~/assets/img/icon-en.png"
            alt="icon"
        />
        <span>{{ locale == "en" ? "CN" : "EN" }}</span>
    </NuxtLink> -->
</template>

<script lang="ts" setup>
import { newsDataStore } from "@/stores";

const { locale, setLocale } = useI18n();
const route = useRoute();
// const switchLocalePath = useSwitchLocalePath();

const emits = defineEmits(["refresh"]);
const toggle = () => {
    setTimeout(() => {
        emits("refresh");

        // 首页通知
        if (route.name === "index" || route.name === "home") {
            newsDataStore().getHomeNewsList();
        }

        if (route.query.cid) {
            newsDataStore().getChannelConfig();
        }

        // 广告
        if (
            route.name === "token" ||
            route.name === "nft" ||
            route.name === "approval" ||
            route.name === "home"
        ) {
            let tag = route.name.toString().toLocaleUpperCase();
            if (tag === "APPROVAL") {
                tag = "APPROVE";
            }
            newsDataStore().getAdList("WAITING", tag);
            newsDataStore().getAdList("DETECT", tag);
        }
    }, 100);
};
</script>

<style lang="scss">
.g-language {
    display: flex;
    width: 64px;
    height: 33px;
    align-items: center;
    justify-content: center;
    background: #181818;
    border-radius: 17px;
    margin-right: 10px;
    cursor: pointer;
    .icon {
        height: 20px;
        margin-right: 6px;
    }
    span {
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
    }
}
@media screen and (max-width: 750px) {
    .g-language {
        width: 120px;
        height: 58px;
        border-radius: 33px;
        margin-right: 30px;
        .icon {
            height: 40px;
            margin-right: 12px;
        }
        span {
            font-size: 24px;
        }
    }
}
</style>