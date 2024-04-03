declare const window: any; // 类型“Window & typeof globalThis”上不存在属性
declare const Web3: any;

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { mainnet, bsc } from '@wagmi/core/chains'
import { getAccount, getContract } from '@wagmi/core'

import {
    walletAddressStore,
    chainIdStore,
    tokenDataStore,
    nftDataStore,
    approvalDataStore,
    homeDataStore,
} from "../stores";

import ERC20_ABI from "../assets/abi/ERC20_ABI.json";
import ERC721_ABI from "../assets/abi/ERC721_ABI.json";
import ERC1155_ABI from "../assets/abi/ERC1155_ABI.json";

const WEB3_PROVIDER = "https://mainnet.infura.io/v3/f324b2259dbe47b1bed9c502bbf99feb"
const ADDRESS_0 = '0x0000000000000000000000000000000000000000'
const PLEASE_INSTALL = 'Please install MetaMask...'

const config = {
    1: {
        'name': 'ETH',
        'rpcUrls': [
            'https://mainnet.infura.io/v3/'
        ],
        'nativeCurrency': {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        }
    },
    56: {
        'name': 'BNB Smart Chain Mainnet',
        'rpcUrls': [
            'https://bsc-dataseed1.binance.org/',
        ],
        'nativeCurrency': {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18
        }
    }
}

// web3modal
const chains = [mainnet, bsc]
const projectId = '7b5c282963bef3c67f50a3580244c9a5'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: false,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
export const web3modal = new Web3Modal({ projectId }, ethereumClient)


function getAccountByWeb3Modal(){
    if (chainIdStore().getChainId == '56') {
        web3modal.setDefaultChain(bsc);
    }else{
        web3modal.setDefaultChain(mainnet);
    }
    
    web3modal.openModal();
    web3modal.subscribeEvents((e)=>{
        if (e.name == 'ACCOUNT_DISCONNECTED') {
            walletAddressStore().setWalletAddress("");
            walletAddressStore().setConnectMode("");
            tokenDataStore().resetData();
            nftDataStore().resetData();
            approvalDataStore().resetData();
            homeDataStore().setDetectionStatus("not_started");

            const localeRoute = useLocaleRoute();
            const index = localeRoute({ name: "index" });
            if (index) {
                return navigateTo(index.fullPath);
            }
        }
        if (e.name == 'ACCOUNT_CONNECTED') {
            let accounts = getAccount();
            if (accounts.address) {
                accounts.connector?.addListener('change', (val)=>{
                    if (val.chain) {
                        chainIdStore().setChainId(val.chain.id);
                        tokenDataStore().resetData();
                        nftDataStore().resetData();
                        approvalDataStore().resetData();
                        homeDataStore().setDetectionStatus("not_started");
                    }
                })
                walletAddressStore().setWalletAddress(accounts.address);
                walletAddressStore().setConnectMode('web3modal');
                tokenDataStore().resetData();
                nftDataStore().resetData();
                approvalDataStore().resetData();
                homeDataStore().setDetectionStatus("not_started");
    
                const localeRoute = useLocaleRoute();
                const home = localeRoute({ name: "home" });
                if (home) {
                    return navigateTo(home.fullPath);
                }
            }
        }
        console.log(e);
    })
    // if (!window.web3ModalTimer) {
    //     function timerHandle() {
    //         console.log('web3ModalTimer')
    //         let accounts = getAccount();
    //         console.log(accounts);
    //         if (accounts.address) {
    //             clearInterval(window.web3ModalTimer);
    //             window.web3ModalTimer = null;

    //             accounts.connector?.addListener('change', (val)=>{
    //                 if (val.chain) {
    //                     chainIdStore().setChainId(val.chain.id);
    //                     tokenDataStore().resetData();
    //                     nftDataStore().resetData();
    //                     approvalDataStore().resetData();
    //                     homeDataStore().setDetectionStatus("not_started");
    //                 }
    //             })

    //             walletAddressStore().setWalletAddress(accounts.address);
    //             walletAddressStore().setConnectMode('web3modal');
    //             tokenDataStore().resetData();
    //             nftDataStore().resetData();
    //             approvalDataStore().resetData();
    //             homeDataStore().setDetectionStatus("not_started");
    
    //             const localeRoute = useLocaleRoute();
    //             const home = localeRoute({ name: "home" });
    //             if (home) {
    //                 return navigateTo(home.fullPath);
    //             }
    //         }
    //     }
    //     timerHandle();
    //     window.web3ModalTimer = setInterval(timerHandle, 2000)
    // }
}

function getEthereum() {
    if (getURLParams('cid') == APP_CONFIG.cid.bitget  && isBitget()) {
        window.health_ethereum = window.bitkeep.ethereum;
    }else{
        window.health_ethereum = window.ethereum;
    }
    return window.health_ethereum;
}
getEthereum();

// 接入bitget钱包
// if (getURLParams('cid') == APP_CONFIG.cid.bitget  && isBitget()) {
//     window.ethereum = window.bitkeep.ethereum;
// }


function getWeb3() {
    if (window.health_ethereum) {
        if (!window.web3Instance) {
            window.web3Instance = new Web3(window.health_ethereum)
        }
    
        return window.web3Instance
    } else {
        ElMessage({
            message: PLEASE_INSTALL,
        });
    }
}


export async function connectWalletComposables() {
    if (window.health_ethereum) {
        try {
            await window.health_ethereum.request({
                method:"wallet_requestPermissions",
                params:[
                    {
                        'eth_accounts': {}
                    }
                ]
            })
            return await window.health_ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {
            return await window.health_ethereum.request({ method: "eth_requestAccounts" })
        }
    } else {
        getAccountByWeb3Modal();
    }
}



export async function getCurrentAccounts() {
    getEthereum();
    if (window.health_ethereum) {
        return await window.health_ethereum.request({ method: "eth_requestAccounts" })
    } else {
        getAccountByWeb3Modal();
    }
}


export async function chainChanged() {
    if (window.health_ethereum) {
        window.health_ethereum.on('chainChanged', (chainId: string) => {
            let id = parseInt(chainId).toString();
            if (id == '1' || id == '56') {
                chainIdStore().setChainId(id);
                tokenDataStore().resetData();
                nftDataStore().resetData();
                approvalDataStore().resetData();
                homeDataStore().setDetectionStatus("not_started");
            }
        });
    }
}

export async function accountsChanged() {
    if (window.health_ethereum) {
        window.health_ethereum.on('accountsChanged', (accounts: Array<string>) => {
            console.log(accounts);
            if (accounts.length > 0) {
                walletAddressStore().setWalletAddress(accounts[0]);
                walletAddressStore().setConnectMode('accountsChanged');
                tokenDataStore().resetData();
                nftDataStore().resetData();
                approvalDataStore().resetData();
                homeDataStore().setDetectionStatus("not_started");
            }
        });
    }
}

export function isSafepal() {
    return !!window.safepalProvider;
}

export function isBitget() {
    return window.bitkeep && window.bitkeep.ethereum;
}

export function isBitKeepChrome() {
    return window.bitkeep && window.bitkeep.ethereum && window.bitkeep.ethereum.isBitKeepChrome;
}


export async function isConnected() {
    if (window.health_ethereum) {
        return window.health_ethereum.isConnected()
    } else {
        getAccountByWeb3Modal();
    }
}

export async function getChainId() {
    if (window.health_ethereum) {
        return await window.health_ethereum.request({ method: 'eth_chainId' })
    } else {
        getAccountByWeb3Modal();
    }
}

export async function switchChain(chainId:any) {
    return new Promise((resolve, reject) => {
        if (window.health_ethereum) {
            let web3 = getWeb3()
            window.health_ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: web3.utils.toHex(chainId)}]
            }).then(resolve).catch((error:any) => {
                if (error.code == 4902) { // chain not yet added
                    let chain = config[chainId as keyof typeof config];
                    window.health_ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainName: chain.name,
                            chainId: web3.utils.toHex(chainId),
                            rpcUrls: chain.rpcUrls,
                            nativeCurrency: chain.nativeCurrency
                        }]
                    }).then(resolve).catch(reject)
                } else {
                    reject(error)
                }
            })
        } else {
            reject(new Error(PLEASE_INSTALL))
        }
    })
}

export async function detectChain(chainId:any) {
    return new Promise((resolve, reject) => {
        let web3 = getWeb3()
        getChainId().then((currentChainId) => {
            if (currentChainId != web3.utils.toHex(chainId)) {
                switchChain(chainId).then(resolve).catch(reject)
            } else {
                resolve(chainId)
            }
        })
    })
}

export function approveToken(chainId:string, myAddress: string, tokenAddress: string, approveAddress: string) {
    return new Promise((resolve, reject) => {
        detectChain(chainId).then(() => {
            getGasPrice().then((gasPrice) => {
                let params = {
                    gasPrice,
                    from: myAddress
                }
                let web3 = getWeb3()
                let contract = new web3.eth.Contract(ERC20_ABI, tokenAddress)

                let methods = contract.methods.approve(approveAddress, web3.utils.toHex(0))
                methods.estimateGas(params).then((limit: any) => {
                    
                    limit = getWeb3().utils.numberToHex(Math.round(limit + 30000))
                        console.log('gasLimit: ', limit)
                        methods.send({
                            ...params,
                            gasLimit: limit
                        }).then(resolve).catch(reject)
                }).catch(reject)
            }).catch(reject)
        }).catch(reject)
    })
}

export function approveNft721(chainId: string, myAddress: string, tokenAddress: string, approveAddress: string, tokenId: string, forAll: boolean) {
    return new Promise((resolve, reject) => {
        detectChain(chainId).then(() => {
            getGasPrice().then((gasPrice) => {
                let params = {
                    gasPrice,
                    from: myAddress
                }
                let web3 = getWeb3()
                let contract = new web3.eth.Contract(ERC721_ABI, tokenAddress)
    
                let methods: any
                if (forAll) {
                    methods = contract.methods.setApprovalForAll(approveAddress, false)
                } else {
                    methods = contract.methods.approve(ADDRESS_0, tokenId)
                }
                methods.estimateGas(params).then((limit: any) => {
                    limit = getWeb3().utils.numberToHex(Math.round(limit + 30000))
                        console.log('gasLimit: ', limit)
                        methods.send({
                            ...params,
                            gasLimit: limit
                        }).then(resolve).catch(reject)
                }).catch(reject)
            }).catch(reject)
        }).catch(reject)
    })
}

export function approveNft1155(chainId: string, myAddress: string, tokenAddress: string, approveAddress: string) {
    return new Promise((resolve, reject) => {
        detectChain(chainId).then(() => {
            getGasPrice().then((gasPrice) => {
                let params = {
                    gasPrice,
                    from: myAddress
                }
                let web3 = getWeb3()
                let contract = new web3.eth.Contract(ERC1155_ABI, tokenAddress)
    
                let methods = contract.methods.setApprovalForAll(approveAddress, false)
                methods.estimateGas(params).then((limit: any) => {
                    limit = getWeb3().utils.numberToHex(Math.round(limit + 30000))
                        console.log('gasLimit: ', limit)
                        methods.send({
                            ...params,
                            gasLimit: limit
                        }).then(resolve).catch(reject)
                }).catch(reject)
            }).catch(reject)
        }).catch(reject)
    })
}

function getGasPrice() {
    return new Promise((resolve, reject) => {
        getWeb3().eth.getGasPrice().then((price:any) => {
            console.log('gasPrice: ', price)
            resolve(getWeb3().utils.numberToHex(price))
        }).catch(reject)
    })
}

// export { getWeb3, connectWallet, isConnected, getChainId, approveToken, approveNft721, approveNft1155 }
