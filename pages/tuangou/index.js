// pages/tuangou/index.js


Page({
    data: {
        location: '',
        address: '',
        tabs: [
            {
                title: '水果',
                data: [
                    {name: '香蕉', price: '¥ 49.00', number: '1', img: '/images/demo/test.jpg'},
                    {name: '苹果', price: '¥ 59.00', number: '5', img: '/images/demo/test.jpg'},
                    {name: '橙子', price: '¥ 39.00', number: '3', img: '/images/demo/test.jpg'},
                ]
            },
            {
                title: '生鲜',
                data: [
                    {name: '西红柿', price: '¥ 15.00', number: '10', img: '/images/demo/test.jpg'},
                    {name: '青椒', price: '¥ 10.00', number: '8', img: '/images/demo/test.jpg'},
                    {name: '黄瓜', price: '¥ 8.00', number: '12', img: '/images/demo/test.jpg'},
                    {name: '秋葵', price: '¥ 15.00', number: '10', img: '/images/demo/test.jpg'},
                    {name: '大白菜', price: '¥ 10.00', number: '8', img: '/images/demo/test.jpg'},
                    {name: '小白菜', price: '¥ 8.00', number: '12', img: '/images/demo/test.jpg'},
                ]
            },
            {
                title: '肉类',
                data: [
                    {name: '牛肉', price: '¥ 149.00', number: '111', img: '/images/demo/test.jpg'},
                    {name: '鸡肉', price: '¥ 49.00', number: '50', img: '/images/demo/test.jpg'},
                    {name: '猪肉', price: '¥ 79.00', number: '20', img: '/images/demo/test.jpg'},
                ]
            },
            {
                title: '鱼类',
                data: [
                    {name: '新鲜鱼', price: '¥ 59.00', number: '1123', img: '/images/demo/test.jpg'},
                    {name: '鲑鱼', price: '¥ 99.00', number: '10', img: '/images/demo/test.jpg'},
                    {name: '鳕鱼', price: '¥ 89.00', number: '8', img: '/images/demo/test.jpg'},
                ]
            },
            {
                title: '电子',
                data: [
                    {name: '苹果16pro max', price: '¥ 10999.00', number: '1', img: '/images/demo/test.jpg'},
                    {name: '华为P40', price: '¥ 4999.00', number: '2', img: '/images/demo/test.jpg'},
                    {name: '小米11', price: '¥ 3999.00', number: '5', img: '/images/demo/test.jpg'},
                ]
            }
        ],
        currentItems: [],
    },

    onLoad: function () {
        // this.checkLocationPermission();
        this.fetchData();
        const app = getApp()
        // 如果全局数据已经存在，直接设置页面数据
        if (app.globalData.location && app.globalData.address) {
            this.setData({
                location: app.globalData.location,
                address: app.globalData.address
            });
        } else {
            // 如果全局数据还没有准备好，设置回调函数
            app.globalData.locationReadyCallback = (location, address) => {
                this.setData({
                    location: location,
                    address: address
                });
            };
        }
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
            url: '/pages/details/details',
        });
    },
    // checkLocationPermission: function () {
    //     wx.getSetting({
    //         success: (res) => {
    //             if (!res.authSetting['scope.userLocation']) {
    //                 wx.authorize({
    //                     scope: 'scope.userLocation',
    //                     success: () => {
    //                         this.getLocation();
    //                     },
    //                     fail: () => {
    //                         // 用户拒绝授权，提示用户手动授权
    //                         wx.showModal({
    //                             title: '提示',
    //                             content: '需要获取您的位置信息，请在设置中开启授权。',
    //                             showCancel: false,
    //                             confirmText: '去设置',
    //                             success: (res) => {
    //                                 if (res.confirm) {
    //                                     wx.openSetting({
    //                                         success: (res) => {
    //                                             if (res.authSetting['scope.userLocation']) {
    //                                                 // 用户在设置中开启了授权，调用获取位置
    //                                                 this.getLocation();
    //                                             } else {
    //                                                 // 用户在设置中仍然拒绝授权，提示用户
    //                                                 wx.showToast({
    //                                                     title: '授权失败',
    //                                                     icon: 'none'
    //                                                 });
    //                                             }
    //                                         }
    //                                     });
    //                                 }
    //                             }
    //                         });
    //                     }
    //                 });
    //             } else {
    //                 this.getLocation();
    //             }
    //         }
    //     });
    // },
    // getLocation() {
    //     const qqmapsdk = new qqMapWX({
    //         key: '7NRBZ-GELKJ-5VLFA-XMIL4-LUEXH-XQF6I'
    //     });
    //
    //     const that = this;
    //     wx.getLocation({
    //         type: 'gcj02',
    //         highAccuracyExpireTime: 100,
    //         isHighAccuracy: true,
    //         success: function (res) {
    //             const latitude = res.latitude;
    //             const longitude = res.longitude;
    //             qqmapsdk.reverseGeocoder({
    //                 location: {
    //                     latitude: latitude,
    //                     longitude: longitude
    //                 },
    //                 success: function (res) {
    //                     const location = res?.result?.address_reference.crossroad?.title;
    //                     const address = res.result.address_reference.landmark_l2.title;
    //
    //                     that.setData({
    //                         location: location,
    //                         address: address
    //                     });
    //                 },
    //                 fail: function (err) {
    //                     console.error('反地理编码失败', err);
    //                 }
    //             });
    //         }
    //     });
    // }

})
;
