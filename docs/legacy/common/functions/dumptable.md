# DumpTable

```lua
ESX.DumpTable(table)
```

This function dumps the given table to a readable string with a tree structure.

## Example

```lua
local myTable = { {esx = 'awesome'} }
local dumpedTable = ESX.DumpTable(myTable)

print(dumpedTable)

-- print below
{

  [1] = {

    ["esx"] = awesome,

  }

}
```
