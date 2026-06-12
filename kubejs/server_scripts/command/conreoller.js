// 预加载Java类（只加载一次，无需每次事件重复加载）
const Integer = Java.loadClass('java.lang.Integer');

/**
 * 工具函数：将玩家UUID转为MC可用的 [I;int,int,int,int] 数组
 * @param {Player} player 玩家对象
 * @returns {number[]} [i0, i1, i2, i3]
 */
function getUuidIntArr(player) {
    const hex = player.uuid.toString().replaceAll('-', '');
    return [
        Integer.parseUnsignedInt(hex.substring(0, 8), 16),
        Integer.parseUnsignedInt(hex.substring(8, 16), 16),
        Integer.parseUnsignedInt(hex.substring(16, 24), 16),
        Integer.parseUnsignedInt(hex.substring(24, 32), 16)
    ];
}

// 方块映射：[被右键的方块] → [要替换成的目标方块]
const blockMap = {
    "wqjy:smeltery_controller": "tconstruct:smeltery_controller",
    "wqjy:foundry_controller": "tconstruct:foundry_controller"
};

BlockEvents.rightClicked(Object.keys(blockMap), event => {
    const { block, player, server } = event;
    const targetBlock = blockMap[block.id];
    const [i0, i1, i2, i3] = getUuidIntArr(player);

    const cmd = `setblock ${block.x} ${block.y} ${block.z} ${targetBlock}{ForgeCaps:{"astages:owners":{owner:[I;${i0},${i1},${i2},${i3}]}},rms_owner:{owner:[I;${i0},${i1},${i2},${i3}]}}`;
    
    server.runCommandSilent(cmd);
    event.cancel();
});