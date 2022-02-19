# removeWeaponComponent

```lua
xPlayer.removeWeaponComponent(weaponName, weaponComponent)
```

This function removes a weapon component from a player, if the player has it. The available component list can be found in the weapon configuration file (`config.weapons.lua`).

## Arguments

| Argument        | Data Type | Optional | Default Value | Explanation      |
|-----------------|-----------|----------|---------------|------------------|
| weaponName      | string    | No       | -             | Weapon name      |
| weaponComponent | string    | No       | -             | Weapon component |

## Example

```lua
local weaponName, weaponComponent = 'WEAPON_PISTOL', 'clip_extended'

if xPlayer.hasWeaponComponent(weaponName, weaponComponent) then
  xPlayer.removeWeaponComponent(weaponName, weaponComponent)
end
```
