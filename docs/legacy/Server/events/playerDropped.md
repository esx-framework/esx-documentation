# esx:playerDropped

## Server Side

This event is triggered when the player disconnects from the server

#### Arguments

| Argument | Data Type | Explanation |
| -------- | --------- | ----------- |
| playerId | number    | playerId    |
| reason   | string    | reason      |

### Example Usage

```lua
RegisterNetEvent('esx:playerDropped', function(playerId, reason)
  local xPlayer = ESX.GetPlayerFromId(playerId)
  print(playerId, 'disconnected from the server', xPlayer.getName(), 'Reason: '..reason) 
end)
```
