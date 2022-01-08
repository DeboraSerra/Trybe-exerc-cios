const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const characterDamage = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const dragonDamage = () => characterDamage(15, dragon.strength);

const warriorDamage = () => {
  let maxDmg = warrior.strength * warrior.weaponDmg;
  return characterDamage(warrior.strength, maxDmg);
};

const mageDamage = () => {
  const mageDamage = characterDamage(mage.intelligence, mage.intelligence * 2);
  let mageMana = mage.mana;
  if (mage.mana >= 15) {
    mageMana -= 15;
  } else {
    return "Not enough mana";
  }
  return { mageDamage, mageMana };
};

const warriorShift = (damage) => {
  dragon.healthPoints = dragon.healthPoints - damage;

  if (warrior.damage === undefined) {
    warrior.damage = damage;
  } else {
    warrior.damage = warrior.damage + damage;
  }
}

const mageShift = (damage) => {
  const damageMage = damage.mageDamage;
  const manaMage = damage.mageMana;
  dragon.healthPoints = dragon.healthPoints - damageMage;
  if (mage.damage === undefined) {
    mage.damage = damageMage;
  } else {
    mage.damage += damageMage;
  }
  mage.mana = manaMage;
}

const dragonShift = (damage) => {
  warrior.healthPoints -= damage;
  mage.healthPoints -= damage;
  if (dragon.damage === undefined) {
    dragon.damage = damage;
  } else {
    dragon.damage += damage;
  }
}
const result = (obj) => obj;

const gameActions = {
  warrior: warriorShift(warriorDamage()),
  mage: mageShift(mageDamage()),
  dragon: dragonShift(dragonDamage()),
  battleShifts: result(battleMembers),
};

console.log(gameActions);
