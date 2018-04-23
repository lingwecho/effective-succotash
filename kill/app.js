//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var that=this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success:function(r){
        var code = r.code;//登录凭证
        if(code){
          wx.request({
            url:'https://kill.geekgo.club/api/login/login',
            data:{code:code},
            success:function(openIdRes){
              console.log(openIdRes)
              if (openIdRes){
                wx.getUserInfo({
                  success: function (data) {
                    // 自定义操作
                    console.log(data)
                    // 绑定数据，渲染页面
                    // that.setData({

                    // });
                  },
                  fail: function (failData) {
                    console.info("用户拒绝授权");
                  }
                });
              } else {
                console.info("获取用户openId失败");
              }
            }
          }) 
        }else{
          console.log('获取用户登录状态失败!'+res.errMsg)
        }
      },
      fail: function () {
        console.log('登陆失败')
      }
    })
  },
  globalData: {
    userInfo: null
  }
})