# utils.string.random

```lua
utils.string.random(length, recurse)
```
This function gets a random string, with the defined length.

### Example
```lua
local utils = M("utils")

local str = utils.string.random(9, true)
print(str) -- Returns random string
```