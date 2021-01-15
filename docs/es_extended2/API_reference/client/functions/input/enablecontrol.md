# EnableControl

```lua
Input.EnableControl(group, id)
```
This function makes the key enable.

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
Input.EnableControl(Input.Groups.MOVE, Input.Controls.PICKUP) -- [E]
```

[Improve this documentation]()