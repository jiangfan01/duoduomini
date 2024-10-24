Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },
    data: {
        currentValue: 1,
    },
    methods: {
        onClose() {
            this.triggerEvent('close');
        },
        onChange(event) {
            this.setData({
                currentValue: event.detail,
            })
        },
        addCarList() {
            wx.showToast({title: '已添加到购物车', icon: 'success'})
            this.onClose();
            setTimeout(() =>{
                this.setData({
                    currentValue: 1
                })
            },500)
        }
    }
});
