// 基础合成配方
ServerEvents.recipes(event => {
    // ==================== 基础无序合成 ====================
    // 挖掘爪
    event.shapeless('artifacts:digging_claws', [
        'minecraft:iron_shovel',
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_hoe'
    ]);
    // 水晶心
    event.shapeless('artifacts:crystal_heart', [
        'minecraft:apple',
        'thermal:enderium_coin'
    ]);
    // 硬币转换 - 正向
    event.shapeless('thermal:silver_coin', ['5x thermal:copper_coin']);
    event.shapeless('thermal:gold_coin', ['5x thermal:silver_coin']);
    event.shapeless('thermal:enderium_coin', ['6x thermal:gold_coin']);
    event.shapeless('thermal:netherite_coin', ['3x thermal:enderium_coin']);
    // 硬币转换 - 反向
    event.shapeless('4x thermal:copper_coin', ['thermal:silver_coin']);
    event.shapeless('4x thermal:silver_coin', ['thermal:gold_coin']);
    event.shapeless('5x thermal:gold_coin', ['thermal:enderium_coin']);
    event.shapeless('2x thermal:enderium_coin', ['thermal:netherite_coin']);
    // 觉醒古代酵母
    event.shapeless('tinkers_delight:awakened_ancient_yeast', [
        'tinkers_delight:ancient_yeast',
        'thermal:netherite_coin'
    ]);
    // 奥术精华
    event.shapeless('2x irons_spellbooks:arcane_essence', [
        'minecraft:lapis_lazuli',
        'minecraft:flint'
    ]);
    // 1. 维度撕裂者配方（weidusiliezhi）
    event.shapeless(
        "alexsmobs:shattered_dimensional_carver",
        [
            "alexsmobs:dimensional_carver",
            "alexsmobs:capsid"
        ]
    )
    // 2. 神秘蠕虫配方
    event.shapeless(
        "alexsmobs:mysterious_worm",
        [
            "alexsmobs:mosquito_larva",
            "alexsmobs:capsid"
        ]
    )
    // 闪电瓶互转
    event.shapeless('hmag:lightning_bottle', ['irons_spellbooks:lightning_bottle']);
    event.shapeless('irons_spellbooks:lightning_bottle', ['hmag:lightning_bottle']);
    // 雾隐贵人
    event.shapeless('mushroom_daydream:shiguan', [
        'sakuratinker:wu_yu',
        'createaddition:biomass'
    ]);
    // ==================== 基础有序合成 ====================
    // 雨伞
    event.shaped(
        Item.of('artifacts:umbrella'),
        [
            ' P ',
            'PSP',
            ' T '
        ],
        {
            P: 'minecraft:paper',
            S: 'minecraft:slime_ball',
            T: 'minecraft:stick'
        }
    );
    // 亡灵戒指
    event.shaped('ringsofascension:ring_undying', [
        'TTT',
        'TTT',
        'TTT'
    ], {
        T: 'minecraft:totem_of_undying'
    });
    // 洋葱圈
    event.shaped('artifacts:onion_ring', [
        'AOA',
        'OAO',
        'AOA'
    ], {
        A: 'minecraft:air',
        O: 'farmersdelight:onion'
    });
    // 大地之心碎片
    event.shaped('2x enigmaticaddons:earth_heart_fragment', [
        'ICG',
        'LBA',
        'END'
    ], {
        I: 'minecraft:iron_ingot',
        C: 'minecraft:copper_ingot',
        G: 'minecraft:gold_ingot',
        L: 'minecraft:lapis_lazuli',
        A: 'minecraft:amethyst_shard',
        E: 'minecraft:emerald',
        N: 'thermal:netherite_coin',
        D: 'minecraft:diamond',
        B: 'enigmaticaddons:earth_heart_fragment'
    });
    // 灵液滴
    event.shaped('2x enigmaticaddons:ichor_droplet', [
        'NGN',
        'GIG',
        'NGN'
    ], {
        N: 'thermal:netherite_coin',
        G: 'minecraft:gold_nugget',
        I: 'enigmaticaddons:ichor_droplet'
    });
    // 古代酵母
    event.shaped('tinkers_delight:ancient_yeast', [
        'ENE',
        'NEN',
        'ENE'
    ], {
        E: 'thermal:enderium_coin',
        N: 'thermal:netherite_coin'
    });
    // 南瓜派
    event.shaped('mushroom_daydream:sjngp', [
        'ATA',
        'GPI',
        'ACA'
    ], {
        A: 'minecraft:air',
        T: 'tconstruct:manyullyn_ingot',
        G: 'minecraft:gold_ingot',
        P: 'minecraft:pumpkin_pie',
        I: 'minecraft:iron_ingot',
        C: 'minecraft:copper_ingot'
    });
    // 无头
    event.shaped('mushroom_daydream:no_head', [
        'ACA',
        'RRR',
        'ARA'
    ], {
        A: 'minecraft:air',
        C: 'minecraft:carved_pumpkin',
        R: 'minecraft:rotten_flesh'
    });
    // 传说纸
    event.shaped('mushroom_daydream:legend_paper', [
        'MPM',
        'PEP',
        'MPM'
    ], {
        M: 'minecraft:map',
        P: 'minecraft:paper',
        E: 'minecraft:enchanted_book'
    });
    // 幻昙花
    event.shaped('youkaishomecoming:udumbara_flower', [
        'BBB',
        'BUB',
        'BBB'
    ], {
        B: 'minecraft:bone_meal',
        U: 'youkaishomecoming:udumbara_seeds'
    });
    // 村民生成蛋
    event.shaped(
        Item.of('minecraft:villager_spawn_egg'),
        [
            'EEE',
            'GLG',
            'EAE'
        ],
        {
            E: 'minecraft:emerald',
            G: 'l2complements:totemic_gold_ingot',
            L: 'l2complements:life_essence',
            A: 'minecraft:egg'
        }
    )
    // 秘银复制
    event.shaped('2x irons_spellbooks:mithril_ingot', [
        'NEN',
        'ESE',
        'NEN'
    ], {
        N: 'thermal:netherite_coin',
        E: 'irons_spellbooks:arcane_essence',
        S: '#irons_spellbooks:mithril_material'
    }
    )
    // 拆解台
    event.shaped('twilightforest:uncrafting_table',[
        'NED', // 第一行：下界合成台 | 极限合成台 | 末地合成台（Avaritia模组）
        'CIS', // 第二行：双压缩合成台 | 无限催化剂 | 幽匿合成台（Avaritia模组）
        'PPP'  // 第三行：中子堆 | 中子堆 | 中子堆（Avaritia模组）
    ],
    {
        N: 'avaritia:nether_crafting_table',
        E: 'avaritia:extreme_crafting_table',
        D: 'avaritia:end_crafting_table',
        C: 'avaritia:double_compressed_crafting_table',
        I: 'avaritia:infinity_catalyst',
        S: 'avaritia:sculk_crafting_table',
        P: 'avaritia:neutron_pile'
    }
    )
    // 烈焰人生成蛋
    event.shaped('minecraft:blaze_spawn_egg', [
        'BBB',
        'LEL',
        'BRB'
    ], {
        B: 'minecraft:blaze_rod',
        L: 'l2complements:totemic_gold_ingot',
        E: 'l2complements:life_essence',
        R: 'minecraft:egg'
    });
    // 叶绿素矿石
    event.shaped('2x tinkers_thinking:chlorophyll_ore', [
        'SMS',
        'MOM',
        'SMS'
    ], {
        S: 'enigmaticdelicacy:enigmatic_seed',
        M: 'minecraft:mud',
        O: '#forge:ores/chlorophyll'
    });
    // 「mizi」成型合成配方
    event.shaped(
        'mushroom_daydream:mizi',
        [
            'LBL',
            'WLB',
            'RWL'
        ],
        {
            L: 'minecraft:light_blue_dye',
            B: 'minecraft:blue_dye',
            W: 'minecraft:white_dye',
            R: 'minecraft:red_dye'
        }
    )
    // 究极炼金化合物
    event.shaped(
        'mushroom_daydream:ultimate_alchemical_compound',
        [
            'ABC',
            'DEE',
            'FGG'
        ],
        {
            A: 'irons_spellbooks:magic_cloth',
            B: 'mekanism:alloy_reinforced',
            C: 'mekanism:alloy_atomic',
            D: 'irons_spellbooks:arcane_essence',
            E: 'botania:world_seed',
            F: 'mekanism:alloy_infused',
            G: 'irons_spellbooks:arcane_ingot'
        }
    )
    // 非信炉心
    event.shaped('mushroom_daydream:rat_world', [
        'ORO',
        'RGR',
        'ORO'
    ], {
        O: 'rats:oratchalcum_ingot',
        R: 'rats:ratglove_petals',
        G: 'rats:gem_of_ratlantis'
    });
    // 零号蘑菇
    event.shaped('mushroom_daydream:zero_mushroom', [
        'DRU',
        'MIA',
        'PSG'
    ], {
        D: 'mushroom_daydream:dragon_gobber',
        R: 'mushroom_daydream:rat_world',
        U: 'mushroom_daydream:ultimate_alchemical_compound',
        M: 'mushroom_daydream:heimdallr',
        I: 'avaritia:infinity_catalyst',
        A: 'mushroom_daydream:dark_thing',
        P: 'mushroom_daydream:pure_horror',
        S: 'tinkers_thinking:shroomite_ingot',
        G: 'mushroom_daydream:shiguan'
    });
    // 七咒之戒
    event.shaped('enigmaticlegacy:cursed_ring', [
        'HEN',
        'HRI',
        'NPN'
    ], {
        H: 'hmag:evil_crystal_fragment',
        E: 'thermal:netherite_coin',
        R: 'enigmaticlegacy:iron_ring',
        P: 'projecte:philosophers_stone',
        N: 'thermal:netherite_coin'
    });
    // ==================== 熔炉配方 ====================
    // 雾於烧制
    event.smelting('sakuratinker:wu_yu', 'sakuratinker:soul_sakura')
        .xp(3.0)
        .cookingTime(200);
    // 魂樱烧制
    event.smelting('sakuratinker:soul_sakura', 'sakuratinker:wu_yu')
        .xp(3.0)
        .cookingTime(200);
    //通用置换核心
    event.shaped(
        Item.of('wqjy:reborn'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'avaritia:neutron_pile',
            A: 'projecte:medium_covalence_dust'
        }
    );
    //无限牛肉
    event.shaped(
        Item.of('artifacts:everlasting_beef'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'projecte:red_matter_block',
            A: 'minecraft:beef'
        }
    )
    //便携式转化桌
    event.shaped(
        Item.of('projecte:transmutation_tablet'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:diamond_block',
            C: 'projecte:transmutation_table',
            B: 'thermal:netherite_coin'
        }
    )
    //混沌碎片
    event.shaped(
        Item.of('draconicevolution:small_chaos_frag'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'ticex:draconic_crystal',
            B: 'minecraft:dragon_egg'
        }
    )
    //灰烬源质
    event.shaped(
        Item.of('irons_spellbooks:cinder_essence'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'minecraft:blaze_powder',
            A: 'irons_spellbooks:arcane_essence',
            C: 'minecraft:slime_ball'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:cinderous_soul_rune'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:blackstone',
            B: 'irons_spellbooks:cinder_essence',
            C: 'irons_spellbooks:cinderous_soulcaller'
        }
    )
    //氟石矿
    event.shaped(
        Item.of('mekanism:fluorite_ore'),
        [
            'ABA',
            'B B',
            'ABA'
        ],
        {
            B: 'minecraft:glowstone_dust',
            A: 'minecraft:stone'
        }
    )
    //悦灵刷怪蛋
    event.shaped(
        Item.of('minecraft:allay_spawn_egg'),
        [
            'AAA',
            'BCB',
            'ADA'
        ],
        {
            D: 'minecraft:egg',
            A: 'minecraft:amethyst_shard',
            C: 'minecraft:note_block',
            B: '#minecraft:music_discs'
        }
    )
    //墨水
    event.shapeless('irons_spellbooks:common_ink', [
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}').strongNBT(),
        'irons_spellbooks:arcane_essence'
    ])
    event.shaped(
        Item.of('irons_spellbooks:uncommon_ink'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'irons_spellbooks:common_ink',
            B: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:rare_ink'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'irons_spellbooks:uncommon_ink',
            B: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:epic_ink'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'minecraft:gold_ingot',
            A: 'irons_spellbooks:rare_ink'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:legendary_ink'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'minecraft:amethyst_shard',
            A: 'irons_spellbooks:epic_ink'
        }
    )
    //紫水晶绑定结
    event.shapeless(
        Item.of('tconstruct:tool_binding', '{Material:"mushroom_daydream:amethyst"}'),
        [
            'minecraft:amethyst_shard'
        ]
    ).id('kubejs:zishuij');
    //石板兑换
    event.shapeless(
        Item.of('alexscaves:cave_codex', '{CaveBiome:"alexscaves:magnetic_caves"}'),
        [
            Item.of('minecraft:paper', '{}'),
            Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('alexscaves:cave_codex', '{CaveBiome:"alexscaves:primordial_caves"}'),
        [
            Item.of('minecraft:paper', '{}'),
            Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:primordial_caves"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('alexscaves:cave_codex', '{CaveBiome:"alexscaves:toxic_caves"}'),
        [
            Item.of('minecraft:paper', '{}'),
            Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:toxic_caves"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('alexscaves:cave_codex', '{CaveBiome:"alexscaves:abyssal_chasm"}'),
        [
            Item.of('minecraft:paper', '{}'),
            Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:abyssal_chasm"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('alexscaves:cave_codex', '{CaveBiome:"alexscaves:forlorn_hollows"}'),
        [
            Item.of('minecraft:paper', '{}'),
            Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:forlorn_hollows"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('alexscaves:cave_codex', '{CaveBiome:"alexscaves:candy_cavity"}'),
        [
            Item.of('minecraft:paper', '{}'),
            Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:candy_cavity"}').strongNBT()
        ]
    )
    //盲盒
    event.shapeless(
        Item.of('ftbquests:lootcrate', '{type:"4"}'),
        [
            Item.of('thermal:enderium_coin', '{}'),
            Item.of('bountifulbaubles:resplendent_token', '{}')
        ]
    )
    event.shapeless(
        Item.of('ftbquests:lootcrate', '{type:"5"}'),
        [
            Item.of('kubejs:xiushichi', '{}'),
            Item.of('thermal:netherite_coin', '{}')
        ]
    )
    event.shaped(
        Item.of('ftbquests:lootcrate', 2, '{type:"7"}'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: '#alexscaves:cave_tablet',
            A: '#forge:cobblestone'
        }
    )
    event.shaped(
        Item.of('ftbquests:lootcrate', '{type:"6"}'),
        [
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            B: Item.of('thermal:enderium_coin', '{}'),
            A: Item.of('thermal:netherite_coin', '{}')
        }
    )
    //永冻碎片
    event.shapeless(
        Item.of('irons_spellbooks:permafrost_shard'),
        [
            'minecraft:blue_ice',
            'minecraft:blue_ice',
            'minecraft:blue_ice',
            'minecraft:blue_ice',
            'minecraft:blue_ice',
            'minecraft:blue_ice',
            'minecraft:blue_ice',
            'minecraft:blue_ice',
            'minecraft:blue_ice'
        ]
    )
    //古旧书袋
    event.shaped(
        Item.of('enigmaticaddons:antique_bag'),
        [
            'AAA',
            'A B',
            'AAA'
        ],
        {
            A: Item.of('irons_spellbooks:magic_cloth', '{}'),
            B: Item.of('botania:manasteel_nugget', '{}')
        }
    )
    // FIB看板娘彩蛋配方
    event.shaped(
        'kubejs:fib',
        [
            'BMB',
            'MVM',
            'BMB'
        ],
        {
            B: 'sakuratinker:blood_ball',
            M: '#forge:mushrooms',
            V: Item.of('graveyard:vial_of_blood', '{Blood:0.8000001f}')
        }
    )
    //核废料
    event.shaped(
        Item.of('wqjy:hefl', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:ingots/uranium',
            B: 'wqjy:hefl'
        }
    )
    //注魔板
    event.shaped(
        Item.of('mythicbotany:mana_infuser'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: Item.of('botania:elementium_ingot', '{}'),
            B: Item.of('enigmaticaddons:earth_heart_fragment', '{}'),
            C: Item.of('botania:glimmering_dreamwood', '{}')
        }
    )
    //反物质锭
    event.shapeless(
        Item.of('tinkers_advanced:neutronite_ingot'),
        [
            '#avaritia:singularity'
        ]
    )
    //至暗卷轴
    event.shaped(
        Item.of('enigmaticlegacy:darkest_scroll', '{IsInitialized:1b,baublesreforked.ModifierId:"cursed"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'kubejs:cat',
            A: 'projecte:dark_matter_block',
            B: 'thermal:netherite_coin'
        }
    )
    //石英花
    event.shaped(
        Item.of('enigmaticaddons:artificial_flower', '{AllEffectCount:20,AttributeId1:"tconstruct:generic.knockback_multiplier",AttributeId2:"forge:swim_speed",AttributeId3:"forge:swim_speed",AttributeModifier1:{Amount:-0.16d,Name:"ArtificialFlower1",Operation:1,UUID:[I;988441670,1928872119,-1551813683,1310692008]},AttributeModifier2:{Amount:-0.11d,Name:"ArtificialFlower2",Operation:1,UUID:[I;1791113840,1431389834,-1512891191,189306668]},AttributeModifier3:{Amount:-0.05d,Name:"ArtificialFlower3",Operation:1,UUID:[I;-506345756,-1312602867,-1084638090,1836487916]},FlowerEnable:1b,FlowerUUID:[I;1721452304,1752384590,-1556869184,38828683],PotionEffect0:"minecraft:mining_fatigue",PotionEffect1:"minecraft:strength"}'),
        [
            'ABA',
            'CDC',
            'CCC'
        ],
        {
            A: Item.of('kubejs:cat', '{}'),
            B: Item.of('avaritia:singularity', '{Id:"avaritia:iron"}').strongNBT(),
            D: Item.of('avaritia:singularity', '{Id:"avaritia:lapis_lazuli"}').strongNBT(),
            C: Item.of('avaritia:singularity', '{Id:"avaritia:quartz"}').strongNBT()
        }
    )
    //创造槽位兑换
    event.shapeless(
        Item.of('kubejs:creative_1'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"upgrades"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('kubejs:creative_2'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"abilities"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('kubejs:creative_3'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"defense"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('kubejs:creative_4'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"souls"}').strongNBT()
        ]
    )
    //猫币分解
    event.shapeless(
        Item.of('64x thermal:netherite_coin'),
        [
            Item.of('kubejs:cat').strongNBT()
        ]
    )
    //猫猫鞋
    event.shapeless(
        Item.of('artifacts:kitty_slippers'),
        [
            Item.of('kubejs:cat').strongNBT()
        ]
    )
    //饰品盒子
    event.shaped(
        Item.of('wqjy:curios_box'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'curseofpandora:plain_charm',
            A: 'l2hostility:miracle_ingot'
        }
    ).replaceIngredient({ item: "l2hostility:miracle_ingot" }, Item.of('l2hostility:miracle_powder'))
    //挑战券
    event.shapeless(
        Item.of('extrabotany:challenge_ticket'),
        [
            'wqjy:myth',
            'wqjy:reborn'
        ]
    )
});

//修饰词相关
ServerEvents.recipes(event => {
    // 空白修饰词
    event.shapeless(
        Item.of('kubejs:xiushichi', 1), 
        [
            'baublesreforked:modifier_book',
            'wqjy:the_book'
        ]
    )
    .damageIngredient({ item: "wqjy:the_book" }, 1)
    event.shapeless(
        Item.of('kubejs:xiushichi', 2), 
        [
            'wqjy:the_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    .damageIngredient({ item: "wqjy:the_book" }, 2)
    event.shapeless(
        Item.of('kubejs:xiushichi', 3), 
        [
            'wqjy:the_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    .damageIngredient({ item: "wqjy:the_book" }, 3)
    event.shapeless(
        Item.of('kubejs:xiushichi', 4), 
        [
            'wqjy:the_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    .damageIngredient({ item: "wqjy:the_book" }, 4)
    event.shapeless(
        Item.of('kubejs:xiushichi', 5), 
        [
            'wqjy:the_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    .damageIngredient({ item: "wqjy:the_book" }, 5)
    event.shapeless(
        Item.of('kubejs:xiushichi', 6), 
        [
            'wqjy:the_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    .damageIngredient({ item: "wqjy:the_book" }, 6)
    event.shapeless(
        Item.of('kubejs:xiushichi', 7), 
        [
            'wqjy:the_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    event.shapeless(
        Item.of('kubejs:xiushichi', 8), 
        [
            'wqjy:the_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )

    //七咒之戒
    event.shaped(
        Item.of('enigmaticlegacy:cursed_ring'),
        [
            'ABA',
            'ACA',
            'BDB'
        ],
        {
            A: Item.of('hmag:evil_crystal_fragment', '{}'),
            D: Item.of('projecte:philosophers_stone', '{}'),
            B: Item.of('thermal:netherite_coin', '{}'),
            C: Item.of('enigmaticlegacy:iron_ring', '{IsInitialized:1,baublesreforked.ModifierId:"reality"}').strongNBT()
        }
    )
    //修饰词升级
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"fate"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"causality"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"reincarnation"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"always"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"consciousness"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"thought"}').strongNBT(),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"creation"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"timeandspace"}').strongNBT(),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"infinite"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"have_or_not"}').strongNBT(),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"truth"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"reality"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"shenghun"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"soul"}').strongNBT(),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
});

//创造烈焰蛋糕
ServerEvents.recipes(event => {
  event.recipes.create.filling('create:creative_blaze_cake', [Fluid.of('sakuratinker:molten_infinity', 1000), 'create:blaze_cake_base'])
})

//RF燃料
ServerEvents.recipes(event => {
  const RF_1 = 'wqjy:rf_1'
  event.recipes.create.sequenced_assembly(
      [
        Item.of('ticex:seared_rf_furnace').withChance(16), 
        Item.of('tconstruct:seared_bricks').withChance(2), 
        Item.of('createaddition:copper_wire').withChance(2), 
        'createaddition:iron_wire',
        'createaddition:electrum_wire',
        'createaddition:gold_wire',
        'minecraft:lightning_rod'
      ], 
      'tconstruct:seared_bricks',
      [
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:copper_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('minecraft:lava', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:iron_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('tconstruct:blazing_blood', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:gold_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('sakuratinker:molten_nihilite', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:electrum_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('sakuratinker:molten_soul_sakura', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'minecraft:lightning_rod']),
      ]
    )
    .transitionalItem(RF_1)
    .loops(1)
})
ServerEvents.recipes(event => {
  const RF_2 = 'wqjy:rf_2'
  event.recipes.create.sequenced_assembly(
      [
        Item.of('ticex:scorched_rf_furnace').withChance(16), 
        Item.of('tconstruct:scorched_bricks').withChance(2), 
        Item.of('createaddition:copper_wire').withChance(2), 
        'createaddition:iron_wire',
        'createaddition:electrum_wire',
        'createaddition:gold_wire',
        'minecraft:lightning_rod'
      ], 
      'tconstruct:scorched_bricks',
      [
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:copper_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('minecraft:lava', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:iron_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('tconstruct:blazing_blood', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:gold_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('sakuratinker:molten_nihilite', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:electrum_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('sakuratinker:molten_soul_sakura', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'minecraft:lightning_rod']),
      ]
    )
    .transitionalItem(RF_2)
    .loops(1)
})

//刷怪蛋配方
ServerEvents.recipes(event => {
    //突变僵尸
    event.shaped(
        Item.of('mutantmonsters:mutant_zombie_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: 'minecraft:egg',
            A: 'minecraft:rotten_flesh',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    //突变苦力怕
    event.shaped(
        Item.of('mutantmonsters:mutant_creeper_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:gunpowder',
            B: 'minecraft:egg',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    //突变骷髅
    event.shaped(
        Item.of('mutantmonsters:mutant_skeleton_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: 'minecraft:egg',
            A: 'minecraft:bone',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    //突变末影人
    event.shaped(
        Item.of('mutantmonsters:mutant_enderman_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:ender_pearl',
            B: 'minecraft:egg',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    //死者之王
    event.shaped(
        Item.of('irons_spellbooks:dead_king_corpse_spawn_egg'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#irons_spellbooks:staff',
            C: Item.of('minecraft:egg', '{}'),
            B: Item.of('irons_spellbooks:arcane_essence', '{}')
        }
    )
    //天顶剑
    event.shaped(
        Item.of('zenith:zenith'),
        [
            'BCB',
            'BAB',
            'BBB'
        ],
        {
            A: 'wqjy:up_item_19',
            B: '#minecraft:swords',
            C: 'composite_material:copper_sword'
        }
    )
    //粉尘
    event.shaped(
        Item.of('wqjy:up_item_19', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'l2hostility:hostility_essence',
            C: 'wqjy:up_item_19',
            A: 'l2hostility:miracle_powder'
        }
    )
    //残片
    event.shaped(
        Item.of('wqjy:up_item_20', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'l2hostility:hostility_essence',
            C: 'wqjy:up_item_20',
            B: 'l2hostility:miracle_powder'
        }
    )
});
//逆转诅咒
ServerEvents.recipes(event => {
    event.shapeless('wqjy:zhufu_1', ['wqjy:the_book', 'curseofpandora:curse_of_inertia']).damageIngredient({item: 'wqjy:the_book'}, 1)
    event.shapeless('wqjy:zhufu_2', ['wqjy:the_book', 'curseofpandora:curse_of_proximity']).damageIngredient({item: 'wqjy:the_book'}, 1)
    event.shapeless('wqjy:zhufu_3', ['wqjy:the_book', 'curseofpandora:curse_of_flesh']).damageIngredient({item: 'wqjy:the_book'}, 1)
    event.shapeless('wqjy:zhufu_4', ['wqjy:the_book', 'curseofpandora:curse_of_metabolism']).damageIngredient({item: 'wqjy:the_book'}, 1)
    event.shapeless('wqjy:zhufu_5', ['wqjy:the_book', 'curseofpandora:curse_of_tension']).damageIngredient({item: 'wqjy:the_book'}, 1)
    event.shapeless('wqjy:zhufu_6', ['wqjy:the_book', 'curseofpandora:curse_of_prudence']).damageIngredient({item: 'wqjy:the_book'}, 1)
    event.shapeless('wqjy:zhufu_7', ['wqjy:the_book', 'curseofpandora:curse_of_spell']).damageIngredient({item: 'wqjy:the_book'}, 1)
})
//挑战券
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('extrabotany:challenge_ticket'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'wqjy:myth',
            A: 'l2hostility:miracle_powder'
        }
    )
    //箱柜
    event.shapeless(
        Item.of('mekanism:creative_bin'),
        [
            'create:creative_crate'
        ]
    )
    //板条箱
    event.shapeless(
        Item.of('create:creative_crate'),
        [
            'mekanism:creative_bin'
        ]
    )
    //扭曲之魂
    event.shaped(
        Item.of('l2hostility:abrahadabra', '{IsInitialized:1b,baublesreforked.ModifierId:"cursed"}'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: Item.of('l2hostility:ragnarok', '{}'),
            B: Item.of('l2complements:eternal_anvil', '{}'),
            E: Item.of('l2hostility:pulling', '{}'),
            C: Item.of('l2hostility:ring_of_reflection', '{IsInitialized:1b,baublesreforked.ModifierId:"celestial"}'),
            D: Item.of('l2hostility:repelling', '{}')
        }
    )
})