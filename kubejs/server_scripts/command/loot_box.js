BlockEvents.rightClicked(event => {
    const { block, item, player, level } = event;

    // 判定：右键绿宝石方块 + 手持战利品箱
    if (block.id === 'minecraft:emerald_block' && item.id === 'lootr:trophy') {
        const lootTableList = [
            'wqjy:chests/legendary_tinkers_house', 
            'minecraft:chests/desert_pyramid',
            'minecraft:chests/abandoned_mineshaft',
            'minecraft:chests/stronghold_library',
            'minecraft:chests/underwater_ruin_big',
            'minecraft:chests/shipwreck_supply',
            'minecraft:chests/end_city_treasure',
            'minecraft:chests/nether_bridge'
        ]; // 替换为你的战利品箱 Loot Table
        const randomIndex = Math.floor(Math.random() * lootTableList.length);// 从列表中随机选择一个 Loot Table
        const selectedLootTable = lootTableList[randomIndex];
        // 1. 替换方块
        event.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} minecraft:chest{LootTable:"${selectedLootTable}"}`);

        // // 2. 播放音效
        // level.playSound(
        //     null,
        //     block.x + 0.5, block.y + 0.5, block.z + 0.5,
        //     'minecraft:block.chest.break',
        //     'blocks',
        //     1, 1
        // );

        // // 3. 生成粒子
        // event.server.runCommandSilent(
        //     `particle minecraft:block chest ${block.x + 0.5} ${block.y + 0.5} ${block.z + 0.5} 0.3 0.3 0.3 0.15 20`
        // );

        // 可选：消耗物品（取消注释启用）
        //player.mainHandItem.shrink(1);
        // 取消默认右键交互
        event.cancel();
    }
});