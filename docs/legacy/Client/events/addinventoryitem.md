# esx:addInventoryItem

## Client Side

This event is triggered when the player has receive item

#### Arguments

| Argument | Type   | Explanation |
| -------- | ------ | ----------- |
| item     | string | item name   |
| count    | number |             |

### Example Usage

```lua
RegisterNetEvent('esx:addInventoryItem', function(item, count)
  print('you received item: ', item)
  print('count', count)
end)
```
