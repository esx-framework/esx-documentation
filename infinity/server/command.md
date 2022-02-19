# Command

```lua
ESX.Command(name, Permissions, cb, allowConsole, suggestion)
```

Registers a command using ESX functions.

## Example

```lua
ESX.Command('heal', 'admin', function(xPlayer, args, show_error)
    xPlayer.heal()
end, false)
```

```lua
ESX.Command('car', 'admin', function(xPlayer, args, show_error)
  if not args.model then args.model = "t20" end
  xPlayer.emit("esx:createVehicle",args.model)
end, false, { help = 'Spawn a vehicle', validate = false, arguments = {{name = 'model', type = 'any'}}})
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