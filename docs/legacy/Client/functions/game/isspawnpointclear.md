# IsSpawnPointClear

```lua
ESX.Game.IsSpawnPointClear(coords, maxDistance)
```

Returns a boolean if the spawn point coords area is clear from vehicles within the max distance.

## Arguments

| Argument    | Data Type     | Optional | Default Value            | Explanation                  |
| ----------- | ------------- | -------- | ------------------------ | ---------------------------- |
| coords      | table&vector3 | Yes      | (your player ped coords) | The coords to search at      |
| maxDistance | number        | No       | -                        | The maxmimum search distance |
