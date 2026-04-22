ServerEvents.recipes(event => {
        const { avaritia } = event.recipes;
    avaritia.shaped_table(
        1,
        Item.of('wqjy:up_3'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            B: Item.of('wqjy:up_item_10', '{}'),
            A: Item.of('wqjy:up_item_4', '{}'),
            C: Item.of('wqjy:up_item_13', '{}'),
            E: Item.of('wqjy:up_item_14', '{}'),
            D: Item.of('wqjy:up_item_5', '{}')
        }
    )
    avaritia.shaped_table(
        2,
        Item.of('wqjy:up_4'),
        [
            'A B A',
            '  C  ',
            'B D B',
            '  E  ',
            'A B A'
        ],
        {
            E: Item.of('wqjy:up_item_3', '{}'),
            C: Item.of('wqjy:up_item_11', '{}'),
            B: Item.of('wqjy:up_item_2', '{}'),
            D: Item.of('wqjy:up_item_7', '{}'),
            A: Item.of('wqjy:up_item_17', '{}')
        }
    )
    avaritia.shaped_table(
        3,
        Item.of('wqjy:up_5'),
        [
            'ABCCBDD',
            'BC  CBD',
            'BC  EBB',
            'BACFCAB',
            'BBE  CB',
            'DBC  CB',
            'DDBCCBA'
        ],
        {
            E: Item.of('wqjy:up_item_18', '{}'),
            A: Item.of('avaritia:crystal_matrix_ingot', '{}'),
            B: Item.of('thermal:netherite_coin', '{}'),
            C: Item.of('wqjy:up_item_1', '{}'),
            F: Item.of('wqjy:up_item_12', '{}'),
            D: Item.of('cagedmobs:star_infused_netherite_ingot', '{}')
        }
    )
    avaritia.shaped_table(
        4,
        Item.of('wqjy:up_6'),
        [
            'ABBBBBBBC',
            'CABBBBBCD',
            'CCABBBCDD',
            'CCCAECDDD',
            'CCCFGHDDD',
            'CCCDIBDDD',
            'CCDAAABDD',
            'CDAAAAABD',
            'DAAAAAAAB'
        ],
        {
            C: Item.of('wqjy:world', '{}'),
            A: Item.of('wqjy:hong', '{}'),
            D: Item.of('wqjy:eternal', '{}'),
            F: Item.of('wqjy:jian', '{}'),
            B: Item.of('wqjy:myth', '{}'),
            G: Item.of('wqjy:wqjy_logo', '{}'),
            H: Item.of('wqjy:zhang_1', '{}'),
            I: Item.of('wqjy:hundun', '{}'),
            E: Item.of('wqjy:gaiya', '{}')
        }
    )

    avaritia.shaped_table(
        4,
        Item.of('wqjy:wuqi_2'),
        [
            'AAAABAAAA',
            'ABCBCBCBA',
            'ACDCDCDCA',
            'ABCDEDCBA',
            'BCDFGHDCB',
            'ABCDIDCBA',
            'ACDCDCDCA',
            'ABCBCBCBA',
            'AAAABAAAA'
        ],
        {
            B: Item.of('wqjy:world', '{}'),
            H: Item.of('botania:star_sword', '{Damage:0}').strongNBT(),
            C: Item.of('wqjy:hong', '{}'),
            D: Item.of('wqjy:eternal', '{}'),
            F: Item.of('botania:thunder_sword', '{Damage:0}').strongNBT(),
            G: Item.of('wqjy:jian'),
            A: Item.of('wqjy:myth', '{}'),
            I: Item.of('mythicbotany:alfsteel_sword', '{Damage:0}').strongNBT(),
            E: Item.of('wqjy:wqjy_logo', '{}')
        }
    )
    avaritia.shaped_table(
        4,
        Item.of('wqjy:wuqi_1'),
        [
            'AAAABAAAA',
            'ABCBCBCBA',
            'ACDCDCDCA',
            'ABCDHDCBA',
            'BCDEFGDCB',
            'ABCDIDCBA',
            'ACDCDCDCA',
            'ABCBCBCBA',
            'AAAABAAAA'
        ],
        {
            B: Item.of('wqjy:world', '{}'),
            C: Item.of('wqjy:hong', '{}'),
            D: Item.of('wqjy:eternal', '{}'),
            A: Item.of('wqjy:myth', '{}'),
            F: Item.of('wqjy:zhang_1', '{}'),
            E: Item.of('irons_spellbooks:graybeard_staff', '{}'),
            G: Item.of('irons_spellbooks:ice_staff', '{}'),
            H: Item.of('irons_spellbooks:artificer_cane', '{}'),
            I: Item.of('irons_spellbooks:lightning_rod', '{}'),
        }
    )
});
