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
        imgUrls: [
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=27&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=231620273,2622968107&fm=27&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=281531042,273318123&fm=27&gp=0.jpg",
            "http://img4.imgtn.bdimg.com/it/u=2731345960,2613387946&fm=26&gp=0.jpg"
        ],
        currentIndex:0
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '服务'
        });
        this.fetchData();
    },
    swiperChange(e){
        this.setData({
            currentIndex:e.detail.current
        })
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