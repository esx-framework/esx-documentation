# utils.math.rotateAround

```lua
utils.math.rotateAround(p1, p2, angle)
```
This function are incomplete.

!!! warning
    *Function incomplete, doing more testing for a appropriate document.*

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| p1 | coords | No | - | Coordinates as center |
| p2 | coords | No | - | Horizontal angle |
| angle | int | No | - | Vertical angle |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local coords = vector3(93.59624, -1129.801, 28.33222)
local coords2 = vector3(93.94531, -1118.569, 28.3273)
utils.game.createLocalObject('prop_barrel_03d', coords)
utils.game.createLocalObject('prop_barrel_03d', coords2)
local a = utils.math.rotateAround(coords, coords2, 90)
utils.game.createLocalObject('prop_barrel_03d', a)

print(coords, coords2, a)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/math/rotatearound.md)