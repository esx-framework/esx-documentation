# utils.game.createLocalVehicle

```lua
utils.game.createLocalVehicle(model, coords, heading, cb)
```
This function creates a local vehicle, it will disappear when the system deems it necessary.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| model | string | No | - | Sets model name |
| coords | float | No | - | Sets the coordinates where the model will appear |
| heading | float | No | - | Sets the heading of vehicle |
| cb | function | Yes | - | Callback function |

!!! note
    *You can see all models here <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
utils.game.createLocalVehicle('infernus', vector3(341.0, -1397.3, 32.5), 0.0) -- The local vehicle is created
```
```lua
utils.game.createLocalVehicle('infernus', vector3(341.0, -1397.3, 32.5), 0.0, module.cb) -- The local vehicle is created

module.cb = function(argument)
	Citizen.Wait(3000) -- 3 seconds
	DeleteVehicle(argument) -- The local vehicle is destroyed
end
```