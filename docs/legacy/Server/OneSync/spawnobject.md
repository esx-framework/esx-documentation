# SpawnObject

```lua
ESX.OneSync.SpawnObject(model, coords, heading, cb)
```

An Async function that Creates Server-Sided Objects.

> Note: CreateObject Is a RPC (Remote Procedure Call) Native, which means it requires there to be a valid client nearby for it to be able to spawn!

## Arguments

| Argument | Data Type       | Optional | Default Value | Explanation                                                                                                              |
| -------- | --------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| model    | string & number | No       | -             | Model of the Object - can either be a String or a hash                                                                   |
| coords   | vector & table  | No       | -             | The coords where the Object should be spawned.                                                                           |
| heading  | number          | No       | -             | The Heading the object Will be facing                                                                                    |
| cb       | function        | Yes      | -             | The returned function when the vehicle has been spawned. The invoked function has 1 argument which is the Entity Handle. |

## Example

```lua
local model = 'v_corp_bk_lamp1' -- Model can be either a string or a hash
local coords = vector3(120.0, -200.0, 30.0) -- Coords Can either be vector or a table (such as {x = 0, y = 0, z = 0})
local Heading = 0 -- Sets the Rotation/Heading the ped spawns at, can be any number
ESX.OneSync.SpawnObject(model,coords, Heading, function(Object)
  Wait(100) -- While not needed, it is best to wait a few milliseconds to ensure the Object is available
  local Exists = DoesEntityExist(Object) -- returns true/false depending on if the Object exists.
  print(Exists and 'Successfully Spawned Object!' or 'Failed to Spawn Failed!')
end)
```
