# getWeapon

```lua
xPlayer.getWeapon(weaponName)
```

This functions returns the `loadoutNum` and a weapon object for the weapon if the player has it.

## Argument

| Argument   | Data Type | Optional | Default Value | Explanation |
| ---------- | --------- | -------- | ------------- | ----------- |
| weaponName | string    | No       | -             | Weapon name |

## Example

```lua
local loadoutNum, weapon = xPlayer.getWeapon('WEAPON_PISTOL')

if weapon then
  print(xPlayer.loadout[loadoutNum].label)
else
  print('weapon not found!')
end
```
