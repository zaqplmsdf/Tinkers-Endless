ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('kubejs:creative_1'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"upgrades"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('kubejs:creative_2'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"abilities"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('kubejs:creative_3'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"defense"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('kubejs:creative_4'),
        [
            Item.of('tconstruct:creative_slot', '{slot:"souls"}').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('64x thermal:netherite_coin'),
        [
            Item.of('kubejs:cat').strongNBT()
        ]
    )
    event.shapeless(
        Item.of('artifacts:kitty_slippers'),
        [
            Item.of('kubejs:cat').strongNBT()
        ]
    )
});