---
title: ESX.RegisterServerCallback
category: ES Extended
order: 3
---

```lua
ESX.RegisterServerCallback('namespace:name', function(source, cb)
	
  local data = {
    foo = 'bar'
  }

  print('Running callback')
	
  cb(data)

end)
```

Register a calbback to be triggered with [ESX.TriggerServerCallback](../../client-functions/esx.triggerservercallback/)
