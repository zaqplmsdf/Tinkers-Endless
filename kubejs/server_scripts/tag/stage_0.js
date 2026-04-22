ServerEvents.tags('item', event =>{
    event.add('wqjy:stage_0', 
        [
            'iceandfire:myrmex_jungle_chitin',
            'minecraft:cactus',
            'brain_delight:brain',
            'minecraft:rabbit_hide',
            'mushroom_daydream:slime_pawn',
            'minecraft:pumpkin',
            'alexscaves:archaic_vine',
            'alexscaves:tough_hide',
            '#aether:skyroot_tool_crafting',
            'irons_spellbooks:magic_cloth',
            'rats:cheese',
            'youkaishomecoming:fairy_ice_crystal',
            'twilightforest:naga_scale',
            'alexscaves:candy_cane',
            '#forge:rods/wooden',
            'twilightforest:arctic_fur',
            'tinkers_delight:cotton_candy',
            'tinkers_delight:cotton_candy_block',
            'alexscaves:heavy_bone',
            'minecraft:sponge',
            'minecraft:flint',
            'minecraft:popped_chorus_fruit',
            'botania:livingrock',
            '#forge:feathers',
            'alexscaves:licoroot_vine',
            '#forge:gems/apatite',
            '#forge:storage_blocks/apatite',
            '#forge:leather',
            '#forge:rods/stone',
            '#tconstruct:workstation_rock',
            '#minecraft:bamboo_blocks',
            '#forge:bamboo',
            'iceandfire:amphithere_feather',
            'alexscaves:cycad',
            'alexscaves:thornwood_branch',
            'minecraft:vine',
            '#forge:storage_blocks/amethyst',
            '#forge:gems/amethyst',
            '#forge:paper',
            '#forge:string',
            '#ae2:all_certus_quartz',
            'alexscaves:dark_tatters',
            '#tconstruct:bones',
            '#forge:ingots/copper',
            '#forge:ingots/iron',
            '#forge:ingots/gold',
            '#forge:nuggets/copper',
            '#forge:nuggets/iron',
            '#forge:nuggets/gold',
            '#forge:storage_blocks/copper',
            '#forge:storage_blocks/iron',
            '#forge:storage_blocks/gold',
            '#forge:gems/emerald',
            '#forge:storage_blocks/emerald'
        ]
    )
    event.add('momotinker:jujube_wood_log', 'momotinker:jujube_wood_log')
    event.add('wqjy:stage_wood', ['#minecraft:planks', '#minecraft:logs'])
    event.add('wqjy:stage_wooden', ['#tconstruct:slimy_planks', '#tconstruct:slimy_logs', 'momotinker:jujube_wood_log', 'momotinker:jujube_wood_planks'])
})

ServerEvents.tags('item', event => {
  const allPlanks = event.get('wqjy:stage_wood').getObjectIds();
  const slimyPlanks = event.get('wqjy:stage_wooden').getObjectIds();

  allPlanks.forEach(plank => {
    if (!slimyPlanks.contains(plank)) {
      event.add('wqjy:stage_0', plank);
    }
  });
});