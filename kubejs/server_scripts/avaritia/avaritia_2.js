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
