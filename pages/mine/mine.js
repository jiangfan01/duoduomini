Page({
    data: {
        phoneNumber: '138****1234',
        avatarUrl: "",
        show: false,
    },

    onLoad() {

    },

    getUserInfo() {
        setTimeout(() => {
            this.setData({
                phoneNumber: '17771513712'
            });
        }, 1000);
    },
    contactSupport() {
        wx.makePhoneCall({
            phoneNumber: '17771513712'
        })
    },
    onChooseAvatar(e) {
        const {avatarUrl} = e.detail;
        this.setData({
            avatarUrl
        });
    },
    showPopup() {
        this.setData({show: true});
    },
    viewAllOrders() {
        wx.navigateTo({
            url: '/pages/allOrders/allOrders'
        })
    },
    viewPendingPayment() {
        wx.navigateTo({
            url: '/pages/waitPay/waitPay'
        })
    },
    address() {
        wx.navigateTo({
            url: '/pages/address/address'
        })
    },
    viewPendingShipment() {
        wx.navigateTo({
            url: '/pages/waitAccept/waitAccept'
        })
    },
    viewCompletedOrders() {
        wx.navigateTo({
            url: '/pages/finish/finish'
        })
    },
    viewAfterSales() {
        wx.navigateTo({
            url: '/pages/afterSales/afterSales'
        })
    },
    gotoCarList() {
        wx.navigateTo({
            url: '/pages/carList/carList'
        })
    }
});
