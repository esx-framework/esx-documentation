# ESX.GetPlayerFromIdentifier

```lua
ESX.GetPlayerFromIdentifier(identifier)
```

This function returns the ESX player from the Rockstar identifier. Returns `nil` if no player is found.

## ESX.GetPlayerFromIdentifier Example

```lua
local xPlayer = ESX.GetPlayerFromIdentifier('888452e629a590b9d79245f0030b1f7b9a81d558')

if xPlayer then
	xPlayer.showNotification('Welcome Hawaii!')
else
	print('Hawaii is not in your server, good')
end
```
