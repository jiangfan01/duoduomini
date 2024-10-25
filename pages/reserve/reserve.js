Page({
    data: {
        showTimePopup: false,
        minDate: new Date().getTime(),
        maxDate: new Date(2099, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        time: '',
        timeColumns: [],// 自定义列数据
        phoneNumber: '',
        address: ''
    },

    onLoad() {
        this.updateTimeColumns();
    },

    // 打开时间选择弹窗
    onShowTime() {
        this.setData({showTimePopup: true});
    },

    // 关闭时间选择弹窗
    closeTimePopup() {
        this.setData({showTimePopup: false});
    },

    // 设置自定义分钟列
    updateTimeColumns() {
        const hours = Array.from({length: 24}, (_, i) => `${i} 时`);
        const minutes = ['15 分', '30 分', '45 分']; // 自定义分钟列
        this.setData({
            timeColumns: [
                {values: hours, type: 'hour'},
                {values: minutes, type: 'minute'}
            ]
        });
    },
    phoneNumberChange(event) {
        this.setData({
            phoneNumber: event.detail
        })
    },
    addressChange(event) {
        this.setData({
            address: event.detail
        })
    },
    // 实时获取用户选中的时间
    onInput(event) {
        this.setData({
            currentDate: event.detail,
        });
    },
    // 确认时间选择
    onConfirm(event) {
        const date = new Date(event.detail);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

        this.setData({
            time: formattedDate,
            showTimePopup: false
        });
    },
    onPay() {
        if (!this.data.phoneNumber) {
            return wx.showToast({icon: 'none', title: "请填写您的手机号"});
        }
        if (!this.data.phoneNumber.match(/^1[3456789]\d{9}$/)) {
            return wx.showToast({icon: 'none', title: "手机号格式不正确"});
        }
        if (!this.data.address) {
            return wx.showToast({icon: 'none', title: "请填写您的地址"});
        }
        if (!this.data.time) {
            return wx.showToast({icon: 'none', title: "请选择时间"});
        }
        wx.navigateTo({
            url: '/pages/payInfo/payInfo'
        })
    }
});
