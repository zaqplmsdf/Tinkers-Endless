
StartupEvents.registry('item', event => {
  event.create('wqjy:the_end', 'basic')
    .texture('wqjy:item/the_end')
    .displayName('§c亘§e永§b终§d末')
    .rarity('epic')
    .glow(true)
    .tooltip('§d真正的终极材料！')

  event.create('wqjy:hefl', 'basic')
    .texture('wqjy:item/hefl')
    .displayName('§d浓缩核单元')
    .tooltip('§d可转化为1000单位核废料')

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
});

StartupEvents.registry('item', event => {
  event.create('wqjy:rf_1', 'create:sequenced_assembly')
  .displayName('§d序列装配物')

  event.create('wqjy:rf_2', 'create:sequenced_assembly')
  .displayName('§d序列装配物')
});