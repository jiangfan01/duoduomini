Page({
    data: {
        show: false, // 控制弹窗显示
        isEditing: false, // 判断是否为编辑状态
        currentAddress: '', // 当前编辑/新增的地址
        editIndex: null, // 当前编辑的地址索引
        addressList: [ // 假数据，实际数据可通过接口获取
            // { fullAddress: '湖北省咸宁市咸安区安达小区7栋一单元12313211233' },
            // { fullAddress: '湖北省咸宁市咸安区安达小区8栋二单元12313211233' }
        ]
    },

    onAdd() {
        this.setData({
            show: true,
            isEditing: false,
            currentAddress: '',
        });
    },

    onEdit(event) {
        const index = event.currentTarget.dataset.index;
        const address = this.data.addressList[index].fullAddress;
        this.setData({
            show: true,
            isEditing: true,
            currentAddress: address,
            editIndex: index
        });
    },

    onDelete(event) {
        wx.showModal({
            content: '确定要删除该地址吗？',
            success: (res) => {
                if (res.confirm) {
                    const index = event.currentTarget.dataset.index;
                    const addressList = this.data.addressList.filter((_, i) => i !== index);
                    this.setData({
                        addressList
                    });
                    wx.showToast({ title: '删除成功' });
                }
            }
        })
    },

    onAddressInput(event) {
        this.setData({
            currentAddress: event.detail
        });
    },

    onClose() {
        this.setData({
            show: false,
            currentAddress: ''
        });
    },

    onConfirm() {
        const { currentAddress, isEditing, editIndex, addressList } = this.data;

        if (!currentAddress) {
            wx.showToast({ icon: 'none', title: '请输入地址' });
            return;
        }

        if (isEditing) {
            addressList[editIndex].fullAddress = currentAddress;
        } else {
            addressList.push({ fullAddress: currentAddress });
        }

        this.setData({
            addressList,
            show: false,
            currentAddress: ''
        });
        wx.showToast({ title: '保存成功' });
    }
});
