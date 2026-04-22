ServerEvents.recipes(event => {

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

    // 2. 空白修饰词书系列（修改为kubejs:xiushichi，移除所有NBT）
    event.shapeless(
        Item.of('kubejs:xiushichi', 2), // 改为kubejs:xiushichi，移除NBT
        [
            'baublesreforked:modifier_book',
            'avaritia:infinity_catalyst'
        ]
    )
    event.shapeless(
        Item.of('kubejs:xiushichi', 3), // 改为kubejs:xiushichi，移除NBT
        [
            'avaritia:infinity_catalyst',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    event.shapeless(
        Item.of('kubejs:xiushichi', 4), // 改为kubejs:xiushichi，移除NBT
        [
            'avaritia:infinity_catalyst',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    event.shapeless(
        Item.of('kubejs:xiushichi', 5), // 改为kubejs:xiushichi，移除NBT
        [
            'avaritia:infinity_catalyst',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    event.shapeless(
        Item.of('kubejs:xiushichi', 6), // 改为kubejs:xiushichi，移除NBT
        [
            'avaritia:infinity_catalyst',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    event.shapeless(
        Item.of('kubejs:xiushichi', 7), // 改为kubejs:xiushichi，移除NBT
        [
            'avaritia:infinity_catalyst',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book',
            'baublesreforked:modifier_book'
        ]
    )
    event.shapeless(
        Item.of('kubejs:xiushichi', 8), // 改为kubejs:xiushichi，移除NBT
        [
            'avaritia:infinity_catalyst',
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
        Item.of('kubejs:xiushichi', 9), // 改为kubejs:xiushichi，移除NBT
        [
            'avaritia:infinity_catalyst',
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

    event.shapeless(
        Item.of('tconstruct:tool_binding', '{Material:"mushroom_daydream:amethyst"}'),
        [
            'minecraft:amethyst_shard'
        ]
    ).id('kubejs:zishuij');

    event.shapeless('irons_spellbooks:common_ink', [
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}').strongNBT(),
        'irons_spellbooks:arcane_essence'
    ]).id('kubejs:moshui');

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

    // 新增FIB看板娘彩蛋配方（成型配方）
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

});