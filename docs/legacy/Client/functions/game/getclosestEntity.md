# GetClosestEntity

```lua
ESX.Game.GetClosestEntity(coords, modelFilter)
```

This function returns the closest Entity handle, and distance to the Entity.

## Arguments

| Argument    | Data Type     | Optional | Default Value            | Explanation                                                                                                                            |
| ----------- | ------------- | -------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| coords      | table         | Yes      | (your player ped coords) | Coords to search at                                                                                                                    |
| modelFilter | table&vector3 | Yes      | -                        | Enables whitelist mode for getting closest Entity. The table must be key-value where the key is the model hash, and value set to true. |
