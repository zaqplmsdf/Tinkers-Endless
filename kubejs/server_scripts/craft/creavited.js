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
            I:Item.of('mekanism:creative_bin', '{}'),
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