import { defineStore } from 'pinia'

export const tokenDataStore = defineStore('tokenData', {
    state: () => ({
        data: getCachedData('health.token.list', [], true),
        count: getCachedData('health.token.count', 0),
        riskyCount: getCachedData('health.token.riskyCount', 0),
        attentionCount: getCachedData('health.token.attentionCount', 0),
        riskyCounts: getCachedData('health.token.riskyCount', 0),
        attentionCounts: getCachedData('health.token.attentionCount', 0),
        isRequestCompletion: getCachedData('health.token.isRequestCompletion', false), // 是否请求完成过
        
        isStart: false,
        isReady: false,
        
        isRisky: false,
        isHoneypot: false,
        keyword: '',

        apiExceptionType: '',

        isCancelRequest: false,

        loading: false,
    }),
    getters: {
        getTokenList: (state) => {
            let res: Array<any> = state.data;
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

            localStorage.removeItem('health.token.list');
            localStorage.removeItem('health.token.count');
            localStorage.removeItem('health.token.riskyCount');
            localStorage.removeItem('health.token.attentionCount');
            localStorage.removeItem('health.token.isRequestCompletion');
        },
        refreshCount() {
            let riskyCount = 0;
            let attentionCount = 0;
            this.data.forEach((item:any) => {
                if (item.toIgnore == 0) {
                    if (item.risky > 0) {
                        riskyCount++;
                    }
                    if (item.attention > 0) {
                        attentionCount++;
                    }
                }
            });
            this.riskyCount = riskyCount;
            this.attentionCount = attentionCount;
            localStorage.setItem('health.token.riskyCount', JSON.stringify(riskyCount));
            localStorage.setItem('health.token.attentionCount', JSON.stringify(attentionCount));
        },
        async getData(chainId: string, address: string, page: string = ''){
            this.isCancelRequest = false; // 重置请求被取消
            this.loading = true;
            this.isStart = true;
            let signObj = getSignComposables({
                address
            });
            // this.apiExceptionType = 'delay';
            const {code} = await get(`/api/v1/security/check/token/${chainId}`, { address }, { headers: { ...signObj } as any });
            if (code === 1) {
                let signObj = getSignComposables({
                    address,
                    type: 'TOKEN'
                });
                const {result: data} = await get(`/api/v1/security/address/list/${chainId}`, {
                    address: address,
                    type: 'TOKEN'
                }, { headers: { ...signObj } as any });
                if (!this.isCancelRequest) {
                    this.isReady = true;
                    this.isRequestCompletion = true;
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

                    localStorage.setItem('health.token.list', JSON.stringify(data));
                    localStorage.setItem('health.token.count', JSON.stringify(data.length));
                    localStorage.setItem('health.token.riskyCount', JSON.stringify(riskyCount));
                    localStorage.setItem('health.token.attentionCount', JSON.stringify(attentionCount));
                    localStorage.setItem('health.token.isRequestCompletion', JSON.stringify(true));
                }else{
                    console.log('token 请求被取消');
                }
            } else if (code === 2008){
                this.apiExceptionType = 'delay';
            }
            this.loading = false;
        },
        async putToIgnore(id: string, address: string,){
            let signObj = getSignComposables({
                userAddress: address,
            });
            return await put(`/api/v1/security/address/${id}`, {
                userAddress: address,
            }, { headers: { ...signObj } as any });
        }
        
    },
})