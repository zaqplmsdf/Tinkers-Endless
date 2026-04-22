// KubeJS 6 服务端物品右键事件
ItemEvents.rightClicked('wqjy:up_1', event => {
    // 1. 仅在服务端执行（核心：客户端无法执行服务端命令）
    if (!event.server) return;

    // 获取玩家与物品对象
    const player = event.player;
    const item = event.item;

    // 2. 服务端高权限静默执行命令（无需/，runCommand默认OP权限）
    event.server.runCommandSilent(`astages add @p stage_1`);

    // 3. 为物品添加1秒冷却（MC 20tick = 1秒）
    player.getCooldowns().addCooldown(item.getItem(), 60);

    // 4. 取消默认右键行为（防止物品触发原版交互，可选）
    event.cancel();
});
ItemEvents.rightClicked('wqjy:up_2', event => {
    if (!event.server) return;

    const player = event.player;
    const item = event.item;

    event.server.runCommandSilent(`astages add @p stage_2`);

    player.getCooldowns().addCooldown(item.getItem(), 60);

    event.cancel();
});
ItemEvents.rightClicked('wqjy:up_3', event => {
    if (!event.server) return;

    const player = event.player;
    const item = event.item;

    event.server.runCommandSilent(`astages add @p stage_3`);

    player.getCooldowns().addCooldown(item.getItem(), 60);

    event.cancel();
});
ItemEvents.rightClicked('wqjy:up_4', event => {
    if (!event.server) return;

    const player = event.player;
    const item = event.item;

    event.server.runCommandSilent(`astages add @p stage_4`);

    player.getCooldowns().addCooldown(item.getItem(), 60);

    event.cancel();
});
ItemEvents.rightClicked('wqjy:up_5', event => {
    if (!event.server) return;

    const player = event.player;
    const item = event.item;

    event.server.runCommandSilent(`astages add @p stage_5`);

    player.getCooldowns().addCooldown(item.getItem(), 60);

    event.cancel();
});
ItemEvents.rightClicked('wqjy:up_6', event => {
    if (!event.server) return;

    const player = event.player;
    const item = event.item;

    event.server.runCommandSilent(`astages add @p stage_6`);

    player.getCooldowns().addCooldown(item.getItem(), 60);

    event.cancel();
});