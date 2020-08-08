# utils.game.isHumanModel

```lua
utils.game.isHumanModel(nameOrHash)
```
This function sets if model is a human.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| nameOrHash | string/int | No | - | Sets model name or hash |

!!! note
    *You can see all models here <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local isHuman = utils.game.isHumanModel('u_m_y_abner')

print(isHuman) -- Returns true
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/game/ishumanmodel.md)