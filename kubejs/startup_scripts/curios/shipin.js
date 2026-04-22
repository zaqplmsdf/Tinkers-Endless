//饰品注册
StartupEvents.registry('item', event => {
  for (let i = 1; i <= 7; i++) {
    event.create(`wqjy:zhufu_${i}`)
      .maxStackSize(1)
      .tag("curios:pandora_charm")
      .rarity('epic')
  }
  event.create('wqjy:curios_box')
  .displayName("潘多拉魔盒")
  .tooltip("右键获取一个随机潘多拉串饰")
  .rarity('epic')
})