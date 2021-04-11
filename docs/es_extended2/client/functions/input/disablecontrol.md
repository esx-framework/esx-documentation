# DisableControl

```lua
Input.DisableControl(group, id)
```
This function makes the key disable.

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
Input.DisableControl(Input.Groups.MOVE, Input.Controls.PICKUP) -- [E]
```

[Improve this documentation]()