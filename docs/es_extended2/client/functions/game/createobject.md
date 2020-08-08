# utils.game.createObject

```lua
utils.game.createObject(model, coords, cb)
```
This function creates a object.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| model | string | No | - | Sets model name |
| coords | float | No | - | Sets the coordinates where the model will appear |
| cb | function | Yes | - | Callback function |

!!! note
    *You can see all models here <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
utils.game.createObject('apa_mp_h_tab_sidelrg_04', vector3(-269.4, -955.3, 31.2)) -- The object is created
```
```lua
utils.game.createObject('apa_mp_h_tab_sidelrg_04', vector3(-269.4, -955.3, 31.2), module.cb) -- The object is created

module.cb = function(argument)
    Citizen.Wait(3000) -- 3 seconds
	DeleteObject(argument) -- The object is destroyed
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/createobject.md)