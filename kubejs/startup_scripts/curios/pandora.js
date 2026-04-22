// 加载 Curios API
const $SlotAttribute = Java.loadClass("top.theillusivec4.curios.api.SlotAttribute")

// 物品修改事件：全局修改物品属性/功能的核心入口
ItemEvents.modification(event => {
    event.modify('wqjy:zhufu_1', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "wqjy:reality_index_1",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "wqjy:spell_tolerance_1",
                    1,
                    'addition'
                )
                .addAttribute(
                    "minecraft:generic.attack_speed",
                    "wqjy:atspeed_1",
                    0.8,
                    "multiply_base"
                )
                .modifyAttribute(ctx => {
                    ctx.modify(
                        $SlotAttribute.getOrCreate('necklace'),
                        "wqjy:necklace_1",
                        1,
                        'addition'
                    )
                })
                .modifyAttributesTooltip((tooltips, stack) => {
                    tooltips.add(Text.lightPurple('经由逆转的第一诅咒'))
                    return tooltips
                })
        )
    })

    event.modify('wqjy:zhufu_2', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "wqjy:reality_index_2",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "wqjy:spell_tolerance_2",
                    1,
                    'addition'
                )
                .addAttribute(
                    "forge:entity_reach",
                    "wqjy:ereach_2",
                    0.5,
                    'multiply_base'
                )
                .modifyAttribute(ctx => {
                    ctx.modify(
                        $SlotAttribute.getOrCreate('bracelet'),
                        "wqjy:bracelet_2",
                        1,
                        'addition'
                    )
                })
                .modifyAttributesTooltip((tooltips, stack) => {
                    tooltips.add(Text.lightPurple('经由逆转的第二诅咒'))
                    return tooltips
                })
        )
    })

    event.modify('wqjy:zhufu_3', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "wqjy:reality_index_3",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "wqjy:spell_tolerance_3",
                    1,
                    'addition'
                )
                .addAttribute(
                    "minecraft:generic.max_health",
                    "wqjy:maxh_3",
                    10,
                    "addition"
                )
                .modifyAttribute(ctx => {
                    ctx.modify(
                        $SlotAttribute.getOrCreate('curio'),
                        "wqjy:curio_3",
                        1,
                        'addition'
                    )
                })
                .modifyAttributesTooltip((tooltips, stack) => {
                    tooltips.add(Text.lightPurple('经由逆转的第三诅咒'))
                    return tooltips
                })
        )
    })

    event.modify('wqjy:zhufu_4', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "wqjy:reality_index_4",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "wqjy:spell_tolerance_4",
                    1,
                    'addition'
                )
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    "wqjy:atk_4",
                    0.4,
                    'multiply_base'
                )
                .addAttribute(
                    "minecraft:generic.attack_speed",
                    "wqjy:atspeed_4",
                    0.4,
                    "multiply_base"
                )
                .modifyAttributesTooltip((tooltips, stack) => {
                    tooltips.add(Text.lightPurple('经由逆转的第四诅咒'))
                    return tooltips
                })
        )
    })

    event.modify('wqjy:zhufu_5', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "wqjy:reality_index_5",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "wqjy:spell_tolerance_5",
                    1,
                    'addition'
                )
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    "wqjy:atk_5",
                    0.2,
                    "multiply_total"
                )
                .modifyAttribute(ctx => {
                    ctx.modify(
                        $SlotAttribute.getOrCreate('hands'),
                        "wqjy:hands_5",
                        1,
                        'addition'
                    )
                })
                .modifyAttributesTooltip((tooltips, stack) => {
                    tooltips.add(Text.lightPurple('经由逆转的第五诅咒'))
                    return tooltips
                })
        )
    })

    event.modify('wqjy:zhufu_6', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "wqjy:reality_index_6",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "wqjy:spell_tolerance_6",
                    1,
                    'addition'
                )
                .modifyAttribute(ctx => {
                    ctx.modify(
                        $SlotAttribute.getOrCreate('charm'),
                        "wqjy:charm_6",
                        3,
                        'addition'
                    )
                })
                .modifyAttributesTooltip((tooltips, stack) => {
                    tooltips.add(Text.lightPurple('经由逆转的第六诅咒'))
                    return tooltips
                })
        )
    })

    event.modify('wqjy:zhufu_7', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "wqjy:reality_index_7",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "wqjy:spell_tolerance_7",
                    1,
                    'addition'
                )
                .modifyAttribute(ctx => {
                    ctx.modify(
                        $SlotAttribute.getOrCreate('hands'),
                        "wqjy:hands_7",
                        1,
                        'addition'
                    )
                })
                .modifyAttributesTooltip((tooltips, stack) => {
                    tooltips.add(Text.lightPurple('经由逆转的第七诅咒'))
                    return tooltips
                })
        )
    })
})