# utils.string.parsetpl

```lua
utils.string.parsetpl(tpl, data)
```
This function gets data of a table.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| tpl | table | No | - | Set the table |
| data | string    | Yes | - | Data to replace of table |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local myTable = {
	"esx1",
	"esx2",
	"esx3",
}

local str = utils.string.parsetpl(myTable)

print(str) -- Returns esx1esx2esx3
```
```lua
local myTable = {
	"esx2",
	"@esx2",
	"@esx3"
}

data = {esx2 = "is", esx3 = "awesome"}
	
local str = utils.string.parsetpl(myTable, data)

print(str) -- Returns esx2isawesome
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/string/parsetpl.md)