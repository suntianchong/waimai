var Bmob = require('../../dist/Bmob-2.2.4.min.js');
Bmob.initialize("ad22ccdc49fcc0a7", "980712");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:'',
    shopCar:[]
    
  },
add :function(e){
  let that=this
  console.log(e.currentTarget.dataset.num)
  let num=e.currentTarget.dataset.num
  let id =e.currentTarget.dataset.id
  console.log(id)
  let array=that.data.array
  for(i=0;i<array.length;i++ ){
  console.log(array[i].objectId)
  console.log(id)
    if(array[i].objectId==id){
      console.log(i)
      array[i].num++
      that.setData({
    array:array
      })
    }
  }
 
  
},

reduce:function(e){
  let that=this
  console.log(e.currentTarget.dataset.num)
  let num=e.currentTarget.dataset.num
  
  
  let id =e.currentTarget.dataset.id
  console.log(id)
  let array=that.data.array
  if(num>=1){
  for(i=0;i<array.length;i++ ){
  console.log(array[i].objectId)
  console.log(id)
    if(array[i].objectId==id){
      console.log(i)
      array[i].num--
      that.setData({
    array:array
      })
    }
  }}
},
// 购物车跳转
toShopCar:function(){
  var that=this
  let objectId
  let shopCar=that.data.shopCar
  let array=that.data.array
  for(i=0;i<array.length;i++ ){
    if(array[i].num>0){
      shopCar.push(array[i])
    }
  } 
  console.log(shopCar)
  const query = Bmob.Query('order');
  query.set("orderDetails",shopCar)
  query.save().then(res => {
  console.log(res.objectId)
  objectId=res.objectId
  shopCar.splice(0,shopCar.length)
  wx.navigateTo({
    url: '../shopcar/shopcar?objectId='+objectId,
  })
}).catch(err => {
  console.log(err)
})

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    const query = Bmob.Query("cuisine");
    query.find().then(res => {
      console.log(res)
      that.setData({
        array:res
      })
    }); 
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