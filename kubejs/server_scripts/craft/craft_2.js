ServerEvents.recipes(event => {

    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"fate"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"causality"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"reincarnation"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"always"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"consciousness"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"thought"}').strongNBT(),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"creation"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"timeandspace"}').strongNBT(),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"infinite"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"have_or_not"}').strongNBT(),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"truth"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"reality"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"shenghun"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: Item.of('avaritia:eternal_singularity', '{}'),
            F: Item.of('avaritia:infinity_nugget', '{}'),
            D: Item.of('baublesreforked:modifier_book', '{baublesreforked.ModifierId:"soul"}').strongNBT(),
            A: Item.of('thermal:netherite_coin', '{}'),
            B: Item.of('avaritia:upgrade_smithing_template', '{}'),
            C: Item.of('avaritia:enhancement_core', '{}')
        }
    )
    event.shaped(
        Item.of('wqjy:hefl', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:ingots/uranium',
            B: 'wqjy:hefl'
        }
    )
    event.shaped(
        Item.of('mythicbotany:mana_infuser'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: Item.of('botania:elementium_ingot', '{}'),
            B: Item.of('enigmaticaddons:earth_heart_fragment', '{}'),
            C: Item.of('botania:glimmering_dreamwood', '{}')
        }
    )
    event.shapeless(
        Item.of('tinkers_advanced:neutronite_ingot'),
        [
            '#avaritia:singularity'
        ]
    )
    event.shaped(
        Item.of('enigmaticlegacy:darkest_scroll', '{IsInitialized:1b,baublesreforked.ModifierId:"cursed"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'kubejs:cat',
            A: 'projecte:dark_matter_block',
            B: 'thermal:netherite_coin'
        }
    )
    event.shaped(
        Item.of('enigmaticaddons:artificial_flower', '{AllEffectCount:20,AttributeId1:"tconstruct:generic.knockback_multiplier",AttributeId2:"forge:swim_speed",AttributeId3:"forge:swim_speed",AttributeModifier1:{Amount:-0.16d,Name:"ArtificialFlower1",Operation:1,UUID:[I;988441670,1928872119,-1551813683,1310692008]},AttributeModifier2:{Amount:-0.11d,Name:"ArtificialFlower2",Operation:1,UUID:[I;1791113840,1431389834,-1512891191,189306668]},AttributeModifier3:{Amount:-0.05d,Name:"ArtificialFlower3",Operation:1,UUID:[I;-506345756,-1312602867,-1084638090,1836487916]},FlowerEnable:1b,FlowerUUID:[I;1721452304,1752384590,-1556869184,38828683],PotionEffect0:"minecraft:mining_fatigue",PotionEffect1:"minecraft:strength"}'),
        [
            'ABA',
            'CDC',
            'CCC'
        ],
        {
            A: Item.of('kubejs:cat', '{}'),
            B: Item.of('avaritia:singularity', '{Id:"avaritia:iron"}').strongNBT(),
            D: Item.of('avaritia:singularity', '{Id:"avaritia:lapis_lazuli"}').strongNBT(),
            C: Item.of('avaritia:singularity', '{Id:"avaritia:quartz"}').strongNBT()
        }
    )
});
