//永终配方
ServerEvents.recipes(event => {
        const { avaritia } = event.recipes;
    avaritia.shaped_table(
        4,
        Item.of('wqjy:the_end'),
        [
            'ABC D CBA',
            'BABCDCBAB',
            'CBEFGHIBC',
            ' CBJKJBC ',
            'DDLMNOPDD',
            ' CBJQJBC ',
            'CBRSTUVBC',
            'BABCDCBAB',
            'ABC D CBA'
        ],
        {
            B: Item.of('wqjy:world', '{}'),
            J: Item.of('avaritia:infinity_catalyst', '{}'),
            P: Item.of('ticex:flickering_reconstruction_core', '{}'),
            N: Item.of('avaritia:infinity_ingot', '{}'),
            H: Item.of('projecte:dark_matter', '{}'),
            T: Item.of('l2hostility:miracle_ingot', '{}'),
            R: Item.of('projecte:red_matter', '{}'),
            I: Item.of('tinkersinnovation:polychrome_alloy_ingot', '{}'),
            L: Item.of('extrabotany:the_end', '{}'),
            Q: Item.of('sakuratinker:colorful_ingot', '{}'),
            A: Item.of('wqjy:hong', '{}'),
            C: Item.of('wqjy:eternal', '{}'),
            E: Item.of('mushroom_daydream:dragon_gobber', '{}'),
            K: Item.of('sakuratinker:goozma', '{}'),
            U: Item.of('l2complements:eternium_ingot', '{}'),
            D: Item.of('wqjy:myth', '{}'),
            F: Item.of('tprt:mixeddragon', '{}'),
            G: Item.of('composite_material:etherite_ingot', '{}'),
            O: Item.of('tinkers_advanced:neutronite_ingot', '{}'),
            M: Item.of('tprt:source_alloy', '{}'),
            S: Item.of('tinkers_advanced:activated_chromatic_steel', '{}') ,
            V: Item.of('mushroom_concept:kira_knight_slime', '{}')
        }
    )
});
//创造板条箱
ServerEvents.recipes(event => {
        const { avaritia } = event.recipes;
    avaritia.shaped_table(
        4,
        Item.of('create:creative_crate'),
        [
            'AYYBBBYYA',
            'YCBYYYBDY',
            'YBEYFYGBY',
            'BYYHIJYYB',
            'BYKLMNOYB',
            'BYYPQRYYB',
            'YBSYTYUBY',
            'YVBYYYBWY',
            'AYYBBBYYA'
        ],
        {
            A:Item.of('wqjy:the_end', '{}'),
            B:Item.of('kubejs:cat', '{}'),
            C:Item.of('kubejs:creative_2', '{}'),
            D:Item.of('kubejs:creative_1', '{}'),
            E:Item.of('draconicevolution:creative_capacitor', '{}'),
            F:Item.of('create:creative_motor', '{}'),
            G:Item.of('pneumaticcraft:creative_compressor', '{}'),
            H:Item.of('botania:creative_pool', '{}'),
            I:Item.of('ticex:celestial_core', '{}'),
            J:Item.of('botania:lens_storm', '{}'),
            K:Item.of('createaddition:creative_energy', '{}'),
            L:Item.of('mekanism:creative_chemical_tank', '{}'),
            M:Item.of('tacz:ammo_box', '{AllTypeCreative:1b}').strongNBT(),
            N:Item.of('mekanism:creative_fluid_tank', '{}'),
            O:Item.of('immersiveengineering:capacitor_creative', '{}'),
            P:Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').strongNBT(),
            Q:Item.of('mekanism:creative_energy_cube', '{}'),
            R:Item.of('ars_nouveau:creative_source_jar', '{}'),
            S:Item.of('create:creative_blaze_cake', '{}'),
            T:Item.of('create:creative_fluid_tank', '{}'),
            U:Item.of('draconicevolution:creative_op_capacitor', '{}'),
            V:Item.of('kubejs:creative_3', '{}'),
            W:Item.of('kubejs:creative_4', '{}'),
            Y:Item.of('avaritia:infinity', '{}')
        }
    )
});
//武器兑换物
ServerEvents.recipes(event => {
        const { avaritia } = event.recipes;
    //指环
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
            H: Item.of('botania:star_sword', '{Damage:0}'),
            C: Item.of('wqjy:hong', '{}'),
            D: Item.of('wqjy:eternal', '{}'),
            F: Item.of('botania:thunder_sword', '{Damage:0}'),
            G: Item.of('wqjy:jian'),
            A: Item.of('wqjy:myth', '{}'),
            I: Item.of('mythicbotany:alfsteel_sword', '{Damage:0}'),
            E: Item.of('wqjy:wqjy_logo', '{}')
        }
    )
    //白花
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
