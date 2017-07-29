var app = getApp();//获取全局app.js文件里的数据
var utils = require('../utils/utils.js');

Page({
  data: {
     //初始化三个数组
    inTheaters: [],
    comingSoon: [],
    top250: [],
    //初始化搜索的数据
    searchData:[],
    //面板和图片的显示
    searchPanelShow:false,
    containerShow:true


  },
  onLoad: function (options) {
    //(1)定义三种数据类型的url地址
    var inTheaters = app.globalUrl.doubanUrl + "/v2/movie/in_theaters?start=0&count=3";
    var comingSoon = app.globalUrl.doubanUrl + "/v2/movie/coming_soon?start=0&count=3";
    var top250 = app.globalUrl.doubanUrl + "/v2/movie/top250?start=0&count=3";

    //(4)调用网络请求函数  相当于ajax
    this.http(inTheaters, this.callback, "inTheaters", "正在热映");
    this.http(comingSoon, this.callback, "comingSoon", "即将上映");
    this.http(top250, this.callback, "top250", "排行榜");

    //(5)加载动画效果设置
    wx.showNavigationBarLoading();

  },

  //(2)自定义一个函数，相当于ajax去请求数据
  /**
   * url: 请求地址
   * callback：请求成功后执行的数据回调函数
   * category：请求的数据类型
   * categoryName：类型的标题
   */
  http: function (url, callback, category, categoryName) {
    wx.request({
      url: url,
      header: {// 设置请求的 header,为xml，若为json时报错
        'content-type': 'application/xml'
      },
      success: function (res) {
        callback(res.data, category, categoryName)
      }
    })
  },

  //(3)callback处理数据  数据的过滤存储
  /**
   * 1.大图
   * 2.标题
   * 3.星星
   * 4.评分
   * 5.id
   */

  callback: function (res, category, categoryName) {  
    //定义一个数组，来存储一种类型的数据
    var movies = [];
    //遍历数据
    for (var index in res.subjects) {
      var subject = res.subjects[index];

      //--暂时存放到temp中
      var temp = {
        title: utils.cutTitleString(subject.title, 0, 6),
        coverageUrl: subject.images.large,
        star: utils.convertToStarsArray(subject.rating.stars),
        average: subject.rating.average,
        movieid: subject.id
      }
      movies.push(temp);

    }
    //定义一个对象，来存储所有的数据
    var readyData = {};
    //因为分类不同，所以存放到readyData时的属性名就不同
    readyData[category] = {
      categoryName: categoryName,
      movies: movies
    }
    //将数据渲染到视图层
    this.setData(readyData);

    //设置加载动态的取消
    wx.hideNavigationBarLoading();
  },

  //(6)跳转到更多页面
  movieMoreTap: function (event) {
    var categoryName = event.currentTarget.dataset.categoryname;
    wx.navigateTo({
      url: 'movies-more/movies-more?categoryname=' + categoryName
    })
  },


  //(7)跳转到详细电影的页面
  goMovieDetail: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: 'movies-detail/movies-detail?movieid=' + movieId
    })

  },

  
  //(8) 搜索框获取焦点事件
  onBindFocus:function(event){
    this.setData({
       searchPanelShow:true,
       containerShow:false
    })
  },
   // 搜索框失去焦点事件-按enter键-展示搜索内容
  onBindBlur:function(event){
    var text = event.detail.value;
    var searchUrl = app.globalUrl.doubanUrl+"/v2/movie/search?q="+text;
    this.http(searchUrl,this.callback,"searchData","");
    wx.showNavigationBarLoading();
    
  },
  //点击XX关闭
  onCancelImgTap:function(event){
    this.setData({
       searchPanelShow:false,
       containerShow:true
    })
  }

})