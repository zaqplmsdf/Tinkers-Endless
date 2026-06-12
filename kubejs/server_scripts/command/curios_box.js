ItemEvents.rightClicked(event => {
    const { player, item, level } = event;

    if (item.id !== 'wqjy:curios_box') return;
    
    if (level.isClientSide()) {
        player.tell('§e[客户端] 右键已触发');
        return;
    }
    player.tell('§a[潘多拉魔盒] 给你了');

    const validItems = [];
    Ingredient.of('#curseofpandora:pandora_base').itemIds.forEach(itemId => {
        const testItem = Item.of(itemId);
        if (!testItem.hasTag('curseofpandora:reality_charms')) {
            validItems.push(itemId);
        }
    });
    
    if (validItems.length === 0) {
        player.tell('§c没有找到符合条件的饰品！');
        return;
    }

    const randomId = validItems[Math.floor(Math.random() * validItems.length)];
    player.give(Item.of(randomId));
    item.shrink(1);
    player.playSound('minecraft:entity.item.pickup', 1, 1);
});