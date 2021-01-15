# utils.time.timestamp

```lua
utils.time.timestamp()
```
This function get the time as int.

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local time = utils.time.timestamp() -- Returns 1595121208
local w, d, h, m, s = utils.time.fromTimestamp(time)
print("weeks: " .. w, "days: " .. d, "hours: " .. h, "minutes: " .. m, "seconds: " .. s) -- Returns weeks: 2637 days: 3 hours: 1 minutes: 19 seconds: 52
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/time/timestamp.md)