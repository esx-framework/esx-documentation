# utils.time.fromTimestamp

```lua
utils.time.fromTimestamp(timestamp)
```
This function set a timestamp.

### Example
```lua
local utils = M("utils")

local w, d, h, m, s = utils.time.fromTimestamp((60*60)*24)
print("weeks: " .. w, "days: " .. d, "hours: " .. h, "minutes: " .. m, "seconds: " .. s) -- Returns weeks: 0 days: 1 hours: 0 minutes: 0 seconds: 0
```