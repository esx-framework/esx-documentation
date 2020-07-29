# utils.random.isLucky

```lua
utils.random.isLucky(percentChance, cb, callCbOnUnlucky)
```
This functions set a lucky.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| percentChance | int | No | - | Sets the percentage of luck |
| cb | function    | Yes | - | Callback function |
| callCbOnUnlucky | boolean | Yes | false | If value is true, returns true or false. If value is false, returns only true |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local isLucky = utils.random.isLucky(50) -- 50% to get true

print(isLucky) -- Returns true or false
```
```lua
utils.random.isLucky(50, module.cb, true)

module.cb = function(argument)

	print(argument) -- Returns true or false

end
```