ServerEvents.recipes(event => {
  event.recipes.create.filling('create:creative_blaze_cake', [Fluid.of('sakuratinker:molten_infinity', 1000), 'create:blaze_cake_base'])
})

ServerEvents.recipes(event => {
  const RF_1 = 'wqjy:rf_1' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        Item.of('ticex:seared_rf_furnace').withChance(16), 
        Item.of('tconstruct:seared_bricks').withChance(2), 
        Item.of('createaddition:copper_wire').withChance(2), 
        'createaddition:iron_wire',
        'createaddition:electrum_wire',
        'createaddition:gold_wire',
        'minecraft:lightning_rod'
      ], 
      // Input:
      'tconstruct:seared_bricks',
      // Sequence:
      [
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:copper_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('minecraft:lava', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:iron_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('tconstruct:blazing_blood', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:gold_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('sakuratinker:molten_nihilite', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'createaddition:electrum_wire']),
        event.recipes.create.filling(RF_1, [RF_1, Fluid.of('sakuratinker:molten_soul_sakura', 1000)]),
        event.recipes.create.deploying(RF_1, [RF_1, 'minecraft:lightning_rod']),
      ]
    )
    .transitionalItem(RF_1)
    .loops(1)
})

ServerEvents.recipes(event => {
  const RF_2 = 'wqjy:rf_2' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        Item.of('ticex:scorched_rf_furnace').withChance(16), 
        Item.of('tconstruct:scorched_bricks').withChance(2), 
        Item.of('createaddition:copper_wire').withChance(2), 
        'createaddition:iron_wire',
        'createaddition:electrum_wire',
        'createaddition:gold_wire',
        'minecraft:lightning_rod'
      ], 
      // Input:
      'tconstruct:scorched_bricks',
      // Sequence:
      [
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:copper_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('minecraft:lava', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:iron_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('tconstruct:blazing_blood', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:gold_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('sakuratinker:molten_nihilite', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'createaddition:electrum_wire']),
        event.recipes.create.filling(RF_2, [RF_2, Fluid.of('sakuratinker:molten_soul_sakura', 1000)]),
        event.recipes.create.deploying(RF_2, [RF_2, 'minecraft:lightning_rod']),
      ]
    )
    .transitionalItem(RF_2)
    .loops(1)
})