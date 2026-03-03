// 物品注册事件（启动时执行，需重启游戏生效）
StartupEvents.registry('item', event => {
    event.create('wqjy:zhang_1', 'basic')
        .displayName('§6遗忘断杖·黯淡')
        .texture('wqjy:item/zhang_1')
        .parentModel('wqjy:item/zhang')
        .tooltip('§5那续写神话的笔墨啊')
        .tooltip('§5在那开满繁花的法师塔')
        .tooltip('§5可在任务栏兑换为正常状态')

    event.create('wqjy:jian')
        .displayName('§6断境残锋·黯淡')
        .texture('wqjy:item/wq_1')
        .tooltip('§5吟游诗人似乎还在唱着古老的哀歌')
        .tooltip('§5直至微风带走远行精灵的残影')
        .tooltip('§5可在任务栏兑换为正常状态')

    event.create('wqjy:wuqi_1')
        .displayName('§c破§e灭§b白§d花')
        .tooltip('§6用于兑换武器')

    event.create('wqjy:wuqi_2')
        .displayName('§c古§e旧§b指§d环')
        .tooltip('§6用于兑换武器')

});