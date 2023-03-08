# SpawnPed

```lua
ESX.OneSync.SpawnPed(model, coords, heading, cb)
```

An Async function that Creates Server-Sided Peds.

> Note: CreatePed Is a RPC (Remote Procedure Call) Native, which means it requires there to be a valid client nearby for it to be able to spawn!

> Warning: In Some ESX versions, cb may not be called!

## Arguments

| Argument | Data Type       | Optional | Default Value | Explanation                                                                                                                  |
| -------- | --------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| model    | string & number | No       | -             | Model of the Ped - can either be a String or a hash                                                                          |
| coords   | vector & table  | No       | -             | The coords where the ped should be spawned.                                                                                  |
| heading  | number          | No       | -             | The Heading the Ped Will be facing                                                                                           |
| cb       | function        | Yes      | -             | The returned function when the vehicle has been spawned. The invoked function has 1 argument which is the Ped Entity Handle. |

## Example

```lua
local model = "a_m_y_vinewood_02" -- Model can be either a string or a hash
local coords = vector3(120.0, -200.0, 30.0) -- Coords Can either be vector or a table (such as {x = 0, y = 0, z = 0})
local Heading = 0 -- Sets the Rotation/Heading the ped spawns at, can be any number
ESX.OneSync.SpawnVehicle(model,coords, Heading, function(Ped)
  Wait(100) -- While not needed, it is best to wait a few milliseconds to ensure the ped is available
  local Exists = DoesEntityExist(Ped) -- returns true/false depending on if the ped exists.
  print(Exists and "Successfully Spawned Ped!" or "Failed to Spawn Ped!")
end)
```
