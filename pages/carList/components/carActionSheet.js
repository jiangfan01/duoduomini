Component({
    properties: {
        show: {
            type: Boolean, // show 属性，控制组件的显示与否
            value: false,  // 默认值为 false
        },
        tags: {
            type: Array,
            value: []
        }
    },
    data: {
        searchValue: '', // 用于搜索的输入值
        selectedSite: '', // 当前选择的站点
        siteOptions: [ // 可供选择的站点列表
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
        userAddress: '', // 用户选择的地址
        showAddressPopup: false, // 控制地址选择弹窗的显示
        addressOptions: [ // 地址列表，待填写
            {id: 1, name: '湖北省咸宁市咸安区安达小区7栋1单元'},
            {id: 2, name: '湖北省咸宁市咸安区南泰中央华府20栋1单元'},
            {id: 3, name: '广州市 天河区'},
            {id: 4, name: '深圳市 福田区'}
        ],
        filteredOptions: [], // 根据搜索过滤后的站点选项
        currentValue: 1, // 当前值，默认设置为 1
        showSelectContainer: true, // 控制选择容器的显示
        userPhone: "" // 用户输入的电话号码
    },
    lifetimes: {
        attached() {
            // 组件附加到页面时，初始化过滤后的选项为所有站点选项
            this.setData({filteredOptions: this.data.siteOptions});
            console.log(this.data.tags, 11111)
        }
    },
    methods: {
        onCloseActionSheet() {
            // 关闭操作面板
            this.setData({show: false});
        },
        // 打开地址选择弹窗
        onAddressSelect() {
            this.setData({showAddressPopup: true});
        },
        // 关闭地址选择弹窗
        closeAddressPopup() {
            this.setData({showAddressPopup: false});
        },
        // 选择地址
        selectAddress(event) {
            const selectedId = event.currentTarget.dataset.id; // 获取选中的地址 ID
            // 根据 ID 找到对应的地址名称
            const selectedAddress = this.data.addressOptions.find(item => item.id === selectedId).name;
            // 更新用户地址并关闭弹窗
            this.setData({
                userAddress: selectedAddress,
                showAddressPopup: false
            });
        },
        // 电话表单
        onUserPhoneChange(event) {
            const userPhone = event.detail;
            this.setData({userPhone: userPhone});
        },
        // 搜索输入框变化事件
        onSearchChange(event) {
            const searchValue = event.detail; // 获取搜索框的输入值
            // 根据输入值过滤站点选项
            const filteredOptions = this.data.siteOptions.filter(option =>
                option.text.includes(searchValue) // 判断选项文本中是否包含输入值
            );
            // 更新搜索值和过滤后的选项
            this.setData({searchValue, filteredOptions});
        },
        // 取消搜索
        onSearchCancel() {
            // 清空搜索框并重置过滤选项为所有站点选项
            this.setData({searchValue: '', filteredOptions: this.data.siteOptions});
        },
        // 选择站点
        onSiteSelect(event) {
            const selectedSite = event.currentTarget.dataset.value; // 获取选中的站点
            this.setData({selectedSite}); // 更新选择的站点
            wx.showToast({icon: 'none', title: `当前选择站点：${selectedSite}`}); // 显示提示信息
        },
        // 跳转到添加地址页面
        onAddAddress() {
            wx.navigateTo({
                url: '/pages/address/address' // 跳转路径
            });
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
