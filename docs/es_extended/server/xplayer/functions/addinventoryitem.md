# xPlayer.addInventoryItem

```lua
xPlayer.addInventoryItem(item, count)
```

This function adds an inventory item.

#### xPlayer.addInventoryItem Example

!!! warning
      This function will not check if the player weight limit exceeds. Recommended to use in comibation with [xPlayer.canCarryItem(item, count)](cancarryitem.md)

```lua
if targetXPlayer.canCarryItem(itemName, itemCount) then
	sourceXPlayer.removeInventoryItem(itemName, itemCount)
	targetXPlayer.addInventoryItem   (itemName, itemCount)
else
	sourceXPlayer.showNotification('Target player could not hold all of that.')
end
```
