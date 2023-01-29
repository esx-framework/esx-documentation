# esx:playerLoaded

## Server Side

This event is triggered when the player has loaded to the server

#### Arguments

| Argument | Data Type | Explanation |
| -------- | --------- | ----------- |
| player   | number    | serverId    |
| xPlayer  | table     |             |
| isNew    | boolean   |             |

### Example Usage

```lua
RegisterNetEvent('esx:playerLoaded', function(player, xPlayer, isNew)
  print(player, 'loaded', xPlayer.getName())
  print('isNew:', isNew)
end)
```
