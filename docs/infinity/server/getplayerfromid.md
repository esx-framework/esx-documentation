# GetPlayerFromId

```lua
ESX.GetPlayerFromId(playerId)
```

This function gets a ESX player object from a server ID. Returns `nil` for invalid players.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation                        |
| -------- | --------- | -------- | ------------- | ---------------------------------- |
| playerId | number    | No       | -             | The Server ID of the Target Player |

## Example

```lua
ESX.OnClient("esx:Identity:CreateCharacter", function(source, player_data)
    local xPlayer = ESX.GetPlayerFromId(source)

    xPlayer.setIdentity(player_data)
end)
```
