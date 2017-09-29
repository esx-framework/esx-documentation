---
title: ESX.ClearTimeout
category: ES Extended
order: 3
---

```lua
ESX.ClearTimeout(id)
```

Clear timeout

```lua
local id = ESX.SetTimeout(5000, function()
  print('foo')
end)

ESX.ClearTimeout(id)
```

