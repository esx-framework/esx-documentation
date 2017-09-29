---
title: ESX.GetWeaponList
category: ES Extended
order: 3
---

```lua
ESX.GetWeaponList()
```

Get weapon list

```lua
local list = ESX.GetWeaponList()

for i=1, #list, 1 do
  print(list[i].name .. ' => ' .. lsit[i].label)
end
```




