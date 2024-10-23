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


    }

});
