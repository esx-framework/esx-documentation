# EnumerateObjects

```lua
EnumerateObjects()
```
This function gets all objects that are in the same scenario as the player.

### Example
```lua
ESX.SetInterval(100, function() -- 100ms interval (0.1 seconds)
	for object in EnumerateObjects() do -- Object search
		DeleteEntity(object)  -- The object is destroyed
	end
end)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/enumerateobjects.md)