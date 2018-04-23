// pages/home/home.js
Page({
    /*页面的初始数据*/
    data: {
        imgUrls: [
            '/imgs/home.jpg',
            '/imgs/home.jpg',
            '/imgs/home.jpg',
            '/imgs/home.jpg'
        ]
    },
    /*跳转个人中心页面*/
    t_index: function() {
        wx.switchTab({
            url: '../index/index?id=2'
        });
    },
    /*入局 组局*/
    join_jv: function() {
        wx.navigateTo({
            url: '../activity/list?id=1',
            success: function(res) {
                console.log("成功跳转");
            },
            fail: function() {
                console.log("跳转失败");
            },
            complete: function() {
                console.log("以后动作");
            }
        });
    },
    group_jv: function() {
        wx.navigateTo({
            url: '../activity/list?id=2',
            success: function(res) {
                console.log("成功跳转");
            },
            fail: function() {
                console.log("跳转失败");
            },
            complete: function() {
                console.log("以后动作");
            }
        });
    },
    /*生命周期函数--监听页面加载*/
    onLoad: function(options) {

    },

    /*生命周期函数--监听页面初次渲染完成*/
    onReady: function() {

    },

    /*生命周期函数--监听页面显示*/
    onShow: function() {

    },

    /*生命周期函数--监听页面隐藏*/
    onHide: function() {

    },

    /*生命周期函数--监听页面卸载*/
    onUnload: function() {

    },

    /*页面相关事件处理函数--监听用户下拉动作*/
    onPullDownRefresh: function() {

    },

    /*页面上拉触底事件的处理函数*/
    onReachBottom: function() {

    },

    /*用户点击右上角分享*/
    onShareAppMessage: function() {

    }
});