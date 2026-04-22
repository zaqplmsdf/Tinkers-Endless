// 监听实体生成事件（服务器端）
EntityEvents.spawned(event => {
    // 定义需要阻止的 Tinkers' Construct 物品列表
    const forbiddenItems = [
        'tconstruct:melting_pan',
        'tconstruct:war_pick',
        'tconstruct:swasher',
        'tconstruct:battlesign',
        'tconstruct:minotaur_axe' // 修正原输入中的拼写错误
    ];
    
    const entity = event.entity;
    
    // 1. 检查并清除主手物品
    const mainHandItem = entity.mainHandItem;
    if (forbiddenItems.includes(mainHandItem.id)) {
        entity.setMainHandItem(Item.empty);
        console.log(`Removed forbidden main hand item ${mainHandItem.id} from ${entity.type}`);
    }
    
    // 2. 检查并清除副手物品
    const offHandItem = entity.offHandItem;
    if (forbiddenItems.includes(offHandItem.id)) {
        entity.setOffHandItem(Item.empty);
        console.log(`Removed forbidden off hand item ${offHandItem.id} from ${entity.type}`);
    }
});