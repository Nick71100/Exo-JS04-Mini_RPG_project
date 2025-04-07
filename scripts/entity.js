class Entity {
  constructor(
    nameParam,
    hpParam,
    powerParam,
    staminaParam,
    xpParam,
    xpMaxParam
  ) {
    this.name = nameParam;
    this.hp = hpParam;
    this.power = powerParam;
    this.stamina = staminaParam;
    this.xp = xpParam;
    this.xpMax = xpMaxParam;
  }
}

export default Entity;
