# utils.weapon.getAll

```lua
utils.weapon.getAll()
```
This function gets the complete weapon list and label.

### Example
```lua
local utils = M("utils")

local list = utils.weapon.getAll()

for i=1, #list, 1 do
    print(list[i].name .. ' => ' .. list[i].label) -- Returns all weapons
end
```

