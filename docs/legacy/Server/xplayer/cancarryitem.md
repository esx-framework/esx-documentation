# canCarryItem

```lua
xPlayer.canCarryItem(item, count)
```

This function is used to determinate if a player can carry an item, and is the successor to the previous item limit checks

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation |
| -------- | --------- | -------- | ------------- | ----------- |
| item     | string    | No       | -             | Item name   |
| count    | number    | No       | -             | Item count  |

## Example

```lua
if targetXPlayer.canCarryItem(itemName, itemCount) then
  sourceXPlayer.removeInventoryItem(itemName, itemCount)
  targetXPlayer.addInventoryItem   (itemName, itemCount)

  sourceXPlayer.showNotification(_U('gave_item', itemCount, sourceItem.label, targetXPlayer.name))
  targetXPlayer.showNotification(_U('received_item', itemCount, sourceItem.label, sourceXPlayer.name))
else
  sourceXPlayer.showNotification(_U('ex_inv_lim', targetXPlayer.name))
end
```
