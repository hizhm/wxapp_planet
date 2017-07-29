//获取全局变量的地址
var app = getApp();
//引入外部的utils
var utils = require("../utils/utils.js");

//通过require引入数据
var musicsData = require("../data/musicsdata.js");

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    circular: true,
    musicIndexData: []
  },
  onLoad: function (options) {

    var youth = app.globalUrl.doubanUrl + '/v2/music/search?q=""&start=0&count=3';
    var biography = app.globalUrl.doubanUrl + '/v2/music/search?q="传记"&start=0&count=3';
    var history = app.globalUrl.doubanUrl + '/v2/music/search?q="历史"&start=0&count=3';




    //使用this.setData()重绘视图层
    this.setData({
      musicIndexData: musicsData.initData
    })
  },
  goMusicDetail: function (event) {
    var musicId = event.currentTarget.dataset.musicsid;
    wx.navigateTo({
      url: 'musics-detail/musics-detail?musicsid=' + musicId
    })

  }
})