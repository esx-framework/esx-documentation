# getInventoryItem

```lua
xPlayer.getInventoryItem(item)
```

This function gets an inventory item.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation |
|----------|-----------|----------|---------------|-------------|
| item     | string    | No       | -             | Item name   |

## Returned Table Content

| Child     | Data Type | Explanation                           |
|-----------|-----------|---------------------------------------|
| name      | string    | Item name                             |
| count     | number    | Item count                            |
| label     | string    | Item label                            |
| weight    | number    | Item weight                           |
| usable    | boolean   | Whether or not the item is usable     |
| rare      | boolean   | Whether or not the item is rare       |
| canRemove | boolean   | Whether or not the item can be thrown |
