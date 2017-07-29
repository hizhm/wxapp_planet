
var app = getApp();
var utils = require('../../utils/utils.js');

Page({
  data: {
    books: [],
    totalCount:0,
    totalbooks:[],
    isEmpty:true
  },
  onLoad: function (options) {
    var categoryName = options.categoryname;
    this.setData({
      categoryName: categoryName
    })
    var publicUrl = app.globalUrl.doubanUrl;
    var allUrl = "";
    switch (options.categoryname) {
      case "青春":
        allUrl = publicUrl + '/v2/book/search?q="青春"&start=0&count=10';
        break;
      case "传记":
        allUrl = publicUrl + '/v2/book/search?q="传记"&start=0&count=10';
        break;
      case "历史":
        allUrl = publicUrl + '/v2/book/search?q="历史"&start=0&count=10';
        break;
    }
    this.setData({
      allUrl:allUrl
    })

    //进行网络请求数据
    utils.http(allUrl, this.callback);
    wx.showNavigationBarLoading();
  },

  callback: function (res) {
    //存储各类型的数据
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
    this.setData({
      books: books
    })
    //----------加载完成后结束加载动画
    wx.hideNavigationBarLoading();

  },

  onReady: function () {
    //动态设置bar的title值
    wx.setNavigationBarTitle({
      title: this.data.categoryName
    })
  },


  //跳转到图书页面详情页
  goBooksDetail:function(event){
    var bookId = event.currentTarget.dataset.bookid;
    wx.navigateTo({
      url: '../books-details/books-details?bookid='+bookId
    })
  }

})