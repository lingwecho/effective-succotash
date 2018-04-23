// pages/drama/s_page.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navtext: "剧本详情",
        s_page_style: 1
    },
    s_page_show: function(e) {
        var style = this.data.s_page_style;
        if (style == 1) {
            this.setData({
                s_page_style: 2
            });
        } else {
            this.setData({
                s_page_style: 1
            });
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options);
        this.setData({
            navtext: "丹水山庄"
        });
        wx.setNavigationBarTitle({
            title: this.data.navtext
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
});