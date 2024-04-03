declare const window: any; // 类型“Window & typeof globalThis”上不存在属性
import { ElMessage } from "element-plus";

import {
    walletAddressStore,
} from "@/stores";

export const getAssetURL = (img: string) =>{
    return new URL(`../assets/img/${img}`, import.meta.url).href;
}

export const copyComposables = (p: string) => {
    const nuxtApp = useNuxtApp();
    let target = null;
    target = document.createElement("div");
    target.id = "tempTarget";
    target.style.opacity = "0";
    target.innerText = p;
    document.body.appendChild(target);

    try {
        let range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    } catch (e) {}
    document.body.removeChild(target);
    ElMessage({
        message: nuxtApp.$i18n.t("home.Copy success"),
    });
};

export const shortAddressComposables = (address: string) => {
    return address?.slice(0, 6) + '...' + address?.slice(-6)
};

export const formatUtcDate = (timestamp: number) => {
    
    let date = new Date(timestamp * 1000);
    return `${(('0' + (date.getUTCMonth() + 1)).slice(-2))}/${('0' + date.getUTCDate()).slice(-2)}/${date.getUTCFullYear()}`;
};

export const formatUtcTime = (timestamp: number) => {
    let date = new Date(timestamp * 1000);
    return `${('0' + date.getUTCHours()).slice(-2)}:${('0' + date.getUTCMinutes()).slice(-2)}`;
};

export const formatBalance = (num: number, digits: number) =>{
    let si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

export const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate() >= 10 ? d.getDate() : '0' + d.getDate();
    return `${month}/${date}/${year}`;
};

export const getNuxtLinkTo = (path: string) =>{
    const route = useRoute();
    if (route.query.channelCode) {
        path += `?channelCode=${route.query.channelCode}`
    }
    return path;
}

export const getURLParams = (key: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    let params:any = {};
    for (var param of searchParams.entries()) {
        params[param[0]] = param[1];
    }
    return params[key] ? params[key] : '';
}   

export const generateAppMarketLink = (linkUrl: string) =>{
    const channelCode = sessionStorage.getItem("channelCode");
    if (channelCode) {
        linkUrl += `?channelCode=${channelCode}&address=${walletAddressStore().walletAddress}`
    }
    return linkUrl;
}

export const isBackPage = () =>{
    return window.performance.navigation.type == 2;
}

export const getCachedData = (storageKey: string, defaultValue: any = 0, serialize: boolean = false) =>{
    if (isBackPage()) {
        let data = localStorage.getItem(storageKey);
        let res:any;
        if (serialize) {
            res = [];
            if (data !== null){
                res = JSON.parse(data);
            } else{
                res = []
            }
        }else{
            if (typeof defaultValue === 'number') {
                res = Number(data);
            }else{
                res = data;
            }
        }
        return res;
        
    }else{
        return defaultValue;
    }
}


