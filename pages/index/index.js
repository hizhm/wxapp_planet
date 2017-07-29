// pages/index/index.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  //跳转到音乐的页面
  goMusics:function(e){
    wx.switchTab({
      url: '../musics/musics'
    })
  }
})