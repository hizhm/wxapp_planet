//获取全局变量的地址
var app = getApp();
//引入外部的utils
var utils = require("../utils/utils.js");

Page({
  data: {
    //初始化三个数组
    youth: [],
    biography: [],
    history: []
  },
  onLoad: function (options) {

    var youth = app.globalUrl.doubanUrl + '/v2/book/search?q="青春"&start=0&count=3';
    var biography = app.globalUrl.doubanUrl + '/v2/book/search?q="传记"&start=0&count=3';
    var history = app.globalUrl.doubanUrl + '/v2/book/search?q="历史"&start=0&count=3';


    //重要：-------调用网络请求函数  相当于ajax
    this.http(youth, this.callback, "youth", "青春");
    this.http(biography, this.callback, "biography", "传记");
    this.http(history, this.callback, "history", "历史");
    //设置加载动画状态
    wx.showNavigationBarLoading();
  },
  //获取接口地址信息
  /**
     * url: 请求地址
     * callback：数据回调函数
     * category：请求的数据类型
     * categoryName：类型的标题
     */
  http: function (url, callback, category, categoryName) {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml'
      },
      success: function (res) {
        callback(res.data, category, categoryName)
      }
    })
  },

  //定义一个回调函数来处理和view视图层的交互
  callback: function (res, category, categoryName) {
    //处理数据，数据的过滤存储
    /**
     * 1.大图
     * 2.标题
     * 3.星星
     * 4.评分
     * 5.id
     * 
     */
    //用来存储各个类型的数据
    var books = [];
    //遍历网络请求数据
    for (var index in res.books) {
      var book = res.books[index];
      //定义一个对象temp来保存数据
      var temp = {
        title: utils.cutTitleString(book.title, 0, 6),
        coverageUrl: book.images.large,
        // star: utils.convertToStarsArray(book.rating.value),
        average: book.rating.average,
        bookid: book.id
      }
      //将当前的对象保存到数组中
      books.push(temp);
    }

    //将所有数据保存到一个对象中,保存时他们的key值不一样
    var readyData = {};
    readyData[category] = {
      categoryName: categoryName,
      books: books
    }
    //使用setData更新数据
    this.setData(readyData);
    //----------加载完成后结束加载动画
    wx.hideNavigationBarLoading();
  },

  //加载更多信息页面
  bookMoreTap:function(event){
    var categoryName = event.currentTarget.dataset.categoryname;
    wx.navigateTo({
      url: 'books-more/books-more?categoryname='+categoryName
    })

    // console.log(categoryName);
  },

   //跳转到图书页面详情页
  goBooksDetail:function(event){
    var bookId = event.currentTarget.dataset.bookid;
    wx.navigateTo({
      url: 'books-details/books-details?bookid='+bookId
    })
  }

})