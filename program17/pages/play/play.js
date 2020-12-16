// pages/play/play.js
var app=getApp();
app.globalData.number;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "fm":"/images/暂无歌曲.jpg",
    "gq":"暂无歌曲",
    "id":"/images/image1.png",
  },
  stop:function(){
    let iid = "/images/image1.png"
    if(this.data.id != iid) {
      var that=this
      let deviceid = "643323496"
      let apikey = "HwbUcYVNVNMd1EZzxKTpmgm2=dM="
      let data={
      "datastreams": [
        {"id": "switch","datapoints":[{"value":"4"}]}
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
      this.setData({
       id:"/images/image1.png"
     })
    }
    else {
      if(this.data.fm=="/images/后来封面.jpg"){
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
      this.setData({
        id:"/images/image2.png"
      })
      }
      else if(this.data.fm=="/images/卡农封面.jpg")
      {
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
      this.setData({
        id:"/images/image2.png"
      })
      }
      else if(this.data.fm=="/images/天空之城封面.jpg")
      {
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
      this.setData({
        id:"/images/image2.png"
      })
      }
    } 
  },
  last:function(){
    if(this.data.fm=="/images/后来封面.jpg"){
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
      this.setData({
        fm:"/images/天空之城封面.jpg",
        gq:"天空之城",
        id:"/images/image2.png"
      })
    }
    else if(this.data.fm=="/images/卡农封面.jpg"){
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
      this.setData({
        fm:"/images/后来封面.jpg",
        gq:"后来",
        id:"/images/image2.png"
      })
    }
    else if(this.data.fm=="/images/天空之城封面.jpg"){
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
      this.setData({
        fm:"/images/卡农封面.jpg",
        gq:"卡农",
        id:"/images/image2.png"
      })
    }
  },
  next:function(){
    if(this.data.fm=="/images/卡农封面.jpg"){
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
      this.setData({
        fm:"/images/天空之城封面.jpg",
        gq:"天空之城",
        id:"/images/image2.png"
      })
    }
    else if(this.data.fm=="/images/天空之城封面.jpg"){
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
      this.setData({
        fm:"/images/后来封面.jpg",
        gq:"后来",
        id:"/images/image2.png"
      })
    }
    else if(this.data.fm=="/images/后来封面.jpg"){
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
      this.setData({
        fm:"/images/卡农封面.jpg",
        gq:"卡农",
        id:"/images/image2.png"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    this.data.currentTab=app.globalData.number
    this.setData({
      number:this.data.currentTab
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
  onShow: function (e) {
    if(getApp().globalData.number==1)
    {this.data.currentTab = getApp().globalData.number;
    console.log("123", this.data.currentTab,getApp().globalData.number)
    var self = this
    self.setData({
      currentTab: this.data.currentTab,
      "fm":"/images/后来封面.jpg",
      "gq":"后来",
      "id":"/images/image2.png",
    })
    }
    if(getApp().globalData.number==2)
    {this.data.currentTab = getApp().globalData.number;
    console.log("123", this.data.currentTab,getApp().globalData.number)
    var self = this
    self.setData({
      currentTab: this.data.currentTab,
      "fm":"/images/卡农封面.jpg",
      "gq":"卡农",
      "id":"/images/image2.png",
    })
    }
    if(getApp().globalData.number==3)
    {this.data.currentTab = getApp().globalData.number;
    console.log("123", this.data.currentTab,getApp().globalData.number)
    var self = this
    self.setData({
      currentTab: this.data.currentTab,
      "fm":"/images/天空之城封面.jpg",
      "gq":"天空之城",
      "id":"/images/image2.png",
    })
    }
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