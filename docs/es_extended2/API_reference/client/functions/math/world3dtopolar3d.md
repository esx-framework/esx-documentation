# utils.math.world3DtoPolar3D

```lua
utils.math.world3DtoPolar3D(center, position)
```
This function provides a horizontal angle, a vertical angle and the radius between two positions.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| center | coords | No | - | Coordinates as center |
| position | coords | No | - | Coordinates as position |

!!! note
    *This function is related to [utils.math.polar3DToWorld3D](https://wiki.esx-framework.org/es_extended2/client/functions/math/polar3dtoworld3d/).*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local center, position = vector3(393.5002, -1262.998, 32.54996), vector3(332.0094, -1336.234, 32.44715)
local polarDeg, azimuthDeg, radius = utils.math.world3DtoPolar3D(mycoords, vector3(332.0094, -1336.234, 32.44715))

print('polar: ' .. polarDeg, 'azimuth: ' .. azimuthDeg, 'radius: ' .. radius) -- Returns polar: 130.03988420024, azimuth: 89.930982074227, radius: 93.566329956055
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/math/world3dtopolar3d.md)