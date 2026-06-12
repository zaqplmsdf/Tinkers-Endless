AStages.addRestrictionForItem("astages/stage5/items/core", "stage_5",
    "avaritia:extreme_crafting_table",
    "twilightforest:uncrafting_table"
)

AStages.addRestrictionForTag("astages/stage5/tags/stage_4", "stage_5", "wqjy:stage_5")

AStages.addRestrictionForScreen("astages/stage5", "stage_5", "twilightforest:uncrafting")
    .setOpenMessage(menu => 
        Component.literal("§6这还不是你可以触及的力量！")
)

RecipeMachineStage.addRecipes('tconstruct:melting', [
    'sakuratinker:materials/orichalcos/orichalcos_melting',
    'sakuratinker:materials/orichalcos/orichalcos_material_melting',
    'sakuratinker:materials/chimera_gamma/chimera_gamma_melting_ingot',
    'sakuratinker:materials/chimera_gamma/chimera_gamma_material_melt',
    'sakuratinker:materials/delusion/delusion_melting_ingot',
    'sakuratinker:materials/delusion/delusion_material_melt',
    'tprt:materials/tprt/mixeddragon/mixeddragon',
    'tprt:materials/tprt/mixeddragon/mixeddragon_material_melting',
    'momotinker:materials/arriving_at_the_other_shore/arriving_at_the_other_shore_melting',
    'momotinker:materials/arriving_at_the_other_shore/arriving_at_the_other_shore_materials_melting',
    'momotinker:materials/heartsteel/heartsteel_melting',
    'momotinker:materials/heartsteel/heartsteel_materials_melting',
    'momotinker:materials/gluttony_core/gluttony_core_melting',
    'momotinker:materials/gluttony_core/gluttony_core_materials_melting',
    'momotinker:materials/rage_stone_statue/rage_stone_statue_melting',
    'momotinker:materials/rage_stone_statue/rage_stone_statue_materials_melting',
    'momotinker:materials/jealous_notes/jealous_notes_melting',
    'momotinker:materials/jealous_notes/jealous_notes_materials_melting',
    'momotinker:materials/compassion_mask/compassion_mask_melting',
    'momotinker:materials/compassion_mask/compassion_mask_materials_melting',
    'momotinker:materials/nihilism/nihilism_melting',
    'momotinker:materials/nihilism/nihilism_materials_melting',
    'momotinker:materials/immortal_weiqi/immortal_weiqi_melting',
    'momotinker:materials/immortal_weiqi/immortal_weiqi_materials_melting',
    'momotinker:materials/mountain_river_paintings/mountain_river_paintings_melting',
    'momotinker:materials/mountain_river_paintings/mountain_river_paintings_materials_melting',
    'wqjy:tconstruct/melting/myth/ingot',
    'wqjy:tconstruct/tools/melting/myth'
], 'stage_5')

RecipeMachineStage.addRecipes('tconstruct:alloying', [
    'sakuratinker:materials/chimera_gamma/chimera_gamma_alloy',
    'sakuratinker:materials/delusion/delusion_alloy',
    'tprt:materials/tprt/mixeddragon/alloy',
    'momotinker:smeltery/alloys/molten_nihilism',
    'tconstruct:kjs/6z3hpy7d3e1ls3dm94331cfgn'
], 'stage_5')