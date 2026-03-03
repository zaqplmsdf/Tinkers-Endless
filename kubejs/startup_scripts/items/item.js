StartupEvents.registry('item', event => {
    // 定义所有物品的配置项（数组形式，易扩展、易维护）
    const itemsConfig = [
        {
            id: 'wqjy:myth',
            displayName: '§6神话锭',
            texture: 'wqjy:item/cai',
            tooltip: '§5终极材料',
            glow: false
        },
        {
            id: 'wqjy:hong',
            displayName: '§6虹彩锭',
            texture: 'wqjy:item/hong',
            tooltip: '§5终极材料',
            glow: false
        },
        {
            id: 'wqjy:gaiya',
            displayName: '§2盖亚奖章',
            texture: 'wqjy:item/gaiya',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:hundun',
            displayName: '§d混沌奖章',
            texture: 'wqjy:item/hundun',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:eternal',
            displayName: '§c永恒石',
            texture: 'wqjy:item/eternal',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:world',
            displayName: '§b世界水晶',
            texture: 'wqjy:item/world',
            tooltip: '§5终极材料',
            glow: true
        },
        {
            id: 'wqjy:wqjy_logo',
            displayName: '§6无穷匠艺看板娘',
            texture: 'wqjy:item/wqjy_logo',
            tooltip: '§5可碍捏`',
            glow: false
        }
    ];

    // 循环注册所有物品
    itemsConfig.forEach(config => {
        let item = event.create(config.id)
            .displayName(config.displayName)
            .texture(config.texture)
            .tooltip(config.tooltip);
        
        // 仅当需要发光时调用 glow(true)，避免无效调用
        if (config.glow) {
            item.glow(true);
        }
    });
});