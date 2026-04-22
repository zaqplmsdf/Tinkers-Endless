const $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses")
const $GasDeferredRegister = Java.loadClass("mekanism.common.registration.impl.GasDeferredRegister")
const GASES = new $GasDeferredRegister("kubejs")
 
//注册气体 (id, 颜色)
GASES.register("sakura_gas", 0xFF66B2)
//所属模组
GASES.register(Java.loadClass("dev.architectury.platform.forge.EventBuses").getModEventBus("kubejs").get())
