# ESX.TableContainsValue

```lua
ESX.TableContainsValue(table, value)
```

This function searches a table and returns if the parsed value is found within.

#### ESX.TableContainsValue Example

```lua
local tableContent = { 'dude', 'esx' }

local foundValue = ESX.TableContainsValue(tableContent, 'esx') -- returns boolean

print(foundValue) -- returns true
```
