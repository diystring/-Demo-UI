// pages/form/form.js
//获取应用实例
const app = getApp()
const { $Message } = require('../../dist/base/index');
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
      url: app.globalData.apihost+'/api/values/PostBill', // 仅为示例，并非真实的接口地址
      data: {
        ProType: this.data.proType,
        ProNum: this.data.proNum,
        ProOutDate: this.data.proOutDate,
        BuyUserName: this.data.buyUserName,
        BuyDate: this.data.buyDate,
        CompanyName: this.data.companyName
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if(res.data.Code===1)
        {
          $Message({
            content: res.data.Msg,
            type: 'success'
          });
        }else{
          $Message({
            content:res.data.Msg,
            type: 'error'
          });
        }
      }
    })
  }
})