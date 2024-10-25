Page({
    data: {
        carList: [
            {
                imgUrl: '/images/demo/test.jpg',
                name: '极品香蕉',
                description: '来自东南亚空运的极品香蕉',
                tag: "团购",
                price: '19.99',
                prePrice: '29.99',
                quantity: 2
            },
            {
                imgUrl: '/images/demo/test.jpg',
                name: '新鲜苹果',
                description: '来自新疆的香甜苹果',
                price: '25.00',
                tag: "今日优选",
                prePrice: '35.00',
                quantity: 1
            },
            {
                imgUrl: '/images/demo/test.jpg',
                name: '有机葡萄',
                description: '绿色种植，无公害的葡萄',
                tag: "精选",
                price: '30.00',
                prePrice: '50.00',
                quantity: 3
            }
        ],
        result: [],
        show: false,
        tags: []
    },
    onQuantityChange(event) {
        const {index} = event.currentTarget.dataset;
        const newQuantity = event.detail;
        const carList = this.data.carList.slice();
        carList[index].quantity = newQuantity;
        this.setData({
            carList
        });
    },
    onLoad() {
        const tags = this.data.carList.map(item => item.tag);
        this.setData({tags: tags}, () => {
        });
    },

    onChecked(event) {
        this.setData({
            checked: !this.data.checked,
        });
    },
    delete() {
        wx.showModal({
            title: '提示',
            content: '确定移除购物车？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    deleteAll() {
        wx.showModal({
            title: '提示',
            content: '确定清空购物车？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    onClose() {
        this.setData({show: false});
    },
    onOpenAction() {
        this.setData({show: true});
    }

});
