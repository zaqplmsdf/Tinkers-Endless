AStages.addRestrictionForItem("astages/stage5/items/core", "stage_5",
    "avaritia:extreme_crafting_table",
    "twilightforest:uncrafting_table"
)

AStages.addRestrictionForTag("astages/stage5/tags/stage_4", "stage_5", "wqjy:stage_5")

AStages.addRestrictionForScreen("astages/stage5", "stage_5", "twilightforest:uncrafting")
    .setOpenMessage(menu => 
        Component.literal("§6这还不是你可以触及的力量！")
    )