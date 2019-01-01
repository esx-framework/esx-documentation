# xPlayer.addWeaponComponent

```lua
xPlayer.addWeaponComponent(weaponName, weaponComponent)
```

This function adds a weapon component to a weapon, if the player has it.

The available component list can be found in the weapon config file.

#### xPlayer.addWeaponComponent Example

```lua
xPlayer.addWeapon('WEAPON_ASSAULTRIFLE', 50)
xPlayer.addWeaponComponent('WEAPON_ASSAULTRIFLE', 'clip_drum')
xPlayer.addWeaponComponent('WEAPON_ASSAULTRIFLE', 'flashlight')
```