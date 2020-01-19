# ESX.RegisterServerCallback

```lua
ESX.RegisterServerCallback(name, cb)
```

This function registers a server callback.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                                       |
|----------|-----------|----------|---------------|---------------------------------------------------|
| name     | string    | No       | -             | Server callback name                              |
| cb       | function  | No       | -             | Callback function, which contains three arguments |

## ESX.RegisterServerCallback Example

```lua
ESX.RegisterServerCallback('esx_myscript:setNewName', function(playerId, newName, cb))
	local xPlayer = ESX.GetPlayerFromId(playerId)
	xPlayer.setName(newName)

	cb(true)
```
