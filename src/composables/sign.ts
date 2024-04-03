import { Md5 } from 'ts-md5';

export const getSignComposables = (params:object) => {
    let manageKey = 'TDwhwuY4oORU7ldr';
    let timestamp = Date.now();
    let newParams:any = {...params, manageKey, timestamp};
    let paramsStr = '';
    var keys = Object.keys(newParams).sort();
    keys.forEach((item)=>{
        paramsStr += item + newParams[item];
    })
    // for (let key in newParams) {
    //     if (newParams[key] != undefined) {
    //         paramsStr += key + newParams[key];
    //     }
    // }
    const md5: any = new Md5();
    md5.appendAsciiStr(paramsStr);
    const sign = md5.end(); 
    return {
        manageId : 100001,
        timestamp,
        sign
    }
}