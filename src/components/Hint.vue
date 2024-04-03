<template>
    <NuxtLink class="hint" :to="link" target="_blank" v-show="title">
        <div class="left">
            <img src="~/assets/img/icon-broadcast.png" alt="icon" />
            <span>{{ title }}</span>
        </div>

        <div class="btn" v-if="button">{{ $t("home.Set up") }}</div>
    </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    link: String,
    button: Boolean,
});
</script>

<style lang="scss" scoped>
.hint {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // max-width: 1000px;
    margin: 0 auto;
    padding: 0 28px;
    height: 48px;
    background: rgba($color: #ffffff, $alpha: 0.08);
    border-radius: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    .left {
        display: flex;
        align-items: center;
    }
    img {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 116px;
        height: 30px;
        background: #444b85;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
    }
}

@media screen and (max-width: 750px) {
    .hint {
        margin: 0 auto;
        height: auto;
        padding: 20px 28px;
        font-size: 20px;
        img {
            width: 28px;
            height: 28px;
            margin-right: 14px;
        }
        span {
            flex: 1;
        }
        .btn {
            width: 180px;
            height: 60px;
            font-size: 24px;
            margin-left: 20px;
        }
    }
}
</style>