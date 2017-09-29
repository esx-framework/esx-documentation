---
title: ESX.SetTimeout
category: ES Extended
order: 3
---

```lua
ESX.SetTimeout(msec, cb)
```

Set timeout

```lua
local id = ESX.SetTimeout(5000, function()
  print('foo')
end)

-- If you want to cear the timeout
ESX.ClearTimeout(id)
```




