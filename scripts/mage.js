import Entity from "./entity.js";

class Mage extends Entity {
  constructor(
    nameParam,
    hpParam,
    powerParam,
    staminaParam,
    xpParam,
    xpMaxParam,
    manaParam
  ) {
    super(nameParam, hpParam, powerParam, staminaParam, xpParam, xpMaxParam);
    this.mana = manaParam;
  }
}

export default Mage;
