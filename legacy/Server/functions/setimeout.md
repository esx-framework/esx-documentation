# SetTimeout

```lua
ESX.SetTimeout(msec, cb)
```

This function sets a timeout requiring two arguments, msec (milliseconds), and cb (callback).

## Example

```lua
local Timeout = ESX.SetTimeout(5000, function()
  print('foo')
end)
```
