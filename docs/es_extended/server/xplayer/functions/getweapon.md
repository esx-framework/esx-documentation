# xPlayer.getWeapon

```lua
xPlayer.getWeapon(weaponName)
```

This functions returns if the `loadoutNum` and a weapon object for the weapon if the player has it.

#### xPlayer.getWeapon Example

```lua
	local loadoutNum, weapon = xPlayer.getWeapon('WEAPON_PISTOL')

	if weapon then
		print(xPlayer.loadout[loadoutNum].label)
	else
		print('weapon not found!')
	end
```
