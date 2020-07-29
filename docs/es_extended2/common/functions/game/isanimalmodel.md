# utils.game.isAnimalModel

```lua
utils.game.isAnimalModel(nameOrHash)
```
This function sets if model is a animal.

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
local isAnimal = utils.game.isAnimalModel('a_c_fish')

print(isAnimal) -- Returns true
```