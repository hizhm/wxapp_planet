
var app = getApp();
var utils = require('../../utils/utils.js');


Page({
  data: {
    book: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var bookId = options.bookid;
    //url地址
    var detailBookUrl = app.globalUrl.doubanUrl + "/v2/book/" + bookId;
    utils.http(detailBookUrl, this.callback);
  },

  /*
          1.图书图片：bookImg
          2.图书名称：title
          3.出版社：publisher
          4.出版时间：pubdate
          5.作者:author
          6.作者信息：author_intro
          7.价格：price
          8.目录：catalog
          
      */
      //在整理数据之前，需要对字段进行判断，因为有些字段可能没有


  //设置回调函数
  callback:function(data){
    if(!data){
      return;
    }
   
    //-----设置一个对象来保存变量
    var  temp = {
      bookImg: data.images.large,
      title: data.title,
      publisher: data.publisher,
      pubdate: data.pubdate,
      author: data.author,
      authorIntro: data.author_intro,
      price: data.price,
      catalog: data.catalog,
      average:data.rating.average

    }
    this.setData({
      book: temp
    })
    
    wx.setNavigationBarTitle({
      title: utils.cutTitleString(this.data.book.title,0,6)
    })

  }
})