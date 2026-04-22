TConJSEvents.modifierRegistry((event) => {
  event.createNew("wqjy:dark", (builder) => {
    builder.armorTakeAttacked((view, lvl, context, slot, source, damage) => {
      const attacker = source.immediate;
      if (attacker != null && attacker.random.nextFloat() < 0.1 * lvl) {
        attacker.potionEffects.add("minecraft:darkness", 100, 0);
      }
      return true;
    });
  });
});

TConJSEvents.modifierRegistry((event) => {
  event.createNew("wqjy:corruption", (builder) => {
    builder
      .onAfterMeleeHit((view, level, context, damageDealt) => {
        const target = context.livingTarget;
        if (target && target.isLiving()) {
          let chance = level * 0.1;
          let random = context.attacker.random.nextFloat();

          if (random < chance) {
            target.potionEffects.add("minecraft:darkness", 100, 0, true, false);
          }
        }
      });
  });
});

TConJSEvents.modifierRegistry((event) => {
  event.createNew("wqjy:eternal_stone", (builder) => {
    builder.armorTakeAttacked((view, lvl, context, slot, source, damage) => {
      if (context.entity.random.nextFloat() < 0.05 * lvl) {
        let duration = lvl * 80; 
        context.entity.potionEffects.add("minecraft:resistance", duration, 3);
        context.entity.potionEffects.add("minecraft:regeneration", duration, 3);
        return false;
      }
      return true;
    });
  });
});

TConJSEvents.modifierRegistry((event) => {
  event.createNew("wqjy:eternoin", (builder) => {
    builder.onAfterMeleeHit((view, lvl, context, damage) => {
      const attacker = context.attacker;
      if (attacker != null) {
        attacker.potionEffects.add("minecraft:resistance", lvl * 80, 4);
        attacker.potionEffects.add("minecraft:regeneration", lvl * 80, 4);
      }
    });
  });
});

TConJSEvents.modifierRegistry((event) => {
  event.createNew("wqjy:evil_crystal", (builder) => {
    builder
      .onAfterMeleeHit((view, level, context, damageDealt) => {
        const attacker = context.attacker;
        if (!attacker || !attacker.isLiving()) return;

        const strengthAmplifier = level - 1; 
        const strengthDuration = level * 2 * 20; 

        attacker.potionEffects.add(
          "minecraft:strength",
          strengthDuration,
          strengthAmplifier,
          true, 
          true 
        );
      });
  });
});

TConJSEvents.modifierRegistry((event) => {
  event.createNew("wqjy:the_world", (builder) => {
    builder
      .onAfterMeleeHit((view, level, context, damageDealt) => {
        const target = context.livingTarget;
        const attacker = context.attacker;
        if (target && target.isLiving() && attacker) {
          let chance = level * 0.1;
          if (attacker.random.nextFloat() < chance) {
            target.potionEffects.add("l2complements:stone_cage", 190, 0, true, true);
            target.potionEffects.add("minecraft:weakness", 190, 19, true, true);
            target.potionEffects.add("minecraft:mining_fatigue", 190, 19, true, true);
          }
        }
      });
  });
});