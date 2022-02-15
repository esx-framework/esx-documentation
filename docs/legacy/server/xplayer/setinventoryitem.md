# setInventoryItem

```lua
xPlayer.setInventoryItem(item, count)
```

This function sets an inventory item count

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                                                   |
|----------|-----------|----------|---------------|---------------------------------------------------------------|
| item     | string    | No       | -             | Item name, valid items can be found in database table `items` |
| count    | number    | No       | -             | New item count                                                |

!!! warning
      This function will not check if the player weight limit exceeds. Recommended to use in comibation with [xPlayer.canCarryItem(item, count)](./cancarryitem.md)
