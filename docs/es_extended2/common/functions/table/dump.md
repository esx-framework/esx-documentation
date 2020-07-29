# utils.table.dump

```lua
utils.table.dump(table)
```
This function dumps the given table to a readable string with a tree structure.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| table | table | No | - | Sets the table |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local myTable = { {esx = 'awesome'} }
local dumpedTable = utils.table.dump(myTable)

print(dumpedTable)

-- print below
--{
--  {
--    ["esx"] = awesome
--  }
--}
```