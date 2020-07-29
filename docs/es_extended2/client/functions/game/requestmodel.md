# utils.game.requestModel

```lua
utils.game.requestModel(model, cb)
```
This function request a model to be loaded.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| model | string | No | - | Sets model name |
| cb | function | Yes | - | Callback function |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
utils.game.requestModel('s_m_m_paramedic_01', function()
	CreatePed(20, 's_m_m_paramedic_01', 341.0, -1397.3, 32.5, 0.0, true, false)
end)
```