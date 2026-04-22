//移除配方
ServerEvents.recipes(event => {
    event.remove({
        id: "twilightforest:uncrafting_table",
        type: "minecraft:crafting_shaped"
    });

    event.remove([
        {id: 'tcintegrations:smeltery/melting/metal/dragonsteel_fire/block'}, 
        {id: 'tcintegrations:smeltery/melting/metal/dragonsteel_fire/ingot'}, 
        {id: 'tcintegrations:smeltery/melting/metal/dragonsteel_lightning/block'}, 
        {id: 'tcintegrations:smeltery/melting/metal/dragonsteel_lightning/ingot'}, 
        {id: 'tcintegrations:smeltery/melting/metal/dragonsteel_ice/block'}, 
        {id: 'tcintegrations:smeltery/melting/metal/dragonsteel_ice/ingot'},
        {id: 'tprt:materials/cataclysm/black_steel/black_steel_melting_ingot'},
        {id: 'tprt:materials/cataclysm/black_steel/black_steel_melting_metal_block'},
        {id: 'tprt:materials/cataclysm/black_steel/black_steel_melting_nutget'},
        {id: 'sakuratinker:materials/infinity/infinity_melting'},
        {id: 'sakuratinker:materials/crystal_matrix/crystal_matrix_melting'},
        {id: 'sakuratinker:materials/neutron/neutron_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_axe_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_block_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_chestplate_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_helmet_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_leggings_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_pickaxe_melting'}, 
        {id: 'cloudertinker:materials/knightmetal/knightmetal_sword_melting'}, 
        {id: 'tinkers_ingenuity:smeltery/melting/sculk_gene'},
        {id: 'tinkers_thinking:common/echo/echo_melting'},
        {id: 'dreamtinker:smeltery/melting/evil_ingot/ingot'},
        {id: 'sakuratinker:materials/etherium/etherium_melting'}, 
        {id: 'ticex:smeltery/casting/seared/seared_rf_furnace'}, 
        {id: 'ticex:smeltery/casting/scorched/scorched_rf_furnace'},
        {id: 'tinkerscalibration:tools/materials/melting/dragonbreath/bottle'},
        {id: 'avaritia:mek_creative_bin'},
        {id: 'momotinker:tools/modifiers/abilities/gainsalone'},
        {id: 'zenith:zenith'},
        {id: 'tinkersjewelry:tools/parts/builder/ender_pearl'},
        {id: 'tinkersjewelry:tools/parts/builder/hematite'},
        {id: 'tinkersjewelry:tools/parts/builder/obsidian'}
    ])
});

ServerEvents.recipes(event => {
    event.remove([
        {id: 'projectexpansion:infinite_steak'}
    ])
});