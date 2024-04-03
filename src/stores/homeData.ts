import { defineStore } from 'pinia'

export const homeDataStore = defineStore('homeData', {
    state: () => ({
        data: [],
        tokenList: [],
        nftList: [],

        score: 0,

        oneKeyDetectionStatus: 'not_started',  // not_started  underway  complete
    }),
    getters: {
        
    },
    actions: {
        setDetectionStatus(status: string) {
            this.oneKeyDetectionStatus = status;
        },
        setData(data: []) {
            this.data = data;
        },
        async getData(chainId: string, address: string){
            let signObj = getSignComposables({
                address
            });
            const {code, result} = await get(`/api/v1/security/info/${chainId}`, { address }, { headers: { ...signObj } as any });
            if (code === 1) {
                if (result.score) {
                    this.score = parseInt(result.score) || 0;
                }
            }
        },
        async galxe(address: string){
            const {code} = await post(`/api/v1/galxe`, {}, { headers: { 
                'X-Address': address,
                'X-Project': 'one_key',
            } as any });
            if (code === 1) {
                console.log(`galxe submit success`);
            }
        }
    },
})