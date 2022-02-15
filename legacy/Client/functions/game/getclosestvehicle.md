# GetClosestVehicle

```lua
ESX.Game.GetClosestVehicle(coords, modelFilter)
```

This function gets the closest vehicle.

## Arguments

| Argument    | Data Type     | Optional | Default Value            | Explanation                                                                                                                             |
|-------------|---------------|----------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| coords      | table         | Yes      | (your player ped coords) | Coords to search at                                                                                                                     |
| modelFilter | table&vector3 | Yes      | -                        | Enables whitelist mode for getting closest vehicle. The table must be key-value where the key is the model hash, and value set to true. |
