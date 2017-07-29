//主地址
const api = 'https://newerds.51cptj.com/index.php/Home/Ceshi/';

//登录
const v1 = 'login';
function login(){
  return api + v1;
}

//获取banner
const v2 = 'getBanner';
function getBanner() {
  return api + v2;
}

//获取banner
const v3 = 'getBannerDetial';
function getBannerDetial() {
  return api + v3;
}
//获取getAbout
const v4 = 'getAbout';
function getAbout() {
  return api + v4;
}
//获取getAlist
const v5 = 'getAlist';
function getAlist() {
  return api + v5;
}
//获取getPk
const v6 = 'getPk';
function getPk() {
  return api + v6;
}
//获取getSolution
const v7 = 'getSolution';
function getSolution(){
  return api+ v7;
}
//获取getTel
const v8 = 'getTel';
function getTel() {
  return api + v8;
}
//获取getTel
const v9 = 'getlist';
function getlist() {
  return api + v9;
}
//获取getAnlist
const v10 = 'getAnlist';
function getAnlist() {
  return api + v10;
}
//获取getDetail
const v11 = 'getDetail';
function getDetail() {
  return api + v11;
}

//获取getcountryInfo
const v12 = 'getcountryInfo';
function getcountryInfo() {
  return api + v12;
}
//获取getpeoList
const v13 = 'getpeoList';
function getpeoList() {
  return api + v13;
}
//获取getMap
const v14 = 'getMap';
function getMap() {
  return api + v14;
}
//获取getourSL
const v15 = 'getourSL';
function getourSL() {
  return api + v15;
}
//获取getbjd
const v16 = 'getbjd';
function getbjd() {
  return api + v16;
}



module.exports = {
  login:login,
  getBanner:getBanner,
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
  getpeoList:getpeoList,
  getMap: getMap,
  getourSL: getourSL,
  getbjd: getbjd
}