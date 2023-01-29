# SpawnVehicle

```lua
ESX.Game.SpawnVehicle(model, coords, heading, cb)
```

This function spawns an vehicle visible to everyone on the server.

!!! warning
      This is an async function because it awaits the vehicle model to be streamed, there is an example below on how to properly utilize it.

## Arguments

| Argument    | Data Type     | Optional | Default Value | Explanation                                                                                                                 |
|-------------|---------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------------------|
| model | string&number | No       | -             | You can either specify a model, for example `blista`, or a vehicle hash.                                                    |
| coords      | table         | No       | -             | The coords where the vehicle should be spawned. You can also parse an vector type without any issues                        |
| heading     | number        | No       | -             | The heading of the spawned vehicle, must contain a decimal                                                                  |
| cb          | function      | Yes      | -             | The returned function when the vehicle has been spawned. The invoked function has one argument, which is the vehicle handle |

## Example

```lua
ESX.Game.SpawnVehicle('blista', vector3(120.0, -200.0, 30.0), 100.0, function(vehicle)
  print(DoesEntityExist(vehicle), 'this code is async!')
end)

print('this code is sync!')
```
