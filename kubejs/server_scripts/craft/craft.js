// 基础合成配方 - 无复杂NBT标签
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


    // 1. 维度裂殖器配方（weidusiliezhi）
    event.shapeless(
        "alexsmobs:shattered_dimensional_carver", // 输出
        [
            "alexsmobs:dimensional_carver",       // 消耗：维度雕刻器
            "alexsmobs:capsid"                    // 标记为原料（后续拦截消耗）
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

    // 吴玉拟人
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

    // 不死图腾块
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

    // 优昙婆罗花
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

    // 奥术回收物
    event.shaped('2x irons_spellbooks:arcane_salvage', [
        'NEN',
        'ESE',
        'NEN'
    ], {
        N: 'thermal:netherite_coin',
        E: 'irons_spellbooks:arcane_essence',
        S: 'irons_spellbooks:arcane_salvage'
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

    // 老鼠世界
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

    // 诅咒戒指
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
    // 吴玉烧制
    event.smelting('sakuratinker:wu_yu', 'sakuratinker:soul_sakura')
        .xp(3.0)
        .cookingTime(200);

    // 灵魂樱烧制
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
});