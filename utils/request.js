var api = require('./api.js');
var app = getApp();
/**
 * 网络请求方法
 * @param url {string} 请求url
 * @param data {object} 参数
 * @param successCallback {function} 成功回调函数
 * @param errorCallback {function} 失败回调函数
 * @param completeCallback {function} 完成回调函数
 * @returns {void}
 */

//发送请求
function requestData(url, data0, successCallback, errorCallback) {
  wx.request({
    url: url,
    method: 'POST',
    data: data0,
    success: function (res) {
      successCallback(res);
    },
    error: function (res) {
      errorCallback(res);
    },
  });
}

//请求图片
function requestDataPic(url, data0, imageList, successCallback, errorCallback) {
  wx.uploadFile({
    url: url,
    filePath: imageList,
    name: 'file',
    formData: data0,
    success: function (res) {
      successCallback(res);
    },
    error: function (res) {
      errorCallback(res);
    },
  })
}

// 授权登录
function login(data0, successCallback, errorCallback) {
  requestData(api.login(), data0, successCallback, errorCallback);
}
// 获取Banner
function getBanner(data0, successCallback, errorCallback) {
  requestData(api.getBanner(), data0, successCallback, errorCallback);
}
// 获取getBannerDetial
function getBannerDetial(data0, successCallback, errorCallback) {
  requestData(api.getBannerDetial(), data0, successCallback, errorCallback);
}
// 获取getAbout
function getAbout(data0, successCallback, errorCallback) {
  requestData(api.getAbout(), data0, successCallback, errorCallback);
}
// 获取getAlist
function getAlist(data0, successCallback, errorCallback) {
  requestData(api.getAlist(), data0, successCallback, errorCallback);
}
// 获取getPk
function getPk(data0, successCallback, errorCallback) {
  requestData(api.getPk(), data0, successCallback, errorCallback);
}
// 获取getSolution
function getSolution(data0, successCallback, errorCallback) {
  requestData(api.getSolution(), data0, successCallback, errorCallback);
}
// 获取getTel
function getTel(data0, successCallback, errorCallback) {
  requestData(api.getTel(), data0, successCallback, errorCallback);
}
// 获取getlist
function getlist(data0, successCallback, errorCallback) {
  requestData(api.getlist(), data0, successCallback, errorCallback);
}
// 获取getAnlist
function getAnlist(data0, successCallback, errorCallback) {
  requestData(api.getAnlist(), data0, successCallback, errorCallback);
}
// 获取getDetail
function getDetail(data0, successCallback, errorCallback) {
  requestData(api.getDetail(), data0, successCallback, errorCallback);
}
// 获取getcountryInfo
function getcountryInfo(data0, successCallback, errorCallback) {
  requestData(api.getcountryInfo(), data0, successCallback, errorCallback);
}
// 获取getcountryInfo
function getpeoList(data0, successCallback, errorCallback) {
  requestData(api.getpeoList(), data0, successCallback, errorCallback);
}
// 获取getMap
function getMap(data0, successCallback, errorCallback) {
  requestData(api.getMap(), data0, successCallback, errorCallback);
}
// 获取getourSL
function getourSL(data0, successCallback, errorCallback) {
  requestData(api.getourSL(), data0, successCallback, errorCallback);
}
// 获取getbjd
function getbjd(data0, successCallback, errorCallback) {
  requestData(api.getbjd(), data0, successCallback, errorCallback);
}


module.exports = {
  login: login,
  getBanner: getBanner,
  getBannerDetial: getBannerDetial,
  getAbout: getAbout,
  getAlist: getAlist,
  getPk: getPk,
  getSolution: getSolution,
  getTel: getTel,
  getlist: getlist,
  getAnlist: getAnlist,
  getDetail: getDetail,
  getcountryInfo: getcountryInfo,
  getpeoList: getpeoList,
  getMap:getMap,
  getourSL: getourSL,
  getbjd:getbjd
};