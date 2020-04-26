// pages/shopcar/shopcar.js
var Bmob = require('../../dist/Bmob-2.2.4.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCar:[],
    count:0,
    address:'选择收货地址',
    },
    map: function () {
      var that = this
      wx.chooseLocation({
        success: function (res) {
          // success
          if (res.name == '') {
            that.setData({
              address: '选择位置',
            })
          } else {
            that.setData({
              address: res.name,
            })
          }
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    },
    //计算总价
    totalprice:function(){
      let that=this
      let count = that.data.count
      let shopcar =that.data.shopCar
      console.log('数据'+shopcar.length)
      for(let i=0;i<shopcar.length;i++){
       
        count = count + shopcar[i].cuisinePrice*shopcar[i].num
        
      }
      console.log('总价格'+count)
      that.setData({
        count:count
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    let objectId=options.objectId
    console.log(options)
    const query = Bmob.Query('order');
query.get(objectId).then(res => {
  console.log(res)
  
  that.setData({
    shopCar:res.orderDetails
  })
  that.totalprice()
}).catch(err => {
  console.log(err)
})

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})