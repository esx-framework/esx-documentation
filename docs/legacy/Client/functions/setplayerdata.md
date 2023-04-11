# SetPlayerData

```lua
ESX.SetPlayerData(key, val)
```

This function sets player data, this can Then be access with `ESX.PlayerData[key]`

## Example

```lua

-- Setting the value
ESX.SetPlayerData('IsArrested', false)

-- This can then be accessed wih:
ESX.PlayerData.IsArrested
```
