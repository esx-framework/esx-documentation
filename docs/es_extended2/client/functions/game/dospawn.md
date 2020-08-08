# utils.game.doSpawn

```lua
utils.game.doSpawn(data, cb)
```
This function spawn the player.

### Table Information (data)

| child          | type    | explanation |
|----------------|---------|-------------|
| x | float | The x coordinate of where the player spawned to |
| y | float | The y coordinate of where the player spawned to |
| z | float | The z coordinate of where the player spawned to |
| heading | float | The heading that the player is facing when spawned |
| idx | int | The spawnpoint index |
| model | hash | The ped model hash the player spawned as |
| skipFade | boolean | Whether the fade was skipped when the player spawned |

!!! note
    *You can see all models here <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local spawnPos = vector3(686.245, 577.950, 130.461)

utils.game.doSpawn({
	x = spawnPos.x,
	y = spawnPos.y,
	z = spawnPos.z,
	model = 'a_m_m_skater_01'
}, function()
	-- Code after spawn
end)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/dospawn.md)