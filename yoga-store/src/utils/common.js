/*
 * Auth 柴天悦
 * CreateDate 2020/04/26
 * CreateTime 10:40
 */


import Axios from 'axios'


/**
 * description 判空
 * param
 * return
 * author 柴天悦
 * createTime 2020/4/26 10:42
 **/
window.isNull=function isNull (obj) {
  return (typeof (obj)=="undefined" || obj=="")
}

/**
 * description 日期格式化
 * param
 * return
 * author 柴天悦
 * createTime 2020/4/26 10:45
 **/
Date.prototype.format=function (fmt="yyyy-MM-dd") {
  let o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "H+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }

  let week = {
    "0" : "日",
    "1" : "一",
    "2" : "二",
    "3" : "三",
    "4" : "四",
    "5" : "五",
    "6" : "六"
  };
  if(/(E+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "")+week[this.getDay()+""]);
  }
  return fmt;
}


/**
 * 日期添加 N 天
 * @param amount
 * @returns {Date}
 */
Date.prototype.addDays = function(amount){this.setDate(this.getDate() + amount);return this;};

/**
 * 日期添加 N 月
 * @param amount
 * @returns {Date}
 */
Date.prototype.addMonths = function(amount){this.setMonth(this.getMonth() + amount);return this;};

/**
 * 日期添加 N 年
 * @param amount
 * @returns {Date}
 */
Date.prototype.addYears = function(amount){this.setMonth(this.getFullYear() + amount);return this;};

/**
 * 日期添加 N 小时
 * @param amount
 * @returns {Date}
 */
Date.prototype.addHours = function(amount){this.setHours(this.getHours() + amount);return this;};

/**
 * 日期添加 N 分钟
 * @param amount
 * @returns {Date}
 */
Date.prototype.addMinutes = function(amount){this.setMinutes(this.getMinutes() + amount);return this;};

/**
 * 日期添加 N 秒
 * @param amount
 * @returns {Date}
 */
Date.prototype.addSeconds = function(amount){this.setSeconds(this.getSeconds() + amount);return this;};


/**
 * 获取范围随机数
 * @param min
 * @param max
 * @returns {number}
 */
Math.getRandomFromRange=function (min, max) {
  let r = this.random() * (max - min);
  let re = this.round(r + min);
  re = this.max(this.min(re, max), min);
  return re;
};

var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

Math.uuid = function (len, radix) {
  var chars = CHARS, uuid = [], i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random()*16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
};

// A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
// by minimizing calls to random()
Math.uuidFast = function() {
  let chars = CHARS, uuid = new Array(36), rnd=0, r;
  for (var i = 0; i < 36; i++) {
    if (i==8 || i==13 ||  i==18 || i==23) {
      uuid[i] = '-';
    } else if (i==14) {
      uuid[i] = '4';
    } else {
      if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
      r = rnd & 0xf;
      rnd = rnd >> 4;
      uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
    }
  }
  return uuid.join('');
};

// A more compact, but less performant, RFC4122v4 solution:
Math.uuidCompact = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
};

/**
 * 对象转 QueryString
 * @returns {string}
 */
Object.toQueryString = function(){
  return Object.keys(this).map(key => {
    const value = this[key];
    if (value === undefined) {
      return '';
    }
    return key+ '=' + value;
  }).filter(x => x.length > 0).join('&')
};


/**
 * 去除两边空格
 * @returns {string}
 */
String.prototype.trim = function(){return this.replace(/(^\s*)|(\s*$)/g, "");};
/**
 * 去除左边空格
 * @returns {string}
 */
String.prototype.leftTrim = function(){return this.replace(/(^\s*)/g, "");};

/**
 * 去除右边空格
 * @returns {string}
 */
String.prototype.rightTrim = function(){return this.replace(/(\s*$)/g, "");};

/**
 * 获取URL参数
 */
window.getQueryString = function(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null)
    return unescape(r[2]);
  return undefined;
};


/**
 * 替换
 * @param s1
 * @param s2
 * @returns {string}
 */
String.prototype.replaceAll = function (s1, s2) {
  let r = new RegExp(s1.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g, "\\$1"), "ig");
  return this.replace(r, s2);
};

/**
 * 数组根据属性排序
 * @param option
 * @returns {any}
 */
Array.prototype.sortByAttr=function (option) {
  option = Object.assign({attr:'',type:'asc'},option);
  let {type,attr} = option;
  let a = this;
  let temp=a[0];
  for(let i=0;i<a.length-1;i++){
    for(let j=0;j<a.length-1-i;j++){
      let tmpA = a[j],tmpB=a[j+1];
      if(attr && ''!==attr){
        tmpA = a[j][attr];
        tmpB = a[j+1][attr];
      }
      if(tmpA>tmpB){
        temp=a[j];
        a[j]=a[j+1];
        a[j+1]=temp;
      }
    }
  }

  return type==='desc'?a.reverse():a;
};

/**
 * 获取七牛上传token
 * @param product
 * @returns {Promise<AxiosResponse<T>>}
 */
function getUploadToken(product="static"){
  let promise =  Axios.get(`${constant.apiUrl}/message/image/uploadtoken?product=${product}`);
  return promise;
};

