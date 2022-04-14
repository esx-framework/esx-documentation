# getWeight

```lua
xPlayer.getWeight()
```

This functions returns the current player weight in a `number` type, can be used to do calculations.

## Example

```lua
local weight = xPlayer.getWeight() -- get Players weight
if weight > 25 then 
  xPlayer.showNotifaction("you are overweight!") -- do actions if weight is at a certain point
end
```
