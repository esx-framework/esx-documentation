# ESX.GetPlayerData

```lua
ESX.GetPlayerData()
```

This function gets player data.

### ESX.GetPlayerData usage
The following data can be fetched from the function

```lua
ESX.GetPlayerData().identifier    -- Steam identifier    
ESX.GetPlayerData().money         -- Cash
ESX.GetPlayerData().accounts      -- A table of the players bank and black_money
ESX.GetPlayerData().inventory     -- A table of the players inventory  
ESX.GetPlayerData().loadout       -- A table of the players loadout
ESX.GetPlayerData().job           -- A table of the players current job
ESX.GetPlayerData().lastPosition  -- A table of the players latest coordinates
```
