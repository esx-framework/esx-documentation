# xPlayer.addInventoryItem

```lua
xPlayer.addInventoryItem(item, count)
```

This function adds an inventory item.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| item     | string    | No       | -             | Item name            |
| count    | number    | No       | -             | Count of item to add |

!!! warning
      This function will not check if the player weight limit exceeds. Recommended to use in comibation with [xPlayer.canCarryItem(item, count)](cancarryitem.md)

## xPlayer.addInventoryItem Example

```lua
if targetXPlayer.canCarryItem(itemName, itemCount) then
	sourceXPlayer.removeInventoryItem(itemName, itemCount)
	targetXPlayer.addInventoryItem   (itemName, itemCount)
else
	sourceXPlayer.showNotification('Target player could not hold all of that.')
end
```
