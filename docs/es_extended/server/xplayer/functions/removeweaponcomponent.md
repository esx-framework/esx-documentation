# xPlayer.removeWeaponComponent

```lua
xPlayer.removeWeaponComponent(weaponName, weaponComponent)
```

This function removes a weapon component from a player, if the player has it.

The available component list can be found in the weapon config file.

#### xPlayer.removeWeaponComponent Example

```lua
local weaponName, weaponComponent = 'WEAPON_PISTOL', 'clip_extended'

if xPlayer.hasWeaponComponent(weaponName, weaponComponent) then
	xPlayer.removeWeaponComponent(weaponName, weaponComponent)
end
```
