/**
 * @param cast_consumed defaults to `false`
 * @param cooling_time defaults to `1.0`
 * @param switch_slots defaults to `false`
*/

ServerEvents.recipes((event) => {
    const { tconstruct } = event.recipes;

    tconstruct.melting(Fluid.of("wqjy:reborn", 1000), "wqjy:reborn").temperature(800).time(200);
    tconstruct.melting(Fluid.of("tprt:molten_black_steel", 90), "wqjy:black_steel_ingot").temperature(1000).time(200);
    tconstruct.melting(Fluid.of("tinkers_ingenuity:sculk_gene", 405), "hmag:echo_shard_block").temperature(1000).time(200);

    tconstruct
      .casting_table("wqjy:reborn", Fluid.of("wqjy:reborn", 1000))
      .cast_consumed(true)
      .cooling_time(400)
      .switch_slots(true);
    
    tconstruct.casting_table("aether_tinker:firefly", Fluid.of("tconstruct:molten_iron", 1000), "twilightforest:firefly")
      .cast_consumed(true)
      .cooling_time(400)
      .switch_slots(true);

    tconstruct.alloy(Fluid.of("tcintegrations:molten_dragonsteel_ice", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("sakuratinker:molten_dragon_ice_steel", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("tcintegrations:molten_dragonsteel_fire", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("sakuratinker:molten_dragon_fire_steel", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("tcintegrations:molten_dragonsteel_lightning", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("sakuratinker:molten_dragon_lightning_steel", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("tprt:molten_black_steel", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("mushroom_concept:molten_black_steel", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("ticex:molten_infinity", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("sakuratinker:molten_infinity", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("ticex:molten_neutron", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("sakuratinker:molten_neutron", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("ticex:molten_crystal_matrix", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("sakuratinker:molten_crystal_matrix", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("tinkers_thinking:molten_echo", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("dreamtinker:molten_echo_shard", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("dreamtinker:molten_evil", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("sakuratinker:molten_nefarious", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("sakuratinker:molten_etherium", 1), [Fluid.of("wqjy:reborn", 1), Fluid.of("dreamtinker:unstable_liquid_aether", 1)]).temperature(1);
    tconstruct.alloy(Fluid.of("wqjy:myth",90), [Fluid.of("sakuratinker:molten_gaia", 270), Fluid.of("sakuratinker:molten_photonium", 180), Fluid.of("sakuratinker:molten_shadowium", 180), Fluid.of("sakuratinker:molten_aerialite", 180)]).temperature(2000);

});