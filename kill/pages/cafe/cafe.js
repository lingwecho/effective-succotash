// pages/cafe/cafe.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cafedata: [{
            "cafe_id": 1,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游剧本体验馆(双井店)",
            "cafe_add": "双井 广渠门外大街8号优士阁A座105室",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": true
        }, {
            "cafe_id": 2,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游剧本体验馆(世贸天阶店)",
            "cafe_add": "建外大街 东大桥路8号SOHO尚都北塔3层",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": false
        }, {
            "cafe_id": 3,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游轰趴剧本体验馆(北土城店)",
            "cafe_add": "亚运村 北土城裕民路甲1号二层底商",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": true
        }, {
            "cafe_id": 4,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游剧本体验馆(万柳店)",
            "cafe_add": "万柳 万柳中路29号B1楼",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": true
        }, {
            "cafe_id": 5,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游剧本体验馆(安贞一店)",
            "cafe_add": "安贞 外馆斜街51号凯景铭座工商银行B1楼",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": false
        }, {
            "cafe_id": 6,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游实景剧本体验馆(万柳店)",
            "cafe_add": "万柳 万柳中路29号B1底商",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": true
        }, {
            "cafe_id": 7,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游实景剧本密室体验馆(安贞二店)",
            "cafe_add": "安贞 外馆斜街51号凯景铭座大厦底商",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": false
        }, {
            "cafe_id": 8,
            "cafe_img": "/imgs/cafe.jpeg",
            "cafe_name": "猫头鹰桌游密室剧本体验馆(惠新店)",
            "cafe_add": "亚运村 惠新西街北口惠新苑小区4号楼南门",
            "cafe_des": "这是桌游吧描述",
            "cafe_coll": true
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
                    cafedata: res.data.cafedata
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