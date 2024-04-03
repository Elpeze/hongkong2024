import { defineStore } from 'pinia'

const chainNames: any = {
    '1': 'ETH',
    '56': 'BSC',
}

export const chainIdStore = defineStore('chainId', {
    state: () => ({
        chainId: useCookie<string>('chainId') || "1",
    }),
    getters: {
        getChainId: (state) => state.chainId || '1',
        getChainName: (state) => chainNames[state.chainId || '1'],
    },
    actions: {
        setChainId(id:any) {
            this.chainId = id
        },
    },
})