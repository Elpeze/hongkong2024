import { merge } from 'lodash'
import { useI18n } from '#imports'

type FetchType = typeof $fetch
type ReqType = Parameters<FetchType>[0]
type FetchOptions = Parameters<FetchType>[1]

function getApiBaseUrl(path: ReqType) {
    const developBaseUrl = "https://test-gis-api.arbproject.org"; // 测试环境
    const previewBaseUrl = "https://pre-gis-api.arbproject.org"; // 预发环境
    const productionBaseUrl = "https://gis-api.gopluslabs.io"; // 正式环境

    if (location.hostname == "localhost") { // 调试
        return developBaseUrl;
    } else if (location.hostname == "pre-health.arbproject.org") { // 预发
        return previewBaseUrl;
    } else if (location.hostname == "health.gopluslabs.io") { // 正式
        return productionBaseUrl;
    } else { // 测试
        return developBaseUrl;
    }
}

export function get<T = any>(
    request: ReqType,
    params?: any,
    opts?: FetchOptions
){
    const { $i18n } = useNuxtApp();
    const defaultOpts = {
        method: 'get',
        baseURL: getApiBaseUrl(request),
        headers: { 
            'X-Language': $i18n.locale.value.toLocaleUpperCase() === 'CN' ? 'ZH' : 'EN', //  EN | ZH
        } as any,
        params,
        onRequestError() {
            console.log('请求出错');
        },
        onResponseError({ response }) {
            switch(response.status){
                case 400:
                    console.log('参数错误')
                    break
                case 404:
                    console.log('请求地址错误')
                    break
            }
        }
    } as FetchOptions

    return $fetch<T>(request, merge(defaultOpts, opts))
}

export function post<T = any>(
    request: ReqType,
    body?: any,
    opts?: FetchOptions
){
    const { $i18n } = useNuxtApp();
    const defaultOpts = {
        method: 'post',
        baseURL: getApiBaseUrl(request),
        headers: { 
            'X-Language': $i18n.locale.value.toLocaleUpperCase() === 'CN' ? 'ZH' : 'EN', //  EN | ZH
        } as any,
        body,
        onRequestError() {
            console.log('请求出错');
        },
        onResponseError({ response }) {
            switch(response.status){
                case 400:
                    console.log('参数错误')
                    break
                case 404:
                    console.log('请求地址错误')
                    break
            }
        }
    } as FetchOptions

    return $fetch<T>(request, merge(defaultOpts, opts))
}

export function put<T = any>(
    request: ReqType,
    body?: any,
    opts?: FetchOptions
){
    const { $i18n } = useNuxtApp();
    const defaultOpts = {
        method: 'put',
        baseURL: getApiBaseUrl(request),
        headers: { 
            'X-Language': $i18n.locale.value.toLocaleUpperCase() === 'CN' ? 'ZH' : 'EN', //  EN | ZH
        } as any,
        body,
        onRequestError() {
            console.log('请求出错');
        },
        onResponseError({ response }) {
            switch(response.status){
                case 400:
                    console.log('参数错误')
                    break
                case 404:
                    console.log('请求地址错误')
                    break
            }
        }
    } as FetchOptions

    return $fetch<T>(request, merge(defaultOpts, opts))
}