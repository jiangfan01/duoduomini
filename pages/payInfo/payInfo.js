Page({
    data: {
        hasSite: false,
        time: 30 * 60 * 1000,
        timeData: {},
    },
    onLoad: function (options) {
        this.setData({hasSite: options.hasSite === 'true'});
        wx.enableAlertBeforeUnload({
            message: '当前订单未支付，确认离开？',
            success: function (res) {

            }
        });
    },
    onChange(e) {
        this.setData({
            timeData: e.detail,
        });
    },
});
