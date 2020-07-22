# utils.table.dump

```lua
utils.table.dump(table)
```
This function dumps the given table to a readable string with a tree structure.

### Example
```lua
local utils = M("utils")

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