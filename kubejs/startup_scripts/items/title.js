StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    ['wqjy:myth', 'wqjy:gaiya', 'wqjy:hundun', 'wqjy:hong', 'wqjy:eternal', 'wqjy:world', 'wqjy:wqjy_logo'].forEach(item => event.remove(item));
    for (let i = 1; i <= 19; i++) {
        event.remove(`kubejs:wqjy_box_${i}`);
    }
    for (let i = 1; i <= 20; i++) {
        event.remove(`wqjy:up_item_${i}`);
    }
});

StartupEvents.registry('creative_mode_tab', event => {
	event.create('wqjy_up')
    .icon(() => 'wqjy:myth')
    .content(() => [
		'wqjy:myth',
        'wqjy:gaiya',
        'wqjy:hong',
        'wqjy:hundun',
        'wqjy:eternal',
        'wqjy:world',
        'wqjy:wqjy_logo'
	])
})

StartupEvents.registry('creative_mode_tab', event => {
    event.create('box')
        .icon(() => 'kubejs:wqjy_box_1')
        .content(() => {
            const items = []
            for (let i = 1; i <= 19; i++) {
                items.push(`kubejs:wqjy_box_${i}`)
            }
            return items
        })
})

StartupEvents.registry('creative_mode_tab', event => {
    event.create('up_item')
        .icon(() => 'wqjy:up_item_1')
        .content(() => {
            const items = []
            for (let i = 1; i <= 20; i++) {
                items.push(`wqjy:up_item_${i}`)
            }
            return items
        })
})

StartupEvents.modifyCreativeTab('kubejs:box', event => {
	event.displayName = Text.gold('无穷匠艺·食物盒')
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
	event.icon = 'wqjy:wqjy_logo'
	event.displayName = Text.gold('无穷匠艺')
})

StartupEvents.modifyCreativeTab('kubejs:wqjy_up', event => {
	event.displayName = Text.gold('无穷匠艺·终极材料')
})

StartupEvents.modifyCreativeTab('kubejs:up_item', event => {
	event.displayName = Text.gold('无穷匠艺·晋升材料')
})