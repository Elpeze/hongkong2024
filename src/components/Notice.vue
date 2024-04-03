<template>
    <transition-fade>
        <div
            v-if="props.visible"
            class="g-notice"
            :class="{ 'g-notice-warning': props.icon == 'warning' }"
        >
            <div class="content">
                <img
                    v-if="props.icon == 'bitget'"
                    class="icon"
                    src="~/assets/img/icon-bitget.png"
                    alt="icon"
                />
                <img
                    v-if="props.icon == 'galxe'"
                    class="icon"
                    src="~/assets/img/icon-galxe.png"
                    alt="icon"
                />
                <img
                    v-if="props.icon == 'warning'"
                    class="icon"
                    src="~/assets/img/icon-notice-warning.png"
                    alt="icon"
                />
                <span>{{ props.title }}</span>
                <div class="btn" @click="btnClick">
                    {{ props.button }}
                </div>
            </div>
            <img
                @click="emits('toggle')"
                class="btn-close"
                src="~/assets/img/icon-close1.png"
                alt="icon"
            />
        </div>
    </transition-fade>
</template>

<script lang="ts" setup>
const props = defineProps({
    visible: Boolean,
    icon: String,
    title: String,
    button: String,
});

const emits = defineEmits(["toggle"]);

const btnClick = () => {
    if (props.icon == "bitget") {
        window.open("https://web3.bitget.com/en/wallet-download?type=1");
    } else if (props.icon == "galxe") {
        window.open("https://galxe.com/goplussecurity/campaign/GCTfgUHciS");
        emits("toggle");
    } else if (props.icon == "warning") {
        emits("toggle");
    }
};
</script>

<style lang="scss">
.g-notice {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: 50px;
    background: linear-gradient(90deg, #141726 0%, #026957 100%);
    &.g-notice-warning {
        background: linear-gradient(90deg, #28160e 0%, #c47321 100%);
        .content {
            .btn {
                background: #ffffff;
                color: #92551b;
            }
        }
    }
    .content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        .icon {
            height: 23px;
            margin-right: 10px;
        }
        span {
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
        }
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 88px;
            height: 30px;
            background: #00efc4;
            border-radius: 15px;
            font-size: 14px;
            font-weight: 600;
            color: #222434;
            cursor: pointer;
            margin-left: 10px;
        }
    }
    .btn-close {
        position: absolute;
        top: 13px;
        right: 30px;
        height: 24px;
        cursor: pointer;
    }
}

@media screen and (max-width: 750px) {
    .g-notice {
        height: auto;
        min-height: 80px;
        background: linear-gradient(90deg, #141726 0%, #026957 100%);
        .content {
            padding: 24px 100px 24px 40px;
            align-items: flex-start;
            justify-content: flex-start;
            .icon {
                margin-top: 10px;
                height: 33px;
                margin-right: 17px;
            }
            span {
                margin-top: 10px;
                font-size: 24px;
                line-height: 32px;
            }
            .btn {
                width: 124px;
                height: 52px;
                border-radius: 26px;
                font-size: 24px;
                margin-left: 20px;
            }
        }
        .btn-close {
            top: 24px;
            right: 30px;
            height: 34px;
        }
    }
}
</style>