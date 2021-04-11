# ESX.SetTimeout

```lua
ESX.SetTimeout(msec, cb)
```

This function sets a timeout requiring two arguments, msec (milliseconds), and cb (callback).

#### ESX.SetTimeout Example

```lua
local id = ESX.SetTimeout(5000, function()
	print('foo')
end)
```
