# esx:playerPedChanged

#### Available from this version: [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1)

This event is triggered when the player ped changed

#### Arguments

| Argument  | Type   | Explanation             |
| --------- | ------ | ----------------------- |
| playerPed | number | ped id (CLIENT SIDE)    |
| netID     | number | ped netID (SERVER SIDE) |

### Example Client-Side Usage

```lua
AddEventHandler('esx:playerPedChanged', function(ped)
	FreezeEntityPosition(ped, true)
end)
```

### Example Server-Side Usage

```lua
RegisterNetEvent('esx:playerPedChanged', function(netID)
	print(('playerName: %s, source: %s, ped: %s'):format(GetPlayerName(source), source, netID))
end)
```
