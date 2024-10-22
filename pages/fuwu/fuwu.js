Page({
    data: {
        tabs: [
            {
                title: '家政',
                data: [
                    {name: '扫地', price: '¥ 49.00', img: '/images/demo/test.jpg'},
                    {name: '清洁', price: '¥ 59.00',  img: '/images/demo/test.jpg'},
                ]
            },
            {
                title: '洗车',
                data: [
                    {name: '上门清洗', price: '¥ 15.00',  img: '/images/demo/test.jpg'},
                    {name: '预约清洗', price: '¥ 10.00', img: '/images/demo/test.jpg'},
                ]
            },
        ],
        currentItems: [],
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '服务'
        });
        this.fetchData();
    },
    fetchData: function () {
        this.setData({loading: true});
        setTimeout(() => {
            this.setData({
                currentItems: this.data.tabs[0].data,
                loading: false
            });
        }, 2000); // 模拟2秒的请求时间
    },
    onTabClick: function (e) {
        const index = e.currentTarget.dataset.index;
        this.setData({loading: true});
        setTimeout(() => {
            this.setData({
                activeTab: index,
                currentItems: this.data.tabs[index].data,
                loading: false
            });
        }, 1000);
    },

    handleClick: function (e) {
        wx.navigateTo({
            url: './webview',
        });
    },
});