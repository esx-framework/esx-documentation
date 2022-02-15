# Math.Round

```lua
ESX.Math.Round(value, numDecimalPlaces)
```

This function rounds off a number, and optionally you can parse how many decimals you want (defaults to 0)

## Example

```lua
local value - 5.444

print('value: ' .. value) -- returns 5.444
print('value rounded: ' .. ESX.Math.Round(value)) -- returns 5
print('value rounded: ' .. ESX.Math.Round(value, 1)) -- returns 5.4
```
