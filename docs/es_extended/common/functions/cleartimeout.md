# ESX.ClearTimeout

```lua
ESX.ClearTimeout(id)
```

This function clears a timeout from the `ESX.SetTimeout` function.

#### ESX.ClearTimeout Example

```lua
local id = ESX.SetTimeout(5000, function()
	print('foo')
end)

ESX.ClearTimeout(id)
```
