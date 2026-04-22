ItemEvents.rightClicked(event => {
    const { player, item, level } = event;

    // 1. 严格判断物品ID（避免误触）
    if (item.id !== 'wqjy:curios_box') return;
    
    // 2. 仅服务端执行 + 调试信息
    if (level.isClientSide()) {
        player.tell('§e[客户端] 右键已触发'); // 客户端调试
        return;
    }
    player.tell('§a[潘多拉魔盒] 给你了'); // 服务端调试

    // 3. 更稳妥的物品筛选方式
    const validItems = [];
    // 遍历所有带curios标签的物品
    Ingredient.of('#curseofpandora:pandora_base').itemIds.forEach(itemId => {
        const testItem = Item.of(itemId);
        // 排除匠魂标签
        if (!testItem.hasTag('curseofpandora:reality_charms')) {
            validItems.push(itemId);
        }
    });

    // 4. 结果处理
    if (validItems.length === 0) {
        player.tell('§c没有找到符合条件的饰品！');
        return;
    }

    const randomId = validItems[Math.floor(Math.random() * validItems.length)];
    player.give(Item.of(randomId));
    item.shrink(1);
    player.playSound('minecraft:entity.item.pickup', 1, 1);
});