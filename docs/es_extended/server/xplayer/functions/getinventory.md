# xPlayer.getInventory

```lua
xPlayer.getInventory()
```

This function reads out the entire player inventory

## Returned Table Content

The returned table contains an index-value table, and for each child there is a key-value table with the following content:

| Child     | Data Type | Explanation                           |
|-----------|-----------|---------------------------------------|
| name      | string    | Item name                             |
| count     | number    | Item count                            |
| label     | string    | Item label                            |
| weight    | number    | Item weight                           |
| usable    | boolean   | Whether or not the item is usable     |
| rare      | boolean   | Whether or not the item is rare       |
| canRemove | boolean   | Whether or not the item can be thrown |
