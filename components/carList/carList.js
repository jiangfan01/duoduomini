Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },
    data: {
        show: false,
        result: ['a', 'b'],
    },
    methods: {
        onClose() {
            this.setData({show: false});
        },
        onChange(event) {
            const checkedValues = event.detail; // 获取所有选中的name值
            console.log(checkedValues, 123);
            this.setData({
                result: event.detail,
            });
        },
        delete(){
            wx.showModal({
                title: '提示',
                content: '确定删除所选？',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        }

    }

});
