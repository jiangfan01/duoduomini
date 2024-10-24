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
        console.log(111)
        this.setData({show: true});
    },
    address() {
        wx.navigateTo({
            url: '/pages/address/address'
        })
    }
});
