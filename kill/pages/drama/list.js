// pages/drama/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dramadata: [{
            "drama_id": 1,
            "drama_img": "/imgs/home.jpg",
            "drama_name": "丹水山庄",
            "drama_des": "这是剧本描述这是剧本描述",
            "drama_label": [{ "label": "古装" }, { "label": "玄幻" }],
            "drama_coll": true
        }, {
            "drama_id": 2,
            "drama_img": "/imgs/home.jpg",
            "drama_name": "津门疑云",
            "drama_des": "这是剧本描述这是剧本描述",
            "drama_label": [{ "label": "玄幻" }, { "label": "古装" }],
            "drama_coll": false
        }, {
            "drama_id": 3,
            "drama_img": "/imgs/home.jpg",
            "drama_name": "隋唐大运河",
            "drama_des": "这是剧本描述这是剧本描述",
            "drama_label": [{ "label": "古装" }, { "label": "玄幻" }],
            "drama_coll": true
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options);
        wx.request({
            url: 'test.php', //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                that.setData({
                    dramadata: res.data.dramadata
                });
            }
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