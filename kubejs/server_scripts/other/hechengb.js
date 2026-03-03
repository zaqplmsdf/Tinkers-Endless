ServerEvents.recipes(event => {

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
    event.shapeless(
        Item.of('wqjy:up_item_20'),
        [
            'irons_spellbooks:ice_staff',
            'irons_spellbooks:blood_staff',
            'irons_spellbooks:artificer_cane',
            'irons_spellbooks:lightning_rod'
        ]
    )

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
    event.smithing(
        Item.of('wqjy:hong'),
        'avaritia:neutron_gear',
        'avaritia:crystal_matrix_ingot',
        'avaritia:neutron_ingot'
    )
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
});