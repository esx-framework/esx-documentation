# getCoords

```lua
xPlayer.getCoords(useVector)
```

This function returns the player's current coordinates on the server. The optional boolean `useVector` argument is for returning a `vector3` type. Keep in mind that the coords sync interval can be adjusted in the configuration file in case you want to get precise player coords.

## Argument

| Argument  | Data Type | Optional | Default Value | Explanation                                                                          |
|-----------|-----------|----------|---------------|--------------------------------------------------------------------------------------|
| useVector | boolean   | Yes      | -             | Returns an vector3 type if set to `true`, and normally a table with x, y and z pairs |

## Example

```lua
local coords = xPlayer.getCoords(true)
local distance = #(coords - vector3(610.0, 120.2, 60.3))

print(distance)
```
