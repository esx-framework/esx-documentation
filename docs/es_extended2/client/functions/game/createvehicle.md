# utils.game.createVehicle

```lua
utils.game.createVehicle(model, coords, heading, cb)
```
This function creates a vehicle.

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
utils.game.createVehicle('infernus', vector3(341.0, -1397.3, 32.5), 0.0) -- The vehicle is created
```
```lua
utils.game.createVehicle('infernus', vector3(341.0, -1397.3, 32.5), 0.0, module.cb) -- The vehicle is created

module.cb = function(argument)
	Citizen.Wait(3000) -- 3 seconds
	DeleteVehicle(argument) -- The vehicle is destroyed
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/createvehicle.md)