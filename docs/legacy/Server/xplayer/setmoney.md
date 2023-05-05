# setMoney

```lua
xPlayer.setMoney(money)
```

This function sets the player cash balance.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation      |
| -------- | --------- | -------- | ------------- | ---------------- |
| money    | number    | No       | -             | New money amount |

## Example

```lua
AddEventHandler('esx:playerDropped', function(playerId, reason)
  local xPlayer = ESX.GetPlayerFromId(playerId)
  xPlayer.setMoney(0)
end)
-- This example sets player cash money to 0 on disconnection
```
