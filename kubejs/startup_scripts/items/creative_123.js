StartupEvents.registry('item', event => {

  event.create('creative_1')
  .displayName('创造升级槽·修复')
  .texture('wqjy:item/c_1')
  
  event.create('creative_2')
  .displayName('创造能力槽·修复')
  .texture('wqjy:item/c_2')
  
  event.create('creative_3')
  .displayName('创造防御槽·修复')
  .texture('wqjy:item/c_3')
  
  event.create('creative_4')
  .displayName('创造灵魂槽·修复')
  .texture('wqjy:item/c_4')

  event.create('cat')
  .displayName('§6指引者的黑猫')
  .texture('wqjy:item/cat')
  .tooltip('§564*下界合金币')
  .tooltip('§5通过货币槽按住shift转化')

  event.create('achievement')
  .displayName('§d成就奖章')
  .texture('wqjy:item/chengjiu')
  .tooltip('§5成就奖励')
  .tooltip('§5可用于兑换饰品槽')

  event.create('xiushichi')
  .displayName('§e空白修饰词')
  .texture('wqjy:item/xsc')
  .tooltip('§5被洗去词条的修饰词')

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