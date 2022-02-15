# RegisterCommand

```lua
ESX.RegisterCommand(name, Permissions, cb, allowConsole,suggestion)
```

Registers A command using ESX functions.

## Example

```lua
ESX.RegisterCommand({'clear', 'cls'}, 'user', function(xPlayer, args, showError)
  xPlayer.triggerEvent('chat:clear')
end, false, {help = _U('command_clear')})
``

```lua
ESX.RegisterCommand({'cardel', 'dv'}, 'admin', function(xPlayer, args, showError)
  if not args.radius then args.radius = 4 end
  xPlayer.triggerEvent('esx:deleteVehicle', args.radius)
end, false, {help = _U('command_cardel'), arguments = {name = 'radius', help = _U('command_cardel_radius'), type = 'any'}
}})
```

## Function Arguments

|   **Argument**   |  **Data Type** | **Optional** |      **Default Value**       |       **Explanation**       |
|--------------|------------|----------|--------------------------|--------------------------|
|     name     |  string    | No       | -                        | Name of Command          |
|  Permissions |  string    | No       | -                        | Minimum Permission Group |
|      cb      |  Function  | No       | xPlayer, args, showError | Function to run          |
| AllowConsole |  bool      | No       | -                        | Can Be ran from console  |
|  suggestion  |  table     | Yes      | -                        | Chat Suggestion          |
|     args     |  table     | Yes      | -                        | Command Arguments        |

## Command Argument Types

|   **Type**    |              **Explanation**                  |
|-----------|--------------------------------------------|
|  number   | Requires a Integer Value                   |
|  player   | Requires A playerID, returns player object |
|  string   | String Input                               |
|  item     | Checks if input is a valid item            |
|  weapon   | Checks if input is a Weapon                |
|  any      | Any Input allowed                          |
