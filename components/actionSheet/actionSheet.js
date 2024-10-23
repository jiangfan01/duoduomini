Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },
    data: {
        searchValue: '',
        selectedSite: '',
        siteOptions: [
            {text: '南泰中央华府', value: '南泰中央华府'},
            {text: '站点B', value: '2'},
            {text: '站点C', value: '3'},
            {text: '站点A', value: '4'},
            {text: '站点B', value: '5'},
            {text: '站点C', value: '6'},
            {text: '站点A', value: '7'},
            {text: '站点B', value: '8'},
            {text: '站点C', value: '9'},
            {text: '站点B', value: '10'},
            {text: '站点C', value: 'siteC'},
            {text: '站点A', value: 'siteA'},
            {text: '站点B', value: 'siteB'},
            {text: '站点C', value: 'siteC'},

        ],
        filteredOptions: [], // 过滤后的站点列表
        currentValue: 1,
    },
    lifetimes: {
        attached() {
            this.setData({filteredOptions: this.data.siteOptions});
        }
    },
    methods: {
        // 显示弹窗
        showAction() {
            this.setData({show: true});
        },

        // 关闭弹窗
        onClose() {
            this.setData({show: false});
        },

        // 处理搜索输入
        onSearchChange(event) {
            const searchValue = event.detail;
            const filteredOptions = this.data.siteOptions.filter(option =>
                option.text.includes(searchValue)
            );
            this.setData({
                searchValue,
                filteredOptions,
            });
        },

        // 清除搜索
        onSearchCancel() {
            this.setData({
                searchValue: '',
                filteredOptions: this.data.siteOptions,
            });
        },
        onChange(event) {
            wx.showToast({
                icon: 'none',
                title: `当前数量：${event.detail}`,
            });
        },

        // 选择站点
        onSiteSelect(event) {
            const selectedSite = event.currentTarget.dataset.value;
            this.setData({
                selectedSite,
            });
            wx.showToast({
                icon: 'none',
                title: `当前选择站点：${selectedSite}`,
            });
        }
    }
});