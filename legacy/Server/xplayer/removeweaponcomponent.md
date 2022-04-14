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
local weaponName, weaponComponent = 'WEAPON_PISTOL', 'clip_extended' -- Specify a valid weapon and Component

if xPlayer.hasWeaponComponent(weaponName, weaponComponent) then -- Check they have the weapon and Component
  xPlayer.removeWeaponComponent(weaponName, weaponComponent) -- if they have them, remove the Component
end
```
