# triggerEvent

```lua
xPlayer.triggerEvent(eventName, ...)
```

This function triggers an client event for the player.

## Arguments

| Argument  | Data Type | Optional | Default Value | Explanation                  |
| --------- | --------- | -------- | ------------- | ---------------------------- |
| eventName | string    | No       | -             | Event name                   |
| ...       | any       | Yes      | -             | Variable number of arguments |

## Example

```lua
ESX.RegisterCommand('noclip', 'admin', function(xPlayer) -- register a coammnd
  xPlayer.triggerEvent('esx:noclip') -- Triggers The client event for the Source Player
end, false)
```
