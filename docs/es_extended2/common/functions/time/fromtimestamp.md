# utils.time.fromTimestamp

```lua
utils.time.fromTimestamp(timestamp)
```
This function set a timestamp.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| timestamp | int | No | - | Sets the time |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local w, d, h, m, s = utils.time.fromTimestamp((60*60)*24)

print("weeks: " .. w, "days: " .. d, "hours: " .. h, "minutes: " .. m, "seconds: " .. s) -- Returns weeks: 0 days: 1 hours: 0 minutes: 0 seconds: 0
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/time/fromtimestamp.md)