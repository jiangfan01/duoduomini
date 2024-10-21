// pages/tuangou/index.js
const qqMapWX = require('../../until/qqmap-wx-jssdk')

Page({
    data: {
        location: '',
        address:''
    },
    onLoad: function () {
        this.checkLocationPermission()
    },
    checkLocationPermission: function () {
        wx.getSetting({
            success: (res) => {
                if (!res.authSetting['scope.userLocation']) {
                    wx.authorize({
                        scope: 'scope.userLocation',
                        success: () => {
                            this.getLocation();
                        },
                        fail: () => {
                            // 用户拒绝授权，提示用户手动授权
                            wx.showModal({
                                title: '提示',
                                content: '需要获取您的位置信息，请在设置中开启授权。',
                                showCancel: false,
                                confirmText: '去设置',
                                success: (res) => {
                                    if (res.confirm) {
                                        wx.openSetting({
                                            success: (res) => {
                                                if (res.authSetting['scope.userLocation']) {
                                                    // 用户在设置中开启了授权，调用获取位置
                                                    this.getLocation();
                                                } else {
                                                    // 用户在设置中仍然拒绝授权，提示用户
                                                    wx.showToast({
                                                        title: '授权失败',
                                                        icon: 'none'
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });
                } else {
                    this.getLocation();
                }
            }
        });
    },
    getLocation() {
        const qqmapsdk = new qqMapWX({
            key: '7NRBZ-GELKJ-5VLFA-XMIL4-LUEXH-XQF6I'
        });

        const that = this;
        wx.getLocation({
            type: 'gcj02',
            highAccuracyExpireTime: 100,
            isHighAccuracy: true,
            success: function (res) {
                const latitude = res.latitude;
                const longitude = res.longitude;
                console.log(latitude, longitude, 123)
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: latitude,
                        longitude: longitude
                    },
                    success: function (res) {
                        console.log(res, 1111)
                        const location = res?.result?.address_reference.crossroad?.title;
                        const address = res.result.address_reference.landmark_l2.title;

                        that.setData({
                            location: location,
                            address: address
                        });
                    },
                    fail: function (err) {
                        console.error('反地理编码失败', err);
                    }
                });
            }
        });
    },
});
