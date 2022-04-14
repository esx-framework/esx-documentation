# getInventory

```lua
xPlayer.getInventory(minimal)
```

This function returns the entire player inventory.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation                                                                                                       |
|----------|-----------|----------|---------------|-------------------------------------------------------------------------------------------------------------------|
| minimal  | boolean   | Yes      | -             | Return inventory in a key-value table where key is item name, and only add items with count over 0 to that table. |

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
