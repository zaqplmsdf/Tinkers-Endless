StartupEvents.registry('item', event => {
  for (let i = 1; i <= 5; i++) {
  event.create(`wqjy:up_${i}`)
      .displayName('§6晋升证明')
      .tooltip('§5用于阶段升级')
      .tooltip(`§5第${i}阶段`)
  }

  event.create('wqjy:up_6')
  .displayName('§c最§e终§b证§d明§r')
  .tooltip('§6最终的晋升证明')
  .tooltip('§6用于解锁最后的限制')
  .glow(true)

})