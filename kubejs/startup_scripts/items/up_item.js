StartupEvents.registry('item', event => {
  // 定义物品数据数组
  const items = [
    { id: 'up_item_1', name: '§c魂钻齿轮', tooltip: '§5用于合成晋升' },
    { id: 'up_item_2', name: '§6煅烧黑曜石', tooltip: '§5用于合成晋升' },
    { id: 'up_item_3', name: '§6电离子结晶质', tooltip: '§5用于合成晋升' },
    { id: 'up_item_4', name: '§e恶意牌板', tooltip: '§5用于合成晋升' },
    { id: 'up_item_5', name: '§e晶质尘', tooltip: '§5用于合成晋升' },
    { id: 'up_item_6', name: '§e黄铜之心', tooltip: '§5用于合成晋升' },
    { 
      id: 'up_item_7', 
      name: '§e狐狸尾巴', 
      tooltips: ['§5用于合成晋升', '§5怎的如此残忍？'] 
    },
    { id: 'up_item_8', name: '§c魂钻粉末', tooltip: '§5用于合成晋升' },
    { id: 'up_item_9', name: '§b苍白晶质', tooltip: '§5用于合成晋升' },
    { id: 'up_item_10', name: '§e位面水晶', tooltip: '§5用于合成晋升' },
    { id: 'up_item_11', name: '§6传说水晶', tooltip: '§5用于合成晋升' },
    { id: 'up_item_12', name: '§c纷争水晶', tooltip: '§5用于合成晋升' },
    { id: 'up_item_13', name: '§d完美精华宝石', tooltip: '§5用于合成晋升' },
    { 
      id: 'up_item_14', 
      name: '§e白毛女仆', 
      tooltips: ['§5用于合成晋升', '§5？？？'] 
    },
    { id: 'up_item_15', name: '§b基本手稿', tooltip: '§5用于合成晋升' },
    { id: 'up_item_16', name: '§d进阶手稿', tooltip: '§5用于合成晋升' },
    { id: 'up_item_17', name: '§6破灭圆石', tooltip: '§5用于合成晋升' },
    { id: 'up_item_18', name: '§c世界之壳', tooltip: '§5用于合成晋升' },
    { id: 'up_item_19', name: '§6锻铸粉尘', noTooltip: true },
    { id: 'up_item_20', name: '§6奥法残片', noTooltip: true }
  ]

  // 遍历物品数据并注册
  items.forEach(itemData => {
    const item = event.create(`wqjy:${itemData.id}`)
      .displayName(itemData.name)
      .maxStackSize(64)
      .glow(true)
    // 处理tooltip
    if (!itemData.noTooltip) {
      if (itemData.tooltips) {
        // 如果有多个tooltip
        itemData.tooltips.forEach(tooltip => {
          item.tooltip(tooltip)
        })
      } else {
        // 单个tooltip
        item.tooltip(itemData.tooltip)
      }
    }
    
    // 可以根据需要添加其他属性
    // 例如：.texture('wqjy:item/your_texture')
    // 或者：.color(0, color)
    // 或者：.glow(true)
  })
})