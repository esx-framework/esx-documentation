# math.roundVec3

```lua
math.roundVec3(vec, digits)
```
This function rounds off a vector3, and optionally you can parse how many decimals you want (defaults to 0).

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| value | float | No | - | Number in decimals |
| numDecimalPlaces | int    | Yes | 0 | Sets the rounding of the number |

### Example
```lua
local value = vector3(-269.444, -955.333, 31.222)

print('value: ' .. value) -- Returns -269.4, -955.3, 31.2
print('value rounded: ' .. math.roundVec3(value)) -- Returns -269, -955, 31
print('value rounded: ' .. math.roundVec3(value, 1)) -- Returns -269.4, -955.3, 31.2
print('value rounded: ' .. math.roundVec3(value, 2)) -- Returns -269.44, -955.33, 31.22
```