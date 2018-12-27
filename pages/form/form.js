// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proType: '',
    proNum: '',
    proOutDate: '',
    buyUserName: '',
    buyDate:'',
    companyName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  //  点击日期组件确定事件  
  buyDateDateChange: function (e) {
    this.setData({
      buyDate: e.detail.value
    })
  },
  proOutDateDateChange: function (e) {
    this.setData({
      proOutDate: e.detail.value
    })
  },  
  submitClick:function(e){
    wx.request({
      url: '/api/values/PostBill', // 仅为示例，并非真实的接口地址
      data: {
        'ProType': proType,
        ProNum: proNum,
        ProOutDate: proOutDate,
        BuyUserName: buyUserName,
        BuyDate: buyDate,
        CompanyName: companyName
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  }
})