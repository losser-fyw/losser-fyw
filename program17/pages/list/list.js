// pages/list/list.js
var app=getApp()
app.globalData.number
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bind1:function(e){
    var that=this
      let deviceid = "643323496"
      let apikey = "HwbUcYVNVNMd1EZzxKTpmgm2=dM="
      let data={
      "datastreams": [
        {"id": "switch","datapoints":[{"value":"1"}]}
      ]
      }
    wx.request({
      url: "https://api.heclouds.com/devices/" + deviceid + "/datapoints",
      method:'POST',
      header:{
        "content-type": 'application/json',
        "api-key": apikey
      },
      data:JSON.stringify(data),
      success(res){
        console.log("更新数据成功",res)
      },
      fail: function(res){
        wx.showToast({ title: '系统错误' })
      },
      complete:function(res){
        wx.hideLoading()
      }
    })
    getApp().globalData.number=e.currentTarget.dataset.id;
    console.log("bind1", e.currentTarget.dataset.id);
  },
  bind2:function(e){
    var that=this
      let deviceid = "643323496"
      let apikey = "HwbUcYVNVNMd1EZzxKTpmgm2=dM="
      let data={
      "datastreams": [
        {"id": "switch","datapoints":[{"value":"2"}]}
      ]
      }
    wx.request({
      url: "https://api.heclouds.com/devices/" + deviceid + "/datapoints",
      method:'POST',
      header:{
        "content-type": 'application/json',
        "api-key": apikey
      },
      data:JSON.stringify(data),
      success(res){
        console.log("更新数据成功",res)
      },
      fail: function(res){
        wx.showToast({ title: '系统错误' })
      },
      complete:function(res){
        wx.hideLoading()
      }
    })
    getApp(e).globalData.number=e.currentTarget.dataset.id;
    console.log("bind1", e.currentTarget.dataset.id);
  },
  bind3:function(e){
    var that=this
      let deviceid = "643323496"
      let apikey = "HwbUcYVNVNMd1EZzxKTpmgm2=dM="
      let data={
      "datastreams": [
        {"id": "switch","datapoints":[{"value":"3"}]}
      ]
      }
    wx.request({
      url: "https://api.heclouds.com/devices/" + deviceid + "/datapoints",
      method:'POST',
      header:{
        "content-type": 'application/json',
        "api-key": apikey
      },
      data:JSON.stringify(data),
      success(res){
        console.log("更新数据成功",res)
      },
      fail: function(res){
        wx.showToast({ title: '系统错误' })
      },
      complete:function(res){
        wx.hideLoading()
      }
    })
    getApp(e).globalData.number=e.currentTarget.dataset.id;
    console.log("bind1", e.currentTarget.dataset.id);
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