

//(1)----引入数据
var musicsData = require("../../data/musicsdata.js");

Page({
  data: {
    isPlayer: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    //（2）------使用this.setData()重绘视图层---注意数据格式，此处为object
    //-----------注意数据格式为对象
    this.setData(musicsData.initData[options.musicsid]);

    //--将id放到data中去，方便页面获取
    this.setData({
      musicsid: options.musicsid
    });

    /*
    var musicsCollect = {
     *  0:true,
     *  1:false,
     *  2:true
     * }

    */

    //(3)页面加载时判断本地是否有收藏的数据
    var musicsCollect = wx.getStorageSync('musicscollect');

    if (musicsCollect) {//有数据，则读取数据
      var music_collect = musicsCollect[options.musicsid];
      //更新到视图
      this.setData({
        collected: music_collect
      });
    } else {//没有数据，则新建数据
      var musicsCollect = {};
      musicsCollect[options.musicsid] = false;
      wx.setStorageSync('musicscollect', musicsCollect);
    }

  },


  //(4)收藏与未收藏的切换(使用本地存储)
  collectTap: function (event) {
    var musicsCollect = wx.getStorageSync('musicscollect');
    var music_collect = musicsCollect[this.data.musicsid];
    //注意---点击的时候，如果收藏则取消，如果未收藏则收藏
    music_collect = !music_collect;
    //更新到本地存储中
    musicsCollect[this.data.musicsid] = music_collect;
    wx.setStorageSync('musicscollect', musicsCollect);
    //更新到视图
    this.setData({
      collected: music_collect
    });

    //界面交互----消息提示框
    wx.showToast({
      title: music_collect ? "收藏成功" : "取消收藏",
      icon: 'success',
      duration: 800,
      mask: true
    })

  },
  //(5)分享按钮和右上角的分享
  onShareTap: function (event) {
    wx.showActionSheet({
      itemList: ['分享到微信', '分享到QQ', '分享到微博'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: musicsData.initData[this.data.musicsid].title,
      path: '/pages/news/musics-detail/musics-detail'
    }
  },

  //(6)播放音乐(点击播放和暂停)
  playerMusicTap: function (event) {

  

    var that = this;
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log(res)
        console.log("调用成功")
        //判断当前音乐是否在播放
        var status = res.status;
        if (status == 1) {//status为真，在播放
          wx.pauseBackgroundAudio();
          that.setData({
            isPlayer: false
          })
        } else {//status为假，没有在播放
          wx.playBackgroundAudio({
            dataUrl: musicsData.initData[that.data.musicsid].music.url,
            title: musicsData.initData[that.data.musicsid].music.title,
            coverImgUrl: musicsData.initData[that.data.musicsid].music.coverImg
          })
          that.setData({
            isPlayer: true
          })
        }
      },
      fail:function(res){
        console.log(res)
        console.log("调用失败")
      }
    })

  }


})