<template>
    <div class="a-container">
        <div class="a-header">
            <NuxtLink class="logo" :to="localePath('/')"> </NuxtLink>

            <div class="right">
                <NewsButton></NewsButton>
            </div>
        </div>
        <div class="a-wrapper">
            <slot />
        </div>
        <Footer></Footer>
    </div>
</template>


<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<style lang="scss">
.a-container {
    background: #141627;

    .a-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px 36px 10px 36px;
        .logo {
            display: inline-block;
            height: 30px;
            img {
                height: 30px;
            }
        }
        .right {
            display: flex;
            align-items: center;
        }
    }

    .a-wrapper {
        max-width: 1000px;
        margin: 0 auto;
        padding-bottom: 70px;
    }
}
</style>