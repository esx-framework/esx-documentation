# xPlayer.getCoords

```lua
xPlayer.getCoords(useVector)
```

This function returns the player's current coordinates on the server. The optional boolean `useVector` argument is for returning a `vector3` type

#### xPlayer.getCoords Example

```lua
local coords = xPlayer.getCoords(true)
local distance = #(coords - vector3(610.0, 120.2, 60.3))

print(distance)
```
