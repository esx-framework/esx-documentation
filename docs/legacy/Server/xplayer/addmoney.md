# addMoney

```lua
xPlayer.addMoney(money)
```

This function adds money.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation  |
| -------- | --------- | -------- | ------------- | ------------ |
| money    | number    | No       | -             | Money amount |

## Example

```lua
ESX.RegisterUsableItem('goldbar', function(playerId)
xPlayer = ESX.GetPlayerFromId(playerId)
xPlayer.addMoney(10000)
print('I just got a lot of money!')
xPlayer.removeInventoryItem('goldbar', 1)
end)
```
