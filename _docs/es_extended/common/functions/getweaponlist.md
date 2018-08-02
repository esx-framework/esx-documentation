# ESX.GetWeaponList

```lua
ESX.GetWeaponList()
```

This function gets the complete weapon list and label.

#### ESX.GetWeaponList Example

```lua
local list = ESX.GetWeaponList()

for i=1, #list, 1 do
  print(list[i].name .. ' => ' .. list[i].label)
end
```
