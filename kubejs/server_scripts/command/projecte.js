const $CustomEMCParser = Java.loadClass('moze_intel.projecte.config.CustomEMCParser');

const $EMCMappingHandler = Java.loadClass('moze_intel.projecte.emc.EMCMappingHandler');

const $PacketHandler = Java.loadClass('moze_intel.projecte.network.PacketHandler');

ServerEvents.commandRegistry(event => {

  const { commands: Commands } = event;

  event.register(

    Commands.literal('RELOADEMC')

      .executes(ctx => {

          const server = ctx.source.getServer();

          const player = ctx.source.getPlayerOrException();

        try {

          let serverReloadService = server.getServerResources().managers();

          let registryAccess = null;

          let resourceManager = server.getResourceManager();



          // 调用 EMC 重载流程

          $EMCMappingHandler.clearEmcMap();

          $CustomEMCParser.init();

          $EMCMappingHandler.loadMappers();

          $EMCMappingHandler.map(serverReloadService, registryAccess, resourceManager);

          $PacketHandler.sendFragmentedEmcPacketToAll();

          

          player.tell('§aEMC 数据已重新加载!');

          return 1;

        } catch (e) {

          player.tell('§cEMC 数据重载失败!'+ e);

          return 0;

        }

      })

  );

});