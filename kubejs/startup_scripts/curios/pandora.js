ItemEvents.modification(event => {
    event.modify('wqjy:zhufu_1', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "curseofpandora:reality_index",
                    "identifier",
                    1,
                    'addition'
                )
                .addAttribute(
                    "curseofpandora:spell_tolerance",
                    "identifier",
                    1,
                    'addition'
                )
        )
    })
})