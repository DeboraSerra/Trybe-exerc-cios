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

const damage = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const dragonDamage = () => damage(15, dragon.strength);

const warriorDamage = () => {
  let maxDmg = warrior.strength * warrior.weaponDmg;
  return damage(warrior.strength, maxDmg);
}

const mageShift = () => {
  const mageDamage = damage(mage.intelligence, (mage.intelligence * 2));
  let mageMana = mage.mana;
  if (mage.mana >= 15) {
    mageMana -= 15;
  } else {
    return 'Not enough mana';
  }
  return { mageDamage, mageMana };
}

console.log(mageShift());