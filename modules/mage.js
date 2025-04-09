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

  sortSpecifique(target) {
    const bonusDamage = this.power * 2;
    target.hp -= bonusDamage;
    console.log(
      `${this.name} lance un sort et inflige ${bonusDamage} dégâts à ${target.name}.`
    );
    if (target.hp <= 0) {
      console.log(`${target.name} a été vaincu par un sort !`);
    }
  }
}

export default Mage;
