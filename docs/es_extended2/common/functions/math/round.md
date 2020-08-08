# math.round

```lua
math.round(value, numDecimalPlaces)
```
This function rounds off a number, and optionally you can parse how many decimals you want (defaults to 0).

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| value | float | No | - | Number in decimals |
| numDecimalPlaces | int    | Yes | 0 | Sets the rounding of the number |

### Example
```lua
local value = 5.444

print('value: ' .. value) -- Returns 5.444
print('value rounded: ' .. math.round(value)) -- Returns 5.0
print('value rounded: ' .. math.round(value, 1)) -- Returns 5.4
print('value rounded: ' .. math.round(value, 2)) -- Returns 5.44
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/math/round.md)