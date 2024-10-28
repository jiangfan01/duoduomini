Page({
    data: {
        allOrders: [
            {
                id: 1,
                imgUrl: '/images/demo/test.jpg',
                orderNumber: '12345678912321321312',
                title: '测试商品名测试商品名测试商品名测试商品名',
                tag: '团购',
                price: '123',
                count: '1',
                status: '待处理'
            },
            {
                id: 2,
                imgUrl: '/images/demo/test.jpg',
                orderNumber: '12345678912321321312',
                title: '测试商品名测试商品名测试商品名测试商品名',
                tag: "今日优选",
                price: '123',
                count: '1',
                status: '已处理'
            }
        ]
    },
    onLoad: function (options) {

    },
    toPay() {
        wx.navigateTo({
            url: '/pages/payInfo/payInfo'
        })
    },
    cancel() {
        wx.showModal({
            title: '确认取消？',
            showCancel: true,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }
});