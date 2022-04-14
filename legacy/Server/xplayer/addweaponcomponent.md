# addWeaponComponent

```lua
xPlayer.addWeaponComponent(weaponName, weaponComponent)
```

This function adds a weapon component to a weapon, if the player has it, the available component list can be found in the weapon configuration file.

## Arguments

| Argument        | Data Type | Optional | Default Value | Explanation      |
| --------------- | --------- | -------- | ------------- | ---------------- |
| weaponName      | string    | No       | -             | Weapon name      |
| weaponComponent | string    | No       | -             | Weapon component |

## Example

```lua
xPlayer.addWeapon('WEAPON_ASSAULTRIFLE', 50)
xPlayer.addWeaponComponent('WEAPON_ASSAULTRIFLE', 'clip_drum')
xPlayer.addWeaponComponent('WEAPON_ASSAULTRIFLE', 'flashlight')
```
