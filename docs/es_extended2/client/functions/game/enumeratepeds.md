# EnumeratePeds

```lua
EnumeratePeds()
```
This function gets all peds that are in the same scenario as the player.

### Example
```lua
ESX.SetInterval(100, function() -- 100ms interval (0.1 seconds)
	for ped in EnumeratePeds() do -- Peds search
		if GetEntityHealth(ped) == 0 and not IsPedAPlayer(ped) then
			DeleteEntity(ped)  -- The ped is destroyed
		end
	end
end)
```