ServerEvents.recipes(event => {
    event.remove([{id:'mushroom_concept:table/almighty/other/gem'},{id:'tinkersjewelry:tools/parts/builder/gem'}])
    
    const materials = [
        { id: "tconstruct:rock", input: '#forge:normal_stone' },
        { id: "tconstruct:flint", input: 'minecraft:flint' },
        { id: "tinkersjewelry:amethyst", input: '#forge:gems/amethyst' },
        { id: "tconstruct:bone", input: '#tconstruct:bones' },
        { id: "tinkersjewelry:emerald", input: '#forge:gems/emerald' },
        { id: "tinkersjewelry:lapis", input: '#forge:gems/lapis' },
        { id: "tinkersjewelry:prismarine", input: '#forge:dusts/prismarine' },
        { id: "tinkersjewelry:redstone", input: '#forge:dusts/redstone' },
        { id: "tinkersjewelry:scute", input: 'minecraft:scute' },
        { id: "tconstruct:seared_stone", input: 'tconstruct:seared_brick' },
        { id: "tconstruct:venombone", input: 'tconstruct:venombone' },
        { id: "tinkersjewelry:calcite", input: 'tinkersjewelry:calcite' },
        { id: "tinkersjewelry:diamond", input: '#forge:gems/diamond' },
        { id: "tinkersjewelry:earth_crystal", input: 'tconstruct:earth_slime_crystal' },
        { id: "tinkersjewelry:ender_crystal", input: 'tconstruct:ender_slime_crystal' },
        { id: "tinkersjewelry:eudialyte", input: 'tinkersjewelry:eudialyte' },
        { id: "tinkersjewelry:fire_opal", input: 'tinkersjewelry:fire_opal' },
        { id: "tinkersjewelry:heart_of_the_sea", input: 'minecraft:heart_of_the_sea' },
        { id: "tinkersjewelry:ichor_crystal", input: 'tconstruct:ichor_slime_crystal' },
        { id: "tinkersjewelry:malachite", input: 'tinkersjewelry:malachite' },
        { id: "tinkersjewelry:merlinite", input: 'tinkersjewelry:merlinite' },
        { id: "tinkersjewelry:milky_quartz", input: 'tinkersjewelry:milky_quartz' },
        { id: "tinkersjewelry:prehnite", input: 'tinkersjewelry:prehnite' },
        { id: "tinkersjewelry:quartz", input: '#forge:gems/quartz' },
        { id: "tinkersjewelry:rubellite", input: 'tinkersjewelry:rubellite' },
        { id: "tinkersjewelry:sky_crystal", input: 'tconstruct:sky_slime_crystal' },
        { id: "tinkersjewelry:cinnabar", input: '#forge:gems/cinnabar' },
        { id: "tinkersjewelry:fluorite", input: '#forge:gems/fluorite' },
        { id: "tinkersjewelry:ruby", input: '#forge:gems/ruby' },
        { id: "tinkersjewelry:sapphire", input: '#forge:gems/sapphire' },
        { id: "tconstruct:necrotic_bone", input: '#forge:wither_bones' },
        { id: "tconstruct:scorched_stone", input: 'tconstruct:scorched_brick' },
        { id: "tconstruct:whitestone", input: '#forge:end_stones' },
        { id: "tconstruct:ender_pearl", input: '#forge:ender_pearls' },
        { id: "tconstruct:obsidian", input: '#forge:obsidian' },
        { id: "tinkersjewelry:echo_shard", input: 'minecraft:echo_shard' },
        { id: "tinkersjewelry:ender_eye", input: 'minecraft:ender_eye' },
        { id: "tinkersjewelry:glowstone", input: '#forge:dusts/glowstone' },
        { id: "tinkersjewelry:netherstar", input: '#forge:nether_stars' },
        { id: "tinkersjewelry:prismarine_crystal", input: '#forge:gems/prismarine' },
        { id: "tinkersjewelry:purpur", input: 'minecraft:purpur_block' },
        { id: "tconstruct:necronium", input: 'tconstruct:necronium_bone' },
        { id: "tconstruct:blazing_bone", input: 'tconstruct:blazing_bone' },
        { id: "tinkers_things:hematite", input: 'tinkers_things:hematite' }
    ];

    materials.forEach(function(mat) {
        const id = mat.id;
        const input = mat.input;
        
        // 使用 tconstruct:pattern 的配方
        event.shapeless(Item.of('tinkersjewelry:gem', '{Material:"' + id + '"}'), [input, 'tconstruct:pattern']);
        
        // 使用 mushroom_concept:almighty_ban 的配方（保留该物品）
        event.shapeless(Item.of('tinkersjewelry:gem', '{Material:"' + id + '"}'), [input, 'mushroom_concept:almighty_ban'])
            .keepIngredient('mushroom_concept:almighty_ban');
    });
});