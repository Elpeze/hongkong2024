import { defineStore } from 'pinia'

export const newsDataStore = defineStore('newsData', {
    state: () => ({
        list: [], // 快讯列表
        noMore: false, // 没有更多
        unreadCount: 0, // 快讯未读数

        newest: {}, // 首页最新通知
        isHasNewest: false,

        homeNewsList: [], // 首页通知列表
        waitingAdList: [], // 检测中广告列表
        detectAdList: [], // 检测后广告列表

        connectWalletText: '', // 链接钱包文案
        walletHintSubTitle: '', // 
        demoAlertImage: '',
        demoAlertMobileImage: '',
    }),
    getters: {
        getNewsList: (state) => {
            let res: Array<any> = [];
            res = state.list;
            return res;
        },
        getHomeNews: (state) => {
            return state.homeNewsList.length > 0 ? state.homeNewsList[0] : { title: '', linkUrl: ''}
        },
        getHomeWaitingAd: (state) => {
            return state.waitingAdList.length > 0 ? state.waitingAdList[0] : {};
        },
        getWaitingAd: (state) => {
            let ad = state.waitingAdList.filter((item:any)=>{
                return item.images && item.imagesMobile;
            })
            return ad.length > 0 ? ad.splice(0, 2) : [];
        },
        getDetectAd: (state) => {
            let ad = state.detectAdList.filter((item:any)=>{
                return item.images && item.imagesMobile;
            })
            return ad.length > 0 ? ad.splice(0, 2) : [];
        },
        getConnectWalletText(state) {
            return state.connectWalletText;
        },
        getWalletHintSubTitle(state) {
            const route = useRoute();
            if (route.query.cid && !state.walletHintSubTitle) {
                newsDataStore().getChannelConfig();
            }
            return state.walletHintSubTitle;
        },
        getDemoAlertImage(state) {
            const route = useRoute();
            if (route.query.cid && !state.demoAlertImage) {
                newsDataStore().getChannelConfig();
            }
            return state.demoAlertImage;
        },
        getDemoAlertMobileImage(state) {
            const route = useRoute();
            if (route.query.cid && !state.demoAlertMobileImage) {
                newsDataStore().getChannelConfig();
            }
            return state.demoAlertMobileImage;
        },
    },
    actions: {
        setIsHasNewest(value: boolean) {
            this.isHasNewest = value;
        },
        // 获取列表
        async getData(page: number, pageSize: number,address: string){
            const {code, result} = await get(`/api/v1/notice/list`, 
                {
                    page: page,
                    pageSize: pageSize,
                    userAddress: address 
                });
            if (code === 1) {
                console.log(result);
                this.list = result.list;
                if (result.list.length < pageSize) {
                    this.noMore = true;
                }
            }
        },
        // 获取未读数
        async getUnreadCount(address: string){
            const {code, result} = await get(`/api/v1/notice/unread`, { userAddress: address });
            if (code === 1) {
                this.unreadCount = result;
            }
        },
        // 设为已读
        async setRead(address: string){
            const {code, result} = await get(`/api/v1/notice/read`, { userAddress: address });
            if (code === 1) {
                this.unreadCount = 0;
            }
        },
        // 最新公告
        async getNewest(address: string){
            const {code, result} = await get(`/api/v1/notice/new`, { userAddress: address });
            if (code === 1) {
                this.newest = result;
                this.isHasNewest = !!result;
            }
        },
        // 首页通知列表
        async getHomeNewsList(){
            const {code, result} = await get(`/api/v1/notice/newList`);
            if (code === 1) {
                this.homeNewsList = result;
            }
        },
        resetAdData() {
            this.waitingAdList = [];
            this.detectAdList = [];
        },
        // 链接钱包文案
        async getChannelConfig(){
            const route = useRoute();
            const {code, result} = await get(`/api/v1/notice/channel/config/${route.query.cid}`);
            if (code === 1) {
                if (result.BUTTON_CONNET_WALLET_TITLE) {
                    this.connectWalletText = result.BUTTON_CONNET_WALLET_TITLE;
                }else{
                    this.connectWalletText = '';
                }
                if (result.WALLET_HINT_SUB_TITLE) {
                    this.walletHintSubTitle = result.WALLET_HINT_SUB_TITLE;
                }else{
                    this.walletHintSubTitle = '';
                }
                if (result.DEMO_ALERT_IMAGE) {
                    this.demoAlertImage = result.DEMO_ALERT_IMAGE;
                }else{
                    this.demoAlertImage = '';
                }
                if (result.DEMO_ALERT_MOBILE_IMAGE) {
                    this.demoAlertMobileImage = result.DEMO_ALERT_MOBILE_IMAGE;
                }else{
                    this.demoAlertMobileImage = '';
                }
                
            }
        },
        // 广告接口
        async getAdList(type: string, tag: string = ''){
            const route = useRoute();
            // type: WAITING | DETECT     tag: HOME | NFT | TOKEN | APPROVE
            const {code, result} = await get(`/api/v1/notice/advertisement`, {
                type,
                tag,
                channel: route.query.cid
            });
            if (code === 1) {
                // this.adList = result;
                if (type == 'WAITING') {
                    this.waitingAdList = result;
                }else if (type == 'DETECT') {
                    this.detectAdList = result;
                }
            }
        },
        // 根据渠道号获取活动状态
        async getActivityStatusByChannel(channel: string){
            let status = 0;
            const {code, result} = await get(`/api/v1/notice/channel/activity/${channel}?type=GLOBAL`, {});
            if (code === 1) {
                if (result != null) {
                    status = result.status;
                }
            }
            return status == 1;
        },
    },
})