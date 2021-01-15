# IsControlEnabled

```lua
Input.IsControlEnabled(group, id)
```
This function checks if the key enable.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| group | key | No | - | Input groups |
| id | key    | No | - | Controls |

### Dependency
```lua
local Input = M('input')
```

### Example
```lua
Input.IsControlEnabled(Input.Groups.MOVE, Input.Controls.PICKUP) -- [E]
```

[Improve this documentation]()