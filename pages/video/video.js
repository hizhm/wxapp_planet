//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list: [
      {
        id: 1,
        title: "我是标题1--腾讯大学微信大学联合出品",
        src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        poster: "http://sinacloud.net/wxfile/planet/imgs/post1.jpg"
      },
      {
        id: 2,
        title: "我是标题2--腾讯大学微信大学联合出品",
        src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        poster: "http://sinacloud.net/wxfile/planet/imgs/post2.jpg"
      },
      {
        id: 3,
        title: "我是标题3--腾讯大学微信大学联合出品",
        src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        poster: "http://sinacloud.net/wxfile/planet/imgs/post3.jpg"
      }
    ]
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  goVideoDetail: function (e) {
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: 'video-detail/video-detail?id=' + e.currentTarget.dataset.id,
    })
  }
})




