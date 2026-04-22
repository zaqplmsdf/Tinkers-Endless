StartupEvents.registry('item', event => {
  const colors = [
    '#00FF00', '#AAAAAA', '#808080', '#FF8000', '#CCFF00',
    '#00AA80', '#00FFFF', '#AA00FF', '#FFAAAA', '#00FF00',
    '#FF00FF', '#20FF20', '#AA00AA', '#0000FF', '#800000',
    '#FFDDDD', '#FFAA00', '#808000', '#FF0000'
  ]

  colors.forEach((color, index) => {
    const itemId = `kubejs:wqjy_box_${index + 1}` // 使用kubejs命名空间
    const itemName = `§6食品盒子兑换物${index + 1}`
    
    event.create(itemId)
      .displayName(itemName)
      .texture('wqjy:item/box') // 确保材质在kubejs命名空间下
      .color(0, color)
      .maxStackSize(64)
      .tooltip(`§5这是第${index + 1}个食物盒兑换物`)
  })
})