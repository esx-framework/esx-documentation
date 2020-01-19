# ESX.GetPlayerFromIdentifier

```lua
ESX.GetPlayerFromIdentifier(identifier)
```

This function returns the ESX player object from a (steam) identifier. Returns `nil` if no player is found.

## ESX.GetPlayerFromIdentifier Example

```lua
local xPlayer = ESX.GetPlayerFromIdentifier('steam:110000104ed291c')

if xPlayer then
	xPlayer.showNotification('Hello Hawaii!')
else
	print('Hawaii is not in your server')
end
```
