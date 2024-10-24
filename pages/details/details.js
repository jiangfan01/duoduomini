Page({
    data: {
        imgUrls: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg"
        ],
        currentIndex: 0,
        show: false,
        actionShow: false, // 控制购买操作弹窗显示
        openAction: true,
        addActionShow: false
    },

    // 页面加载时
    onLoad: function (options) {
        const openAction = options.openAction === "true";
        this.setData({ openAction });
    },

    // 显示购物车的弹窗
    showPopup() {
        this.setData({show: true});
    },

    // 显示购买操作的弹窗
    showAction() {
        this.setData({actionShow: true});
    },
    showAddAction() {
        this.setData({
            addActionShow: true
        });
    },

    // 关闭 addActionSheet 弹窗的方法
    onAddActionClose() {
        this.setData({
            addActionShow: false
        });
    },

    // 关闭购买操作弹窗
    onActionClose() {
        this.setData({actionShow: false});
    },

    // 返回首页
    gotoHome() {
        wx.switchTab({
            url: '/pages/tuangou/index'
        })
    },

    // 轮播图切换
    swiperChange(e) {
        this.setData({
            currentIndex: e.detail.current
        });
    },
});
