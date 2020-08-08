# EnumeratePickups

```lua
EnumeratePickups()
```
This function gets all pickups that are in the same scenario as the player.

### Example
```lua
ESX.SetInterval(100, function() -- 100ms interval (0.1 seconds)
	for pickup in EnumeratePickups() do -- Pickup search
		DeleteEntity(pickup)  -- The pickup is destroyed
	end
end)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/enumeratepickups.md)