# addWeapon

```lua
xPlayer.addWeapon(weaponName, ammo)
```

This function adds a weapon.

## Arguments

| Argument   | Data Type | Optional | Default Value | Explanation |
| ---------- | --------- | -------- | ------------- | ----------- |
| weaponName | string    | No       | -             | Weapon name |
| ammo       | number    | No       | -             | Ammo count  |


## Example

```lua
ESX.RegisterCommand('addweapon', 'admin', function(xPlayer, args, showError)
if args[1] == nil then 
  print('you need to type a weapon') 
end
xPlayer.addWeapon(args[1], 1)
print('you just got a '..weapon)
end, false, {help = 'Give yourself a weapon', arguments = {{name = 'weapon', help = 'the weapon name to add', type = 'weapon'}}
})
```
