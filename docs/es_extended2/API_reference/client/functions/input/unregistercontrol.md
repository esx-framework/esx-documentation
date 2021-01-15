# UnregisterControl

```lua
Input.UnregisterControl(group, id)
```
This function stops registering a key.

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
Input.UnregisterControl(Input.Groups.MOVE, Input.Controls.PICKUP) -- [E]
```

[Improve this documentation]()