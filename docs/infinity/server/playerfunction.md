# PlayerFunction

```lua
ESX.PlayerFunction(name , function(self,...))
```

Defines a player function.
Automatically adds a usable function to the xPlayer Table.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation           |
| -------- | --------- | -------- | ------------- | --------------------- |
| name     | string    | No       | -             | Name Of Function      |
| Function | function  | No       | -             | Function to run       |
| self     | Table     | No       | -             | Returns xPlayer Table |

## Example

```lua
---- Create Function -----------------------
ESX.PlayerFunction('getName',function(self)
    return self.name
end)
--------------------------------------------

--- Usage ----------------------------------
local xPlayer = ESX.GetPlayerFromId(source)
local Name = xPlayer.getName()
--------------------------------------------
```
