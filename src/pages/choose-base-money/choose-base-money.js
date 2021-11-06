// pages/choose-base-money/choose-base-money.js
const exchangeRateMap = require('../../utils/exchange-rate')
const settingUtil = require('../../utils/setting-util')

// 获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        curMoneyKey: "CNY",
        exchangeList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 初始化列表数据
        const exchangeRateList = []
        for (let moneyKey of Object.keys(exchangeRateMap)) {
            exchangeRateList.push({
                key: moneyKey,
                ...exchangeRateMap[moneyKey]
            })
        }
        // 初始化data中的数据
        this.setData({
            exchangeList: exchangeRateList,
            curMoneyKey: options['curMoneyKey']
        })
    },

    /**
     * 选择基础货币
     */
    onChooseBaseMoney(event) {
        const baseMoneyKey = event.currentTarget.dataset["moneyKey"]
        app.baseMoneyKey = baseMoneyKey
        // 保存用户配置
        settingUtil.saveBaseMoneyKey(baseMoneyKey)
        wx.navigateBack()
    }
})