# IsControlRegistered

```lua
Input.IsControlRegistered(group, id)
```
This function checks if the key was registered.

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
Input.IsControlRegistered(Input.Groups.MOVE, Input.Controls.PICKUP) -- [E]
```

[Improve this documentation]()