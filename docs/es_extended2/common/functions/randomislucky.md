# utils.random.isLucky

```lua
utils.random.isLucky(percentChance, cb, callCbOnUnlucky)
```
This functions set a lucky.

### Example
```lua
local utils = M("utils")

local isLucky = utils.random.isLucky(50)
print(isLucky) -- Returns true or false
```