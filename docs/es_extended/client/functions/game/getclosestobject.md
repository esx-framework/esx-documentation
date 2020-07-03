# ESX.Game.GetClosestObject

```lua
ESX.Game.GetClosestObject(coords, modelFilter)
```

This function returns the closest object handle, and distance to the object.

## Arguments

| Argument    | Data Type     | Optional | Default Value            | Explanation                                                                                                                            |
|-------------|---------------|----------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| coords      | table&vector3 | Yes      | (your player ped coords) | Coords to search at                                                                                                                    |
| modelFilter | table         | Yes      | -                        | Enables whitelist mode for getting closest object. The table must be key-value where the key is the model hash, and value set to true. |
