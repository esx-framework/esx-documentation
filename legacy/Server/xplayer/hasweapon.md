# hasWeapon

```lua
xPlayer.hasWeapon(weaponName)
```

This functions returns if the player has the specified weapon.

## Argument

| Argument   | Data Type | Optional | Default Value | Explanation |
|------------|-----------|----------|---------------|-------------|
| weaponName | string    | No       | -             | Weapon name |

## Example

```lua
if xPlayer.hasWeapon('WEAPON_PISTOL') then
  print('found weapon')
else
  print('weapon not found!')
end
```
