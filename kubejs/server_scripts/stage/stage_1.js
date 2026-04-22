AStages.addRestrictionForItem("astages/stage1/items/core", "stage_1",
    "tacz:workbench_a",
    "tacz:workbench_c",
    "tacz:gun_smith_table",
    "tconstruct:seared_melter"
)
AStages.addRestrictionForTag("astages/stage1/tags/stage_1", "stage_1", "wqjy:stage_1")

AStages.addRestrictionForModRecipe("astages/stage1/recipes/mods/projecte", "stage_1", "projecte");
AStages.addRestrictionForModRecipe("astages/stage1/recipes/mods/create", "stage_1", "create");
AStages.addRestrictionForModRecipe("astages/stage1/recipes/mods/createaddition", "stage_1", "createaddition");

AStages.addRestrictionForRecipe("astages/stage1/recipes/gun_smith_table", "stage_1", "minecraft:crafting", "tacz:gun_smith_table");
AStages.addRestrictionForRecipe("astages/stage1/recipes/workbench_c", "stage_1", "minecraft:crafting", "tacz:attachment_workbench");
AStages.addRestrictionForRecipe("astages/stage1/recipes/workbench_a", "stage_1", "minecraft:crafting", "tacz:ammo_workbench");