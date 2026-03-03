ServerEvents.recipes(event => {
    event.shaped(
        Item.of('wqjy:lv_1_mesh'),
        [
            'ABC',
            'ADC',
            'AEC'
        ],
        {
            C: 'mutantmonsters:mutant_skeleton_limb',
            B: 'mutantmonsters:creeper_shard',
            D: 'exdeorum:string_mesh',
            E: 'mutantmonsters:hulk_hammer',
            A: 'mutantmonsters:mutant_skeleton_rib'
        }
    )
    event.shaped(
        Item.of('wqjy:lv_1_mesh', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'wqjy:lv_1_mesh',
            A: 'thermal:copper_coin',
            B: 'exdeorum:string_mesh'
        }
    )//1级筛网
    event.shaped(
        Item.of('wqjy:lv_2_mesh'),
        [
            'ABC',
            'DED',
            'F G'
        ],
        {
            D: 'legendary_monsters:primal_ice_shard',
            E: 'wqjy:lv_1_mesh',
            F: 'legendary_monsters:nature_crystal',
            B: 'legendary_monsters:anchor_handle',
            C: 'legendary_monsters:frozen_rune',
            G: 'legendary_monsters:corrupted_soul',
            A: 'legendary_monsters:crystal_of_sandstorm'
        }
    )
    event.shaped(
        Item.of('wqjy:lv_2_mesh', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'thermal:silver_coin',
            B: 'exdeorum:string_mesh',
            C: 'wqjy:lv_2_mesh'
        }
    )//2级筛网
    event.shaped(
        Item.of('wqjy:lv_3_mesh'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            C: 'legendary_monsters:lava_eaters_skin',
            G: 'legendary_monsters:chorus_crystal',
            B: 'irons_spellbooks:necronomicon_spell_book',
            A: 'legendary_monsters:large_shulker_shell',
            E: 'wqjy:lv_2_mesh',
            H: 'rats:black_death_mask',
            I: 'legendary_monsters:dinosaur_bone',
            D: 'legendary_monsters:withered_horn',
            F: 'legendary_monsters:withered_bone'
        }
    )
    event.shaped(
        Item.of('wqjy:lv_3_mesh', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'exdeorum:string_mesh',
            C: 'wqjy:lv_3_mesh',
            A: 'thermal:gold_coin'
        }
    )//3级筛网
    event.shaped(
        Item.of('wqjy:lv_4_mesh'),
        [
            ' A ',
            'BCD',
            'EGF'
        ],
        {
            D: 'legendary_monsters:air_rune',
            E: 'minecraft:nether_star',
            C: 'wqjy:lv_3_mesh',
            A: 'mutantmonsters:endersoul_hand',
            B: 'better_minoshroomtaur:maze_diamond',
            F: 'minecraft:dragon_egg', 
            G: 'alexscaves:tectonic_shard'
        }
    )
    event.shaped(
        Item.of('wqjy:lv_4_mesh', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'thermal:enderium_coin',
            C: 'wqjy:lv_4_mesh',
            B: 'exdeorum:string_mesh'
        }
    )//4级筛网
    event.shaped(
        Item.of('wqjy:lv_5_mesh'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: 'cataclysm:music_disc_netherite_monstrosity',
            E: 'wqjy:lv_4_mesh',
            I: 'cataclysm:music_disc_the_leviathan',
            H: 'cataclysm:music_disc_the_harbinger',
            F: 'cataclysm:music_disc_scylla',
            B: 'cataclysm:music_disc_ignis',
            C: 'cataclysm:music_disc_ancient_remnant',
            D: 'cataclysm:music_disc_ender_guardian',
            G: 'cataclysm:music_disc_maledictus'
        }
    )
    event.shaped(
        Item.of('wqjy:lv_5_mesh', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'kubejs:cat',
            B: 'exdeorum:string_mesh',
            C: 'wqjy:lv_5_mesh'
        }
    )
    event.shapeless(
        Item.of('wqjy:lv_5_mesh'),
        [
            'cataclysm:music_disc_the_cataclysmfarer',
            'wqjy:lv_4_mesh'
        ]
    )//5级筛网
})
//筛网

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('twilightforest:quest_ram_spawn_egg'),
        [
            '#forge:wool',
            '#forge:wool',
            '#forge:wool',
            '#forge:wool',
            '#forge:wool',
            '#forge:wool',
            '#forge:wool',
            '#forge:wool',
            '#forge:wool'
        ]
    )
})
//谜题羊

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('wqjy:lv_sand'),
        [
            'minecraft:gravel',
            'minecraft:sand',
            'minecraft:red_sand',
            'minecraft:dirt',
            'minecraft:moss_block',
            'minecraft:mycelium',
            'exdeorum:dust',
            'exdeorum:crushed_end_stone',
            'exdeorum:crushed_netherrack'
        ]
    )
});
//沙子

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "wqjy:lv_sand"}],
        "mesh": "wqjy:lv_1_mesh"
    };
    const sieveResults = [
        { result: "minecraft:vine", p: 0.15 },
        { result: "alexscaves:thornwood_branch", p: 0.1 },
        { result: "alexscaves:cycad", p: 0.1 },
        { result: "iceandfire:amphithere_feather", p: 0.08 },
        { result: "ae2:certus_quartz_crystal", p: 0.2 },
        { result: "tconstruct:copper_nugget", p: 0.3 },
        { result: "alexscaves:dark_tatters", p: 0.1 },
        { result: "minecraft:paper", p: 0.25 },
        { result: "minecraft:amethyst_shard", p: 0.2 },
        { result: "alexscaves:tough_hide", p: 0.08 },
        { result: "alexscaves:archaic_vine", p: 0.1 },
        { result: "brain_delight:brain", p: 0.2 },
        { result: "iceandfire:myrmex_jungle_chitin", p: 0.1 },
        { result: "minecraft:bamboo", p: 0.15 },
        { result: "thermal:apatite", p: 0.1 },
        { result: "alexscaves:licoroot_vine", p: 0.08 },
        { result: "minecraft:popped_chorus_fruit", p: 0.05 },
        { result: "youkaishomecoming:fairy_ice_crystal", p: 0.03 },
        { result: "twilightforest:naga_scale", p: 0.1 },
        { result: "iceandfire:myrmex_stinger", p: 0.1 },
        { result: "alexscaves:candy_cane", p: 0.1 },
        { result: "twilightforest:arctic_fur", p: 0.1 },
        { result: "tinkers_delight:cotton_candy", p: 0.1 },
        { result: "alexscaves:heavy_bone", p: 0.1 },
        { result: "botania:livingwood_log", p: 0.05 },
        { result: "botania:livingrock", p: 0.05 },
        { result: "twilightforest:raven_feather", p: 0.05 },
        { result: "rats:cheese", p: 0.1 },
        { result: "irons_spellbooks:magic_cloth", p: 0.1 },
        { result: "aether:skyroot_planks", p: 0.05 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//1级材料

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "minecraft:dirt"}],
        "mesh": "wqjy:lv_1_mesh"
    };
    const sieveResults = [
        { result: "tconstruct:blood_slime_grass_seeds", p: 0.25 },
        { result: "tconstruct:sky_slime_grass_seeds", p: 0.25 },
        { result: "tconstruct:earth_slime_grass_seeds", p: 0.25 },
        { result: "tconstruct:ender_slime_grass_seeds", p: 0.25 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//黏液种子

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "wqjy:lv_sand"}],
        "mesh": "wqjy:lv_2_mesh"
    };
    const sieveResults = [
        { result: "iceandfire:dragonbone", p: 0.05 },
        { result: "tconstruct:sky_slime_vine", p: 0.05 },
        { result: "tinkersinnovation:slime_bone", p: 0.05 },
        { result: "mekanism:hdpe_sheet", p: 0.05 },
        { result: "tinkers_thinking:verdant_frogcroaking", p: 0.05 },
        { result: "minecraft:experience_bottle", p: 0.05 },
        { result: "immersiveengineering:treated_wood_horizontal", p: 0.05 },
        { result: "tinkers_thinking:gilded_silky_cloth", p: 0.05 },
        { result: "tinkers_thinking:ochre_frogcroaking", p: 0.05 },
        { result: "alexsmobs:capsid", p: 0.05 },
        { result: "tinkers_thinking:stabilized_gunpowder", p: 0.05 },
        { result: "cloudertinker:minogold_ingot", p: 0.05 },
        { result: "iceandfire:pixie_wings", p: 0.05 },
        { result: "cataclysm:amethyst_crab_shell", p: 0.05 },
        { result: "twilightforest:red_thread", p: 0.05 },
        { result: "iceandfire:dread_shard", p: 0.05 },
        { result: "alexscaves:shadow_silk", p: 0.05 },
        { result: "minecraft:twisting_vines", p: 0.05 },
        { result: "minecraft:weeping_vines", p: 0.05 },
        { result: "cloudertinker:magnet_ingot", p: 0.05 },
        { result: "tconstruct:venombone", p: 0.05 },
        { result: "cloudertinker:forestbone", p: 0.05 },
        { result: "alexsmobs:bear_fur", p: 0.05 },
        { result: "alexscaves:polymer_plate", p: 0.05 },
        { result: "tinkersinnovation:honey_bone", p: 0.05 },
        { result: "tinkersinnovation:gorgon_hair", p: 0.05 },
        { result: "tinkersinnovation:blood_bone", p: 0.05 },
        { result: "tinkers_thinking:pearlescent_frogcroaking", p: 0.05 },
        { result: "tinkersinnovation:cooked_bone", p: 0.05 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//2级材料

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "minecraft:moss_block"}],
        "mesh": "wqjy:lv_2_mesh"
    };
    const sieveResults = [
        { result: "tconstruct:ender_slime_sapling", p: 0.25 },
        { result: "tconstruct:blood_slime_sapling", p: 0.25 },
        { result: "tconstruct:earth_slime_sapling", p: 0.25 },
        { result: "tconstruct:sky_slime_sapling", p: 0.25 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//黏液树苗

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_gravel"}],
        "mesh": "wqjy:lv_2_mesh"
    };
    const sieveResults = [
        { result: "dreamtinker:scolecite_ore", p: 0.05 },
        { result: "dreamtinker:larimar_ore", p: 0.05 },
        { result: "tinkers_advanced:bismuthinite_ore", p: 0.05 },
        { result: "twilightforest:liveroot_block", p: 0.05 },
        { result: "mysticalagriculture:soulium_ore", p: 0.05 },
        { result: "aether:ambrosium_ore", p: 0.05 },
        { result: "mysticalagriculture:inferium_ore", p: 0.05 },
        { result: "dreamtinker:cold_iron_ore", p: 0.05 },
        { result: "dreamtinker:shadow_silver_ore", p: 0.05 },
        { result: "dreamtinker:orichalcum_ore", p: 0.05 },
        { result: "tinkerscalibration:vibrating_crystal_ore", p: 0.05 },
        { result: "dreamtinker:amber_ore", p: 0.05 },
        { result: "sakuratinker:youkai_ingot", p: 0.05 },
        { result: "mysticalagriculture:prosperity_ore", p: 0.05}
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//2级矿物

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_moss_block"}],
        "mesh": "wqjy:lv_2_mesh"
    };
    const sieveResults = [
        { result: "minecraft:wither_skeleton_spawn_egg", p: 0.25 },
        { result: "twilightforest:lich_spawn_egg", p: 0.25 },
        { result: "minecraft:hoglin_spawn_egg", p: 0.25 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//刷怪蛋

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "rats:compressed_garbage"}],
        "mesh": "wqjy:lv_2_mesh"
    };
    const sieveResults = [
        { result: "rats:plague_doctorate", p: 0.05 },
        { result: "rats:plague_tome", p: 0.05 },
        { result: "rats:tiny_coin", p: 0.1 },
        { result: "rats:token_fragment", p: 0.05 },
        { result: "rats:token_piece", p: 0.02 },
        { result: "rats:chunky_cheese_token", p: 0.01 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//老鼠

ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_crushed_netherrack"}],
        "mesh": "wqjy:lv_3_mesh"
    };
    const sieveResults = [
        { result: "tconstruct:cobalt_ore", p: 0.1 },
        { result: "tinkers_thinking:ardite_ore", p: 0.1 },
        { result: "tinkerscalibration:inert_witherium_ore", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//下界
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_crushed_deepslate"}],
        "mesh": "wqjy:lv_3_mesh"
    };
    const sieveResults = [
        { result: "deep_aether:skyjade_ore", p: 0.1 },
        { result: "draconicevolution:overworld_draconium_ore", p: 0.1 },
        { result: "tinkersinnovation:void_crystal_ore", p: 0.1 },
        { result: "twilightforest:giant_cobblestone", p: 0.1 },
        { result: "twilightforest:mazestone_brick", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//板岩
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_gravel"}],
        "mesh": "wqjy:lv_3_mesh"
    };
    const sieveResults = [
        { result: "tinkerscalibration:immersed_silver_ore", p: 0.1 },
        { result: "tinkerscalibration:tourmaline_ore", p: 0.1 },
        { result: "tinkerscalibration:tonium_ore", p: 0.1 },
        { result: "tinkerscalibration:corundum_ore", p: 0.1 },
        { result: "gobber2:gobber2_ore", p: 0.1 },
        { result: "tinkerscalibration:stellarium_ore", p: 0.1 },
        { result: "thermal:ruby_ore", p: 0.1 },
        { result: "tinkerscalibration:hothium_ore", p: 0.1 },
        { result: "tinkerscalibration:spinel_ore", p: 0.1 },
        { result: "iceandfire:sapphire_ore", p: 0.1 },
        { result: "minecraft:emerald_ore", p: 0.1 },
        { result: "tinkers_thinking:chlorophyll_ore", p: 0.1 },
        { result: "dreamtinker:orichalcum_ore", p: 0.1 },
        { result: "aether:zanite_ore", p: 0.1 },
        { result: "minecraft:diamond_ore", p: 0.1 },
        { result: "tinkerscalibration:magiga_ore", p: 0.1 },
        { result: "dreamtinker:transmutation_gold_ore", p: 0.1 },
        { result: "tinkerscalibration:titanium_ore", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//沙砾
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_moss_block"}],
        "mesh": "wqjy:lv_3_mesh"
    };
    const sieveResults = [
        { result: "twilightforest:transformation_sapling", p: 0.1 },
        { result: "twilightforest:ice_bomb", p: 0.1 },
        { result: "momotinker:jujube_wood_sapling", p: 0.1 },
        { result: "alexsmobs:elastic_tendon", p: 0.1 },
        { result: "twilightforest:sorting_sapling", p: 0.1 },
        { result: "twilightforest:steeleaf_ingot", p: 0.1 },
        { result: "twilightforest:mining_sapling", p: 0.1 },
        { result: "twilightforest:carminite", p: 0.1 },
        { result: "twilightforest:time_sapling", p: 0.1 },
        { result: "twilightforest:borer_essence", p: 0.1 },
        { result: "twilightforest:armor_shard_cluster", p: 0.1 },
        { result: "ars_nouveau:wilden_stalker_se", p: 0.05 },
        { result: "ars_nouveau:wilden_hunter_se", p: 0.05 },
        { result: "ars_nouveau:wilden_guardian_se", p: 0.05 },
        { result: "alexscaves:pewen_sapling", p: 0.05},
        { result: "minecraft:phantom_spawn_egg", p: 0.05}
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//苔藓
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "wqjy:lv_sand"}],
        "mesh": "wqjy:lv_3_mesh"
    };
    const sieveResults = [
        { result: "irons_spellbooks:frosted_helve", p: 0.1 },
        { result: "tinkers_advanced:basalz_signalum", p: 0.1 },
        { result: "dreamtinker:poisonous_homunculus", p: 0.1 },
        { result: "tinkerscalibration:halleium_ingot", p: 0.1 },
        { result: "tinkerscalibration:hymon", p: 0.1 },
        { result: "l2complements:poseidite_ingot", p: 0.1 },
        { result: "aquaculture:neptunium_ingot", p: 0.1 },
        { result: "tinkers_thinking:chillslime_cryogel", p: 0.1 },
        { result: "cataclysm:black_steel_ingot", p: 0.1 },
        { result: "cloudertinker:phantom_ingot", p: 0.1 },
        { result: "l2hostility:chaos_ingot", p: 0.1 },
        { result: "minecraft:crying_obsidian", p: 0.1 },
        { result: "tinkerscalibration:lizanite_crystal", p: 0.1 },
        { result: "create:rose_quartz", p: 0.1 },
        { result: "cloudertinker:minodiamond_gem", p: 0.1 },
        { result: "tinkerscalibration:prehnite_crystal", p: 0.1 },
        { result: "tinkerscalibration:steamium_ingot", p: 0.1 },
        { result: "tinkers_thinking:lightite_ingot", p: 0.1 },
        { result: "l2complements:totemic_gold_ingot", p: 0.1 },
        { result: "mushroom_daydream:plague_steel", p: 0.1 },
        { result: "tinkers_ingenuity:plague_bone", p: 0.1 },
        { result: "mushroom_daydream:bee_man", p: 0.1 },
        { result: "tinkers_advanced:nutrition_slime_ingot", p: 0.1 },
        { result: "minecraft:purpur_block", p: 0.1 },
        { result: "mushroom_daydream:nightmare_fuel", p: 0.1 },
        { result: "tconstruct:necronium_bone", p: 0.1 },
        { result: "cataclysm:ancient_metal_ingot", p: 0.1 },
        { result: "tinkers_advanced:bismuth_ingot", p: 0.1 },
        { result: "tinkers_thinking:bacium", p: 0.1 },
        { result: "twilightforest:alpha_yeti_fur", p: 0.1 },
        { result: "cataclysm:koboleton_bone", p: 0.1 },
        { result: "tinkersinnovation:enchantment_ingot", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//3级材料
ServerEvents.recipes(event =>{
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "tag": "tconstruct:inventory_blacklist"
                }
            ],
            "result": [
                {
                    "count": 2,
                    "item": "minecraft:shulker_shell"
                }
            ],
            "tool": {
                "tag": "minecraft:pickaxes"
            }
        }
    )
})//潜影壳
ServerEvents.recipes(event => {
    const baseBarrelConfig = {
        "type": "exdeorum:barrel_mixing",
        "fluid_amount": 1000,
        "ingredient": {
            "item": "minecraft:amethyst_block"
        }
    };
    const barrelMixingResults = [
        { fluid: "minecraft:lava", result: "tconstruct:ichor_slime_crystal_block" },
        { fluid: "tconstruct:ender_slime", result: "tconstruct:budding_ender_slime_crystal" },
        { fluid: "tconstruct:earth_slime", result: "tconstruct:budding_earth_slime_crystal" },
        { fluid: "tconstruct:ichor", result: "tconstruct:budding_ichor_slime_crystal" },
        { fluid: "tconstruct:sky_slime", result: "tconstruct:budding_sky_slime_crystal" }
    ];
    barrelMixingResults.forEach(item => {
        event.custom(Object.assign({}, baseBarrelConfig, {
            "fluid": item.fluid,
            "result": item.result
        }));
    });
});
//黏液水晶
ServerEvents.recipes(event => {
    const baseOrechidConfig = {
        "type": "botania:orechid",
        "input": {
            "type": "block",
            "block": "minecraft:magma_block"
        }
    };
    const orechidOutputs = [
        { block: "alexscaves:primal_magma", weight: 3 },
        { block: "alexscaves:volcanic_core", weight: 1 }
    ];
    orechidOutputs.forEach(item => {
        event.custom(Object.assign({}, baseOrechidConfig, {
            "output": {
                "type": "block",
                "block": item.block
            },
            "weight": item.weight
        }));
    });
});//明煌龙
ServerEvents.recipes(event => {
    const baseOrechidConfig = {
        "type": "botania:orechid",
        "input": {
            "type": "block",
            "block": "tconstruct:cobalt_block"
        }
    };
    const orechidOutputs = [
        { block: "wqjy:debris", weight: 1 },
        { block: "minecraft:cobblestone", weight: 8 }
    ];
    orechidOutputs.forEach(item => {
        event.custom(Object.assign({}, baseOrechidConfig, {
            "output": {
                "type": "block",
                "block": item.block
            },
            "weight": item.weight
        }));
    });
});
ServerEvents.recipes(event => {
    event.custom(
        {
            "type":"botania:orechid",
            "input": {
                "type": "block",
                "block": "tconstruct:manyullyn_block"
            }, 
            "output": {
                "type": "block",
                "block": "wqjy:debris"
            },
            "weight": 1
        }
    )
})//残骸
ServerEvents.recipes(event => {
    const baseOrechidConfig = {
        "type": "botania:orechid",
        "input": {
            "type": "block",
            "block": "wqjy:debris"
        }
    };
    const orechidOutputs = [
        { block: "deep_aether:chromatic_aercloud", weight: 1 },
        { block: "irons_spellbooks:arcane_debris", weight: 1 },
        { block: "dreamtinker:black_sapphire_ore", weight: 1 },
        { block: "tinkers_advanced:stibnite_ore", weight: 1 },
        { block: "sakuratinker:terracryst_ore_deepslate", weight: 1 },
        { block: "sakuratinker:prometheum_ore_deepslate", weight: 1 },
        { block: "gobber2:gobber2_ore_nether", weight: 1 },
        { block: "enigmaticdelicacy:etherium_ore", weight: 1 },
        { block: "aether:gravitite_ore", weight: 1 },
        { block: "sakuratinker:eezo_ore", weight: 1 }, 
        { block: "gobber2:gobber2_ore_end", weight: 1}
    ];
    orechidOutputs.forEach(item => {
        event.custom(Object.assign({}, baseOrechidConfig, {
            "output": {
                "type": "block",
                "block": item.block
            },
            "weight": item.weight
        }));
    });
});
ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "botania:pure_daisy",
            "input": {
                "type": "block",
                "block": "sakuratinker:eezo_ore"
            },
            "output": {
                "name": "minecraft:bedrock"
            }
        }
    )
})//矿物、基岩
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_moss_block"}],
        "mesh": "wqjy:lv_4_mesh"
    };
    const sieveResults = [
        { result: "graveyard:lich_spawn_egg", p: 0.1 }, 
        { result: "iceandfire:spawn_egg_lightning_dragon", p: 0.1 }, 
        { result: "iceandfire:spawn_egg_fire_dragon", p: 0.1 }, 
        { result: "iceandfire:spawn_egg_ice_dragon", p: 0.1 }, 
        { result: "tconstruct:blazewood", p: 0.1 }, 
        { result: "cataclysm:scylla_spawn_egg", p: 0.1 }, 
        { result: "cataclysm:maledictus_spawn_egg", p: 0.1 }, 
        { result: "twilightforest:castle_brick", p: 0.1 }, 
        { result: "twilightforest:hydra_spawn_egg", p: 0.1 }, 
        { result: "cataclysm:the_harbinger_spawn_egg", p: 0.1 }, 
        { result: "cataclysm:the_leviathan_spawn_egg", p: 0.1 }, 
        { result: "twilightforest:thorn_rose", p: 0.1 }, 
        { result: "cataclysm:ancient_remnant_spawn_egg", p: 0.1 }, 
        { result: "momotinker:lightning_strike_wood", p: 0.1 }, 
        { result: "tinkers_thinking:soul_vine", p: 0.1 }, 
        { result: "tconstruct:ender_slime_vine", p: 0.1 },
        { result: "minecraft:warden_spawn_egg", p: 0.1}
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//苔藓
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_crushed_netherrack"}],
        "mesh": "wqjy:lv_4_mesh"
    };
    const sieveResults = [
        { result: "cataclysm:netherite_monstrosity_spawn_egg", p: 0.1 }, 
        { result: "cataclysm:ignis_spawn_egg", p: 0.1 }, 
        { result: "alexsmobs:spawn_egg_warped_mosco", p: 0.1 }, 
        { result: "alexsmobs:spawn_egg_straddler", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//下界岩
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "exdeorum:compressed_crushed_end_stone"}],
        "mesh": "wqjy:lv_4_mesh"
    };
    const sieveResults = [
        { result: "cataclysm:ender_guardian_spawn_egg", p: 0.1 }, 
        { result: "minecraft:shulker_shell", p: 0.2 }, 
        { result: "minecraft:shulker_spawn_egg", p: 0.1 }, 
        { result: "sakuratinker:dragon_sinew", p: 0.1 }, 
        { result: "tconstruct:dragon_scale", p: 0.1 }, 
        { result: "irons_spellbooks:dragonskin", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//末地
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "wqjy:lv_sand"}],
        "mesh": "wqjy:lv_4_mesh"
    };
    const sieveResults = [
        { result: "extrabotany:photonium_ingot", p: 0.1 }, 
        { result: "cataclysm:witherite_ingot", p: 0.1 }, 
        { result: "mekanism:alloy_atomic", p: 0.1 }, 
        { result: "cataclysm:cursium_ingot", p: 0.1 }, 
        { result: "extrabotany:aerialite_ingot", p: 0.1 }, 
        { result: "l2hostility:miracle_ingot", p: 0.1 }, 
        { result: "cloudertinker:forest_gem", p: 0.1 }, 
        { result: "l2complements:sculkium_ingot", p: 0.1 }, 
        { result: "mekanism:ingot_refined_obsidian", p: 0.1 }, 
        { result: "tprt:evil_beast_alloy_ingot", p: 0.1 }, 
        { result: "tinkers_ingenuity:elfs_crystal", p: 0.1 }, 
        { result: "tinkers_advanced:blitz_lumium", p: 0.1 }, 
        { result: "l2complements:shulkerate_ingot", p: 0.1 }, 
        { result: "dreamtinker:desire_gem", p: 0.1 }, 
        { result: "botania:terrasteel_ingot", p: 0.1 }, 
        { result: "l2complements:eternium_ingot", p: 0.1 }, 
        { result: "tinkers_advanced:penumatic_reinforced_steel", p: 0.1 }, 
        { result: "tinkerscalibration:breashell", p: 0.1 }, 
        { result: "tinkers_advanced:blizz_enderium", p: 0.1 }, 
        { result: "tinkers_thinking:bound_chain", p: 0.1 }, 
        { result: "projecte:dark_matter", p: 0.1 }, 
        { result: "mushroom_daydream:dark_thing", p: 0.1 }, 
        { result: "extrabotany:shadowium_ingot", p: 0.1 }, 
        { result: "tinkers_advanced:blaze_netherite", p: 0.1 }, 
        { result: "tinkers_ingenuity:coloured_glaze_star", p: 0.1 }, 
        { result: "botania:gaia_ingot", p: 0.1 }, 
        { result: "tinkersinnovation:farseeing_alloy_ingot", p: 0.1 }, 
        { result: "projecte:red_matter", p: 0.1 }, 
        { result: "extrabotany:the_end", p: 0.1 }, 
        { result: "cataclysm:ignitium_ingot", p: 0.1 }, 
        { result: "tinkersinnovation:decline_ingot", p: 0.1 }, 
        { result: "tinkers_thinking:ancient_ceramic", p: 0.1 }, 
        { result: "tinkers_delight:jinhua_ham", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});
//4级材料
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "wqjy:lv_sand"}],
        "mesh": "wqjy:lv_5_mesh"
    };
    const sieveResults = [
        { result: "momotinker:gluttony_core", p: 0.1 }, 
        { result: "momotinker:arriving_at_the_other_shore", p: 0.1 }, 
        { result: "momotinker:dragon_jade", p: 0.1 }, 
        { result: "momotinker:lust_mirror", p: 0.1 }, 
        { result: "momotinker:lazy_grail", p: 0.1 }, 
        { result: "momotinker:meteor_nucleus", p: 0.1 }, 
        { result: "momotinker:heartsteel", p: 0.1 }, 
        { result: "momotinker:compassion_mask", p: 0.1 }, 
        { result: "momotinker:rage_stone_statue", p: 0.1 }, 
        { result: "momotinker:greedy_contract", p: 0.1 }, 
        { result: "momotinker:spirit_visage", p: 0.1 }, 
        { result: "momotinker:dimensional_prism", p: 0.1 }, 
        { result: "momotinker:jealous_notes", p: 0.1 }, 
        { result: "momotinker:living_platinum", p: 0.1 }, 
        { result: "momotinker:nihilism", p: 0.1 }, 
        { result: "momotinker:hadal_platinum", p: 0.1 }, 
        { result: "momotinker:ashen_platinum", p: 0.1 }, 
        { result: "momotinker:crystallized_platinum", p: 0.1 }, 
        { result: "momotinker:twilight_purple_gold", p: 0.1 }, 
        { result: "momotinker:stellar_core_platinum", p: 0.1 }, 
        { result: "momotinker:stained_blood_gold", p: 0.1 }, 
        { result: "momotinker:mountain_river_paintings", p: 0.1 }, 
        { result: "momotinker:immortal_weiqi", p: 0.1 }, 
        { result: "momotinker:timetrace_purple_gold", p: 0.1 }, 
        { result: "momotinker:devouring_demon_gold", p: 0.1 }, 
        { result: "momotinker:reversetime_purple_gold", p: 0.1 }, 
        { result: "momotinker:starry_mysterious_gold", p: 0.1 }, 
        { result: "momotinker:rhythm_slime", p: 0.1 }, 
        { result: "momotinker:arrogance_proof", p: 0.1 }, 
        { result: "momotinker:interdimensional_crystal", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});//砂料
ServerEvents.recipes(event => {
    const baseSieveConfig = {
        "type": "exdeorum:sieve",
        "ingredient": [{"item": "wqjy:debris"}],
        "mesh": "wqjy:lv_5_mesh"
    };
    const sieveResults = [
        { result: "mushroom_daydream:dragon_gobber", p: 0.1 }, 
        { result: "tprt:mixeddragon", p: 0.1 }, 
        { result: "extrabotany:orichalcos_ingot", p: 0.1 }, 
        { result: "tinkers_advanced:densium_ingot", p: 0.1 }, 
        { result: "mushroom_daydream:pure_horror", p: 0.07 }, 
        { result: "mekanism:pellet_antimatter", p: 0.05 }, 
        { result: "tinkers_advanced:anti_neutronium_ingot", p: 0.1 }, 
        { result: "tinkers_advanced:voltaic_crystal", p: 0.1 }, 
        { result: "cloudertinker:magala_ingot", p: 0.1 }, 
        { result: "dreamtinker:soul_etherium", p: 0.1 }, 
        { result: "tinkers_advanced:activated_chromatic_steel", p: 0.1 }, 
        { result: "dreamtinker:despair_gem", p: 0.1 }, 
        { result: "dreamtinker:metallivorous_stibium_lupus", p: 0.1 }, 
        { result: "tinkers_advanced:irradium_ingot", p: 0.1 }, 
        { result: "sakuratinker:two_form_mist_star", p: 0.1 }, 
        { result: "avaritia:crystal_matrix_ingot", p: 0.1 }, 
        { result: "avaritia:infinity_catalyst", p: 0.01 }, 
        { result: "tinkers_advanced:iridium_chunk", p: 0.1 }, 
        { result: "dreamtinker:star_regulus", p: 0.1 }, 
        { result: "sakuratinker:delusion", p: 0.1 }, 
        { result: "ticex:etheric_ingot", p: 0.1 }, 
        { result: "tinkers_advanced:protocite_pellet", p: 0.1 }, 
        { result: "tprt:source_alloy", p: 0.1 }, 
        { result: "avaritia:neutron_ingot", p: 0.1 }, 
        { result: "tprt:dark_knight_ingot", p: 0.1 }, 
        { result: "sakuratinker:gluttonous", p: 0.1 }, 
        { result: "momotinker:dim_dark_gold", p: 0.1 }
    ];
    sieveResults.forEach(item => {
        event.custom(Object.assign({}, baseSieveConfig, {
            "result": item.result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": item.p
            }
        }));
    });
});//残骸