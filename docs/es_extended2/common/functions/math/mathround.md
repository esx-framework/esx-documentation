# math.round

```lua
math.round(value, numDecimalPlaces)
```
This function rounds off a number, and optionally you can parse how many decimals you want (defaults to 0).

### Example
```lua
local value - 5.444

print('value: ' .. value) -- returns 5.444
print('value rounded: ' .. math.round(value)) -- returns 5
print('value rounded: ' .. math.round(value, 1)) -- returns 5.4
```