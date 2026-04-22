ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'wqjy:up_item_6',
    [
      ' LSL ',
      'LIQIL',
      'SQPQS',
      'LIQIL',
      ' LSL '
    ],
    {
      L: '#forge:ingots/lead',
      S: '#forge:ingots/silver',
      I: 'minecraft:iron_ingot',
      Q: 'create:polished_rose_quartz',
      P: 'create:precision_mechanism'
    }
  )

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

    event.recipes.create.crushing(
        [
            "projecte:red_matter",
            Item.of("projecte:red_matter").withChance(0.3),
            Item.of("projecte:red_matter", 2).withChance(0.1),
            Item.of("wqjy:eternal").withChance(0.02)
        ],
        "projecte:red_matter_block"
    )
    .processingTime(20)
});