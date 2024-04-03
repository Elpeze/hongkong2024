import { defineStore } from 'pinia'

export const walletAddressStore = defineStore('walletAddress', {
    state: () => ({
        connectMode: useCookie('connectMode'), // 连接方式 web3modal 

        // demo - bsc 0x5cF5e298FfaACa68A0257b352Be5EB9D9b51EDF5
        // demo - eth 

        // 0x10ed43c718714eb63d5aa57b78b54704e256024e
        // 0xe008e015496c57515024f020605c374bac2008ac
        // nft 0xfdcd504b7697496f8dbea8d0ab7b2617665060dc
        // nft 0xFb250d63D4f4e54F899B5Dd04d2915EE31640fC3
        // walletAddress: useCookie('walletAddress'),
        // walletAddress: '0xA8dfd1f310C6e3DE99DaA81096fd0dA5DA5e4399',
        walletAddress: '0x5cF5e298FfaACa68A0257b352Be5EB9D9b51EDF5',
    }),
    getters: {
        getWalletAddress: (state) => state.walletAddress || '',
        getShortWalletAddress: (state) => {
            if (state.walletAddress) {
                return state.walletAddress?.slice(0, 6) + '...' + state.walletAddress?.slice(-4)
            }else{
                return '';
            }
        },
    },
    actions: {
        setWalletAddress(address:string) {
            this.walletAddress = address;
        },
        setConnectMode(mode: string) {
            this.connectMode = mode;
        }
    },
})