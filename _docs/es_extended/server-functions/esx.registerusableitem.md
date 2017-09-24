---
title: ESX.RegisterUsableItem
category: ES Extended
order: 3
---

```lua
ESX.RegisterUsableItem('bread', function(source)

  local xPlayer = ESX.GetPlayerFromId(source)

  xPlayer.removeInventoryItem('bread', 1)

  ESX.ShowNotification(source, 'You have used x1 bread')

end)
```

Register an usable item