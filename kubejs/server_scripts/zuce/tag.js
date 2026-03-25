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

  event.add('wqjy:recycle_book',[
    'alexsmobs:animal_dictionary',
    'patchouli:guide_book',
    'tconstruct:puny_smelting',
    'ftbquests:book',
    'patchouli:guide_book',
    'nffgirlsgaia:mob_dictionary',
    'patchouli:guide_book',
    'nffgirls:mob_dictionary',
    'patchouli:guide_book',
    'iceandfire:bestiary',
    'immersiveengineering:manual',
    'tconstruct:tinkers_gadgetry',
    'tconstruct:encyclopedia',
    'tconstruct:fantastic_foundry',
    'aether:book_of_lore',
    'tconstruct:mighty_smelting',
    'enigmaticlegacy:the_acknowledgment',
    'tconstruct:materials_and_you',
    'mekanism:dictionary',
    'solcarrot:food_book',
    'botania:lexicon',
    'irons_spellbooks:chronicle',
    'tinkersjewelry:book',
    'tinkers_advanced:ultra_dense_book',
    'ars_nouveau:worn_notebook',
    'alexscaves:cave_book',
    'patchouli:guide_book'
  ]);

  event.add('wqjy:disable_tool', [
    'minecraft:wooden_sword',
    'minecraft:wooden_shovel',
    'minecraft:wooden_pickaxe',
    'minecraft:wooden_axe',
    'minecraft:wooden_hoe',

    'minecraft:stone_sword',
    'minecraft:stone_shovel',
    'minecraft:stone_pickaxe',
    'minecraft:stone_axe',
    'minecraft:stone_hoe',

    'minecraft:iron_sword',
    'minecraft:iron_shovel',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    'minecraft:iron_hoe',

    'minecraft:golden_sword',
    'minecraft:golden_shovel',
    'minecraft:golden_pickaxe',
    'minecraft:golden_axe',
    'minecraft:golden_hoe',

    'minecraft:diamond_sword',
    'minecraft:diamond_shovel',
    'minecraft:diamond_pickaxe',
    'minecraft:diamond_axe',
    'minecraft:diamond_hoe',

    'minecraft:netherite_sword',
    'minecraft:netherite_shovel',
    'minecraft:netherite_pickaxe',
    'minecraft:netherite_axe',
    'minecraft:netherite_hoe',

    'ae2:nether_quartz_sword',
    'ae2:nether_quartz_shovel',
    'ae2:nether_quartz_axe',
    'ae2:nether_quartz_hoe',
    'ae2:nether_quartz_pickaxe',

    'ae2:certus_quartz_sword',
    'ae2:certus_quartz_shovel',
    'ae2:certus_quartz_axe',
    'ae2:certus_quartz_hoe',
    'ae2:certus_quartz_pickaxe',

    'ae2:fluix_sword',
    'ae2:fluix_shovel',
    'ae2:fluix_axe',
    'ae2:fluix_hoe',
    'ae2:fluix_pickaxe'
  ])

  event.add('forge:bows', [
    '',
    
  ]
  )
});

ServerEvents.tags('block', event => {
  
  event.add('minecraft:needs_diamond_tool', ['projecte:dark_matter_block', 'projecte:red_matter_block']); 

  event.remove('projecte:needs_dark_matter_tool', 'projecte:dark_matter_block'); 

  event.remove('projecte:needs_red_matter_tool', 'projecte:red_matter_block');

});
