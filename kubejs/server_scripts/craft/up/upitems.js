//晋升素材
ServerEvents.recipes(event => {
    //黄铜心脏
    event.recipes.create.mechanical_crafting(
        'wqjy:up_item_6',
        [
          ' LSL ',
          'LIQIL',
          'SQPQS',
          'LIQIL',
          ' LSL '
        ],
        {
          L: '#forge:ingots/lead',
          S: '#forge:ingots/silver',
          I: 'minecraft:iron_ingot',
          Q: 'create:polished_rose_quartz',
          P: 'create:precision_mechanism'
        }
    )
    //锻铸粉尘
    event.shaped(
        Item.of('wqjy:up_item_19'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            C: 'curseofpandora:angelic_judgement',
            A: 'l2complements:totemic_gold_sword',
            F: 'l2complements:sculkium_sword',
            E: 'minecraft:nether_star',
            G: 'curseofpandora:abyssal_edge',
            B: 'l2complements:poseidite_sword',
            H: 'l2complements:shulkerate_sword',
            I: 'curseofpandora:doom_star',
            D: 'curseofpandora:cursed_karma'
        }
    )
    //奥法残骸
    event.shapeless(
        Item.of('wqjy:up_item_20'),
        [
            'irons_spellbooks:ice_staff',
            'irons_spellbooks:blood_staff',
            'irons_spellbooks:artificer_cane',
            'irons_spellbooks:lightning_rod'
        ]
    )
    //断杖
    event.shaped(
        Item.of('wqjy:zhang_1'),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            B: 'minecraft:netherite_upgrade_smithing_template',
            A: '#irons_spellbooks:staff',
            C: 'wqjy:up_item_20'
        }
    )
    //断剑
    event.shaped(
        Item.of('wqjy:jian'),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            B: 'minecraft:netherite_upgrade_smithing_template',
            C: 'wqjy:up_item_19',
            A: '#minecraft:swords'
        }
    )
    //虹彩
    event.smithing(
        Item.of('wqjy:hong'),
        'avaritia:neutron_gear',
        'avaritia:crystal_matrix_ingot',
        'avaritia:neutron_ingot'
    )
    //看板娘
    event.shaped(
        Item.of('wqjy:wqjy_logo'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            C: 'wqjy:eternal',
            I: 'youkaishomecoming:udumbara_flower',
            A: 'wqjy:myth',
            D: 'wqjy:up_item_1',
            F: 'wqjy:up_item_13',
            G: 'wqjy:up_item_2',
            E: 'wqjy:up_item_7',
            B: 'wqjy:up_item_6',
            H: 'wqjy:up_item_17'
        }
    )
    //世界水晶
    event.shaped(
        Item.of('wqjy:world'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'enigmaticaddons:earth_heart_fragment',
            B: 'twilightforest:giant_cobblestone'
        }
    )
    //永恒石
    event.recipes.create.crushing(
        [
            "projecte:red_matter",
            Item.of("projecte:red_matter").withChance(0.3),
            Item.of("projecte:red_matter", 2).withChance(0.1),
            Item.of("wqjy:eternal").withChance(0.02)
        ],
        "projecte:red_matter_block"
    )
    .processingTime(20)
});