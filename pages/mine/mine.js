Page({
    data: {
        phoneNumber: '138****1234',
        tabs: [],
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

});
