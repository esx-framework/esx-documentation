---
title: ESX.Game.GetVehicleInDirection
category: ES Extended
order: 6
---

```lua
ESX.Game.GetVehicleInDirection()
```

Get the closest vehicle in the players' direction within 5 units, utilizes ray-casts.

```lua
local vehicle = ESX.Game.GetVehicleInDirection()

if DoesEntityExist(vehicle) then
    ESX.ShowNotification('yep there is a vehicle here!')
end
```
