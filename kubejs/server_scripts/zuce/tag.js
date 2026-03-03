// 物品标签编辑事件（指定 item 注册表）
ServerEvents.tags('item', event => {
  // 给 irons_spellbooks:staff 标签添加所有指定法杖物品
  event.add('irons_spellbooks:staff', [
    'irons_spellbooks:graybeard_staff',
    'irons_spellbooks:ice_staff',
    'irons_spellbooks:artificer_cane',
    'irons_spellbooks:lightning_rod',
    'irons_spellbooks:blood_staff'
  ]);

  event.add('marveloustinker:combat_maid', [
    'marveloustinker:combat_maid_helmet',    // 战斗女仆头盔
    'marveloustinker:combat_maid_chestplate',// 战斗女仆胸甲
    'marveloustinker:combat_maid_leggings',  // 战斗女仆 leggings
    'marveloustinker:combat_maid_boots'      // 战斗女仆靴子
  ]);

  event.add('alexscaves:cave_tablet', [
    'alexscaves:cave_tablet'
  ]);
});

ServerEvents.tags('block', event => {
  
  event.add('minecraft:needs_diamond_tool', ['projecte:dark_matter_block', 'projecte:red_matter_block']); 

  event.remove('projecte:needs_dark_matter_tool', 'projecte:dark_matter_block'); 

  event.remove('projecte:needs_red_matter_tool', 'projecte:red_matter_block');

});
