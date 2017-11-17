// pages/components/test/test.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
      observer: function (newVal, oldVal) {
        // console.log(newVal);
        // console.log(oldVal);
        // // 组件路径
        // console.log(this.is);
        // //组件id 
        // console.log(this.id);
        // //节点dataset;
        // console.log(this.dataset)

        //
        // console.log(this.data);
        // if (newVal !== oldVal) {
        //   console.log('值被改变了');
        // }
      }
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})