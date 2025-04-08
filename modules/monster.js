import Entity from "./entity.js";

class Monster extends Entity {
  constructor(
    nameParam,
    hpParam,
    powerParam,
    staminaParam,
    xpParam,
    xpMaxParam,
    criticalHitParam
  ) {
    super(nameParam, hpParam, powerParam, staminaParam, xpParam, xpMaxParam);
    this.criticalHitParam = criticalHitParam;
  }
}

export default Monster;
