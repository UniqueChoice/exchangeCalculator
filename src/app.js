// app.js
const settingUtil = require('./utils/setting-util')

App({
    baseMoneyKey: "CNY",
    onLaunch() {
        // 初始化基础货币设置，从storage中获取默认货币设置baseMoneyKey
        this.baseMoneyKey = settingUtil.getBaseMoneyKey()
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    globalData: {
        userInfo: null
    }
})
