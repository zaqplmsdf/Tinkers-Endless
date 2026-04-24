// 监听实体生成事件（服务器端）
EntityEvents.spawned(event => {
    // 定义需要阻止的 Tinkers' Construct 物品列表
    const forbiddenItems = [
        'tconstruct:melting_pan',
        'tconstruct:war_pick',
        'tinkers_things:blockram',
        'tconstruct:swasher',
        'tconstruct:battlesign',
        'tconstruct:minotaur_axe'
    ];
    
    const entity = event.entity;

    // 核心改进1：先判断是否为有生命的实体（只有LivingEntity才有"手"的概念）
    if (!entity.isLiving()) return;

    // 核心改进2：空值校验 + 可选链操作符（?.）安全访问id
    // 1. 检查并清除主手物品
    const mainHandItem = entity.mainHandItem;
    if (mainHandItem?.id && forbiddenItems.includes(mainHandItem.id)) {
        entity.setMainHandItem(Item.empty);
        console.log(`Removed forbidden main hand item ${mainHandItem.id} from ${entity.type}`);
    }
    
    // 2. 检查并清除副手物品
    const offHandItem = entity.offHandItem;
    if (offHandItem?.id && forbiddenItems.includes(offHandItem.id)) {
        entity.setOffHandItem(Item.empty);
        console.log(`Removed forbidden off hand item ${offHandItem.id} from ${entity.type}`);
    }
});