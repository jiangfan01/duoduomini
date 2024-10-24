Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        openAction: {
            type: Boolean,
            value: false
        },
    },
    data: {
        searchValue: '',
        selectedSite: '',
        siteOptions: [
            {text: '测试1', value: '测试1'},
            {text: '测试2', value: '测试2'},
            {text: '测试3', value: '测试3'},
            {text: '测试4', value: '测试4'},
            {text: '测试5', value: '测试5'},
            {text: '测试6', value: '测试6'},
            {text: '测试7', value: '测试7'},
            {text: '测试8', value: '测试8'},
            {text: '测试9', value: '测试9'}
        ],
        userAddress: '',
        showAddressPopup: false,
        addressOptions: [
            {id: 1, name: '湖北省咸宁市咸安区安达小区7栋1单元'},
            {id: 2, name: '湖北省咸宁市咸安区南泰中央华府20栋1单元'},
            {id: 3, name: '广州市 天河区'},
            {id: 4, name: '深圳市 福田区'}
        ],
        filteredOptions: [],
        currentValue: 1,
        showSelectContainer: true,
        userPhone: ""
    },
    lifetimes: {
        attached() {
            this.setData({filteredOptions: this.data.siteOptions});
        }
    },
    observers: {
        'openAction': function (openAction) {
            if (openAction) {
                this.showSelectContainer();
            } else {
                this.hideSelectContainer();
            }
        }
    },
    methods: {
        showAction() {
            this.setData({show: true});
        },
        // 打开地址选择弹窗
        onAddressSelect() {
            this.setData({showAddressPopup: true});
        },
        // 关闭弹窗
        closeAddressPopup() {
            this.setData({showAddressPopup: false});
        },
        onClose() {
            this.setData({show: false});
        },
        // 选择地址
        selectAddress(event) {
            const selectedId = event.currentTarget.dataset.id;
            const selectedAddress = this.data.addressOptions.find(item => item.id === selectedId).name;
            this.setData({
                userAddress: selectedAddress,
                showAddressPopup: false
            });
        },
        showSelectContainer() {
            this.setData({showSelectContainer: true});
        },
        hideSelectContainer() {
            this.setData({showSelectContainer: false});
        },
        onSearchChange(event) {
            const searchValue = event.detail;
            const filteredOptions = this.data.siteOptions.filter(option =>
                option.text.includes(searchValue)
            );
            this.setData({searchValue, filteredOptions});
        },
        onSearchCancel() {
            this.setData({searchValue: '', filteredOptions: this.data.siteOptions});
        },
        onSiteSelect(event) {
            const selectedSite = event.currentTarget.dataset.value;
            this.setData({selectedSite});
            wx.showToast({icon: 'none', title: `当前选择站点：${selectedSite}`});
        },
        onChange(event) {
            this.setData({
                currentValue: event.detail,
            })
        },
        onDrag(event) {
            this.setData({
                currentValue: event.detail.value,
            });
        },
        onUserPhoneChange(event) {
            const userPhone = event.detail;
            this.setData({userPhone: userPhone});
        },
        onPay() {
            if (!this.data.userPhone) {
                return wx.showToast({icon: 'none', title: "请填写您的手机号"});
            }
            if (!this.data.userPhone.match(/^1[3456789]\d{9}$/)) {
                return wx.showToast({icon: 'none', title: "手机号格式不正确"});
            }
            if (!this.data.userAddress) {
                return wx.showToast({icon: 'none', title: "请选择您的地址"});
            }
            if (this.data.showSelectContainer) {
                if (!this.data.selectedSite) {
                    return wx.showToast({icon: 'none', title: "您当前是团购/今日优选订单请选择一个站点"});
                }
            }
            const hasSite = this.data.showSelectContainer;
            wx.navigateTo({url: `/pages/payInfo/payInfo?hasSite=${hasSite}`});
        }
    }
});
