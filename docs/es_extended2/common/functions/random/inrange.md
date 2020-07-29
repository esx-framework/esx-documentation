# utils.random.inRange

```lua
utils.random.inRange(min, max)
```
This function give a random number in range.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| min | int | No | - | Minimum number |
| max | int | No | - | Maximum number |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local range = utils.random.inRange(1, 10)

print(range) -- Returns a number between 1 and 10
```