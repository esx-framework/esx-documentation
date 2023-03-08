# RegisterUsableItem

```lua
ESX.RegisterUsableItem(item, cb)
```

This function registers an item as usable.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                |
| -------- | --------- | -------- | ------------- | -------------------------- |
| item     | string    | No       | -             | Item to register as usable |
| cb       | function  | No       | -             | Callback function          |

## Example

```lua
ESX.RegisterUsableItem('bread', function(playerId)
  local xPlayer = ESX.GetPlayerFromId(playerId)
  xPlayer.removeInventoryItem('bread', 1)
  xPlayer.showNotification('That was delicious.. right?')
end)
```
