AStages.addRestrictionForItem("astages/stage1/items/core", "stage_1",
    "tacz:workbench_a",
    "tacz:workbench_c",
    "tacz:gun_smith_table",
    "iceandfire:dragonbone",
    "tconstruct:sky_slime_vine",
    "mekanism:hdpe_sheet",
    "twilightforest:knightmetal_ingot",
    "tinkers_thinking:verdant_frogcroaking",
    "tinkers_thinking:gilded_silky_cloth",
    "mekanism:ingot_osmium",
    "cloudertinker:dectird_ingot",
    "cloudertinker:questiron_ingot",
    "tinkerscalibration:grain_ingot",
    "tinkers_thinking:ochre_frogcroaking",
    "tinkers_advanced:bismuthinite",
    "cloudertinker:prublaze_ingot",
    "twilightforest:steeleaf_ingot",
    "twilightforest:ironwood_ingot",
    "tinkers_thinking:dusk_chunk",
    "minecraft:twisting_vines",
    "twilightforest:red_thread",
    "alexscaves:polymer_plate",
    "cataclysm:amethyst_crab_shell",
    "iceandfire:pixie_wings",
    "cloudertinker:minogold_ingot",
    "tinkerscalibration:bamboo_steel",
    "tinkers_thinking:stabilized_gunpowder",
    "aether:ambrosium_shard",
    "cloudertinker:magnet_ingot",
    "tconstruct:sky_slime_crystal",
    "tinkers_thinking:pearlescent_frogcroaking",
    "minecraft:ender_pearl",
    "tconstruct:ender_slime_crystal",
    "tconstruct:venombone",
    "minecraft:heart_of_the_sea",
    "tconstruct:ichor_slime_crystal",
    "mysticalagriculture:soulium_ingot",
    "tconstruct:scorched_brick",
    "tconstruct:seared_brick",
    "minecraft:glass",
    "minecraft:end_stone",
    "alexscaves:shadow_silk",
    "mushroom_daydream:no_head",
    "tinkerscalibration:vibrating_crystal",
    "cloudertinker:devil_chain",
    "cloudertinker:evilmare_ingot",
    "cloudertinker:forestbone",
    "sakuratinker:youkai_ingot",
    "tconstruct:earth_slime_crystal",
    "mysticalagriculture:inferium_ingot",
    "minecraft:nether_brick",
    "pneumaticcraft:ingot_iron_compressed",
    "cloudertinker:colairon_ingot",
    "cloudertinker:bloodshed_ingot",
    "iceandfire:dread_shard",
    "minecraft:weeping_vines",
    "pneumaticcraft:plastic"
)
AStages.addRestrictionForTag("astages/stage1/tags/silver_ingots", "stage_1", "forge:ingots/silver")
AStages.addRestrictionForTag("astages/stage1/tags/lead_ingots", "stage_1", "forge:ingots/lead")
AStages.addRestrictionForTag("astages/stage1/tags/slimy_planks", "stage_1", "tconstruct:slimy_planks")
AStages.addRestrictionForTag("astages/stage1/tags/wither_bones", "stage_1", "forge:wither_bones")
AStages.addRestrictionForTag("astages/stage1/tags/gems", "stage_1", "forge:gems")
.setCanBeStoredInInventory(true)  // 允许保存在背包（对应原preventInventory(false)）
.setCanAttack(true)               // 允许用作武器（对应原preventAttacking(true)）
.setCanPickedUp(true)             // 允许拾取（对应原preventPickup(false)）
.setCanItemBeLeftClicked(true)    // 允许左键使用（对应原preventUsing(true)）
.setCanItemBeRightClicked(true)   // 允许右键使用（对应原preventUsing(true)）
.setHideInJEI(false);             // 允许在JEI显示（对应原setHiddenInJEI(true)）

AStages.addRestrictionForModRecipe("astages/stage1/recipes/mods/projecte", "stage_1", "projecte");
AStages.addRestrictionForModRecipe("astages/stage1/recipes/mods/create", "stage_1", "create");
AStages.addRestrictionForModRecipe("astages/stage1/recipes/mods/createaddition", "stage_1", "createaddition");

AStages.addRestrictionForRecipe("astages/stage1/recipes/gun_smith_table", "stage_1", "minecraft:crafting", "tacz:gun_smith_table");
AStages.addRestrictionForRecipe("astages/stage1/recipes/workbench_c", "stage_1", "minecraft:crafting", "tacz:attachment_workbench");
AStages.addRestrictionForRecipe("astages/stage1/recipes/workbench_a", "stage_1", "minecraft:crafting", "tacz:ammo_workbench");