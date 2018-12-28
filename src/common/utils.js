/*
 * @Author: seven.zhang 
 * @Date: 2018-12-25 14:33:09 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-12-26 15:14:15
 * 
 * 一些项目中经常使用的工具类函数
 */

'use strict';

/**
 * 检查是否为空字符串
 * @param {判断的字符串} str
 * @return boolean false → 不是空串 true → 是空串
 */
export function isEmptyString(str) {
    if(trim(str).length == 0 || str==null){  
        return true;  
    }else{                
        return false;  
    }
}

/**
 * 判断是否为空对象
 * @param {判断的对象} obj
 * @return boolean false → 不是空对象 true → 是空对象
 */
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0
}
 
/**
 * 判断是否为空
 * @param {判断的对象} obj
 */
export function isNullOrEmpty(obj) {
    return undefined === obj || null == obj || '' === obj;
}
/**
 * 字符串删除空格
 * @param {字符串} str
 * @param {param} is_global
 * is_global
 * 'g':去掉去掉字符串中所有空格，包括中间空格
 * 其他:去掉前后所有空格
 */
export function trim(str,is_global){
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    if(is_global.toLowerCase()=="g"){
        result = result.replace(/\s/g,"");
    }
    return result;
}
        