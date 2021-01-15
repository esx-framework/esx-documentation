# utils.math.polar3DToWorld3D

```lua
utils.math.polar3DToWorld3D(center, polar, azimuth, radius)
```
This function works as a sphere, in which you can define the position of an object of 3 dimensions according to their respective parameters.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| center | coords | No | - | Coordinates as center |
| polar | int | No | - | Horizontal angle |
| azimuth | int | No | - | Vertical angle |
| radius | int | No | - | Sphere radius |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local coords = vector3(93.59624, -1129.801, 28.33222) -- Coordinates representing the center

utils.game.createLocalObject('prop_barrel_03d', coords)

local polarCoords = utils.math.polar3DToWorld3D(coords, 0, 90, 2)

utils.game.createLocalObject('prop_barrel_03d', polarCoords)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/math/polar3dtoworld3d.md)