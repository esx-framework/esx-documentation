# canSwapItem

```lua
xPlayer.canSwapItem(firstItem, firstItemCount, testItem, testItemCount)
```

This function is used to determinate if a player can swap an item for some other item.

## Arguments

| Argument       | Data Type | Optional | Default Value | Explanation      |
| -------------- | --------- | -------- | ------------- | ---------------- |
| firstItem      | string    | No       | -             | First item name  |
| firstItemCount | number    | No       | -             | First item count |
| testItem       | string    | No       | -             | Test item name   |
| testItemCount  | number    | No       | -             | Test item count  |

## Example

```lua
if xPlayer.canSwapItem('bread', 1, 'water', 1) then
  xPlayer.removeInventoryItem('bread', 1)
  xPlayer.addInventoryItem('water', 1)
else
  xPlayer.showNotification('You don\'t have enough inventory space.')
end
```
