# ESX.Game.GetPlayers

```lua
ESX.Game.GetPlayers(onlyOtherPlayers, returnKeyValue, returnPeds)
```

This function is used to get all the active players.

## Arguments

| Argument         | Data Type | Optional | Default Value | Explanation                                                                                                                                                                                                                           |
|------------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onlyOtherPlayers | boolean   | Yes      | nil (false)   | Only return other players than yourself?                                                                                                                                                                                              |
| returnKeyValue   | boolean   | Yes      | nil (false)   | If set to true it will return in a key-value table where key is player client id and key being the ped handle. Otherwise it create a index-value table, with value being either the ped handle or client id depending on `returnPeds` |
| returnPeds       | boolean   | Yes      | nil (false)   | If set to true it will return the ped handle for that player, otherwise it will return the player client id                                                                                                                           |

## ESX.Game.GetPlayers Example

```lua
local players = ESX.Game.GetPlayers()

for k,v in ipairs(players) do
	local targetPed = GetPlayerPed(v)
	print(('A player with server id %s found at %s!'):format(GetPlayerServerId(v), GetEntityCoords(targetPed)))
end
```
