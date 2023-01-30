# GetWeaponList

```lua
ESX.GetWeaponList(byHash)
```

#### Arguments

| Argument | Type    | Explanation                                                                         |
| -------- | ------- | ----------------------------------------------------------------------------------- |
| byHash   | boolean | since version [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1) |

This function gets the complete weapon list and label.

## Example

```lua
local list = ESX.GetWeaponList()

for i=1, #list, 1 do
  print(list[i].name .. ' => ' .. list[i].label)
end
```

#### Other example since version [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1)

```lua
local list = ESX.GetWeaponList(true)
for hash, weapon in pairs(list) do
  print(('weapon name: %s, hash: %s'):format(hash, weapon.name))
end
```
