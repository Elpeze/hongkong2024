import { defineStore } from 'pinia'

export const nftDataStore = defineStore('nftData', {
    state: () => ({
        // 数据
        data: getCachedData('health.nft.list', [], true),
        count: getCachedData('health.nft.count', 0),
        riskyCount: getCachedData('health.nft.riskyCount', 0),
        attentionCount: getCachedData('health.nft.attentionCount', 0),
        riskyCounts: getCachedData('health.nft.riskyCount', 0),
        attentionCounts: getCachedData('health.nft.attentionCount', 0),
        
        isStart: false,
        isReady: false,

        // 筛选
        isRisky: false,
        isHoneypot: false,
        
        keyword: '',
        // 取消请求
        isCancelRequest: false,
        // 是否请求完成过
        isRequestCompletion: getCachedData('health.nft.isRequestCompletion', false),
        loading: false,

        apiExceptionType: '',
    }),
    getters: {
        getTokenList: (state) => {
            let res = state.data;
            if (state.isRisky) {
                res = res.filter((item:any)=> item.risky > 0 && item.toIgnore == 0);
            }
            if (state.isHoneypot) {
                res = res.filter((item:any)=> item.honeypot == 1);
            }
            if (state.keyword) {
                res = res.filter((item:any)=> item.contractAddress == state.keyword);
            }
            return res;
        },
        getHomeTokenList: (state) => {
            return state.data.slice(0, 5);
        }
    },
    actions: {
        setApiExceptionType(value: string) {
            this.apiExceptionType = value;
        },
        setRequestStatus(value: boolean) {
            this.isCancelRequest = value;
        },
        setKeyword(value:string) {
            this.keyword = value;
        },
        setFilterData(key: string, value: boolean) {
            if (key === 'isRisky') {
                this.isRisky = value;
            }else if (key === 'isHoneypot') {
                this.isHoneypot = value;
            }
        },
        setData(data: []) {
            this.data = data;
        },
        resetData() {
            this.data = [];
            this.count = 0;
            this.riskyCount = 0;
            this.attentionCount = 0;

            localStorage.removeItem('health.nft.list');
            localStorage.removeItem('health.nft.count');
            localStorage.removeItem('health.nft.riskyCount');
            localStorage.removeItem('health.nft.attentionCount');
            localStorage.removeItem('health.nft.isRequestCompletion');
        },
        async getData(chainId: string, address: string, page: string = ''){
            this.isCancelRequest = false; // 重置请求被取消
            this.loading = true;
            this.isStart = true;
            let signObj = getSignComposables({
                address
            });
            const {code} = await get(`/api/v1/security/check/nft/${chainId}`, { address }, { headers: { ...signObj } as any });
            if (code === 1) {
                let signObj = getSignComposables({
                    address,
                    type: 'NFT'
                });
                const {result: data} = await get(`/api/v1/security/address/list/${chainId}`, {
                    address: address,
                    type: 'NFT'
                }, { headers: { ...signObj } as any });
                if (!this.isCancelRequest) {
                    this.isRequestCompletion = true;
                    this.isReady = true;
                    this.data = data;
                    let riskyCount = 0;
                    let attentionCount = 0;
                    data.forEach((item:any) => {
                        if (item.risky > 0) {
                            riskyCount++;
                        }
                        if (item.attention > 0) {
                            attentionCount++;
                        }
                    });
                    if (page === 'home') {
                        this.riskyCounts = riskyCount;
                        this.attentionCounts = attentionCount;
                    }else{
                        this.count = data.length;
                        this.riskyCount = riskyCount;
                        this.attentionCount = attentionCount;
                    }

                    localStorage.setItem('health.nft.list', JSON.stringify(data));
                    localStorage.setItem('health.nft.count', JSON.stringify(data.length));
                    localStorage.setItem('health.nft.riskyCount', JSON.stringify(riskyCount));
                    localStorage.setItem('health.nft.attentionCount', JSON.stringify(attentionCount));
                    localStorage.setItem('health.nft.isRequestCompletion', JSON.stringify(true));
                }
            } else if (code === 2008){
                this.apiExceptionType = 'delay';
            }
            this.loading = false;
        }
    },
})