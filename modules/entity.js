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

  attaque(target) {
    target.hp -= this.power;
    console.log(
      `${this.name} attaque ${target.name} et lui inflige ${this.power} dégâts.`
    );
    if (target.hp <= 0) {
      console.log(`${target.name} a été vaincu !`);
    }
  }
}

export default Entity;
