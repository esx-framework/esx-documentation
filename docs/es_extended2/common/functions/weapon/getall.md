# utils.weapon.getAll

```lua
utils.weapon.getAll()
```
This function gets the complete weapon list and label.

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local list = utils.weapon.getAll()

for i=1, #list, 1 do
    print(list[i].name .. ' => ' .. list[i].label) -- Returns all weapons with name and label
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/weapon/getall.md)