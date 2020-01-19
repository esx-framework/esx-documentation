# ESX.Game.Teleport

```lua
ESX.Game.Teleport(entity, coords, cb)
```

This function teleports an entity.

!!! warning
      This is an async function because it awaits collision to be loaded, there is an example below on how to properly utilize it.

## Arguments

| Argument | Data Type     | Optional | Default Value | Explanation                                                                                                                                                              |
|----------|---------------|----------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity   | string        | No       | -             | The entity to teleport                                                                                                                                                   |
| coords   | table&vector3 | No       | -             | The coords to be teleported to. Supports both vector3 and table types. If using a table type you can also specify `heading` to set the entity heading upon teleportation |
| cb       | function      | Yes      | -             | The returned function when the entity has been teleported                                                                                                                |

## ESX.Game.Teleport Example

```lua
	local playerPed = PlayerPedId()

	ESX.Game.Teleport(playerPed, {x = 120.0, y = -200.0, z = 30.0, heading = 100.0}, function()
		print('this code is async!')
	end)

	print('this code is sync!')
```
