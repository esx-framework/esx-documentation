# SpawnObject

```lua
ESX.Game.SpawnObject(model, coords, cb)
```

This function spawns an object visible to everyone on the server.

!!! warning
      This is an async function because it awaits the object model to be streamed, there is an example below on how to properly utilize it.

## Arguments

| Argument    | Data Type     | Optional | Default Value | Explanation                                                                                                                |
|-------------|---------------|----------|---------------|----------------------------------------------------------------------------------------------------------------------------|
| model | string&number | No       | -             | You can either specify a model, for example `prop_cs_cuffs_01`, or a object hash                                           |
| coords      | table         | No       | -             | The coords where the object should be spawned. You can also parse an vector type without any issues                        |
| cb          | function      | Yes      | -             | The returned function when the object has been spawned. The invoked function has one argument, which is the object handle. |

## Example

```lua
ESX.Game.SpawnObject('prop_cs_cuffs_01', vector3(120.0, -200.0, 30.0), function(object)
  print(DoesEntityExist(object), 'this code is async!')
end)

print('this code is sync!')
```
