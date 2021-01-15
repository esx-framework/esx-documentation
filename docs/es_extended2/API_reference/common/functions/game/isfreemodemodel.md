# utils.game.isFreemodeModel

```lua
utils.game.isFreemodeModel(nameOrHash)
```
This function sets if model is a freemode.

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
local isFreemode = utils.game.isFreemodeModel('mp_m_freemode_01')

print(isFreemode) -- Returns true
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/game/isfreemodemodel.md)