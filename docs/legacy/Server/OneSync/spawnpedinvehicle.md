# SpawnPedInVehicle

```lua
ESX.OneSync.SpawnPedInVehicle(model, vehicle, seat, cb)
```

An Async function that Creates a Server-Sided Ped and then Places them into a specifc vehicle.

> Note: CreatePedInsideVehicle Is a RPC (Remote Procedure Call) Native, which means it requires there to be a valid client nearby for it to be able to spawn!

> Warning: In Some ESX versions, cb may not be called!

## Arguments

| Argument | Data Type       | Optional | Default Value | Explanation                                                                                                          |
| -------- | --------------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| model    | string & number | No       | -             | Model of the Ped - can either be a String or a hash                                                                  |
| vehicle  | number          | No       | -             | The Handle of the vehicle the ped will be spawned into                                                               |
| seat     | number          | No       | -             | Seat Index that the ped will be sat in                                                                               |
| cb       | function        | Yes      | -             | The returned function when the ped has been spawned. The invoked function has 1 argument which is the Entity Handle. |

## Example

```lua
local veh_model = "blista" -- Model can be either a string or a hash
local veh_coords = vector3(120.0, -200.0, 30.0) -- Coords Can either be vector or a table (such as {x = 0, y = 0, z = 0})
local veh_Heading = 0 -- Sets the Rotation/Heading the vehicle spawns at, can be any number
local veh_Properties = {plate = "TEST"} -- Sets the vehicle Properties, set to nil or {} for no properties to be set
ESX.OneSync.SpawnVehicle(veh_model,veh_coords, veh_Heading, veh_Properties, function(NetworkId) -- create the vehicle
  Wait(100) -- While not needed, it is best to wait a few milliseconds to ensure the vehicle is available
  local Vehicle = NetworkGetEntityFromNetworkId(NetworkId) -- returns the vehicle handle, from the NetworkId.
  -- NetworkId is sent over, since then it can also be sent to a client for them to use, vehicle handles cannot.

  local ped_model = "a_m_y_vinewood_02" -- Model can be either a string or a hash
  local seatIndex = -1 -- Drivers Seat
  ESX.OneSync.SpawnPedInVehicle(ped_model,Vehicle, seatIndex)

  -- This Example Will Spawn a Blista, and then Create A Ped In the Drivers Seat
end)
```
