# ESX.Game.GetPlayers

```lua
ESX.Game.GetPlayers()
```

This function gets all active players in the server, returns a table list with player's client id's.

## ESX.Game.GetPlayers Example

```lua
	local players = ESX.Game.GetPlayers()

	for k,v in ipairs(players) do
		local targetPed = GetPlayerPed(v)
		print(('A player with server id %s found at %s!'):format(GetPlayerServerId(v), GetEntityCoords(targetPed)))
	end
```
