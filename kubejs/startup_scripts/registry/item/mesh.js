//批量注册筛网
StartupEvents.registry('item', event => {
  for (let i = 1; i <= 5; i++) {
  event.create(`wqjy:lv_${i}_mesh`)
      .displayName(`§6LV${i}筛网`)
      .tooltip(`§5可筛出${i}级材料`)
      .tag('exdeorum:sieve_meshes')
  }
});
//材料沙子
StartupEvents.registry('block', event => {
  event.create('wqjy:lv_sand', 'falling')
    .displayName('§e炫彩砂料')
    .soundType('sand')
    .hardness(3)
    .resistance(1)
    .requiresTool(false)
})
//矿石残骸
StartupEvents.registry('block', event => {
  event.create('wqjy:debris')
  .displayName('炫彩残骸')
  .stoneSoundType()
  .texture('north', 'wqjy:block/debris_side')
  .texture('south', 'wqjy:block/debris_side')
  .texture('east', 'wqjy:block/debris_side')
  .texture('west', 'wqjy:block/debris_side')
  .texture('up', 'wqjy:block/debris_top')
  .texture('down', 'wqjy:block/debris_top')
  .tagBlock('minecraft:mineable/pickaxe')
  .tagBlock('minecraft:lava_pool_stone_cannot_replace')
  .tagBlock('minecraft:features_cannot_replace')
  .hardness(5)
  .resistance(10)
  .requiresTool(false)
})