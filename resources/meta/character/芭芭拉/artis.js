export default function ({ attr, artis, rule, def }) {
  if (attr.cpct * 2 + attr.cdmg >= 180 && artis.is('dmg', 4)) {
    return rule('暴力芭芭拉', { hp: 50, atk: 75, cp: 100, cd: 100, mastery: 75, dmg: 100, recharge: 30, heal: 50 })
  }
  return def({ hp: 100, atk: 50, cp: 50, cd: 50, dmg: 80, recharge: 55, heal: 100 })
}
