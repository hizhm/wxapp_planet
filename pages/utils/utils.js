//星星评分
//星星的数据拆分  40   4  循环5次  i<4  [1,1,1,1,0]
function convertToStarsArray(stars) {
    var num = stars.substring(0, 1);
    var tempArr = [];
    for (var i = 0; i < 5; i++) {
        if (i < num) {
            tempArr.push(1);
        } else {
            tempArr.push(0);
        }
    }
    return tempArr;
}


//截取字符串长度替换--处理title过长的问题
function cutTitleString(title, start, end) {
    if (title.length > end) {
        title = title.substring(start, end) + "···";
    }
    return title;
}

//全局的网络请求函数
function http(url, callback) {
    wx.request({
        url: url,
        method: "GET",
        header: {
            'content-type': 'application/xml'
        },
        success: function (res) {
            callback(res.data)
        }
    })
}

//--处理导演的名字，用/分割开
function convertToCastString(casts) {
    var castsjoin = "";
    var castsFinal = "";
    for (var i in casts) {
        castsjoin = castsjoin + casts[i].name + " / ";
    }
    castsFinal = castsjoin.substring(0, castsjoin.length - 3);
    return castsFinal;

}

//处理演员的名字和图片 
function convertToCastsString(casts) {
    //存储信息：头像+名字
    var castsArray = [];
    for (var i in casts) {
        var cast = {
            img: casts[i].avatars ? casts[i].avatars.large : "",
            name: casts[i].name
        }
        castsArray.push(cast);
    }
    return castsArray;
}


//将方法对外导出
module.exports = {
    convertToStarsArray: convertToStarsArray,
    cutTitleString: cutTitleString,
    http: http,
    convertToCastString: convertToCastString,
    convertToCastsString:convertToCastsString
}

