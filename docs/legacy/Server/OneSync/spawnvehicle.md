# SpawnVehicle

```lua
ESX.OneSync.SpawnVehicle(model, coords, heading, Properties, cb)
```

An Async function that Creates Server-Sided Vehicles, this allows them to be persistant and owned by the server, rather than Client

## Arguments

| Argument    | Data Type     | Optional | Default Value | Explanation                                                                                                                 |
|-------------|---------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------------------|
| model | string & number | No       | -             | You can either specify a model, for example `blista`, or a vehicle hash.                                                    |
| coords      | vector & table         | No       | -             | The coords where the vehicle should be spawned. You can also parse an vector type without any issues                        |
| heading     | number        | No       | -             | The heading to spawn the vehicle at                                                                 |
| Properties     | table        | Yes       |  {}          | Sets the properties that the vehicle spawns with, uses the same structure as [ESX.Game.SetVehicleProperties](./../../Client/functions/game/setvehicleproperties.md) |
| cb          | function      | Yes      | -             | The returned function when the vehicle has been spawned. The invoked function has 1 argument which is the **NetId** of the vehicle |

## Example

```lua
local model = "blista" -- Model can be either a string or a hash
local coords = vector3(120.0, -200.0, 30.0) -- Coords Can either be vector or a table (such as {x = 0, y = 0, z = 0})
local Heading = 0 -- Sets the Rotation/Heading the vehicle spawns at, can be any number
local Properties = {plate = "TEST"} -- Sets the vehicle Properties, set to nil or {} for no properties to be set
ESX.OneSync.SpawnVehicle(model,coords, Heading, Properties, function(NetworkId)
  Wait(100) -- While not needed, it is best to wait a few milliseconds to ensure the vehicle is available
  local Vehicle = NetworkGetEntityFromNetworkId(NetworkId) -- returns the vehicle handle, from the NetworkId.
  -- NetworkId is sent over, since then it can also be sent to a client for them to use, vehicle handles cannot.
  local Exists = DoesEntityExist(Vehicle) -- returns true/false depending on if the vehicle exists.
  print(Exists and "Successfully Spawned Vehicle!" or "Failed to Spawn Vehicle!")
end)
```
