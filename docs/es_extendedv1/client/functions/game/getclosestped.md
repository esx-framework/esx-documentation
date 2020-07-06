# ESX.Game.GetClosestPed

```lua
ESX.Game.GetClosestPed(coords, modelFilter)
```

This function returns the closest ped handle, and distance to the ped.

## Arguments

| Argument    | Data Type     | Optional | Default Value            | Explanation                                                                                                                         |
|-------------|---------------|----------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| coords      | table         | Yes      | (your player ped coords) | Coords to search at                                                                                                                 |
| modelFilter | table&vector3 | Yes      | -                        | Enables whitelist mode for getting closest ped. The table must be key-value where the key is the model hash, and value set to true. |
