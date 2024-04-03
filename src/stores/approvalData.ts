import { defineStore } from 'pinia'

export const approvalDataStore = defineStore('approvalData', {
    state: () => ({
        // 数据
        data: getCachedData('health.approval.list', [], true),
        // count: 0,
        // riskyCount: 0,

        ERC20List: [],
        ERC721List: [],
        ERC1155List: [],

        ERC20Count: getCachedData('health.approval.ERC20Count', 0),
        ERC20RiskyCount: getCachedData('health.approval.ERC20RiskyCount', 0),
        ERC721Count: getCachedData('health.approval.ERC721Count', 0),
        ERC721RiskyCount: getCachedData('health.approval.ERC721RiskyCount', 0),
        ERC1155Count: getCachedData('health.approval.ERC1155Count', 0),
        ERC1155RiskyCount: getCachedData('health.approval.ERC1155RiskyCount', 0),

        ERC20Counts: getCachedData('health.approval.ERC20Count', 0),
        ERC20RiskyCounts: getCachedData('health.approval.ERC20RiskyCount', 0),
        ERC721Counts: getCachedData('health.approval.ERC721Count', 0),
        ERC721RiskyCounts: getCachedData('health.approval.ERC721RiskyCount', 0),
        ERC1155Counts: getCachedData('health.approval.ERC1155Count', 0),
        ERC1155RiskyCounts: getCachedData('health.approval.ERC1155RiskyCount', 0),

        // 筛选
        standard: 'ERC20',
        isVerified: false,
        isHoneypot: false,
        isRisky: false,
        isStart: false,
        isReady:false,
        keyword: '',

        // 取消请求
        isCancelRequest: false,

        // 是否请求完成过
        isRequestCompletion: getCachedData('health.approval.isRequestCompletion', false),

        loading: false,
    }),
    getters: {
        getCount: (state) => {
            return state.ERC20Count + state.ERC721Count + state.ERC1155Count;
        },
        getRiskyCount: (state) => {
            return state.ERC20RiskyCount + state.ERC721RiskyCount + state.ERC1155RiskyCount;
        },
        getCountByStandard: (state) => {
            if (state.standard === 'ERC20') {
                return state.ERC20Count;
            }else if (state.standard === 'ERC721') {
                return state.ERC721Count;
            }else if (state.standard === 'ERC1155') {
                return state.ERC1155Count;
            }else{
                return 0;
            }
        },
        getRiskyCountByStandard: (state) => {
            if (state.standard === 'ERC20') {
                return state.ERC20RiskyCount;
            }else if (state.standard === 'ERC721') {
                return state.ERC721RiskyCount;
            }else if (state.standard === 'ERC1155') {
                return state.ERC1155RiskyCount;
            }else{
                return 0;
            }
        },
        getTokenList: (state) => {
            let res: Array<any> = state.data;
            if (state.isVerified) {
                res = res.filter((item:any)=> item.verified > 0);
            }
            if (state.isHoneypot) {
                res = res.filter((item:any)=> item.malicious_address == 0);
            }
            if (state.isRisky) {
                res = res.filter((item:any)=> item.risky_count > 0);
            }
            if (state.keyword) {
                res = res.filter((item:any)=> item.token_address == state.keyword);
            }
            return res;
        },
        getHomeData: (state) => {
            return state.data[0];
        }
    },
    actions: {
        setRequestStatus(value: boolean) {
            this.isCancelRequest = value;
        },
        setStandard(standard:string) {
            this.standard = standard;
            if (standard === 'ERC20') {
                this.data = this.ERC20List;
            }else if (standard === 'ERC721') {
                this.data = this.ERC721List;
            }else if (standard === 'ERC1155') {
                this.data = this.ERC1155List;
            }
        },
        setKeyword(value:string) {
            this.keyword = value;
        },
        setFilterData(key: string, value: boolean) {
            if (key === 'isVerified') {
                this.isVerified = value;
            }else if (key === 'isHoneypot') {
                this.isHoneypot = value;
            }else if (key === 'isRisky') {
                this.isRisky = value;
            }
        },
        setData(data: []) {
            this.data = data;
        },
        resetData() {
            this.data = [];
            this.ERC20List = [];
            this.ERC721List = [];
            this.ERC1155List = [];
            // this.count = 0;
            // this.riskyCount = 0;
            localStorage.removeItem('health.approval.list');
            localStorage.removeItem('health.approval.ERC20Count');
            localStorage.removeItem('health.approval.ERC20RiskyCount');
            localStorage.removeItem('health.approval.isRequestCompletion');

            localStorage.removeItem('health.approval.ERC721Count');
            localStorage.removeItem('health.approval.ERC721RiskyCount');

            localStorage.removeItem('health.approval.ERC1155Count');
            localStorage.removeItem('health.approval.ERC1155RiskyCount');
        },
        async getData(chainId: string, address: string, page: string = ''){
            this.isCancelRequest = false; // 重置请求被取消
            this.loading = true;
            this.isStart = true;
            let signObj = getSignComposables({
                addresses: address
            });
            const ERC20 = get(`/api/v3/token_approval_security/${chainId}`, {
                addresses: address,
            }, { headers: { ...signObj } as any });
            const ERC721 = get(`/api/v3/nft721_approval_security/${chainId}`, {
                addresses: address,
            }, { headers: { ...signObj } as any });
            const ERC1155 = get(
                `/api/v3/nft1155_approval_security/${chainId}`,
                {
                    addresses: address,
                }
                , { headers: { ...signObj } as any });
        
            const [
                { code: ERC20Code, result: ERC20Result },
                { code: ERC721Code, result: ERC721Result },
                { code: ERC1155Code, result: ERC1155Result },
            ] = await Promise.all([ERC20, ERC721, ERC1155]);

            if (this.isCancelRequest) {
                return;
            }
            this.loading = false;
            if (ERC20Code === 1 || ERC20Code === 2) {
                // console.log(ERC20Result);
                let ERC20Count = 0;
                let ERC20RiskyCount = 0;
                ERC20Result.forEach((item: any) => {
                    item.view_all = false;
                    item.risky_count = 0;
                    ERC20Count += item.approved_list.length;
                    if (item.is_open_source === 0) {
                        item.risky_count++;
                        ERC20RiskyCount++;
                    }
                    if (item.malicious_address === 1) {
                        item.risky_count++;
                        ERC20RiskyCount++;
                    }
                    item.approved_list.forEach((approved: any) => {
                        approved.approved_amount = isNaN(approved.approved_amount) ? approved.approved_amount : parseFloat(approved.approved_amount).toFixed(2)
                        approved.revoked = false;
                        if (approved.address_info.is_contract == 0) {
                            item.risky_count++;
                            ERC20RiskyCount++;
                        }
                        if (approved.address_info.doubt_list == 1) {
                            item.risky_count++;
                            ERC20RiskyCount++;
                        }
                    });
                });
                this.isRequestCompletion = true;
                this.data = ERC20Result;
                this.isReady = true;
                this.ERC20List = ERC20Result;
                // this.ERC20Counts = ERC20Count;
                // this.ERC20RiskyCounts = ERC20RiskyCount;

                if (page === 'home') {
                    this.ERC20Counts = ERC20Count;
                    this.ERC20RiskyCounts = ERC20RiskyCount;
                }else{
                    this.ERC20Count = ERC20Count;
                    this.ERC20RiskyCount = ERC20RiskyCount;
                }

                localStorage.setItem('health.approval.list', JSON.stringify(ERC20Result));
                localStorage.setItem('health.approval.ERC20Count', JSON.stringify(ERC20Count));
                localStorage.setItem('health.approval.ERC20RiskyCount', JSON.stringify(ERC20RiskyCount));
                localStorage.setItem('health.approval.isRequestCompletion', JSON.stringify(true));
            }

            if (ERC721Code === 1 || ERC721Code === 2) {
                // console.log(ERC721Result);
                let ERC721Count = 0;
                let ERC721RiskyCount = 0;
                ERC721Result.forEach((item: any) => {
                    // 字段转换
                    item.token_name = item.nft_name;
                    item.token_symbol = item.nft_symbol;
                    item.token_address = item.nft_address;

                    item.view_all = false;
                    item.risky_count = 0;
                    ERC721Count += item.approved_list.length;
                    if (item.is_open_source === 0) {
                        item.risky_count++;
                        ERC721RiskyCount++;
                    }
                    if (item.malicious_address === 1) {
                        item.risky_count++;
                        ERC721RiskyCount++;
                    }
                    item.approved_list.forEach((approved: any) => {
                        approved.approved_amount = isNaN(approved.approved_amount) ? approved.approved_amount : parseFloat(approved.approved_amount).toFixed(2)
                        approved.revoked = false;
                        if (approved.address_info.is_contract == 0) {
                            item.risky_count++;
                            ERC721RiskyCount++;
                        }
                        if (approved.address_info.doubt_list == 1) {
                            item.risky_count++;
                            ERC721RiskyCount++;
                        }
                    });
                });
                this.ERC721List = ERC721Result;
                // this.ERC721Counts = ERC721Count;
                // this.ERC721RiskyCounts = ERC721RiskyCount;
                
                if (page === 'home') {
                    this.ERC721Counts = ERC721Count;
                    this.ERC721RiskyCounts = ERC721RiskyCount;
                }else{
                    this.ERC721Count = ERC721Count;
                    this.ERC721RiskyCount = ERC721RiskyCount;
                }

                localStorage.setItem('health.approval.ERC721Count', JSON.stringify(ERC721Count));
                localStorage.setItem('health.approval.ERC721RiskyCount', JSON.stringify(ERC721RiskyCount));
            }

            if (ERC1155Code === 1 || ERC1155Code === 2) {
                console.log(ERC1155Result);
                let ERC1155Count = 0;
                let ERC1155RiskyCount = 0;
                ERC1155Result.forEach((item: any) => {
                    // 字段转换
                    item.token_name = item.nft_name;
                    item.token_symbol = item.nft_symbol;
                    item.token_address = item.nft_address;

                    item.view_all = false;
                    item.risky_count = 0;
                    ERC1155Count += item.approved_list.length;
                    if (item.is_open_source === 0) {
                        item.risky_count++;
                        ERC1155RiskyCount++;
                    }
                    if (item.malicious_address === 1) {
                        item.risky_count++;
                        ERC1155RiskyCount++;
                    }
                    item.approved_list.forEach((approved: any) => {
                        approved.approved_amount = isNaN(approved.approved_amount) ? approved.approved_amount : parseFloat(approved.approved_amount).toFixed(2)
                        approved.revoked = false;
                        if (approved.address_info.is_contract == 0) {
                            item.risky_count++;
                            ERC1155RiskyCount++;
                        }
                        if (approved.address_info.doubt_list == 1) {
                            item.risky_count++;
                            ERC1155RiskyCount++;
                        }
                    });
                });
                this.ERC1155List = ERC1155Result;
                // this.ERC1155Counts = ERC1155Count;
                // this.ERC1155RiskyCounts = ERC1155RiskyCount;

                if (page === 'home') {
                    this.ERC1155Counts = ERC1155Count;
                    this.ERC1155RiskyCounts = ERC1155RiskyCount;
                }else{
                    this.ERC1155Count = ERC1155Count;
                    this.ERC1155RiskyCount = ERC1155RiskyCount;
                }

                localStorage.setItem('health.approval.ERC1155Count', JSON.stringify(ERC1155Count));
                localStorage.setItem('health.approval.ERC1155RiskyCount', JSON.stringify(ERC1155RiskyCount));
            }
        }
    },
})