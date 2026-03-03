AStages.addRestrictionForItem("astages/stage5/items/core", "stage_5",
    "avaritia:extreme_crafting_table",
    "cloudertinker:magala_ingot",
    "mushroom_daydream:dragon_gobber",
    "cloudertinker:chimera_ingot",
    "sakuratinker:two_form_mist_star",
    "avaritia:neutron_ingot",
    "ticex:etheric_ingot",
    "sakuratinker:chimera_gamma",
    "enigmaticlegacy:evil_ingot",
    "sakuratinker:pyrothium",
    "sakuratinker:gluttonous",
    "sakuratinker:delusion",
    "extrabotany:the_end",
    "mushroom_daydream:pure_horror",
    "twilightforest:uncrafting_table",
    "wqjy:eternal",
    "wqjy:world"
)

AStages.addRestrictionForScreen("astages/stage5", "stage_5", "twilightforest:uncrafting")
    .setOpenMessage(menu => 
        Component.literal("§6这还不是你可以触及的力量！")
    )