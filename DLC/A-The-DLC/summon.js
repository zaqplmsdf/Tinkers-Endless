ServerEvents.recipes(event => {
    event.shaped(
        Item.of('summoningrituals:altar'),
        [
            'ABA',
            ' C ',
            'CCC'
        ],
        {
            A: 'minecraft:gold_ingot',
            C: '#minecraft:logs',
            B: 'minecraft:red_wool'
        }
    )
})

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('brain_delight:braingreen')            // 催化剂
        .itemOutput('minecraft:flint_and_steel')      // 物品输出
        .mobOutput('mutantmonsters:mutant_zombie')    // 生物输出
        .input('16x minecraft:rotten_flesh')          // 输入物品
        .input('thermal:copper_coin')                 // 输入物品
        .sacrifice('minecraft:zombie')                // 祭品
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('minecraft:arrow')                     // 催化剂
        .mobOutput('mutantmonsters:mutant_skeleton')  // 生物输出
        .input('16x minecraft:bone')                  // 输入物品
        .input('thermal:copper_coin')                 // 输入物品
        .sacrifice('minecraft:skeleton')              // 祭品
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('minecraft:tnt')                       // 催化剂
        .mobOutput('mutantmonsters:mutant_creeper')   // 生物输出
        .input('16x minecraft:gunpowder')             // 输入物品
        .input('thermal:copper_coin')                 // 输入物品
        .sacrifice('minecraft:creeper')               // 祭品
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('minecraft:ender_eye')                 // 催化剂
        .mobOutput('mutantmonsters:mutant_enderman')  // 生物输出
        .input('16x minecraft:ender_pearl')           // 输入物品
        .input('thermal:copper_coin')                 // 输入物品
        .sacrifice('minecraft:enderman')              // 祭品
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('minecraft:ender_eye')                 // 催化剂
        .mobOutput('iceandfire:cyclops')              // 生物输出
        .input('thermal:copper_coin')                 // 输入物品
        .sacrifice('minecraft:sheep', 10)             // 祭品
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('tinkersinnovation:gorgon_hair')       // 催化剂
        .mobOutput('iceandfire:gorgon')               // 生物输出
        .input('thermal:copper_coin')                 // 输入物品
        .input('16x minecraft:stone')
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('tconstruct:venombone')            // 催化剂
        .mobOutput('iceandfire:hydra')               // 生物输出
        .input('thermal:copper_coin')                 // 输入物品
        .input('16x tconstruct:venom_bottle')
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_sandstorm')            // 催化剂
        .mobOutput('legendary_monsters:dune_sentinel')               // 生物输出
        .input('64x minecraft:tnt')                 // 输入物品
        .input('64x minecraft:sandstone')
        .input('64x minecraft:sand')
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_many_ribs')            // 催化剂
        .mobOutput('legendary_monsters:ancient_guardian')               // 生物输出
        .input('64x minecraft:tuff')                 // 输入物品
        .input('64x minecraft:deepslate')
        .input('64x minecraft:stone')
        .sacrificeRegion(5, 5)                        // 祭品检测范围
        .recipeTime(100)                              // 耗时
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_frost')
        .mobOutput('legendary_monsters:frostbitten_golem')
        .input('64x minecraft:ice')
        .input('64x minecraft:packed_ice')
        .input('64x minecraft:blue_ice')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_moss')
        .mobOutput('legendary_monsters:overgrown_colossus')
        .input('64x minecraft:azalea')
        .input('64x minecraft:clay')
        .input('64x minecraft:moss_block')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('minecraft:soul_torch')
        .itemOutput('hmag:ghost_spawn_egg')
        .input('8x minecraft:soul_sand')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_ghost')
        .mobOutput('legendary_monsters:posessed_paladin')
        .input('64x minecraft:soul_sand')
        .input('64x minecraft:soul_torch')
        .input('64x hmag:soul_powder')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});


ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_soul')
        .mobOutput('legendary_monsters:withered_abomination')
        .input('minecraft:wither_skeleton_skull')
        .input('64x tconstruct:necrotic_bone')
        .input('64x minecraft:soul_sand')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_chorus')
        .mobOutput('legendary_monsters:endersent')
        .input('64x minecraft:chorus_fruit')
        .input('64x minecraft:popped_chorus_fruit')
        .input('64x minecraft:chorus_flower')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_shulker')
        .mobOutput('legendary_monsters:shulker_mimic')
        .input('l2complements:captured_shulker_bullet')
        .input('64x minecraft:phantom_membrane')
        .input('64x minecraft:shulker_shell')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_magma')
        .mobOutput('legendary_monsters:lava_eater')
        .input('64x tinkers_thinking:magma_crystal')
        .input('64x minecraft:magma_cream')
        .input('64x minecraft:magma_block')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_bones')
        .mobOutput('legendary_monsters:skeletosaurus')
        .input('64x minecraft:bone_meal')
        .input('64x minecraft:bone_block')
        .input('64x minecraft:bone')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('irons_spellbooks:wayward_compass')
        .mobOutput('irons_spellbooks:dead_king_corpse')
        .input('irons_spellbooks:graybeard_staff')
        .input('64x irons_spellbooks:arcane_essence')
        .input('64x irons_spellbooks:common_ink')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('legendary_monsters:eye_of_air')
        .mobOutput('legendary_monsters:cloud_golem')
        .input('64x aether:cold_aercloud')
        .input('64x minecraft:snow_block')
        .input('64x hmag:lightning_particle')
        .sacrificeRegion(5, 5)
        .recipeTime(100)
});