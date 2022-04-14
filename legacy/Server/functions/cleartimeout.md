# ClearTimeout

```lua
ESX.ClearTimeout(id)
```

This function clears a timeout from the [ESX.SetTimeout](setimeout.md) function.

## Example

```lua
local Timeout = ESX.SetTimeout(5000, function()
print('foo')
end)

ESX.ClearTimeout(Timeout)
```
