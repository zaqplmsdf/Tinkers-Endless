//注册食物盒兑换物
StartupEvents.registry('item', event => {
  //批量定义颜色
  const colors = [
    '#00FF00', '#AAAAAA', '#808080', '#FF8000', '#CCFF00',
    '#00AA80', '#00FFFF', '#AA00FF', '#FFAAAA', '#00FF00',
    '#FF00FF', '#20FF20', '#AA00AA', '#0000FF', '#800000',
    '#FFDDDD', '#FFAA00', '#808000', '#FF0000'
  ]
  //遍历颜色并定义id
  colors.forEach((color, index) => {
    const itemId = `kubejs:wqjy_box_${index + 1}`
    const itemName = `§6食品盒子兑换物${index + 1}`
    //遍历并批量注册物品
    event.create(itemId)
      .displayName(itemName)
      .texture('wqjy:item/box')
      .color(0, color)
      .maxStackSize(64)
      .tooltip(`§5这是第${index + 1}个食物盒兑换物`)
  })
})

//创造槽位注册
StartupEvents.registry('item', event => {
  event.create('creative_1')
  .displayName('创造升级槽·修复')
  .texture('wqjy:item/c_1');
  event.create('creative_2')
  .displayName('创造能力槽·修复')
  .texture('wqjy:item/c_2');
  event.create('creative_3')
  .displayName('创造防御槽·修复')
  .texture('wqjy:item/c_3');
  event.create('creative_4')
  .displayName('创造灵魂槽·修复')
  .texture('wqjy:item/c_4');
})

//置换物品注册
StartupEvents.registry('item', event => {
  event.create('wqjy:reborn', 'basic')
    .displayName('§7通用置换核心')
    .tooltip('§5可进行材料置换')
    .glow(true)
  
  event.create('wqjy:witherite_ingot')
    .displayName('置换凋灵合金锭')
    .rarity('epic')
    .glow(true)
  event.create('wqjy:cursium_ingot')
    .displayName('置换咒魂锭')
    .rarity('epic')
    .glow(true)
  event.create('wqjy:black_steel_ingot')
    .displayName('置换黑钢锭')
    .rarity('epic')
    .glow(true)
  event.create('wqjy:ignitium_ingot')
    .displayName('置换腾炎锭')
    .rarity('epic')
    .glow(true)
  event.create('wqjy:ancient_metal_ingot')
    .displayName('置换远古金属锭')
    .rarity('epic')
    .glow(true)
})

//批量注册最终材料
StartupEvents.registry('item', event => {
    // 定义所有物品的配置项（数组形式，易扩展、易维护）
    const itemsConfig = [
        {
            id: 'wqjy:myth',
            displayName: '§6神话锭',
            texture: 'wqjy:item/cai',
            tooltip: '§5终极材料',
            glow: false
        },
        {
            id: 'wqjy:hong',
            displayName: '§6虹彩锭',
            texture: 'wqjy:item/hong',
            tooltip: '§5终极材料',
            glow: false
        },
        {
            id: 'wqjy:gaiya',
            displayName: '§2盖亚奖章',
            texture: 'wqjy:item/gaiya',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:hundun',
            displayName: '§d混沌奖章',
            texture: 'wqjy:item/hundun',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:eternal',
            displayName: '§c永恒石',
            texture: 'wqjy:item/eternal',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:world',
            displayName: '§b世界水晶',
            texture: 'wqjy:item/world',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:wqjy_logo',
            displayName: '§6无穷匠艺看板娘',
            texture: 'wqjy:item/wqjy_logo',
            tooltip: '§5可碍捏`',
            glow: false
        }
    ];
    // 循环注册所有物品
    itemsConfig.forEach(config => {
        let item = event.create(config.id)
            .displayName(config.displayName)
            .texture(config.texture)
            .tooltip(config.tooltip);
        // 仅当需要发光时调用 glow(true)，避免无效调用
        if (config.glow) {
            item.glow(true);
        }
    });
});

//晋升素材注册
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
  })
})

// 武器兑换物注册
StartupEvents.registry('item', event => {
    event.create('wqjy:zhang_1', 'basic')
        .displayName('§6遗忘断杖·黯淡')
        .texture('wqjy:item/zhang_1')
        .parentModel('wqjy:item/zhang')
        .tooltip('§5那续写神话的笔墨啊')
        .tooltip('§5在那开满繁花的法师塔')
        .tooltip('§5可在任务栏兑换为正常状态')

    event.create('wqjy:jian')
        .displayName('§6断境残锋·黯淡')
        .texture('wqjy:item/wq_1')
        .tooltip('§5吟游诗人似乎还在唱着古老的哀歌')
        .tooltip('§5直至微风带走远行精灵的残影')
        .tooltip('§5可在任务栏兑换为正常状态')

    event.create('wqjy:wuqi_1')
        .displayName('§c破§e灭§b白§d花')
        .tooltip('§6用于兑换武器')

    event.create('wqjy:wuqi_2')
        .displayName('§c古§e旧§b指§d环')
        .tooltip('§6用于兑换武器')

});

//晋升证明注册
StartupEvents.registry('item', event => {
  for (let i = 1; i <= 5; i++) {
  event.create(`wqjy:up_${i}`)
      .displayName('§6晋升证明')
      .tooltip('§5用于阶段升级')
      .tooltip(`§5第${i}阶段`)
      .tooltip('§5右键使用')
  }

  event.create('wqjy:up_6')
  .displayName('§c最§e终§b证§d明§r')
  .tooltip('§6最终的晋升证明')
  .tooltip('§6用于解锁最后的限制')
  .tooltip('§6右键使用')
  .glow(true)

})

//永终注册
StartupEvents.registry('item', event => {
  event.create('wqjy:the_end', 'basic')
    .texture('wqjy:item/the_end')
    .displayName('§c亘§e永§b终§d末')
    .rarity('epic')
    .glow(true)
    .tooltip('§d真正的终极材料！')
});

//序列装配物品注册
StartupEvents.registry('item', event => {
  event.create('wqjy:rf_1', 'create:sequenced_assembly')
  .displayName('§d序列装配物')

  event.create('wqjy:rf_2', 'create:sequenced_assembly')
  .displayName('§d序列装配物')
});

//其他物品注册
StartupEvents.registry('item', event => {
  //猫猫
  event.create('cat')
  .displayName('§6指引者的黑猫')
  .texture('wqjy:item/cat')
  .tooltip('§564*下界合金币')
  .tooltip('§5通过货币槽按住shift转化')
  //浓缩核单元
  event.create('wqjy:hefl', 'basic')
  .texture('wqjy:item/hefl')
  .displayName('§d浓缩核单元')
  .tooltip('§d可转化为1000单位核废料')
  //成就币
  event.create('achievement')
  .displayName('§d成就奖章')
  .texture('wqjy:item/chengjiu')
  .tooltip('§5成就奖励')
  .tooltip('§5可用于兑换饰品槽')
  //空词
  event.create('xiushichi')
  .displayName('§e空白修饰词')
  .texture('wqjy:item/xsc')
  .tooltip('§5被洗去词条的修饰词')
  //联动彩蛋
  event.create('fib')
  .displayName('§cFIB看板娘')
  .texture('wqjy:item/fib_logo')
  .tooltip('§5没什么用，只是作为彩蛋物品')
  .tooltip('§5源于作者为朋友整合包画的看板娘')
  .food(food => {
    food
      .hunger(6)
      .saturation(6)
      .effect('minecraft:regeneration', 600, 1, 1)
      .alwaysEdible()
      .fastToEat()
      .eaten(ctx => {
       if (ctx.level.isClientSide()) return ctx.player.tell(Text.gold('豪赤！')) 
      })
  })
})
//催化剂替换物
StartupEvents.registry('item', event =>{
  event.create('wqjy:the_book')
  .displayName('§d末语之书')
  .tooltip('§5用于清除诅咒')
  .maxDamage(7)
})