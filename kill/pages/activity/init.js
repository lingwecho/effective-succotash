// pages/activity/init.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        time_array: ['不限', '3月12', '3月13', '3月14', '3月15'],
        time_index: 0,
        cafe_array: ['不限', 'XX桌游', 'XXXxxx桌游', 'XOX桌游', 'OXX桌游'],
        cafe_index: 0,
        drama_array: ['不限', 'XX剧本', 'XXX剧本', 'XOX剧本', 'OXX剧本'],
        drama_index: 0,
    },
    bindTimeChange: function(e) {
        console.log('Time发送选择改变，携带值为', e.detail.value);
        this.setData({
            time_index: e.detail.value
        });
    },
    bindCafeChange: function(e) {
        console.log('Cafe发送选择改变，携带值为', e.detail.value);
        this.setData({
            cafe_index: e.detail.value
        });
    },
    bindDramaChange: function(e) {
        console.log('Drama发送选择改变，携带值为', e.detail.value);
        this.setData({
            drama_index: e.detail.value
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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