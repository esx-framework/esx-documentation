# utils.string.random

```lua
utils.string.random(length, recurse)
```
This function gets a random alphanumeric string, with the defined length.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| length | int | No | - | Define the length |
| recurse | boolean | Yes | - | Force random on each iteration |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local str = utils.string.random(9, true)

print(str) -- Returns random string
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/string/random.md)