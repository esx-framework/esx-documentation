# math.groupDigits

```lua
math.groupDigits(value)
```
This function groups numbers, making them easier to understand by humans. Used in most nofications when money is showed, for example when buying a new car at the vehicle shop.

### Example
```lua
local value = 5555
local valueGrouped = ESX.Math.GroupDigits(5555)

print(value, valueGrouped) -- Returns 5555, 5,555
```