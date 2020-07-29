# utils.game.createLocalObject

```lua
utils.game.createLocalObject(model, coords, cb)
```
This function creates a local object, it will disappear when the system deems it necessary.

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
utils.game.createLocalObject('apa_mp_h_tab_sidelrg_04', vector3(-269.4, -955.3, 31.2)) -- The local object is created
```
```lua
utils.game.createLocalObject('apa_mp_h_tab_sidelrg_04', vector3(-269.4, -955.3, 31.2), module.cb) -- The local object is created

module.cb = function(argument)
    Citizen.Wait(3000) -- 3 seconds
	DeleteObject(argument) -- The local object is destroyed
end
```