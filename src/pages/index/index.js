// index.js
const exchangeRateMap = require('../../utils/exchange-rate')

// 获取应用实例
const app = getApp()

Page({
    data: {
        exchangeList: [],
        moneyNum: 100,
        baseExchangeItem: {
            key: "CNY",
            baseNum: 100,
            name: "人民币¥"
        }
    },
    // 事件处理函数
    onLoad: function () {
        const exchangeRateList = []
        for (let moneyKey of Object.keys(exchangeRateMap)) {
            exchangeRateList.push({
                key: moneyKey,
                ...exchangeRateMap[moneyKey]
            })
        }
        this.setData({
            exchangeList: exchangeRateList
        })
    },
    onBaseNumChange(event) {
        this.setData({
            moneyNum: event.detail.value
        })
    },
    onClickSwitchBaseMoney() {
        wx.navigateTo({
            // url: `/pages/choose-base-money/choose-base-money?curMoneyKey=${this.data.baseExchangeItem.key}`
            url: '/pages/choose-base-money/choose-base-money?curMoneyKey=' + this.data.baseExchangeItem.key
        })
    },
    onShow() {
        if (app.baseMoneyKey === this.data.baseExchangeItem.key) {
            return
        }
        const baseExchangeItem = this.data.exchangeList.find(item => {
            if (item.key === app.baseMoneyKey) return true
        })
        this.setData({
            baseExchangeItem: baseExchangeItem
        })
    }
})