# GetVehicleInDirection

```lua
ESX.Game.GetVehicleInDirection()
```

This function gets the closest vehicle in the player's direction within 5 units, utilizes ray-casts.

## Example

```lua
local vehicle = ESX.Game.GetVehicleInDirection()

if DoesEntityExist(vehicle) then
  ESX.ShowNotification('yep there is a vehicle here!')
end
```
