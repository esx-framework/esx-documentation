# ESX.GetPlayerFromId

```lua
ESX.GetPlayerFromId(playerId)
```

This function gets a ESX player object from a server id. Returns `nil` for invalid players.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| playerId | number    | No       | -             | The player server id |

## ESX.GetPlayerFromId Example

```lua
RegisterNetEvent('esx_ambulancejob:healMe')
AddEventHandler('esx_ambulancejob:healMe', function()
	local xPlayer = ESX.GetPlayerFromId(source)

	if xPlayer.job.name == 'ambulance' then
		xPlayer.triggerEvent('esx_basicneeds:healPlayer')
	end
end)
```
