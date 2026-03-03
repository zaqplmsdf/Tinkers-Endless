StartupEvents.registry('item', event => {
  for (let i = 1; i <= 7; i++) {
    event.create(`wqjy:zhufu_${i}`)
      .maxStackSize(1)
      .tag("curios:pandora_charm")
      .rarity('epic')
  }
})