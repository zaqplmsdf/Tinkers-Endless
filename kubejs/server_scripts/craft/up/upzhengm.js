//晋升证明
ServerEvents.recipes(event => {
    //晋升证明1
    event.shapeless(
        Item.of('wqjy:up_1'),
        [
            'wqjy:up_item_15',
            'wqjy:up_item_15',
            'wqjy:up_item_15',
            'wqjy:up_item_9'
        ]
    )
    //晋升证明2
    event.recipes.create.mechanical_crafting(
      'wqjy:up_2',
      [
        'LLS'
      ],
      {
        L: 'wqjy:up_item_16',
        S: 'wqjy:up_item_6'
      }
    )
        const { avaritia } = event.recipes;
    //晋升证明3
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
    //晋升证明4
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
    //晋升证明5
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
    //最终证明
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
});