import { walletAddressStore } from "../stores";

export default defineNuxtRouteMiddleware((to) => {
    if (!walletAddressStore().getWalletAddress) {
        return '/';
    }
})