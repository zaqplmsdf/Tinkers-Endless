ServerEvents.recipes(event => {

    event.shaped(
        Item.of('mutantmonsters:mutant_zombie_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: 'minecraft:egg',
            A: 'minecraft:rotten_flesh',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mutantmonsters:mutant_creeper_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:gunpowder',
            B: 'minecraft:egg',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mutantmonsters:mutant_skeleton_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: 'minecraft:egg',
            A: 'minecraft:bone',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mutantmonsters:mutant_enderman_spawn_egg'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:ender_pearl',
            B: 'minecraft:egg',
            C: Item.of('minecraft:splash_potion', '{Potion:"mutantmonsters:chemical_x"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:dead_king_corpse_spawn_egg'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#irons_spellbooks:staff',
            C: Item.of('minecraft:egg', '{}'),
            B: Item.of('irons_spellbooks:arcane_essence', '{}')
        }
    )
});
