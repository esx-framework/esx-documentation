# EnumerateVehicles

```lua
EnumerateVehicles()
```
This function gets all vehicles that are in the same scenario as the player.

### Example
```lua
ESX.SetInterval(100, function() -- 100ms interval (0.1 seconds)
	for vehicle in EnumerateVehicles() do -- Vehicles search
		if GetEntityHealth(vehicle) == 0 then
			DeleteEntity(vehicle)  -- The vehicle is destroyed
		end
	end
end)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/enumeratevehicles.md)