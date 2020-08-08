# RegisterControl

```lua
Input.RegisterControl(group, id)
```
This function registers a key.

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
Input.RegisterControl(Input.Groups.MOVE, Input.Controls.PICKUP) -- [E]
```

[Improve this documentation]()